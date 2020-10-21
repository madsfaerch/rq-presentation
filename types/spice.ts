export type Spice = {
  id: number;
  name: string;
  color: SpiceColor;
  inStock: boolean;
};

export enum SpiceColorEnum {
  black = "black",
  yellow = "yellow",
  brown = "brown",
  red = "red",
  white = "white",
  orange = "orange",
  green = "green",
}

export type SpiceColor = keyof typeof SpiceColorEnum;
