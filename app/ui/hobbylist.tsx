"use client"

import { useEffect, useState } from "react";
import { fetchHobbyList } from "@/app/lib/fetch";

const HobbyList = () => {
    const [loading, setLoading] = useState(true);
    const [hobbies, setHobbies] = useState([]);

	useEffect(() => {
        const fetchData = async () => {
          try {
            const fetchedData = await fetchHobbyList(1, 20, "");
            setHobbies(fetchedData);
          } catch (err) {
            console.error('Failed to fetch hobbies:', err);
          } finally {
            setLoading(false);
          }
        }
    
        fetchData();
	}, []);

    return (
        <>
            <div className="my-8">
            {hobbies?.map((hobby: any) => (
                <div key={hobby.id}>
                    <img src={process.env.NEXT_PUBLIC_API_URL + hobby.image} />
                    <h2 className="text-2xl font-bold">{hobby.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: hobby.content }}></div>
                </div>
            ))}
            </div>
            <div className="pagination"></div>
        </>
    );
};

export default HobbyList;
