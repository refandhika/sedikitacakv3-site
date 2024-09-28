"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchBlogList } from "@/app/lib/fetch";

const ArticleList = () => {
    const [loading, setLoading] = useState(true);
    const [articles, setArticles] = useState([]);

	useEffect(() => {
        const fetchData = async () => {
          try {
            const fetchedData = await fetchBlogList(1, 20, "", "");
            setArticles(fetchedData);
          } catch (err) {
            console.error('Failed to fetch articles:', err);
          } finally {
            setLoading(false);
          }
        }
    
        fetchData();
	}, []);

    return (
        <>
            <div className="my-8">
            {articles?.map((article: any) => (
                <article key={article.id}>
                    <Link className="hover:text-gray-500" href={`/blog/${article.slug}`}>
                        <h2 className="text-2xl font-bold">{article.title}</h2>
                        <div>{article.created_at}</div>
                    </Link>
                </article>
            ))}
            </div>
            <div className="pagination"></div>
        </>
    );
};

export default ArticleList;
