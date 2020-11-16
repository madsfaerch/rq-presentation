import { useQuery } from "react-query";
import { fetchBasket } from "../utilities/fetch";

function Basket() {
  const basketItems = useQuery("basket", fetchBasket);
  const basketTotalItems = basketItems.data?.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  return <div>Basket counter: {basketTotalItems}</div>;
}

export function Shop() {
  return (
    <div className="rounded-lg bg-gray-100 w-full h-64">
      <div className="w-full flex bg-gray-200 justify-between">
        <h1>Ye olde spice shoppe</h1>
        <Basket />
      </div>
    </div>
  );
}
