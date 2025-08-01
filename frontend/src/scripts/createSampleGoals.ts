import { Amplify } from 'aws-amplify';
import awsExports from '../aws-exports';
import { signIn } from 'aws-amplify/auth';
import { generateClient } from 'aws-amplify/api';
import { listClients } from '../graphql/queries';
import { createGoal } from '../graphql/mutations';
import { VB_GOALS } from '../vbGoals';

Amplify.configure(awsExports);

async function createGoals() {
  const username = process.env.SEED_USER!;
  const password = process.env.SEED_PASS!;
  if (!username || !password) throw new Error('Missing SEED_USER or SEED_PASS env vars.');

  // Sign in (Cognito User Pools)
  await signIn({ username, password });

  const client = generateClient();

  // Fetch clients
  const result: any = await client.graphql({ query: listClients });
  const clients = result?.data?.listClients?.items ?? [];

  for (const c of clients) {
    // If your schema returns goals as an array:
    // if (Array.isArray(c.goals) && c.goals.length > 0) continue;

    // If your schema returns { items: Goal[] }:
    if (c.goals?.items?.length > 0) {
      console.log(`⏩ Skipping ${c.name}, already has goals.`);
      continue;
    }

    for (const vb of VB_GOALS) {
      await client.graphql({
        query: createGoal,
        variables: { input: { title: `VB Goal: ${vb}`, progress: 0, clientID: c.id } },
      });
      console.log(`✔ Created goal "${vb}" for ${c.name}`);
    }

    console.log(`✅ Finished seeding all goals for ${c.name}`);
  }
}

// Run
createGoals().catch((e) => {
  console.error('❌ Error creating goals:', e);
  process.exit(1);
});
