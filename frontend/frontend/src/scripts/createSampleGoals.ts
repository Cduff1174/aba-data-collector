import { generateClient } from 'aws-amplify/api';
import { listClients } from '../graphql/queries';
import { createGoal } from '../graphql/mutations';

const client = generateClient();

const createGoals = async () => {
  try {
    const result: any = await client.graphql({ query: listClients });
    const clients = result.data.listClients.items;

    for (const c of clients) {
      if (c.goals?.items?.length > 0) {
        console.log(`Skipping ${c.name}, already has goals.`);
        continue;
      }

      await client.graphql({
        query: createGoal,
        variables: {
          input: {
            title: `Sample Goal for ${c.name}`,
            progress: 0,
            clientID: c.id,
          },
        },
      });

      console.log(`✅ Goal created for ${c.name}`);
    }
  } catch (err) {
    console.error("❌ Error creating goals:", JSON.stringify(err, null, 2));
  }
};

createGoals();
