import { getRecipeByID } from '@/app/actions';
import { iRecipe } from '@/app/utils/schema';

const page = async ({ params }: { params: { id: string } }) => {
  const paramsId = params.id.split('/').pop();

  const data = await getRecipeByID(paramsId as string);

  console.log('this is from page', data);

  return (
    <main className="min-h-screen flex justify-center items-center">
      {data.map((recipe: iRecipe, i: number) => (
        <div key={i}>
          <p>{recipe.recipeTitle}</p>
          {recipe.tags.map((item, index) => (
            <p key={index}>{item.title}</p>
          ))}
        </div>
      ))}
      {params.id}
    </main>
  );
};

export default page;
