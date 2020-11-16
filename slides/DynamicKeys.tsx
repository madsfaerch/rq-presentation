import React, { useState } from "react";
import { useQuery } from "react-query";
import { Code } from "../components/code";
import { LoadingIndicator } from "../components/loading-indicator";
import { ListSpices } from "../components/spice-list";
import { SpiceColor, SpiceColorEnum } from "../types/spice";
import { fetchSpicesByColor } from "../utilities/fetch";
import { DEFAULT_COLOR } from "./InvalidateQueries";

export function DynamicKeys() {
  const [color, setColor] = useState<SpiceColor>(DEFAULT_COLOR);
  const spicePicker = useQuery(["spices", color], fetchSpicesByColor, {
    keepPreviousData: true,
  });

  const code = `const [color, setColor] = useState<SpiceColor>(${color});
const spicePicker = useQuery(["spices", ${color}], fetchSpicesByColor);`;

  return (
    <div>
      <div className="content">
        <h2>Dynamic Keys</h2>
        <p>
          Keys can be dynamic and will invalidate a query, when they're changed.
          Queries are cached according to their key, but will refetch to make
          sure the freshest data is available.
        </p>
        <Code code={code} />
      </div>
      <label className="inline-block mt-10 border p-2">
        <span className="mr-2">Pick color:</span>
        <select
          value={color}
          onChange={(event) => setColor(event.target.value as SpiceColor)}
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
      <hr />
      <LoadingIndicator isLoading={spicePicker.isFetching} />
      <ListSpices title="My favorite spice:" spices={spicePicker.data} />
    </div>
  );
}
