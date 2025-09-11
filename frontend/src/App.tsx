// src/App.tsx
import { useEffect, useState } from "react";
import { withAuthenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { generateClient } from "aws-amplify/api";

import {
  createClient,
  createGoal,
  createDataPoint,
} from "./graphql/mutations";
import { listClients } from "./graphql/queries";
import { updateProgress } from "./utils/goalHelpers";

import "@aws-amplify/ui-react/styles.css";
import GoalGraph from "./components/GoalGraph";
import ProgressChecker from "./components/ProgressChecker";

const gqlClient = generateClient();

interface Goal {
  id: string;
  title: string;
  progress?: number | null;
}
interface ClientModel {
  id: string;
  name: string;
  currentVBGoal: string;
  goals: Goal[] | { items?: Goal[] | null } | null | undefined;
}

const goalsArray = (g: any): Goal[] =>
  Array.isArray(g) ? g.filter(Boolean) : g?.items?.filter(Boolean) ?? [];

function App() {
  const { signOut } = useAuthenticator();
  const [clients, setClients] = useState<ClientModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [newClientName, setNewClientName] = useState<string>("");

  async function fetchClients() {
    try {
      setLoading(true);
      const res = await gqlClient.graphql({ query: listClients });
      console.log("listClients raw:", res); // 👈 helps verify shape / auth

      if ("data" in res) {
        const items = (res.data as any)?.listClients?.items ?? [];
        setClients((items || []).filter(Boolean));
      } else {
        console.warn("Unexpected GraphQL response (no data key):", res);
        setClients([]); // still render empty state
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setClients([]); // still render empty state
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void fetchClients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function addClient() {
    const name = newClientName.trim();
    if (!name) return;
    await gqlClient.graphql({
      query: createClient,
      variables: { input: { name, currentVBGoal: "vb-1" } },
    });
    setNewClientName("");
    await fetchClients();
  }

  async function addSampleData() {
    const clientRes = await gqlClient.graphql({
      query: createClient,
      variables: { input: { name: "Demo Client", currentVBGoal: "vb-1" } },
    });
    if (!("data" in clientRes)) return;
    const clientId = (clientRes.data as any)?.createClient?.id;
    if (!clientId) return;

    const goalRes = await gqlClient.graphql({
      query: createGoal,
      variables: {
        input: { title: "Imitation: Clap Hands", clientID: clientId, progress: 0 },
      },
    });
    if (!("data" in goalRes)) return;
    const goalId = (goalRes.data as any)?.createGoal?.id;

    if (goalId) {
      await gqlClient.graphql({
        query: createDataPoint,
        variables: {
          input: { goalID: goalId, value: "correct", timestamp: new Date().toISOString() },
        },
      });
      await gqlClient.graphql({
        query: createDataPoint,
        variables: {
          input: { goalID: goalId, value: "incorrect", timestamp: new Date().toISOString() },
        },
      });
    }
    await fetchClients();
  }

  const handleCorrect = async (
    goalId: string,
    clientId: string,
    currentGoal: string
  ) => {
    try {
      const createRes = await gqlClient.graphql({
        query: createDataPoint,
        variables: {
          input: { goalID: goalId, value: "correct", timestamp: new Date().toISOString() },
        },
      });
      if (!("data" in createRes)) console.warn("CreateDataPoint no data:", createRes);

      await updateProgress(goalId, clientId, currentGoal);
      await fetchClients();
    } catch (err) {
      console.error("Error marking correct / updating progress:", err);
    }
  };

  return (
    <main style={{ padding: 16, maxWidth: 900, margin: "0 auto" }}>
      <header style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <h1 style={{ margin: 0, fontSize: 22 }}>ABA Data Collector</h1>
        <button onClick={signOut} style={{ marginLeft: "auto" }}>
          Sign Out
        </button>
      </header>

      <section style={{ marginTop: 16 }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
          <input
            type="text"
            placeholder="New client name"
            value={newClientName}
            onChange={(e) => setNewClientName(e.target.value)}
            style={{ padding: 8, minWidth: 240 }}
          />
          <button onClick={addClient}>Add Client</button>
          <button onClick={addSampleData} title="Create demo client + goal + datapoints">
            Add Sample Data
          </button>
        </div>
      </section>

      {loading ? (
        <p style={{ opacity: 0.7, marginTop: 16 }}>Loading clients…</p>
      ) : clients.length === 0 ? (
        <div
          style={{
            padding: 12,
            border: "1px solid #eee",
            borderRadius: 8,
            marginTop: 16,
            maxWidth: 620,
          }}
        >
          <h3 style={{ marginTop: 0 }}>No clients yet</h3>
          <p style={{ marginTop: 4 }}>
            You’re signed in but there’s no data under this account. If your API uses owner-based
            auth, you only see items you create.
          </p>
          <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
            <button onClick={addSampleData}>Add Sample Data</button>
            <button onClick={addClient}>Add Client</button>
          </div>
        </div>
      ) : (
        <ul style={{ marginTop: 16 }}>
          {clients.map((cl) => {
            const goals = goalsArray(cl.goals);
            return (
              <li key={cl.id} style={{ marginBottom: 16 }}>
                <strong>{cl.name}</strong>
                <ul>
                  {goals.length ? (
                    goals.map((goal) => (
                      <li key={goal.id} style={{ marginBottom: 10 }}>
                        <div>Goal: {goal.title}</div>
                        <p>Progress: {goal.progress ?? 0}%</p>
                        <progress value={goal.progress ?? 0} max={100} />
                        <div style={{ marginTop: 12 }}>
                          <GoalGraph goalId={goal.id} />
                          <ProgressChecker goalId={goal.id} />
                        </div>
                        <div style={{ display: "flex", gap: "8px", marginTop: 6, flexWrap: "wrap" }}>
                          <button onClick={() => handleCorrect(goal.id, cl.id, cl.currentVBGoal)}>
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
      )}
    </main>
  );
}

export default withAuthenticator(App);
