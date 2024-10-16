"use client"

import { useEffect, useState } from "react";
import { fetchArticleByID } from "@/app/lib/fetch";

interface DataPost {
  title: string;
  slug: string;
  subtitle: string;
  content: string;
  category_id: number;
  tags: string;
  author_id: string;
  created_at: string;
  category: DataCategory;
}

interface DataCategory {
  name: string;
}

const PostDetail = ({ slug }: { slug: string }) => {
    //const [loading, setLoading] = useState(true);
    const [article, setArticle] = useState<DataPost>({
      title: '',
      slug: '',
      subtitle: '',
      content: '',
      category_id: 0,
      tags: '',
      author_id: '',
      created_at: '',
      category: {
        name: ''
      }
    });
    const [tags, setTags] = useState([]);

	useEffect(() => {
        const fetchData = async () => {
          try {
            const fetchedData = await fetchArticleByID(slug);
            setArticle(fetchedData);
            setTags(fetchedData.tags.split(";"));
          } catch (err) {
            console.error('Failed to fetch article:', err);
          } finally {
            //setLoading(false);
          }
        }
    
        fetchData();
	}, [slug]);

    return (
      <div className="flex flex-col gap-4 lg:gap-6">
          <h1 className="text-4xl lg:text-6xl font-bold">{article.title}</h1>
          <div className="text-2xl lg:text-4xl">{article.subtitle}</div>
          <div className="flex flex-row gap-4">
            <div className="text-xl lg:text-2xl">{article.created_at}</div>
            <span>---</span>
            <div className="text-xl lg:text-2xl">{article.category.name}</div>
          </div>
          <div className="text-lg lg:text-xl my-4 flex flex-col gap-4 rich-text" dangerouslySetInnerHTML={{ __html: article.content }}></div>
          <div className="text-lg lg:text-xl font-bold flex flex-row flex-wrap gap-4">
            {tags?.map((tag: any) => (
              <div className="px-2 border border-gray-500 w-fit" key={tag.id}>{tag}</div>
            ))}
          </div>
      </div>
    );
};

export default PostDetail;
