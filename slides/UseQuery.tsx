import React, { useState } from "react";
import { ListSpices } from "../components/spice-list";
import { useQuery } from "react-query";
import { fetchSpices } from "../utilities/fetch";
import { Code } from "../components/code";
import { LoadingIndicator } from "../components/loading-indicator";

const code = `const { data, isLoading } = useQuery("spices", fetchSpices);`;

const useQueryCode = `const {
  data,
  isError,
  isLoading,
  isFetching,
  status,
  ...and a lot more
} = useQuery(
  key - The unique identifier for this query
  fetcherFunction - the ajax request
  options - holds a lot(!) of options for useQuery
)`;

function UseQuery() {
  const [api, setApi] = useState(false);
  const { data, isLoading } = useQuery("spices", fetchSpices);

  return (
    <>
      <div className="content" onClick={() => setApi(!api)}>
        <h2>Introducing useQuery</h2>
        <Code code={code} />
      </div>
      <LoadingIndicator isLoading={isLoading} />
      {data && <ListSpices spices={data} />}
      {api && (
        <>
          <hr />
          <div>
            <Code code={useQueryCode} />
          </div>
        </>
      )}
    </>
  );
}

export default UseQuery;
