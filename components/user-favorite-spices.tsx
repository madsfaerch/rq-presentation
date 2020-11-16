import React from "react";
import { useQuery } from "react-query";
import { getUser, fetchSpicesByColor } from "../utilities/fetch";
import { LoadingIndicator } from "./loading-indicator";
import { ListSpices } from "./spice-list";

export function UserFavoriteSpices() {
  const user = useQuery("user", getUser);
  const spice = useQuery(
    ["spices", user.data?.favoriteSpiceColor],
    fetchSpicesByColor,
    {
      enabled: user.data?.favoriteSpiceColor,
    }
  );

  return (
    <div>
      <LoadingIndicator isLoading={user.isLoading} />
      <div>
        <p>
          User: <strong>{user.data?.name}</strong>
        </p>
        <p>
          Favorite color:{" "}
          <strong style={{ color: user.data?.favoriteSpiceColor }}>
            {user.data?.favoriteSpiceColor}
          </strong>
        </p>
      </div>
      <hr />
      <LoadingIndicator isLoading={spice.isFetching} />
      <ListSpices title="My favorite spice:" spices={spice.data} />
    </div>
  );
}
