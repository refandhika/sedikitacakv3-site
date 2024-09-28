export default function Contact() {
  return (
    <>
      <main className="flex w-full overflow-x-hidden">
        <div className="w-full h-auto relative mx-8 my-16">
            <h1 className="text-4xl font-bold">Connect!</h1>
            <div className="my-4 text-xl">If you like to contact me for anythings just drop me your mail and queries here. I'll be in touch soon.</div>
            <form className="w-full">
              <div className="flex flex-col gap-2 text-xl">
                <label className="font-bold">Email</label>
                <input className="bg-amber-200 h-[40px] px-4 py-2" type="text" name="email"/>
              </div>
              <div className="flex flex-col gap-2 text-xl my-4">
                <label className="font-bold">Message</label>
                <textarea className="bg-amber-200 px-4 py-2" name="message" rows={6}/>
              </div>
              <div className="my-4 flex flex-row-reverse">
                <input className="w-fit px-2 border border-gray-500 text-2xl" type="submit" content="Submit"/>
              </div>
            </form>
        </div>
      </main>
    </>
  );
}
