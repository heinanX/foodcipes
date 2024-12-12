export interface iRecipeCard {
  _id: string;
  recipeTitle: string;
  images: [
    {
      asset: {
        url: string;
      };
    }
  ];
}

export interface iRecipe {
  _id: string;
  recipeTitle: string;
  description: string;
  servingSize: number;
  difficultyLevel: string;
  cuisine: string;
  dietaryInformation: string;
  language: string;
  recipeUrl: string;
  tried: boolean;
  set: [
    {
      title: string;
      ingredients: [
        {
          ingredient: string;
          unit: string;
          measurementunit: string;
        }
      ];
    }
  ];
  instructionsRaw: never;
  preparationTime: string;
  cookingTime: string;
  images: [
    {
      asset: {
        url: string;
      };
    }
  ];
  tags: [
    {
      title: string;
    }
  ];
}

export interface iImage {
  asset: {
    url: string;
  };
}

export interface iSet {
  title: string;
  ingredients: [
    {
      ingredient: string;
      unit: string;
      measurementunit: string;
    }
  ];
}
