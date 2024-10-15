import { gql } from '@apollo/client';
import apolloClient from './apolloClient';

export async function fetchData() {
  const client = apolloClient();
  const { data } = await client.query({
    query: gql`
      query {
        allRecipes {
          recipeTitle
        }
      }
    `,
  });
  return data.allRecipes;
}
