import AudioPlayer from "@/components/AudioPlayer";
import Image from "next/image";
import React from "react";
import NotFound from "@/../public/not-found.png";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

interface pageProps {
  params: {
    word: string;
  };
}

const Page: React.FC<pageProps> = async ({ params }) => {
  const { word } = params;
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );
  const data = await response.json();
  const wordInfo = data[0];

  console.log(wordInfo)

  if (!wordInfo) {
    return (
      <>
        <div className="w-fit mx-auto py-3 px-2 space-y-2">
          <Image
            src={NotFound}
            alt="Not Found"
            className="w-[80%] md:w-[60%] mx-auto"
          />
          <h1 className="text-blue-500 text-2xl font-bold text-center">
            {data.title}
          </h1>
          <p className="">{data.message}</p>
          <p className="">{data.resolution}</p>
          <div className="grid place-items-center">
            <Link
              href="/"
              className="flex items-center bg-blue-600 text-black text-lg font-semibold rounded px-2 py-1 space-x-1 mx-auto"
            >
              <MoveLeft />
              <span>Go Home</span>
            </Link>
          </div>
        </div>
      </>
    );
  }

  const audioUrl = wordInfo.phonetics[0].audio;

  return (
    <div className="w-fit mx-auto py-3 px-2">
      <div>
        <div className="flex items-center">
          <AudioPlayer audioUrl={audioUrl} />
          <h1 className="text-3xl">{word}</h1>
        </div>
        <p>{wordInfo.phonetic}</p>
        <ul>
          {wordInfo.meanings.map((meaning: any, index: number) => (
            <li key={index}>
              <p className="text-yellow-300 bg-gray-100/80 w-fit rounded px-1">
                {meaning.partOfSpeech}
              </p>
              <div className="ml-10">
                <p className="text-red-500 max-w-[600px]">
                  {meaning.definitions[0].definition}
                </p>
                <p className="text-blue-500 max-w-[600px]">
                  {meaning.definitions[0].example}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
