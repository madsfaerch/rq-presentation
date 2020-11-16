import React from "react";
import { AddSpice } from "../components/add-spice";
import { ChangeFavoriteColor } from "../components/change-favorite-color";
import { SpiceCounterRQ } from "../components/spice-counter-rq";
import { ListSpices } from "../components/spice-list";
import { UserFavoriteSpices } from "../components/user-favorite-spices";
import { useSpices } from "../utilities/hooks";

export function ManyComponents() {
  const spices = useSpices();
  return (
    <div>
      <div>
        <ListSpices spices={spices.data} />
        <div className="mt-6 flex">
          <SpiceCounterRQ className="mr-10" />
          <AddSpice />
        </div>
        <div>
          <ChangeFavoriteColor />
          <UserFavoriteSpices />
        </div>
      </div>
    </div>
  );
}
