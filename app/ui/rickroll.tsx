"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const RickRoll = () => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        }, 3000)

        return () => clearTimeout(timer);
    }, [router])

    return (
        <>
            <div className="flex flex-col lg:flex-row px-8 py-16 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full lg:w-[1000px] lg:h-auto items-center text-center text-xl lg:text-4xl">
                Man don't be such a party pooper, i'm just a mere code slave. :(
            </div>
        </>
    )
}

export default RickRoll;