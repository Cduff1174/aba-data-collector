// frontend/src/components/ProgressChecker.tsx
// (no need to import React with the automatic JSX runtime)

type ProgressCheckerProps = {
  goalId: string;
};

export default function ProgressChecker({ goalId }: ProgressCheckerProps) {
  // TODO: add your real UI/logic here; for now it's just a stub that accepts goalId
  return (
    <div className="p-2 text-sm text-gray-600">
      ProgressChecker ready for goal: {goalId}
    </div>
  );
}

