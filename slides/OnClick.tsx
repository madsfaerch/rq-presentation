import { useState } from "react";
import { Button } from "../components/button";
import { Code } from "../components/code";
import { ListSpices } from "../components/spice-list";
import { Spice } from "../types/spice";
import { fetchSpices } from "../utilities/fetch";

const code = `const [spices, setSpices] = useState<Spice[] | undefined>();

async function onClick() {
  const spices = await fetchSpices();
  setSpices(spices);
}
`;

function OnClick() {
  const [spices, setSpices] = useState<Spice[] | undefined>();

  async function onClick() {
    const spices = await fetchSpices();
    setSpices(spices);
  }

  return (
    <>
      <div className="content">
        <h2>Calling an action and saving the result in state</h2>
        <Code code={code} />
      </div>
      <hr />
      <div>
        <Button className="mb-3" onClick={onClick}>
          Fetch Spices
        </Button>
        <ListSpices spices={spices} />
      </div>
    </>
  );
}

export default OnClick;
