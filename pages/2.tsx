import { useEffect, useState } from "react";
import { Navigation } from "../components/navigation";
import { ListSpices } from "../components/spice-list";
import { Spice } from "../types/spice";
import { fetchSpices } from "../utilities/fetch";

type SpiceState = "idle" | "loading" | "error";

function Home() {
  const [spices, setSpices] = useState<Spice[] | undefined>();
  const [spiceState, setSpiceState] = useState<SpiceState>("idle");

  const isLoading = spiceState === "loading";

  async function getSpices() {
    try {
      setSpiceState("loading");
      const spices = await fetchSpices();
      setSpices(spices);
      setSpiceState("idle");
    } catch (error) {
      setSpiceState("error");
    }
  }

  useEffect(() => {
    getSpices();
  }, []);

  return (
    <>
      {isLoading && "The spices are coming..."}
      {spices && <ListSpices spices={spices} />}

      <Navigation prev="1" next="3" />
    </>
  );
}

export default Home;
