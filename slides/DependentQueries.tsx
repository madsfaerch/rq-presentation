import React, { useState } from "react";
import { useQuery } from "react-query";
import { fetchSpicesByColor, getUser } from "../utilities/fetch";
import { Code } from "../components/code";
import { LoadingIndicator } from "../components/loading-indicator";
import { ListSpices } from "../components/spice-list";
import { Button } from "../components/button";

function UserFavoriteSpices() {
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

function DependentQueries() {
  const user = useQuery("user", getUser);
  const [clicked, setClicked] = useState(false);

  const code = clicked
    ? `const user = useQuery("user", getUser);
const spice = useQuery(
  ["spices", ${
    user.data?.favoriteSpiceColor || "user.data?.favoriteSpiceColor"
  }],
  fetchSpicesByColor,
  {
    enabled: ${
      !!user.data?.favoriteSpiceColor || "!!user.data?.favoriteSpiceColor"
    },
  }
);`
    : `const user = useQuery("user", getUser);
const spice = useQuery(
  ["spices", user.data?.favoriteSpiceColor],
  fetchSpicesByColor,
  {
    enabled: !!user.data?.favoriteSpiceColor
  }
);`;

  return (
    <>
      <div className="content">
        <h2>Dependent queries</h2>
        <Button onClick={() => setClicked(true)}>toggle</Button>
        <p>
          Queries can depend on each other and start fetching as soon as
          required data is available.
        </p>
        <Code code={code} />
      </div>

      <hr />
      <UserFavoriteSpices />
    </>
  );
}

export default DependentQueries;
