import ProjectList from "@/app/ui/projectlist";

export default function Project() {
  return (
    <>
      <main className="mx-auto lg:mt-[75px] container flex w-full overflow-x-hidden">
        <div className="w-full h-auto relative mx-8 my-16">
            <h1 className="text-4xl font-bold">Project List</h1>
            <ProjectList />
        </div>
      </main>
    </>
  );
}
