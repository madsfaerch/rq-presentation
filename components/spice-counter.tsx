import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { SpiceState } from "../slides/MultipleUseEffect";
import { Spice } from "../types/spice";
import { fetchSpices } from "../utilities/fetch";
import { LoadingIndicator } from "./loading-indicator";

type SpiceCounterProps = {
  className?: string;
};

export function SpiceCounter({ className }: SpiceCounterProps) {
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

  const classes = classNames("flex flex-col", className);

  return (
    <div className={classes}>
      <LoadingIndicator isLoading={isLoading} />
      <div
        onClick={getSpices}
        className="flex items-center px-3 py-2 rounded-lg bg-gray-200 cursor-pointer"
      >
        <span className="font-semibold">Total spices: </span>
        {spices && (
          <div className="flex justify-center items-center w-6 h-6 rounded-full bg-white text-gray-700 ml-2 text-xs font-extrabold">
            <span>{spices.length}</span>
          </div>
        )}
      </div>
    </div>
  );
}
