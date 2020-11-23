import { useQuery } from "react-query";
import { fetchSpices } from "./fetch";

export function useSpices() {
  return useQuery("spices", fetchSpices);
}
