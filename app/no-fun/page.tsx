import RickRoll from "@/app/ui/rickroll";

export default function NoFun() {
    return (
        <>
        <main className="flex w-full overflow-x-hidden">
            <div className="w-screen h-screen relative">
                <RickRoll />
            </div>
        </main>
        </>
    );
}
