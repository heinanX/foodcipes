import { iRecipe } from '../../../utils/interfaces';
import DifficultyLabel from './DifficultyLabel';
import { RxStopwatch } from 'react-icons/rx';
import { PiKnifeFill, PiClock } from 'react-icons/pi';

const RecipeDetails = ({ recipe }: { recipe: iRecipe }) => {
  return (
    <>
      <section className="w-full md:w-1/4 py-2 px-4 md:pt-9 space-y-2">
        <dl className="space-y-2">
          <div className="flex items-center">
            <dt className="sr-only">Servings:</dt>
            <dd className="flex gap-2 items-center">
              <RxStopwatch aria-hidden="true" />
              {recipe.servingSize} servings
            </dd>
          </div>
          <div className="flex items-center">
            <dt className="sr-only">Preparation Time:</dt>
            <dd className="flex gap-2 items-center">
              <PiKnifeFill aria-hidden="true" />
              {recipe.preparationTime} prep
            </dd>
          </div>
          <div className="flex items-center">
            <dt className="sr-only">Cooking Time:</dt>
            <dd className="flex gap-2 items-center">
              <PiClock aria-hidden="true" />
              {recipe.cookingTime}
            </dd>
          </div>
          <div className="flex items-center">
            <dt className="sr-only">Dietary Information:</dt>
            <dd>{recipe.dietaryInformation}</dd>
          </div>
        </dl>
      </section>

      <section className="w-full md:w-3/4 py-2 px-4">
        <h5 className="uppercase pb-4 primaryBorder">
          {recipe.cuisine} cuisine
        </h5>
        <p className="italic py-4 primaryBorder">{recipe.description}</p>
        <DifficultyLabel difficultyLevel={recipe.difficultyLevel} />
      </section>
    </>
  );
};

export default RecipeDetails;
