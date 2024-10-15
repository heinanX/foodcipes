import { fetchData } from './actions';

export default async function Home() {
  const data = await fetchData();

  console.log(data);

  return (
    <main className="min-h-screen w-full flex flex-col gap-6 justify-center items-center">
      <span className="flex gap-1">
        <a href="/recipes" className="font-bold underline">
          click here
        </a>
        <p> to go to recipe index</p>
      </span>

      <h2 className="">Here are ten of my favorite recipes</h2>
      <article className="w-full flex flex-row gap-4 justify-center">
        {data.map((item: any, i: number) => (
          <section
            key={i}
            className="flex justify-center items-center h-52 w-52 border border-primary"
          >
            <p>{item.recipeTitle}</p>
          </section>
        ))}
      </article>
    </main>
  );
}
