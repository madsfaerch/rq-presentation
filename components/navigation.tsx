type NavigationProps = {
  prev?: string;
  next?: string;
};

function Navigation({ prev, next }: NavigationProps) {
  return (
    <div className="flex mt-auto">
      {prev && (
        <a
          className="mr-auto py-2 px-4 bg-indigo-600 hover:bg-indigo-700 font-medium text-white rounded"
          href={`/${prev}`}
        >
          Previous
        </a>
      )}
      {next && (
        <a
          className="ml-auto py-2 px-4 bg-indigo-600 hover:bg-indigo-700 font-medium text-white rounded"
          href={`/${next}`}
        >
          Next
        </a>
      )}
    </div>
  );
}

export { Navigation };
