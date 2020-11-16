import { ListSpices } from "../components/spice-list";
import { queryCache, useQuery } from "react-query";
import { addSpice, fetchSpices } from "../utilities/fetch";
import { useState } from "react";
import { SpiceColor, SpiceColorEnum } from "../types/spice";
import { Button } from "../components/button";
import { LoadingIndicator } from "../components/loading-indicator";
import { Code } from "../components/code";
import { AddSpice } from "../components/add-spice";

export const DEFAULT_COLOR: SpiceColor = SpiceColorEnum.black;

const code = `const spices = useQuery("spices", fetchSpices);

async function addNewSpice() {
  try {
    await addSpice({ name, color });

    queryCache.invalidateQueries("spices");
  } catch (e) {
    // handle error
  }
}`;

function InvalidateQueries() {
  const spices = useQuery("spices", fetchSpices);

  return (
    <>
      <LoadingIndicator isLoading={spices.isFetching} />
      <ListSpices spices={spices.data} />
      <hr className="my-6 text-gray-300 w-full" />
      <div className="w-full flex justify-between items-start">
        <AddSpice />
        <div className="content">
          <h2>Use invalidateQueries to refresh data from the server.</h2>
          <Code code={code} />
        </div>
      </div>
    </>
  );
}

export default InvalidateQueries;
