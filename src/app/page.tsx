import { getAllRecipes } from './actions';
import LargeRecipeCard from './components/RecipeCard/LargeRecipeCard';
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

      <article className="text-center">
        <h2 className="font-bold">Welcome to my recipe collection!</h2>
        <h5>Be inspired or look one up</h5>
      </article>

      <SearchForm />

      <article className="w-full flex flex-col gap-4 justify-center flex-wrap pt-14">
        <section className="w-full flex flex-row gap-4 justify-center flex-wrap">
          {data.map((recipe) => (
            <LargeRecipeCard key={recipe._id} recipe={recipe} />
          ))}
        </section>
      </article>
    </main>
  );
}
