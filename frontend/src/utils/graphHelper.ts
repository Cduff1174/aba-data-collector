export async function fetchDataPoints(goalId: string): Promise<number[]> {
    const res = await fetch(`/api/dataPoints?goalId=${goalId}`);
    const { data } = await res.json();
    return data.map((point: any) => point.value === 'correct' ? 1 : 0);
  }
  