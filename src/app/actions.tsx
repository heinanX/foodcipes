import { gql } from '@apollo/client';
import apolloClient from './apolloClient';
import { iRecipe, iRecipeCard } from './utils/interfaces';
const client = apolloClient();

export const getAllRecipes = async (): Promise<iRecipeCard[]> => {
  const { data } = await client.query({
    query: gql`
      query {
        allRecipes {
          _id
          recipeTitle
          images {
            asset {
              url
            }
          }
        }
      }
    `,
  });
  return data.allRecipes;
};

export const getRecipeByID = async (id: string): Promise<iRecipe[]> => {
  console.log(id);
  const { data } = await client.query({
    query: gql`
      query ($id: ID!) {
        allRecipes(where: { _id: { eq: $id } }) {
          _id
          recipeTitle
          description
          servingSize
          difficultyLevel
          cuisine
          dietaryInformation
          language
          recipeUrl
          tried
          set {
            title
            ingredients {
              ingredient
              unit
              measurementunit
            }
          }
          instructionsRaw
          preparationTime
          cookingTime
          images {
            asset {
              url
            }
          }
          tags {
            title
          }
        }
      }
    `,
    variables: { id },
  });
  return data.allRecipes;
};
