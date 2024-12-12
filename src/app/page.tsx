import { getAllRecipes } from './actions';
import RecipeCard from './components/RecipeCard';
import SearchForm from './components/_pages/search/SearchForm/SearchForm';

export default async function Home() {
  const data = await getAllRecipes();

  return (
    <main className="min-h-screen w-full flex flex-col gap-6 items-center">
      <SearchForm />

      <span className="flex gap-1">
        <a href="/recipes" className="font-bold underline">
          click here
        </a>
        <p> to go to recipe index</p>
      </span>

      <h2 className="">Here are ten of my favorite recipes</h2>
      <article className="w-full flex flex-row gap-4 justify-center  flex-wrap ">
        {data.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </article>
    </main>
  );
}
