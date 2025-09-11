// frontend/src/components/ProgressChecker.tsx
import { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { listDataPoints } from '../graphql/queries';

const gqlClient = generateClient();

type ProgressCheckerProps = {
  goalId: string;
};

export default function ProgressChecker({ goalId }: ProgressCheckerProps) {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const res = await gqlClient.graphql({
          query: listDataPoints,
          variables: { filter: { goalID: { eq: goalId } } },
        });

        if ('data' in res) {
          const items = (res.data as any)?.listDataPoints?.items ?? [];
          if (isMounted) setCount(items.filter(Boolean).length);
        } else {
          if (isMounted) setCount(0);
        }
      } catch (err) {
        console.error('ProgressChecker fetch error:', err);
        if (isMounted) setCount(0);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, [goalId]);

  return (
    <div style={{ marginTop: 8 }}>
      <p style={{ fontSize: '0.9rem' }}>
        Total datapoints for goal <code>{goalId}</code>: <strong>{count}</strong>
      </p>
    </div>
  );
}
