import React, { useState } from "react";
import { ListSpices } from "../components/spice-list";
import { useQuery } from "react-query";
import { fetchSpices } from "../utilities/fetch";
import { Code } from "../components/code";
import { LoadingIndicator } from "../components/loading-indicator";
import { SpiceCounterRQ } from "../components/spice-counter-rq";
import { Button } from "../components/button";

const code = `const { data, isLoading } = useQuery("spices", fetchSpices);`;

function Deduping() {
  const { data, isFetching } = useQuery("spices", fetchSpices);

  const [nSpiceCounter, setNSpiceCounters] = useState(1);

  return (
    <>
      <div className="content">
        <h2>Introducing useQuery</h2>
        <Code code={code} />
      </div>
      <LoadingIndicator isLoading={isFetching} />
      {data && <ListSpices spices={data} />}
      <h2 className="my-10 font-bold text-lg">Somewhere else on the page...</h2>
      <Code code={code} />

      <Button onClick={() => setNSpiceCounters((prevState) => prevState + 1)}>
        Add spice counter
      </Button>
      <div className="flex flex-wrap mt-4">
        {Array.from({ length: nSpiceCounter }).map((_, index) => (
          <SpiceCounterRQ key={index} className="mb-5 mr-5" />
        ))}
      </div>
    </>
  );
}

export default Deduping;
