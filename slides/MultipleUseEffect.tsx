import React, { useEffect, useState } from "react";
import { Code } from "../components/code";
import { LoadingIndicator } from "../components/loading-indicator";
import { SpiceCounter } from "../components/spice-counter";
import { ListSpices } from "../components/spice-list";
import { Spice } from "../types/spice";
import { fetchSpices } from "../utilities/fetch";

const code = `const [spices, setSpices] = useState<Spice[] | undefined>();
const [spiceState, setSpiceState] = useState<SpiceState>("idle");

const isLoading = spiceState === "loading";

async function getSpices() {
  setSpiceState("loading");
  try {
    const spices = await fetchSpices();
    setSpices(spices);
    setSpiceState("idle");
  } catch (error) {
    setSpiceState("error");
  }
}

useEffect(() => {
  getSpices();
}, []);`;

export type SpiceState = "idle" | "loading" | "error";

function MultipleUseEffect() {
  const [spices, setSpices] = useState<Spice[] | undefined>();
  const [spiceState, setSpiceState] = useState<SpiceState>("idle");

  const isLoading = spiceState === "loading";

  async function getSpices() {
    setSpiceState("loading");
    try {
      const spices = await fetchSpices();
      setSpices(spices);
      setSpiceState("idle");
    } catch (error) {
      setSpiceState("error");
    }
  }

  useEffect(() => {
    getSpices();
  }, []);

  return (
    <>
      <div className="content">
        <h2>
          This gets complex when different components require the same data
        </h2>
        <p>Now we have multiple components that fetch the same data.</p>
        <p>
          Preferably we would cache the result from the first request and use
          that instead of firing multiple requests
        </p>
      </div>
      <LoadingIndicator isLoading={isLoading} />
      <ListSpices spices={spices} />
      <h2 className="my-10 font-bold text-lg">Somewhere else on the page...</h2>
      <SpiceCounter className="mb-10" />
      <hr />
      <h2 className="mt-10 mb-4 font-bold text-lg">Challenges include:</h2>
      <ul className="pl-4 list-disc">
        <li>Sharing data</li>
        <li>Invalidating data</li>
        <li>Fetching data at intervals</li>
        <li>Caching data</li>
        <li>Deduping requests</li>
        <li>Optimistic UI updates</li>
        <li>Server side rendering</li>
        <li>Retry after error</li>
      </ul>
    </>
  );
}

export default MultipleUseEffect;
