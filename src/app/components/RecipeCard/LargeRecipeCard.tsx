import { iRecipeCard } from '../../utils/interfaces';
import RenderImage from './RenderImage';

const LargeRecipeCard = ({ recipe }: { recipe: iRecipeCard }) => {
  return (
    <a href={`/recipes/${recipe._id}`} className="w-full h-96 sm:w-96 sm:h-72">
      <section className="relative w-full h-full">
        <RenderImage image={recipe.images} recipeTitle={recipe.recipeTitle} />
        <div className="relative z-10 flex items-end w-full h-full bg-black/0 hover:bg-black/50">
          <h4 className="text-center w-full bg-primary/80  py-2 px-1">
            {recipe.recipeTitle}
          </h4>
        </div>
      </section>
    </a>
  );
};

export default LargeRecipeCard;
