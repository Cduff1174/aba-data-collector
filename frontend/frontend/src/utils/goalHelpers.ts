import { generateClient } from 'aws-amplify/api';
import { listDataPoints } from '../graphql/queries';
import { updateGoal, updateClient } from '../graphql/mutations';
import { VB_GOALS } from '../vbGoals';

const client = generateClient();

const getNextGoal = (current: string) => {
  const index = VB_GOALS.indexOf(current);
  return VB_GOALS[index + 1] || null;
};

export const updateProgress = async (goalId: string, clientId: string, currentGoal: string) => {
  const data: any = await client.graphql({
    query: listDataPoints,
    variables: { filter: { goalID: { eq: goalId } } }
  });

  const points = data.data.listDataPoints.items;
  const correctCount = points.filter((p: any) => p.value === "correct").length;
  const progress = Math.round((correctCount / 10) * 100);

  console.log("Points fetched:", points);
  console.log("Correct count:", correctCount);
  console.log("Progress %:", progress);
  console.log("Goal ID:", goalId);

  await client.graphql({
    query: updateGoal,
    variables: { input: { id: goalId, progress } },
  });

  if (progress >= 100) {
    const nextGoal = getNextGoal(currentGoal);
    console.log("Next goal:", nextGoal);

    if (nextGoal) {
      await client.graphql({
        query: updateClient,
        variables: { input: { id: clientId, currentVBGoal: nextGoal } }
      });
    }
  }
};
