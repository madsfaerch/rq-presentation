import { useEffect, useState } from "react";
import { Code } from "../components/code";
import { ListSpices } from "../components/spice-list";
import { Spice } from "../types/spice";
import { fetchSpices } from "../utilities/fetch";

const code = `const [spices, setSpices] = useState<Spice[] | undefined>();

async function getSpices() {
  const spices = await fetchSpices();
  setSpices(spices);
}

useEffect(() => {
  getSpices();
}, []);`;

function UseEffect() {
  const [spices, setSpices] = useState<Spice[] | undefined>();

  async function getSpices() {
    const spices = await fetchSpices();
    setSpices(spices);
  }

  useEffect(() => {
    getSpices();
  }, []);

  return (
    <>
      <div className="content">
        <h2>Calling that action as the component mounts</h2>
        <Code code={code} />
      </div>
      <hr />
      <div>{spices && <ListSpices spices={spices} />}</div>
    </>
  );
}

export default UseEffect;
