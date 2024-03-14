"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const InputForm = () => {
  const router = useRouter();
  const [word, setWord] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (word !== "") {
      router.push(`/entries/${word}`);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex rounded-xl lg:p-3 w-full lg:w-[70%]"
    >
      <div className="w-full flex justify-between bg-gray-700 rounded-xl p-1 lg:p-2">
        <input
          ref={inputRef}
          placeholder="Search for Engilish word meanings"
          type="text"
          className="w-full bg-transparent text-blue-500 text-base lg:text-xl focus:outline-none"
          onChange={(e) => setWord(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-base lg:text-lg font-medium rounded-lg px-2 lg:px-3 py-1 lg:py-2"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default InputForm;
