import React, { useState } from "react";
import { DEFAULT_COLOR } from "../slides/InvalidateQueries";
import { SpiceColor, SpiceColorEnum } from "../types/spice";
import { Button } from "./button";

type AddSpiceProps = {
  onSubmit(name: string, color: SpiceColor): void;
};

export function AddSpiceClean(props: AddSpiceProps) {
  const [name, setName] = useState<string>("");
  const [color, setColor] = useState<SpiceColor>(DEFAULT_COLOR);

  return (
    <div className="flex flex-col items-start bg-gray-200 rounded-lg p-5 pt-3">
      <h3 className="text-lg font-bold mb-2">Add spice</h3>
      <label className="mb-3 flex flex-col">
        <span className="text-sm text-gray-600 mb-1">Name:</span>
        <input
          className="border px-2 py-1 rounded"
          placeholder="Enter name..."
          value={name || ""}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <span className="text-sm text-gray-600">Color:</span>
      <div className="flex">
        {Object.values(SpiceColorEnum).map((spiceColor) => (
          <label className="mb-2 mr-2" key={spiceColor}>
            <input
              className="form-radio"
              style={{ backgroundColor: spiceColor }}
              type="radio"
              name="color"
              value={spiceColor}
              checked={color === spiceColor}
              onChange={(event) => setColor(event.target.value as SpiceColor)}
            />
          </label>
        ))}
      </div>
      <Button
        className="mx-auto mt-2"
        onClick={() => {
          props.onSubmit(name, color);
          setName("");
          setColor(DEFAULT_COLOR);
        }}
      >
        Submit
      </Button>
    </div>
  );
}
