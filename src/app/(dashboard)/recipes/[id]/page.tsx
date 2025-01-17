import { getRecipeByID } from '@/app/actions';
import { iRecipe } from '@/app/utils/interfaces';
import { PortableText } from '@portabletext/react';
import RenderImage from '@/app/components/RecipeCard/RenderImage';
import RecipeDetails from '@/app/components/_pages/idPage/RecipeDetails';
import RecipeNavBtns from '@/app/components/_pages/idPage/RecipeNavBtns';
import IngredientList from '@/app/components/_pages/idPage/IngredientList';

const myPortableTextComponents = {
  listItem: {
    number: ({ children }: { children: React.ReactNode }) => (
      <li
        className="mb-2 md:border-secondary/30 md:border-b-2 pb-3 pt-1 first:pt-0 last:border-none"
        style={{ listStyleType: 'number' }}
      >
        {children}
      </li>
    ),
  },
};

const page = async ({ params }: { params: { id: string } }) => {
  const paramsId = params.id.split('/').pop();
  const data = await getRecipeByID(paramsId as string);

  return (
    <main className="min-h-screen justify-center items-center flex py-[5%] max-w-7xl w-full">
      {data.map((recipe: iRecipe, i: number) => (
        <article key={i} className="flex flex-col items-center w-full">
          <section className="flex flex-col items-center space-y-4">
            <h2 className="text-center">{recipe.recipeTitle}</h2>
            <div className="w-80 h-80 md:w-96 md:h-96 relative">
              <RenderImage
                image={recipe.images}
                recipeTitle={recipe.recipeTitle}
              />
            </div>
          </section>

          <RecipeNavBtns />

          <div className="w-full bg-secondary/30 flex justify-center">
            <article className="md:max-w-3xl flex w-full md:flex-row py-6 px-2 flex-col-reverse">
              <RecipeDetails recipe={recipe} />
            </article>
          </div>

          <section
            id="recipe"
            className="grid grid-cols-1 md:grid-cols-2 py-10 md:px-10 w-full md:max-w-5xl"
          >
            <article className="w-full pl-6 md:pl-0 pb-10 md:w-11/12 md:border-r-2 md:border-secondary/20 pr-4">
              <IngredientList set={recipe.set} />
            </article>

            <article className="w-full px-8 py-10 md:py-0 md:px-2 bg-secondary/30 md:bg-transparent">
              <p className="uppercase tracking-wider border-secondary/30 border-b-2 pb-3 mb-3">
                instructions:
              </p>
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
