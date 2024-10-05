import ArticleList from "@/app/ui/articlelist";

export default function Blog() {
  return (
    <>
      <main className="mx-auto lg:mt-[75px] container flex w-full overflow-x-hidden">
        <div className="w-full h-auto relative mx-8 my-16">
            <h1 className="text-3xl lg:text-5xl font-bold">Developer&apos;s Log</h1>
            <ArticleList />
        </div>
      </main>
    </>
  );
}
