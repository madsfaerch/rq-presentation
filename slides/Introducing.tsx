import React from "react";

export function Introducing() {
  return (
    <div className="pointer-events-none w-screen h-screen fixed top-0 left-0 flex flex-col justify-center items-center ">
      <div>
        <h3>New server state management libraries</h3>
        <h1 className="text-3xl font-black">react-query</h1>
        <h1 className="text-3xl font-bold">swr</h1>
        <h1 className="text-3xl font-bold">apollo(-ish)</h1>
      </div>
    </div>
  );
}
