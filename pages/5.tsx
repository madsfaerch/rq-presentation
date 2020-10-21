import { Navigation } from "../components/navigation";
import { ListSpices } from "../components/spice-list";
import { queryCache, useQuery } from "react-query";
import { addSpice, fetchSpices } from "../utilities/fetch";
import { useState } from "react";
import { SpiceColor, SpiceColorEnum } from "../types/spice";
import { Button } from "../components/button";

const DEFAULT_COLOR: SpiceColor = SpiceColorEnum.black;

function Home() {
  const spices = useQuery("spices", fetchSpices);

  const [name, setName] = useState<string>("");
  const [color, setColor] = useState<SpiceColor>(DEFAULT_COLOR);

  async function addNewSpice() {
    try {
      if (!color) {
        throw "Color missing";
      }

      const response = await addSpice({ name, color });

      queryCache.invalidateQueries("spices");
      setName("");
      setColor(DEFAULT_COLOR);
      return response;
    } catch (e) {
      throw e;
    }
  }

  return (
    <>
      {spices.isLoading && "The spices are coming..."}
      {spices.data && <ListSpices spices={spices.data} />}
      <hr className="my-6 text-gray-300 w-full" />
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
      <Navigation prev="4" next="6" />
    </>
  );
}

export default Home;
