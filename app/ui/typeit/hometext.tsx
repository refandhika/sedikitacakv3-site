"use client"

import TypeIt from "typeit-react";
import { fetchSettingByParam } from "@/app/lib/fetch";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const TypeItHomeText = () => {
    const pathname = usePathname();
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const [delay, setDelay] = useState(3000);

    useEffect(() => {
        if (isFirstLoad) {
            setIsFirstLoad(false);
            setDelay(0);
        }
	}, [isFirstLoad, pathname]);

    return (
        
        <div className="w-full lg:w-2/3 py-8 px-0 lg:px-8 lg:py-0">
            <TypeIt
                as={"div"}
                options={{
                    speed: 25,
                    startDelay: delay,
                    html: true,
                    afterComplete: (instance: any) => {
                    instance.destroy()	
                    }
                }}>
                <h1 id="main-name" className="text-3xl font-extrabold mb-2">Refa Andhika Ryzarda Henesh</h1>
                <h2 id="main-title" className="text-2xl font-extrabold mb-4">Full Stack Software Developer</h2>
                <p className="text-xl mb-4">I'm Refa, a full time software developer. Currently residing in Cibinong, Bogor, Indonesia (just south of Jakarta). Professionally i work with multiple language, but mostly Javascript and PHP. For now occasionally Rust and Java.</p>
                <p className="text-xl mb-4">I worked across multiple company in Indonesia. The most well know for you might be just Shopee. Been a Full Stack since the beginning and always a full stack at heart.</p>
                <p>PS: Be happy at least once a day!</p>
            </TypeIt>
        </div>
    );
};

export default TypeItHomeText;