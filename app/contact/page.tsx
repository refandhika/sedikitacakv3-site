import ContactForm from "@/app/ui/contactform";

export default function Contact() {
  return (
    <>
      <main className="mx-auto lg:mt-[75px] container flex w-full overflow-x-hidden">
        <div className="w-full h-auto relative mx-8 my-16">
            <h1 className="text-4xl font-bold">Connect!</h1>
            <div className="my-4 text-xl">If you like to contact me for anythings just drop me your queries here. I&apos;ll be in touch soon.</div>
            <ContactForm />
        </div>
      </main>
    </>
  );
}
