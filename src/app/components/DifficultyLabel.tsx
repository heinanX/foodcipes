const DifficultyLabel = ({ difficultyLevel }: { difficultyLevel: string }) => {
  return (
    <p className="pt-4">
      cooking level:
      <span
        className={
          difficultyLevel === 'medium'
            ? 'text-custYellow'
            : difficultyLevel === 'easy'
            ? 'text-custGreen'
            : 'text-red-400'
        }
      >
        {' '}
        {difficultyLevel}
      </span>
    </p>
  );
};

export default DifficultyLabel;
