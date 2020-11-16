import React from "react";
import { queryCache, useQuery } from "react-query";
import { SpiceColor, SpiceColorEnum } from "../types/spice";
import { getUser, updateUser } from "../utilities/fetch";

export function ChangeFavoriteColor() {
  const user = useQuery("user", getUser);

  async function changeColor(color: SpiceColor) {
    if (!user.data) {
      return;
    }
    try {
      await updateUser({ ...user.data, favoriteSpiceColor: color });
      queryCache.invalidateQueries("user");
    } catch (_e) {
      // handle error;
    }
  }

  return (
    <div>
      <label className="inline-block mt-10 border p-2">
        <span className="mr-2">My favorite color:</span>
        <select
          value={user.data?.favoriteSpiceColor}
          onChange={(event) => changeColor(event.target.value as SpiceColor)}
        >
          {Object.values(SpiceColorEnum).map((spiceColor) => (
            <option
              key={spiceColor}
              className="form-radio"
              style={{ backgroundColor: spiceColor }}
              value={spiceColor}
            >
              {spiceColor}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
