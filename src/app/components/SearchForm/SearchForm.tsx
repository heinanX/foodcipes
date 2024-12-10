'use client';

import { getAllRecipeTags } from '@/app/actions';
import apolloClient from '@/app/apolloClient';
import { ApolloProvider } from '@apollo/client';
import { useState } from 'react';

const SearchForm = () => {
  const activateSearch = async () => {
    try {
      const data = await getAllRecipeTags();
      console.log(data); // Check if you get the correct data
    } catch (error) {
      console.error('Error fetching data:', error);
      console.log('error');
      // Handle any errors here
    }
  };
  const [phrase, setPhrase] = useState('');

  return (
    <ApolloProvider client={apolloClient()}>
      <form className="space-x-4">
        <label></label>
        <input
          type="text"
          className="py-2 px-4 rounded-full text-rose-ebony"
          placeholder='"Italian"'
          //onChange={(e) => setPhrase(e.target.value)}
        />
        <button
          type="button"
          className="uppercase rounded bg-primary py-1 px-5"
          onClick={activateSearch}
        >
          search
        </button>
      </form>
    </ApolloProvider>
  );
};

export default SearchForm;
