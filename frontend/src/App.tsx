// src/App.tsx
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

interface Goal {
  id: string;
  title: string;
  progress?: number;
}
interface Client {
  id: string;
  name: string;
  currentVBGoal: string;
  goals: Goal[] | { items?: Goal[] } | undefined;
}

const goalsArray = (g: any): Goal[] => (Array.isArray(g) ? g : g?.items ?? []);

function App() {
  const { signOut } = useAuthenticator();
  const [clients, setClients] = useState<Client[]>([]);

  const fetchClients = async () => {
    try {
      const result = await api.graphql({ query: listClients });
      const items = (result as any)?.data?.listClients?.items ?? [];
      setClients(items);
    } catch (error) {
      console.error("Fetch error:", error);
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
      await api.graphql({
        query: createDataPoint,
        variables: {
          input: {
            // match your schema key (goalID vs goalId)
            goalID: goalId,
            value: "correct",
            timestamp: new Date().toISOString(),
          },
        },
      });

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

      <ul>
        {clients.map((c) => {
          const goals = goalsArray(c.goals);
          return (
            <li key={c.id} style={{ marginBottom: 16 }}>
              <strong>{c.name}</strong>

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
                          display: "flex",
                          gap: "8px",
                          marginTop: 6,
                          flexWrap: "wrap",
                        }}
                      >
                        <button
                          onClick={() =>
                            handleCorrect(goal.id, c.id, c.currentVBGoal)
                          }
                        >
                          Mark Correct
                        </button>

                        <button
                          onClick={async () => {
                            for (let i = 0; i < 5; i++) {
                              await api.graphql({
                                query: createDataPoint,
                                variables: {
                                  input: {
                                    goalID: goal.id, // match schema key
                                    value: i % 2 === 0 ? "correct" : "incorrect",
                                    timestamp: new Date().toISOString(),
                                  },
                                },
                              });
                            }
                            await updateProgress(goal.id, c.id, c.currentVBGoal);
                            await fetchClients();
                            console.log("✅ Seeded test datapoints");
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
