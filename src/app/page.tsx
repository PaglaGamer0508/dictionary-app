import InputForm from "@/components/InputForm";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-2">
      <h1 className="text-[4rem] md:text-[7rem] text-blue-600 lg:text-[10rem] select-none">
        WordWise
      </h1>
      <InputForm />
    </main>
  );
}
