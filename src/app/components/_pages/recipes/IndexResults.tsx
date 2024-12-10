import { iRecipeCard } from '@/app/utils/interfaces';
import RecipeCard from '../../RecipeCard';

const IndexResults = ({ query }: { query: iRecipeCard[] }) => {
  return (
    <div className="w-full flex flex-wrap gap-10">
      {query?.map((recipeCard) => (
        <div key={recipeCard._id} className="flex">
          <RecipeCard recipe={recipeCard} />
        </div>
      ))}
    </div>
  );
};

export default IndexResults;
