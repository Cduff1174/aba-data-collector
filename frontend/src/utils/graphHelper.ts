// frontend/src/utils/graphHelper.ts
import { generateClient } from "aws-amplify/api";
import { listDataPoints } from "../graphql/queries"; // adjust path if needed

const client = generateClient();

export async function fetchDataPoints(goalId: string): Promise<number[]> {
  if (!goalId) return [];

  const result = await client.graphql({
    query: listDataPoints,
    // ⚠️ Match the field name to your schema: use goalID or goalId accordingly
    variables: { filter: { goalID: { eq: goalId } } },
  });

  const items = (result as any)?.data?.listDataPoints?.items ?? [];
  items.sort((a: any, b: any) =>
    (a?.createdAt ?? "").localeCompare(b?.createdAt ?? "")
  );
  return items.map((p: any) => (p?.value === "correct" ? 1 : 0));
}
