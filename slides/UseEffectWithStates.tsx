import React, { useEffect, useState } from "react";
import { Code } from "../components/code";
import { LoadingIndicator } from "../components/loading-indicator";
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

type SpiceState = "idle" | "loading" | "error";

function UseEffectWithStates() {
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
        <h2>Enriching the UI with loading states</h2>
        <Code code={code} />
      </div>
      <LoadingIndicator isLoading={isLoading} />
      <ListSpices spices={spices} />
    </>
  );
}

export default UseEffectWithStates;
