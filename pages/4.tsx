import { Navigation } from "../components/navigation";
import { ListSpices } from "../components/spice-list";
import { useQuery } from "react-query";
import { fetchSpices, searchSpices } from "../utilities/fetch";
import { useState } from "react";
import { useDebounce } from "../utilities/misc";

function Home() {
  const spices = useQuery("spices", fetchSpices);

  const [query, setQuery] = useState<string | null>(null);
  const debouncedQuery = useDebounce(query, 300);

  const spiceSearch = useQuery(
    ["spices", { query: debouncedQuery }],
    searchSpices,
    {
      enabled: debouncedQuery !== null,
    }
  );

  return (
    <>
      {spices.isLoading && "The spices are coming..."}
      {spices.data && <ListSpices spices={spices.data} />}
      <hr className="my-6" />
      <label>
        Search:{" "}
        <input
          className="border px-2 rounded"
          placeholder="Enter query..."
          value={query || ""}
          onChange={(event) => setQuery(event.target.value)}
        />
      </label>
      <ListSpices
        spices={spiceSearch.data || []}
        title="Spice finder results:"
      />
      <Navigation prev="3" next="5" />
    </>
  );
}

export default Home;
