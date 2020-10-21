import { useState } from "react";
import { Button } from "../components/button";
import { Navigation } from "../components/navigation";
import { ListSpices } from "../components/spice-list";
import { fetchSpices, request } from "../utilities/fetch";

function Home() {
  const [spices, setSpices] = useState([]);

  async function onClick() {
    const spices = await fetchSpices();
    console.log(spices);
    setSpices(spices);
  }

  return (
    <>
      <div>
        <Button onClick={onClick}>Fetch Spices</Button>
        <ListSpices
          spices={spices}
          filterFn={(spice) => spice.color === "red"}
        />
      </div>
      <Navigation prev="0" next="1" />
    </>
  );
}

export default Home;
