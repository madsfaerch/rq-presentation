import { Spice } from "../types/spice";

type RequestInit<T> = {
  method?: "POST" | "GET" | "DELETE" | "PUT" | "PATCH";
  body?: T;
};

export async function request<T = undefined>(
  endpoint: string,
  init?: RequestInit<T>
) {
  try {
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

export async function fetchSpicesByColor(_key: string, color: Spice["color"]) {
  return (await request(`spices?color=${color}`, { method: "GET" })) as Spice[];
}

export async function fetchSpice(_key: string, id: Spice["id"]) {
  return (await request(`spices/${id}`, { method: "GET" })) as Spice;
}

type SearchSpicesParams = { query: string };

export async function searchSpices(
  _key: string,
  { query }: SearchSpicesParams
) {
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

type User = {
  name: string;
  favoriteSpiceColor: Spice["color"];
};

export async function getUser() {
  return (await request("profile", { method: "GET" })) as User;
}

export async function updateUser(user: User) {
  return await request("profile", { method: "PATCH", body: user });
}

type Basket = {
  items: Array<{
    itemId: number;
    quantity: number;
  }>;
};

export async function fetchBasket() {
  return (await request("basket", { method: "GET" })) as Basket;
}
