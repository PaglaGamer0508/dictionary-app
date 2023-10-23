"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const InputForm = () => {
  const router = useRouter();
  const [word, setWord] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (word !== "") {
      router.push(`/entries/${word}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex rounded-xl p-3 w-[80%]">
      <div className="w-full flex bg-gray-700 rounded-xl p-3 space-x-2">
        <input
          placeholder="Search for Engilish word meanings"
          type="text"
          className="w-72 bg-transparent text-blue-500 focus:outline-none"
          onChange={(e) => setWord(e.target.value)}
        />
        <button
          type="submit"
          className="bg-red-500 text-base font-medium rounded px-2 py-1"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default InputForm;
