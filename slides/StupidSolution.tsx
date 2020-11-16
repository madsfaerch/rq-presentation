export function StupidSolution() {
  return (
    <div className="content">
      <h2>
        The typical solution involves redux, sagas, vuex, mobx, fluex, fractal,
        recoil, zustand or a mix
      </h2>
      <img className="mt-12 mb-6 px-3 py-6 rounded shadow-lg" src="/flow.jpg" />
      <div className="flex">
        <div className="mt-6">
          <p className="text-lg font-bold">Lots of boilerplate:</p>
          <ul className="pl-4 list-disc">
            <li>Stores</li>
            <li>Actions</li>
            <li>Sagas</li>
            <li>Types</li>
            <li>And a lot of code to maintain</li>
          </ul>
        </div>
        <img
          className="absolute right-0 top-0 mr-10 w-1/4"
          style={{ zIndex: -1 }}
          src="/files.png"
        />
      </div>
    </div>
  );
}
