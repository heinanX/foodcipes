import { gql } from '@apollo/client';
import apolloClient from './apolloClient';
import { revalidatePath } from 'next/cache';

const client = apolloClient();

export async function fetchData() {
  revalidatePath('/');
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
}

export async function getRecipeByID(id: string) {
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
}

const GET_ALL_RECIPES = gql`
  query {
    allRecipes {
      _id
      recipeTitle
      tags {
        title
      }
    }
  }
`;

export const getAllRecipeTags = async () => {
  console.log('i get to here');

  const { data } = await client.query({
    query: GET_ALL_RECIPES,
  });
  console.log(data);
  //return data.allRecipes;

  console.log(
    await client.query({
      query: GET_ALL_RECIPES,
    })
  );
};
