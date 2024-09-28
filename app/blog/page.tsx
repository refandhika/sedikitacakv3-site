import ArticleList from "@/app/ui/articlelist";

export default function Blog() {
  return (
    <>
      <main className="flex w-full overflow-x-hidden">
        <div className="w-full h-auto relative mx-8 my-16">
            <h1 className="text-4xl font-bold">Developer's Log</h1>
            <ArticleList />
        </div>
      </main>
    </>
  );
}
