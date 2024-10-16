import { gql } from '@apollo/client';
import apolloClient from './apolloClient';

export async function fetchData() {
  const client = apolloClient();
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

// export async function getRecipeByID(id: string) {
//   const client = apolloClient();
//   const { data } = await client.query({
//     query: gql`
//       query ($id: ID!) {
//         allRecipes(_id: {$id}) {
//           _id
//           recipeTitle
//           description
//           servingSize
// difficultyLevel
// cuisine
// dietaryInformation
// language
// recipeUrl
// tried
// set {
//   title
//   ingredients {
//     ingredient
//     unit
//     measurmentunit
//   }
// }
// preparationTime
// cookingTime
// images {
//   asset {
//     url
//   }
// }
// tags {
//   title
// }
//         }
//       }
//     `,
//   });
//   return data.allRecipes;
// }

export async function getRecipeByID(id: string) {
  console.log(id);

  const client = apolloClient();
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
