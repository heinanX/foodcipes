import { getAllRecipes } from '@/app/actions';
import LargeRecipeCard from '../../RecipeCard/LargeRecipeCard';

const IndexList = async ({ query }: { query: string }) => {
  const recipes = (await getAllRecipes()) || [];

  const filteredRecipes =
    recipes.length > 0
      ? recipes.filter((recipe) => {
          return recipe.recipeTitle
            .toLowerCase()
            .startsWith(query.toLowerCase());
        })
      : [];

  return (
    <div className="w-full flex flex-wrap gap-10 justify-center">
      {filteredRecipes.length === 0 && <p>No recipes found</p>}

      {filteredRecipes.map((recipeCard) => (
        <LargeRecipeCard key={recipeCard._id} recipe={recipeCard} />
      ))}
    </div>
  );
};

export default IndexList;
