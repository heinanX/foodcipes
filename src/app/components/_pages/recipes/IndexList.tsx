import { getAllRecipes } from '@/app/actions';
import RecipeCard from '../../RecipeCard';
import { iRecipeCard } from '@/app/utils/interfaces';

const IndexList = async ({ query }: { query: string }) => {
  const recipes: iRecipeCard[] = await getAllRecipes();

  const filteredReecipes = Array.isArray(recipes)
    ? recipes.filter((recipe) => {
        return recipe.recipeTitle.toLowerCase().startsWith(query.toLowerCase());
      })
    : [];

  return (
    <div className="w-full flex flex-wrap gap-10">
      {Array.isArray(recipes) && filteredReecipes.length === 0 && (
        <p>No recipes found</p>
      )}

      {Array.isArray(recipes) &&
        filteredReecipes.map((recipeCard) => (
          <div key={recipeCard._id} className="flex">
            <RecipeCard recipe={recipeCard} />
          </div>
        ))}
    </div>
  );
};

export default IndexList;
