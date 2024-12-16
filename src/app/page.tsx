import { getAllRecipes } from './actions';
import RecipeCard from './components/RecipeCard/RecipeCard';
import SearchForm from './components/_pages/search/SearchForm/SearchForm';
import Image from 'next/image';
import welcomeImage from '../app/utils/assets/cartoon-colored.png';

export default async function Home() {
  const data = await getAllRecipes();

  return (
    <main className="min-h-screen w-full flex flex-col gap-6 items-center pt-14">
      <Image
        src={welcomeImage}
        width={150}
        height={150}
        alt="a cartoonish image of me in a chefs outfit"
      />

      <SearchForm />

      {/* <h1>Welcome to my collection of Recipes</h1> */}

      <article className="w-full flex flex-col gap-4 justify-center flex-wrap pt-14">
        <section className="w-full flex justify-center">
          <h2 className="">Here are ten of my favorite recipes</h2>
        </section>
        <section className="w-full flex flex-row gap-4 justify-center flex-wrap">
          {data.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ))}
        </section>
      </article>
    </main>
  );
}
