import React, { useState } from "react";
import { queryCache } from "react-query";
import { DEFAULT_COLOR } from "../slides/InvalidateQueries";
import { SpiceColor, SpiceColorEnum } from "../types/spice";
import { addSpice } from "../utilities/fetch";
import { Button } from "./button";

export function AddSpice() {
  const [name, setName] = useState<string>("");
  const [color, setColor] = useState<SpiceColor>(DEFAULT_COLOR);

  async function addNewSpice() {
    try {
      if (!color) {
        throw "Color missing";
      }

      await addSpice({ name, color });

      queryCache.invalidateQueries("spices");

      setName("");
      setColor(DEFAULT_COLOR);
    } catch (e) {
      throw e;
    }
  }

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
      <Button className="mx-auto mt-2" onClick={addNewSpice}>
        Submit
      </Button>
    </div>
  );
}
