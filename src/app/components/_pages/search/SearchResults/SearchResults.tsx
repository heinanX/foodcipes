import { getAllRecipesAndTags } from '@/app/actions';
import RecipeCard from '@/app/components/RecipeCard/RecipeCard';

const SearchResults = async ({ query }: { query: string }) => {
  const recipes = await getAllRecipesAndTags();

  const filteredRecipes = Array.isArray(recipes)
    ? recipes.filter((recipe) => {
        const queryLowerCase = query.toLowerCase();

        const titleMatch = recipe.recipeTitle
          .toLowerCase()
          .includes(queryLowerCase);

        const tagMatch = recipe.tags.some((tag) =>
          tag.title.toLowerCase().includes(queryLowerCase)
        );

        const ingredientMatch = recipe.set.some((item) =>
          item.ingredients.some((ingredient) =>
            ingredient.ingredient.toLowerCase().includes(queryLowerCase)
          )
        );

        return titleMatch || tagMatch || ingredientMatch;
      })
    : [];

  return (
    <>
      <h4>Search results for:</h4>
      <h2>{query}</h2>
      <div className="w-full flex flex-wrap gap-10">
        {Array.isArray(recipes) && filteredRecipes.length === 0 && (
          <p>No recipes found</p>
        )}

        {Array.isArray(recipes) &&
          filteredRecipes.map((recipeCard) => (
            <RecipeCard key={recipeCard._id} recipe={recipeCard} />
          ))}
      </div>
    </>
  );
};

export default SearchResults;
