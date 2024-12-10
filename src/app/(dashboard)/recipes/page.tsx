import { getAllRecipes } from '@/app/actions';
import IndexResults from '@/app/components/_pages/recipes/IndexResults';
import NavIndex from '@/app/components/_pages/recipes/NavIndex/NavIndex';

const page = async () => {
  const recipes = await getAllRecipes();

  return (
    <main className="flex flex-col justify-center items-center min-h-screen w-full gap-10 py-20 px-10">
      <span className="flex flex-col gap-2 items-center">
        <h2>Look up recipe by title</h2>
      </span>
      <NavIndex />
      <IndexResults query={recipes} />
    </main>
  );
};

export default page;
