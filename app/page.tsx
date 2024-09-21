import SplashScreen from "@/app/ui/splashscreen";
import NavLinks from "@/app/ui/navlinks";
import TypeItHomeText from "@/app/ui/typeit/hometext";
import HomeMainImage from "@/app/ui/images/homeimage";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <main className="flex w-full overflow-x-hidden">
        <div className="w-screen h-screen relative">
          <div className="flex flex-col lg:flex-row p-6 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full lg:w-[1000px] lg:h-auto">
              <HomeMainImage />
              <TypeItHomeText />
          </div>
          <NavLinks />
        </div>
      </main>
    </>
  );
}
