import { getRecipeByID } from '@/app/actions';
import { iRecipe } from '@/app/utils/schema';
import { PortableText } from '@portabletext/react';

const myPortableTextComponents = {
  listItem: {
    number: ({ children }: { children: React.ReactNode }) => (
      <li className="mb-2" style={{ listStyleType: 'number' }}>
        {children}
      </li>
    ),
  },
};

const page = async ({ params }: { params: { id: string } }) => {
  const paramsId = params.id.split('/').pop();
  const data = await getRecipeByID(paramsId as string);

  return (
    <main className="min-h-screen justify-center items-center flex pt-20 max-w-7xl">
      {data.map((recipe: iRecipe, i: number) => (
        <section key={i}>
          <h2 className="pb-6 text-center">{recipe.recipeTitle}</h2>
          <p className="italic text-center px-20">{recipe.description}</p>

          <article className="w-full flex justify-center bg-primary/50 py-2 mt-6">
            <div className="flex justify-between w-1/2">
              <p>{recipe.preparationTime}</p>
              <p>{recipe.cookingTime}</p>
              <p>{recipe.difficultyLevel}</p>
            </div>
          </article>

          <div className="grid grid-cols-2 p-10">
            <article className="w-full">
              {recipe.set.map((item, i) => (
                <section key={i}>
                  {item.ingredients.map((item, i) => (
                    <ul key={i} className="grid grid-cols-6">
                      <li className="col-span-1">
                        {item.unit} {item.measurementunit}
                      </li>
                      <li className="col-span-5">{item.ingredient}</li>
                    </ul>
                  ))}
                </section>
              ))}
            </article>

            <article className="w-full">
              <PortableText
                value={recipe.instructionsRaw}
                //@ts-expect-error type mismatch
                components={myPortableTextComponents}
              />
            </article>
          </div>
        </section>
      ))}
    </main>
  );
};

export default page;
