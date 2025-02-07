import { iRecipeCard } from '@/app/utils/interfaces';
import React from 'react';
//import RenderImage from '../RecipeCard/RenderImage';
import Image from 'next/image';

const CarouselCard = ({ recipe }: { recipe: iRecipeCard }) => {
  return (
    <div className="h-[50vh] flex flex-row">
      <div className="w-1/2 h-full bg-teal-400">
        {/* <RenderImage image={recipe.images} recipeTitle={recipe.recipeTitle} /> */}
        {recipe.images
          ? recipe.images.map((item: { asset: { url: string } }, i: number) => (
              // <img
              //   key={i}
              //   src={item.asset.url}
              //   alt={`A visual photo of ${recipe.recipeTitle}`}
              //   className="w-full h-full object-cover"
              // />
              <Image
                key={i}
                src={item.asset.url}
                alt={`A visual photo of ${recipe.recipeTitle}`}
                height={10000}
                width={10000}
                className="object-cover h-full w-full overflow-hidden"
              />
            ))
          : ''}
      </div>
      <div className="w-1/2 h-full bg-pink-500">{recipe.recipeTitle}</div>
    </div>
  );
};

export default CarouselCard;
