"use client"

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const HomeMainImage = () => {
    const pathname = usePathname();
    const [loading, setLoading] = useState(true);
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    
    useEffect(() => {
        if (isFirstLoad) {
            const timer = setTimeout(() => {
                setLoading(false);
            }, 3000);

            setIsFirstLoad(false)
            return () => clearTimeout(timer);
        } else {
            setLoading(false);
        }
	}, [isFirstLoad, pathname]);

    return (
        <div className={`${loading ? "opacity-0" : "opacity-1" } w-full lg:w-1/3 transition-all duration-500`}>
            <img
                src="https://api.sedikitacak.com/assets/IMG-20240429-WA0012.jpg"
                height={350}
                width={350}
                alt="refa profile"
                className={`${loading ? "grayscale" : "grayscale-0" } grayscale transition-all duration-[3000ms]`}
            />
        </div>
    );
};

export default HomeMainImage;
