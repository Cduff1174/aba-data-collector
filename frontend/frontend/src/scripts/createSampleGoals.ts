import { generateClient } from 'aws-amplify/api';
import { listClients } from '../graphql/queries';
import { createGoal } from '../graphql/mutations';
import { VB_GOALS } from '../vbGoals'; 

const client = generateClient();

const createGoals = async () => {
  try {
    const result: any = await client.graphql({ query: listClients });
    const clients = result.data.listClients.items;

    for (const c of clients) {
      if (c.goals?.items?.length > 0) {
        console.log(`⏩ Skipping ${c.name}, already has goals.`);
        continue;
      }

      for (const vb of VB_GOALS) {
        await client.graphql({
          query: createGoal,
          variables: {
            input: {
              title: `VB Goal: ${vb}`,
              progress: 0,
              clientID: c.id,
            },
          },
        });
        console.log(`✔ Created goal "${vb}" for ${c.name}`);
      }

      console.log(`✅ Finished seeding all goals for ${c.name}`);
    }
  } catch (err) {
    console.error("❌ Error creating goals:", JSON.stringify(err, null, 2));
  }
};

createGoals();
