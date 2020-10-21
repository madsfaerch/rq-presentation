import { Spice } from "../types/spice";
import { sleep } from "./misc";

type RequestInit<T> = {
  method?: "POST" | "GET" | "DELETE";
  body?: T;
};

export async function request<T = undefined>(
  endpoint: string,
  init?: RequestInit<T>
) {
  try {
    await sleep(1000);

    let response = await fetch(`http://localhost:3001/${endpoint}`, {
      method: init?.method || "POST",
      body: init?.body ? JSON.stringify(init.body) : undefined,
      headers: { "Content-Type": "application/json" },
    });

    response = await response.json();

    return response as unknown;
  } catch (error) {
    throw error;
  }
}

export async function fetchSpices() {
  return (await request("spices", { method: "GET" })) as Spice[];
}

type FetchSpiceParams = { query: string };

export async function searchSpices(_key: string, { query }: FetchSpiceParams) {
  return (await request(`spices?q=${query}`, { method: "GET" })) as Spice[];
}

type AddSpiceParams = Omit<Spice, "id">;

export async function addSpice(spice: Omit<AddSpiceParams, "inStock">) {
  return (await request<AddSpiceParams>("spices", {
    method: "POST",
    body: { ...spice, inStock: false },
  })) as Spice["id"];
}

type DeleteSpiceParams = Spice["id"];

export async function deleteSpice(id: DeleteSpiceParams) {
  return await request<DeleteSpiceParams>(`spices/${id}`, { method: "DELETE" });
}
