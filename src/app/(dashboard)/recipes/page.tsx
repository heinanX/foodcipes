import NavIndex from '@/app/components/_pages/recipes/NavIndex/NavIndex';
import IndexList from '@/app/components/_pages/recipes/IndexList';

const page = async ({ searchParams }: { searchParams?: { query: string } }) => {
  const query = searchParams?.query || '';

  return (
    <main className="flex flex-col items-center min-h-screen w-full gap-10 py-20 px-10">
      <span className="flex flex-col gap-2 items-center">
        <h2>Look up recipe by title</h2>
      </span>
      <NavIndex />
      <IndexList query={query} />
    </main>
  );
};

export default page;
