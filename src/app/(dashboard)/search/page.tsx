import SearchForm from '@/app/components/_pages/search/SearchForm/SearchForm';
import SearchResults from '@/app/components/_pages/search/SearchResults/SearchResults';

const page = async ({ searchParams }: { searchParams?: { query: string } }) => {
  const query = searchParams?.query || '';

  return (
    <main className="min-h-screen w-full flex flex-col gap-6 items-center pt-14">
      <SearchForm />

      <SearchResults query={query} />
    </main>
  );
};

export default page;
