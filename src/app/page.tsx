import InputForm from "@/components/InputForm";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-3">
      <h1 className="text-[3rem] md:text-[7rem] lg:text-[10rem] select-none">
        WordWise
      </h1>
      <InputForm />
    </main>
  );
}
