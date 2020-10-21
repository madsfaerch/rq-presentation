type NavigationProps = {
  prev?: string;
  next?: string;
};

function Navigation({ prev, next }: NavigationProps) {
  return (
    <div className="w-full flex mt-auto">
      {prev && (
        <a
          className="mr-auto py-2 px-4 bg-gray-200 hover:bg-gray-400 font-medium text-gray-600 hover:text-gray-800 rounded"
          href={`/${prev}`}
        >
          Previous
        </a>
      )}
      {next && (
        <a
          className="ml-auto py-2 px-4 bg-gray-200 hover:bg-gray-400 font-medium text-gray-600 hover:text-gray-800 rounded"
          href={`/${next}`}
        >
          Next
        </a>
      )}
    </div>
  );
}

export { Navigation };
