import { getAllRecipes } from '@/app/actions';
import RecipeCard from '../../RecipeCard';

const IndexList = async ({ query }: { query: string }) => {
  const recipes = await getAllRecipes();

  const filteredRecipes = Array.isArray(recipes)
    ? recipes.filter((recipe) => {
        return recipe.recipeTitle.toLowerCase().startsWith(query.toLowerCase());
      })
    : [];

  return (
    <div className="w-full flex flex-wrap gap-10">
      {Array.isArray(recipes) && filteredRecipes.length === 0 && (
        <p>No recipes found</p>
      )}

      {Array.isArray(recipes) &&
        filteredRecipes.map((recipeCard) => (
          <RecipeCard key={recipeCard._id} recipe={recipeCard} />
        ))}
    </div>
  );
};

export default IndexList;
