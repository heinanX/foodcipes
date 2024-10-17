import { fetchData } from './actions';
import RenderImage from './components/RenderImage';
import SearchForm from './components/SearchForm/SearchForm';
import { iRecipe } from './utils/schema';

export default async function Home() {
  const data = await fetchData();

  // console.log(data);

  return (
    <main className="min-h-screen w-full flex flex-col gap-6 justify-center items-center">
      <SearchForm />

      <span className="flex gap-1">
        <a href="/recipes" className="font-bold underline">
          click here
        </a>
        <p> to go to recipe index</p>
      </span>

      <h2 className="">Here are ten of my favorite recipes</h2>
      <article className="w-full flex flex-row gap-4 justify-center  flex-wrap ">
        {data.map((recipe: iRecipe, i: number) => (
          <a key={i} href={`/recipes/${recipe._id}`} className="">
            <section className="relative h-52 w-52">
              <RenderImage image={recipe.images} />
              <div className="relative z-10 flex items-center w-full h-full bg-black/0 hover:bg-black/50">
                <h4 className=" absolute z-20 text-center w-full bg-rose-ebony/80  py-2 px-1">
                  {recipe.recipeTitle}
                </h4>
              </div>
            </section>
          </a>
        ))}
      </article>
    </main>
  );
}
