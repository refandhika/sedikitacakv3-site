"use client"

import { useEffect, useState } from "react";
import { fetchProjectList } from "@/app/lib/fetch";
import Image from "next/image";

const ProjectList = () => {
    //const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

	useEffect(() => {
        const fetchData = async () => {
          try {
            const fetchedData = await fetchProjectList(1, 20, true);
            setProjects(fetchedData);
          } catch (err) {
            console.error('Failed to fetch projects:', err);
          } finally {
            //setLoading(false);
          }
        }
    
        fetchData();
	}, []);

    return (
        <>
            <div className="my-8 grid grid-cols-1 lg:grid-cols-3">
            {projects?.map((project: any) => (
                <div key={project.id} className="py-4 px-0 scale-100 hover:px-4 hover:shadow-xl hover:border hover:border-gray-900 hover:scale-110 hover:bg-[#FFDBB5] hover:relative hover:z-10 lg:w-fit transition-all">
                    <h2 className="text-2xl font-bold">{project.title}</h2>
                    <div className="text-xl">{project.content}</div>
                    <div className="my-2 flex flex-wrap gap-1">
                    {project.techs?.map((tech: any) => {
                      return (
                        <div key={tech.id} className="w-fit">
                          <Image 
                            className="w-[35px] h-[35px] object-contain grayscale"
                            src={process.env.NEXT_PUBLIC_API_URL + tech.icon}
                            alt={tech.title}
                          />
                        </div>
                      );
                    })}
                    </div>
                    <div className="my-2 flex flex-wrap gap-2">
                      {project.source && <a className="hoverable text-xl px-2 py-1 border border-gray-500 hover:bg-amber-500" target="_blank" href={project.source}>Source</a>}
                      {project.site && <a className="hoverable text-xl px-2 py-1 border border-gray-500 hover:bg-amber-500" target="_blank" href={project.site}>Site</a>}
                      {project.demo && <a className="hoverable text-xl px-2 py-1 border border-gray-500 hover:bg-amber-500" target="_blank" href={project.demo}>Demo</a>}
                    </div>
                </div>
            ))}
            </div>
            <div className="pagination"></div>
        </>
    );
};

export default ProjectList;
