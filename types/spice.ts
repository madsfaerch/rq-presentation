export type Spice = {
  id: number;
  name: string;
  color: SpiceColor;
};

export type SpiceColor =
  | "black"
  | "yellow"
  | "brown"
  | "red"
  | "white"
  | "orange";
