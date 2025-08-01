import { useEffect, useState } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { generateClient } from 'aws-amplify/api';
import { createDataPoint } from './graphql/mutations';
import { listClients } from './graphql/queries';
import { updateProgress } from './utils/goalHelpers';
import '@aws-amplify/ui-react/styles.css';

const client = generateClient();

interface Goal {
  id: string;
  title: string;
  progress?: number;
}

interface Client {
  id: string;
  name: string;
  currentVBGoal: string;
  // API might return either Goal[] or { items: Goal[] }
  goals: Goal[] | { items?: Goal[] } | undefined;
}

// Normalize goals to an array regardless of API shape
const goalsArray = (g: any): Goal[] => (Array.isArray(g) ? g : g?.items ?? []);

function App({ signOut }: { signOut: () => void }) {
  const [clients, setClients] = useState<Client[]>([]);

  const fetchClients = async () => {
    try {
      const result: any = await client.graphql({ query: listClients });
      const items = result?.data?.listClients?.items ?? [];
      console.log('🔍 Raw client data:', items);
      setClients(items);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  useEffect(() => {
    void fetchClients();
  }, []);

  const handleCorrect = async (goalId: string, clientId: string, currentGoal: string) => {
    try {
      await client.graphql({
        query: createDataPoint,
        variables: {
          input: {
            goalID: goalId,
            value: 'correct',
            timestamp: new Date().toISOString(),
          },
        },
      });

      console.log('Calling updateProgress with', { goalId, clientId, currentGoal });
      await updateProgress(goalId, clientId, currentGoal);

      await fetchClients();
    } catch (err) {
      console.error('Error marking correct / updating progress:', err);
    }
  };

  return (
    <div style={{ padding: 16 }}>
      <h1>Clients</h1>
      <button onClick={signOut} style={{ marginBottom: 12 }}>
        Sign Out
      </button>

      <ul>
        {clients.map((client) => {
          const goals = goalsArray(client.goals);
          return (
            <li key={client.id} style={{ marginBottom: 16 }}>
              <strong>{client.name}</strong>
              <ul>
                {goals.length ? (
                  goals.map((goal) => (
                    <li key={goal.id} style={{ marginBottom: 8 }}>
                      <div>Goal: {goal.title}</div>
                      <p>Progress: {goal.progress ?? 0}%</p>
                      <progress value={goal.progress ?? 0} max={100} />
                      <div>
                        <button
                          onClick={() => handleCorrect(goal.id, client.id, client.currentVBGoal)}
                          style={{ marginTop: 6 }}
                        >
                          Mark Correct
                        </button>
                      </div>
                    </li>
                  ))
                ) : (
                  <li>No goals found</li>
                )}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default withAuthenticator(App);
