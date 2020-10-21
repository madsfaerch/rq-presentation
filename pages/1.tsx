import { useEffect, useState } from "react";
import { Button } from "../components/button";
import { Navigation } from "../components/navigation";
import { ListSpices } from "../components/spice-list";
import { Spice } from "../types/spice";
import { fetchSpices } from "../utilities/fetch";

function Home() {
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
      <div>{spices && <ListSpices spices={spices} />}</div>
      <Navigation prev="0" next="1" />
    </>
  );
}

export default Home;
