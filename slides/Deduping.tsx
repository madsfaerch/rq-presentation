import React, { useState } from "react";
import { ListSpices } from "../components/spice-list";
import { useQuery } from "react-query";
import { fetchSpices } from "../utilities/fetch";
import { Code } from "../components/code";
import { LoadingIndicator } from "../components/loading-indicator";
import { SpiceCounterRQ } from "../components/spice-counter-rq";
// import { useSpices } from "../utilities/hooks";

const code = `const { data, isLoading } = useQuery("spices", fetchSpices);`;

function Deduping() {
  const { data, isFetching } = useQuery("spices", fetchSpices);
  // const { data, isFetching} = useSpices();

  const [showDelayed, setShowDelayed] = useState(false);

  return (
    <>
      <div onClick={() => setShowDelayed(!showDelayed)} className="content">
        <h2>Introducing useQuery</h2>
        <Code code={code} />
      </div>
      <LoadingIndicator isLoading={isFetching} />
      {data && <ListSpices spices={data} />}
      <h2 className="my-10 font-bold text-lg">Somewhere else on the page...</h2>
      <Code code={code} />
      <SpiceCounterRQ className="mb-10" />
      {showDelayed && (
        <div>
          Another counter
          <SpiceCounterRQ className="mb-10" />
        </div>
      )}
    </>
  );
}

export default Deduping;
