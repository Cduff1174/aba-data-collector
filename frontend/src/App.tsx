// src/App.tsx
<<<<<<< HEAD
import { useEffect, useState } from 'react';
import { withAuthenticator, useAuthenticator } from '@aws-amplify/ui-react';
import { generateClient } from 'aws-amplify/api';

import { createDataPoint } from './graphql/mutations';
import { listClients } from './graphql/queries';
import { updateProgress } from './utils/goalHelpers';

import '@aws-amplify/ui-react/styles.css';
import GoalGraph from './components/GoalGraph';
import ProgressChecker from './components/ProgressChecker';

// Rename to avoid shadowing with the map parameter later
const gqlClient = generateClient();
=======
import { useEffect, useState } from "react";
import { withAuthenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { generateClient } from "aws-amplify/api";
import { createDataPoint } from "./graphql/mutations";
import { listClients } from "./graphql/queries";
import { updateProgress } from "./utils/goalHelpers";
import "@aws-amplify/ui-react/styles.css";
import GoalGraph from "./components/GoalGraph";
import ProgressChecker from "./components/ProgressChecker";

const api = generateClient();
>>>>>>> f81faf9ba5389361c80163b05718797fc919296c

interface Goal {
  id: string;
  title: string;
  progress?: number;
}
interface ClientModel {
  id: string;
  name: string;
  currentVBGoal: string;
  goals: Goal[] | { items?: Goal[] } | undefined;
}

const goalsArray = (g: any): Goal[] => (Array.isArray(g) ? g : g?.items ?? []);

function App() {
  const { signOut } = useAuthenticator();
  const [clients, setClients] = useState<ClientModel[]>([]);

  const fetchClients = async () => {
    try {
<<<<<<< HEAD
      const res = await gqlClient.graphql({ query: listClients });

      // Narrow the union type
      if ('data' in res) {
        const items = (res.data as any)?.listClients?.items ?? [];
        setClients(items);
      } else {
        console.error('Unexpected GraphQL response (no data key):', res);
        setClients([]);
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setClients([]);
=======
      const result = await api.graphql({ query: listClients });
      const items = (result as any)?.data?.listClients?.items ?? [];
      setClients(items);
    } catch (error) {
      console.error("Fetch error:", error);
>>>>>>> f81faf9ba5389361c80163b05718797fc919296c
    }
  };

  useEffect(() => {
    void fetchClients();
  }, []);

  const handleCorrect = async (
    goalId: string,
    clientId: string,
    currentGoal: string
  ) => {
    try {
<<<<<<< HEAD
      const createRes = await gqlClient.graphql({
        query: createDataPoint,
        variables: {
          input: {
            goalID: goalId,
            value: 'correct',
=======
      await api.graphql({
        query: createDataPoint,
        variables: {
          input: {
            // match your schema key (goalID vs goalId)
            goalID: goalId,
            value: "correct",
>>>>>>> f81faf9ba5389361c80163b05718797fc919296c
            timestamp: new Date().toISOString(),
          },
        },
      });

<<<<<<< HEAD
      if (!('data' in createRes)) {
        console.warn('CreateDataPoint returned no data field:', createRes);
      }

=======
>>>>>>> f81faf9ba5389361c80163b05718797fc919296c
      await updateProgress(goalId, clientId, currentGoal);
      await fetchClients();
    } catch (err) {
      console.error("Error marking correct / updating progress:", err);
    }
  };

  return (
    <div style={{ padding: 16 }}>
      <h1>Clients</h1>
      <button onClick={signOut} style={{ marginBottom: 12 }}>
        Sign Out
      </button>
<<<<<<< HEAD
      <ul>
        {clients.map((cl) => {
          const goals = goalsArray(cl.goals);
          return (
            <li key={cl.id} style={{ marginBottom: 16 }}>
              <strong>{cl.name}</strong>
=======

      <ul>
        {clients.map((c) => {
          const goals = goalsArray(c.goals);
          return (
            <li key={c.id} style={{ marginBottom: 16 }}>
              <strong>{c.name}</strong>

>>>>>>> f81faf9ba5389361c80163b05718797fc919296c
              <ul>
                {goals.length ? (
                  goals.map((goal) => (
                    <li key={goal.id} style={{ marginBottom: 8 }}>
                      <div>Goal: {goal.title}</div>
                      <p>Progress: {goal.progress ?? 0}%</p>
                      <progress value={goal.progress ?? 0} max={100} />

                      <div style={{ marginTop: 12 }}>
                        <GoalGraph goalId={goal.id} />
                        <ProgressChecker goalId={goal.id} />
                      </div>

                      <div
                        style={{
<<<<<<< HEAD
                          display: 'flex',
                          gap: '8px',
                          marginTop: 6,
                          flexWrap: 'wrap',
=======
                          display: "flex",
                          gap: "8px",
                          marginTop: 6,
                          flexWrap: "wrap",
>>>>>>> f81faf9ba5389361c80163b05718797fc919296c
                        }}
                      >
                        <button
                          onClick={() =>
<<<<<<< HEAD
                            handleCorrect(goal.id, cl.id, cl.currentVBGoal)
=======
                            handleCorrect(goal.id, c.id, c.currentVBGoal)
>>>>>>> f81faf9ba5389361c80163b05718797fc919296c
                          }
                        >
                          Mark Correct
                        </button>

                        <button
                          onClick={async () => {
                            for (let i = 0; i < 5; i++) {
<<<<<<< HEAD
                              const seedRes = await gqlClient.graphql({
                                query: createDataPoint,
                                variables: {
                                  input: {
                                    goalID: goal.id,
                                    value:
                                      i % 2 === 0 ? 'correct' : 'incorrect',
=======
                              await api.graphql({
                                query: createDataPoint,
                                variables: {
                                  input: {
                                    goalID: goal.id, // match schema key
                                    value: i % 2 === 0 ? "correct" : "incorrect",
>>>>>>> f81faf9ba5389361c80163b05718797fc919296c
                                    timestamp: new Date().toISOString(),
                                  },
                                },
                              });
<<<<<<< HEAD
                              if (!('data' in seedRes)) {
                                console.warn(
                                  'Seed createDataPoint had no data:',
                                  seedRes
                                );
                              }
                            }
                            await updateProgress(
                              goal.id,
                              cl.id,
                              cl.currentVBGoal
                            );
                            await fetchClients();
                            console.log('✅ Seeded test datapoints');
=======
                            }
                            await updateProgress(goal.id, c.id, c.currentVBGoal);
                            await fetchClients();
                            console.log("✅ Seeded test datapoints");
>>>>>>> f81faf9ba5389361c80163b05718797fc919296c
                          }}
                        >
                          Seed Data
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
