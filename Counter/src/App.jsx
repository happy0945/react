import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Heading */}
      <header className="py-6 shadow-md bg-white">
        <h1 className="text-4xl font-bold text-center text-slate-800">
          Counter App
        </h1>
      </header>

      {/* Counter Section */}
      <div className="flex justify-center items-center h-[80vh]">
        <div className="bg-white p-10 rounded-3xl shadow-xl text-center w-[350px]">
          
          <h2 className="text-xl font-semibold text-gray-600 mb-4">
            Current Count
          </h2>

          <div className="text-7xl font-bold text-indigo-600 mb-8">
            {count}
          </div>

          <div className="flex justify-center gap-6">
              <button
              onClick={() => setCount((prev) => prev + 1)}
              className="text-2xl px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 active:scale-95 transition-all duration-200 shadow-md"
            >
              Increase
            </button>
            <button
              onClick={() => setCount((prev) => prev - 1)}
              className="px-6 py-3 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 active:scale-95 transition-all duration-200 shadow-md"
            >
              Decrease
            </button>

          
          </div>

          <button
            onClick={() => setCount(0)}
            className="mt-6 px-8 py-2 bg-slate-800 text-white rounded-xl hover:bg-slate-900 transition-all"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;