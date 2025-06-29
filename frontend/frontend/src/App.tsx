import { useEffect, useState } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { generateClient } from 'aws-amplify/api';
import { createDataPoint } from './graphql/mutations';
import { listClients } from './graphql/queries';
import { updateProgress } from './utils/goalHelpers';
import '@aws-amplify/ui-react/styles.css';

const client = generateClient();

interface Client {
  id: string;
  name: string;
  currentVBGoal: string;
  goals: Goal[];
}

interface Goal {
  id: string;
  title: string;
}

function App({ signOut }: any) {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const result: any = await client.graphql({ query: listClients });
        setClients(result.data.listClients.items);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchClients();
  }, []);

  const handleCorrect = async (goalId: string, clientId: string, currentGoal: string) => {
    await client.graphql({
      query: createDataPoint,
      variables: {
        input: {
          goalID: goalId,
          value: "correct",
          timestamp: new Date().toISOString(),
        },
      },
    });

    console.log("Calling updateProgress with", goalId, clientId, currentGoal);

    await updateProgress(goalId, clientId, currentGoal);
  };

  return (
    <div>
      <h1>Clients</h1>
      <button onClick={signOut}>Sign Out</button>
      <ul>
  {clients.map((client) => (
    <li key={client.id}>
      <strong>{client.name}</strong>
      <ul>
        {client.goals?.length ? (
          client.goals.map((goal: any) => (
            <li key={goal.id}>
              Goal: {goal.title}
              <button onClick={() => handleCorrect(goal.id, client.id, client.currentVBGoal)}>
                Mark Correct
              </button>
            </li>
          ))
        ) : (
          <li>No goals found</li>
        )}
      </ul>
    </li>
  ))}
</ul>
    </div>
  );
}

export default withAuthenticator(App);
