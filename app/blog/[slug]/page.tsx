import PostDetail from "@/app/ui/postdetail";
import Link from "next/link";
import {
  ChevronDoubleLeftIcon
} from '@heroicons/react/24/outline';

export default function BlogDetail({ params }: { params: { slug: string }}) {
  const slug = params.slug;

  return (
    <>
      <main className="flex w-full overflow-x-hidden">
        <div className="w-full h-auto relative mx-8 my-16">
          <div className="w-full mb-8">
            <Link className="text-2xl flex gap-4 items-center hover:text-gray-500" href="/blog">
              <ChevronDoubleLeftIcon className="h-[20px] w-[20px]" /> Back
            </Link>
          </div>
          <PostDetail slug={slug} />
        </div>
      </main>
    </>
  );
}
