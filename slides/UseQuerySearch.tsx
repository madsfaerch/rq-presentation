import { ListSpices } from "../components/spice-list";
import { useQuery } from "react-query";
import { fetchSpices, searchSpices } from "../utilities/fetch";
import React, { useState } from "react";
import { useDebounce } from "../utilities/misc";
import { LoadingIndicator } from "../components/loading-indicator";
import { Code } from "../components/code";

function UseQuerySearch() {
  const spices = useQuery("spices", fetchSpices);

  const [query, setQuery] = useState<string | null>(null);
  const debouncedQuery = useDebounce(query, 300);

  const spiceSearch = useQuery(
    ["spices", { query: debouncedQuery }],
    searchSpices,
    {
      enabled: debouncedQuery,
      // initialStale: false,
      // keepPreviousData: true,
    }
  );

  const code = `const [query, setQuery] = useState<string | null>(${
    query || "null"
  });
const debouncedQuery = useDebounce(${query || "query"}, 300);

const spiceSearch = useQuery(
  ["spices", { query: ${debouncedQuery || "debouncedQuery"} }],
  searchSpices,
  {
    enabled: ${!!debouncedQuery || "!!debouncedQuery"},
  }
);`;

  return (
    <>
      <LoadingIndicator isLoading={spices.isFetching} />
      <ListSpices spices={spices.data} />
      <hr className="my-6" />
      <div className="content">
        <h2>Dynamic keys II</h2>
        <p>Same method as before, but using a search api.</p>
        <p>
          Here, a search api is called whenever the debounced input is changed.
        </p>
        <Code code={code} />
      </div>
      <label className="mb-6">
        Search:{" "}
        <input
          className="border px-2 rounded"
          placeholder="Enter query..."
          value={query || ""}
          onChange={(event) => setQuery(event.target.value)}
        />
      </label>
      <LoadingIndicator isLoading={spiceSearch.isFetching} />
      <ListSpices spices={spiceSearch.data} title="Spice finder results:" />
    </>
  );
}

export default UseQuerySearch;
