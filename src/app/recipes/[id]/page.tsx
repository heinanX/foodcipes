import { getRecipeByID } from '@/app/actions';
import RenderImage from '@/app/components/RenderImage';
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
    <main className="min-h-screen justify-center items-center flex py-32 max-w-7xl w-full">
      {data.map((recipe: iRecipe, i: number) => (
        <article key={i}>
          <section className="flex flex-col items-center space-y-4">
            <h2 className="text-center">{recipe.recipeTitle}</h2>
            <div className="w-96 h-96 relative">
              <RenderImage
                image={recipe.images}
                recipeTitle={recipe.recipeTitle}
              />
            </div>
            <p className="italic text-center px-20 max-w-[750px]">
              {recipe.description}
            </p>
          </section>

          <section className="w-full flex justify-center bg-primary/50 py-2 mt-6">
            <div className="flex justify-between items-center w-1/2">
              <p>{recipe.servingSize} servings</p>
              <p>prep: {recipe.preparationTime}</p>
              <p>time: {recipe.cookingTime}</p>
              <p
                className={`text-sm ${
                  recipe.difficultyLevel === 'medium'
                    ? 'text-custYellow'
                    : recipe.difficultyLevel === 'easy'
                    ? 'text-custGreen'
                    : 'text-red-400'
                }`}
              >
                {recipe.difficultyLevel}
              </p>
            </div>
          </section>

          <section className="grid grid-cols-2 p-10">
            <div className="w-full">
              {recipe.set.map((item, i) => (
                <section key={i}>
                  {item.ingredients.map((item, i) => (
                    <ul key={i} className="grid grid-cols-2">
                      <li className="w-20">
                        {item.unit} {item.measurementunit}
                      </li>
                      <li className="capitalize">{item.ingredient}</li>
                    </ul>
                  ))}
                </section>
              ))}
            </div>

            <article className="w-full">
              <PortableText
                value={recipe.instructionsRaw}
                //@ts-expect-error type mismatch
                components={myPortableTextComponents}
              />
            </article>
          </section>
        </article>
      ))}
    </main>
  );
};

export default page;
