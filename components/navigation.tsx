import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import { queryCache } from "react-query";

function Navigation() {
  const router = useRouter();

  let slide = router.query.slide;

  if (Array.isArray(slide)) {
    slide = slide[0];
  }

  if (!slide) {
    slide = "0";
  }

  let index = parseInt(slide, 10);

  const previous = index === 0 ? undefined : index - 1;
  const next = index + 1;

  React.useEffect(() => {
    queryCache.clear();
  }, [router.pathname]);

  return (
    <div className="w-full flex mt-auto">
      {previous !== undefined && (
        <Link href={`/${previous}`}>
          <a className="mr-auto py-2 px-4 bg-gray-200 hover:bg-gray-400 font-medium text-gray-600 hover:text-gray-800 rounded">
            Previous
          </a>
        </Link>
      )}
      {next && (
        <Link href={`/${next}`}>
          <a className="ml-auto py-2 px-4 bg-gray-200 hover:bg-gray-400 font-medium text-gray-600 hover:text-gray-800 rounded">
            Next
          </a>
        </Link>
      )}
    </div>
  );
}

export { Navigation };
