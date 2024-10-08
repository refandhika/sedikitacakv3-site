"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { fetchSettingByParam } from "@/app/lib/fetch";

interface SocialLink {
  value: string;
}

const SocialLinks = () => {
    const pathname = usePathname();
    const [loading, setLoading] = useState([true,true,true,true,true]);
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const [linkedin, setLinkedin] = useState<SocialLink>({
      value: ""
    });
    const [github, setGithub] = useState<SocialLink>({
      value: ""
    });
    const [twitter, setTwitter] = useState<SocialLink>({
      value: ""
    });

    useEffect(() => {
          const fetchLinkedin = async () => {
            try {
              const dataLinkedin = await fetchSettingByParam("main-linkedin");
              setLinkedin({
                value: dataLinkedin.value
              });
            } catch (err) {
              console.error('Failed to fetch param:', err);
            } finally {
              //setLoading(false);
            }
          }
          const fetchGithub = async () => {
            try {
              const dataGithub = await fetchSettingByParam("main-github");
              setGithub({
                value: dataGithub.value
              });
            } catch (err) {
              console.error('Failed to fetch param:', err);
            } finally {
              //setLoading(false);
            }
          }
          const fetchTwitter = async () => {
            try {
              const dataTwitter = await fetchSettingByParam("main-xtwitter");
              setTwitter({
                value: dataTwitter.value
              });
            } catch (err) {
              console.error('Failed to fetch param:', err);
            } finally {
              //setLoading(false);
            }
          }

          if (isFirstLoad) {
              fetchLinkedin();
              fetchGithub();
              fetchTwitter();
              loading.forEach((_, index) => {
                  const timer = setTimeout(() => {
                      setLoading((prevLoading) => {
                          const newLoading = [...prevLoading];
                          newLoading[index] = false;
                          return newLoading;
                      });
                  }, 6000 + (500 * index));

                  return () => clearTimeout(timer);
              });
              setIsFirstLoad(false)
          }
    }, [isFirstLoad, pathname, loading]);

    return (
        <nav className={`flex flex-row lg:flex-col gap-0 lg:gap-6 text-2xl transition-all duration-500`}>
            <Link href={linkedin.value ?? "#"} className={`${loading[0] ? "opacity-0" : "opacity-1" } flex flex-row-reverse lg:flex-col items-center group transition-all duration-500`}>
              <span className={`hoverable p-4 w-[100px] cursor-pointer`}>
                <FontAwesomeIcon className="hoverable w-[35px] h-[35px]" icon={faLinkedin} />
              </span>
            </Link>
            <Link href={github.value ?? "#"} className={`${loading[1] ? "opacity-0" : "opacity-1" } flex flex-row-reverse lg:flex-col items-center group transition-all duration-500`}>
              <span className={`hoverable p-4 w-[100px] cursor-pointer`}>
                <FontAwesomeIcon className="hoverable w-[35px] h-[35px]" icon={faGithub} />
              </span>
            </Link>
            <Link href={twitter.value ?? "#"} className={`${loading[2] ? "opacity-0" : "opacity-1" } flex flex-row-reverse lg:flex-col items-center group transition-all duration-500`}>
              <span className={`hoverable p-4 w-[100px] cursor-pointer`}>
                <FontAwesomeIcon className="hoverable w-[35px] h-[35px]" icon={faXTwitter} />
              </span>
            </Link>
        </nav>
    );
};

export default SocialLinks;
