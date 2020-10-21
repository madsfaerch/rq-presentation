import { Navigation } from "../components/navigation";
import { ListSpices } from "../components/spice-list";
import { useQuery } from "react-query";
import { fetchSpices } from "../utilities/fetch";

function Home() {
  const spices = useQuery("spices", fetchSpices);

  return (
    <>
      {spices.isLoading && "The spices are coming..."}
      {spices.data && <ListSpices spices={spices.data} />}
      <Navigation prev="2" next="4" />
    </>
  );
}

export default Home;
