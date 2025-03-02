import { useState } from "react";

export default function Search({ onSearch }) {
  const [query, setQuery] = useState("");

  return (
    <div className="w-full max-w-sm min-w-[200px]">
      <div className="flex justify-center mt-10 font-mono text-4xl font-bold text-white">
        <h2>Keyword Search</h2>
      </div>
      <input
        className="w-full bg-transparent mt-8 mb-8 placeholder:text-slate-400 text-white 
                   text-sm border border-slate-200 rounded-md px-3 py-2 
                   transition duration-300 ease focus:outline-none 
                   focus:border-slate-400 hover:border-slate-300 shadow-sm 
                   focus:shadow font-mono"
        placeholder="Type here..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          onSearch(e.target.value); // Update Home component state
        }}
      />
    </div>
  );
}
