import HobbyList from "@/app/ui/hobbylist";

export default function Hobby() {
  return (
    <>
      <main className="flex w-full overflow-x-hidden">
        <div className="w-full h-auto relative mx-8 my-16">
            <h1 className="text-4xl font-bold">Funsies</h1>
            <HobbyList />
        </div>
      </main>
    </>
  );
}
