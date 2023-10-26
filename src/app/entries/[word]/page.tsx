import NotFound from "@/../public/not-found.png";
import AudioPlayer from "@/components/AudioPlayer";
import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function generateMetadata({ params }: { params: { word: string } }) {
  return {
    title: `${params.word} | WordWise`,
  };
}

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

  const audioUrl = wordInfo.phonetics[0]?.audio;
  const sourceUrl = wordInfo.sourceUrls[0];

  return (
    <div className="w-fit mx-auto py-3 px-2">
      <div className="absolute left-4 lg:left-32 w-fit h-fit rounded-full p-1 active:scale-90 transition-transform duration-75">
        <Link href="/">
          <MoveLeft className="h-8 w-8" />
        </Link>
      </div>
      <div className="pt-16">
        <div className="flex items-center pb-3">
          <AudioPlayer audioUrl={audioUrl} className="mr-3" />
          <h1 className="text-3xl">{word}</h1>
        </div>
        <p className="text-slate-200">{wordInfo.phonetic}</p>
        <ul>
          {wordInfo.meanings.map((meaning: any, index: number) => (
            <li key={index}>
              <p className="text-slate-400 text-xl font-semibold rounded my-2">
                {meaning.partOfSpeech}
              </p>
              {meaning.definitions.map((definition: any, index: number) => (
                <div
                  className="max-w-[650px] mt-2 ml-3 lg:ml-6 bg-slate-900 p-2 lg:px-4 lg:py-3 rounded-lg"
                  key={index}
                >
                  <p className="text-blue-500 text-lg">
                    {definition.definition}
                  </p>
                  {definition.example && (
                    <p className="flex text-slate-300 mt-2">
                      <span className="text-slate-400">example</span>
                      <span className="pl-3">{definition.example}</span>
                    </p>
                  )}
                </div>
              ))}
            </li>
          ))}
        </ul>
      </div>
      {/* Source url */}
      <div className="mt-4">
        <Link
          href={sourceUrl}
          target="_blank"
          className="flex items-center gap-x-1 hover:gap-x-3 w-28 bg-blue-600 hover:bg-blue-700 active:scale-90 transition-all duration-100 text-lg rounded-lg px-3 py-1 mx-auto"
        >
          <span>Source</span>
          <MoveRight />
        </Link>
      </div>
    </div>
  );
};

export default Page;
