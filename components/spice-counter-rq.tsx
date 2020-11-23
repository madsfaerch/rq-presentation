import classNames from "classnames";
import React from "react";
import { queryCache, useQuery } from "react-query";
import { fetchSpices } from "../utilities/fetch";
// import { useSpices } from "../utilities/hooks";
import { LoadingIndicator } from "./loading-indicator";

type SpiceCounterProps = {
  className?: string;
};

export function SpiceCounterRQ({ className }: SpiceCounterProps) {
  const spices = useQuery("spices", fetchSpices);
  // const { data, isFetching} = useSpices();

  function invalidateQuery() {
    queryCache.invalidateQueries("spices");
  }

  return (
    <div className={classNames("flex flex-col", className)}>
      <LoadingIndicator isLoading={spices.isFetching} />
      <div
        onClick={invalidateQuery}
        className="flex items-center px-3 py-2 rounded-lg bg-gray-200 cursor-pointer"
      >
        <span className="font-semibold">Total spices: </span>
        {spices.data && (
          <div className="flex justify-center items-center w-6 h-6 rounded-full bg-white text-gray-700 ml-2 text-xs font-extrabold">
            <span>{spices.data.length}</span>
          </div>
        )}
      </div>
    </div>
  );
}
