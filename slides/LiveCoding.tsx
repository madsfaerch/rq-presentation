import * as React from "react";
import { queryCache, useQuery } from "react-query";
import { AddSpiceClean } from "../components/add-spice-clean";
import { LoadingIndicator } from "../components/loading-indicator";
import { SpiceCounterRQ } from "../components/spice-counter-rq";
import { ListSpices } from "../components/spice-list";
import { SpiceColor } from "../types/spice";
import { addSpice, fetchSpices } from "../utilities/fetch";

export default function LiveCoding() {
  const query = useQuery("spices", fetchSpices);

  async function addNewSpice(name: string, color: SpiceColor) {
    await addSpice({ name, color });
    queryCache.invalidateQueries("spices");
  }

  return (
    <>
      {/* <AddSpiceClean onSubmit={} />
      <LoadingIndicator isLoading={} />
      <ListSpices spices={} />
      <SpiceCounterRQ /> */}
    </>
  );
}
