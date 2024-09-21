"use client"

import TypeIt from "typeit-react";

const TypeItHomeText = () => {
    return (
        
        <div className="w-full lg:w-2/3 py-8 lg:p-8">
            <TypeIt
                options={{
                    speed: 25,
                    startDelay: 3000,
                    html: true,
                    afterComplete: (instance: any) => {
                    instance.destroy()	
                    }
                }}>
                <h1 id="main-title" className="text-3xl font-extrabold mb-8">Full Stack Software Developer</h1>
                <p className="text-xl mb-4">I'm Refa, a full time software developer. Currently residing in Cibinong, Bogor, Indonesia (just south of Jakarta). Professionally i work with multiple language, but mostly Javascript and PHP. For now occasionally Rust and Java.</p>
                <p className="text-xl mb-4">I worked across multiple company in Indonesia. The most well know for you might be just Shopee. Been a Full Stack since the beginning and always a full stack at heart.</p>
                <p>PS: Be happy at least once a day!</p>
            </TypeIt>
        </div>
    );
};

export default TypeItHomeText;