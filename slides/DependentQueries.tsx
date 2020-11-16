import React from "react";
import { useQuery } from "react-query";
import { getUser } from "../utilities/fetch";
import { Code } from "../components/code";
import { UserFavoriteSpices } from "../components/user-favorite-spices";

function DependentQueries() {
  const user = useQuery("user", getUser);

  const code = `const user = useQuery("user", getUser);
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
);`;

  return (
    <>
      <div className="content">
        <h2>Dependent queries</h2>
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
