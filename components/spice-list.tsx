import { Spice } from "../types/spice";

type SpiceItemProps = Spice;

function SpiceItem(props: SpiceItemProps) {
  return (
    <div className="flex items-center rounded-full text-sm font-bold text-gray-700 hover:text-gray-900 bg-gray-200 px-3 py-1 cursor-default">
      {props.name}
      <div
        className="ml-2 w-4 h-4 rounded-full"
        style={{ backgroundColor: props.color }}
      />
    </div>
  );
}

type SpiceListProps = {
  title?: string;
  spices: Spice[];
  filterFn?(spice: Spice): boolean;
};

export function ListSpices({
  spices,
  title,
  filterFn = () => true,
}: SpiceListProps) {
  return (
    <div className="mt-4">
      <h2 className="font-bold mb-2">{title || "Spices:"}</h2>
      <ul>
        {spices.filter(filterFn).map((spice) => {
          return (
            <li key={spice.id} className="inline-block mb-2 mr-2">
              <SpiceItem {...spice} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}