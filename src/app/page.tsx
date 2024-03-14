import InputForm from "@/components/InputForm";
import Image from "next/image";
import Logo from "@/../public/dictionary-logo.png";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-2">
      <Image
        alt="Logo"
        src={Logo}
        width={256}
        height={256}
        className="w-24 md:w-28 h-24 md:h-28"
      />

      <h1 className="text-[3rem] md:text-[4rem] text-blue-600 lg:text-[7rem] select-none leading-none mb-3">
        WordWise
      </h1>
      <InputForm />
    </main>
  );
}
