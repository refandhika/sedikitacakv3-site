"use client"

import { useState, FormEvent, ChangeEvent, FocusEvent } from "react";
import { sendContactMessage } from "@/app/lib/fetch";
import { useRouter } from 'next/navigation';

interface FormDataContact {
    subject: string;
    name: string;
    email: string;
    content: string;
}

const ContactForm = () => {
    const router = useRouter();
    const [formData, setFormData] = useState<FormDataContact>({
      subject: '',
      name: '',
      email: '',
      content: ''
    });
    const [errors, setErrors] = useState({
        subject: false,
        name: false,
        email: false,
        content: false
    })
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateContent = (e: FocusEvent<HTMLInputElement> | FocusEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        const nextSibling = e.target.nextSibling as HTMLElement | null;
        let isValid = false;

        if(value != "") {
            isValid = true; 
        } else {
            isValid = false;
        }

        if(name == "name") {
            const isValidName = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(value);
            if(isValidName) {
                isValid = true; 
            } else {
                isValid = false;
            }
        } else if(name == "email") {
            const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            if(isEmail) {
                isValid = true; 
            } else {
                isValid = false;
            }
        }
                
        const isScriptInjection = /<\s*script.*?>.*?<\s*\/\s*script\s*>/gi.test(value) || /<[^>]+>/gi.test(value);
        if(isScriptInjection) {
            router.push("/no-fun")
        }

        if(isValid){
            nextSibling?.classList.add("hidden");
            nextSibling?.classList.remove("block");
        } else {
            nextSibling?.classList.add("block");
            nextSibling?.classList.remove("hidden");
        }
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let isSafeData = true;
        const newErrors = {
            subject: false,
            name: false,
            email: false,
            content: false
        }

        if(!formData.name.trim()) {
            isSafeData = false;
            newErrors.name = true; 
        }
        const isValidName = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(formData.name.trim());
        if(!isValidName) {
            isSafeData = false;
            newErrors.name = true;
        }
        const isScriptInjectionName = /<\s*script.*?>.*?<\s*\/\s*script\s*>/gi.test(formData.name.trim()) || /<[^>]+>/gi.test(formData.name.trim());
        if(isScriptInjectionName) {
            isSafeData = false;
            router.push("/no-fun")
        }

        if(!formData.email.trim()) {
            isSafeData = false;
            newErrors.email = true;
        }
        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim());
        if(!isEmail) {
            isSafeData = false;
            newErrors.email = true; 
        }
        const isScriptInjectionEmail = /<\s*script.*?>.*?<\s*\/\s*script\s*>/gi.test(formData.email.trim()) || /<[^>]+>/gi.test(formData.email.trim());
        if(isScriptInjectionEmail) {
            isSafeData = false;
            router.push("/no-fun")
        }

        if(!formData.subject.trim()) {
            isSafeData = false;
            newErrors.subject = true;
        }
        const isScriptInjectionSubject = /<\s*script.*?>.*?<\s*\/\s*script\s*>/gi.test(formData.subject.trim()) || /<[^>]+>/gi.test(formData.subject.trim());
        if(isScriptInjectionSubject) {
            isSafeData = false;
            router.push("/no-fun")
        }
        
        if(!formData.content.trim()) {
            isSafeData = false;
            newErrors.content = true;
        }
        const isScriptInjectionContent = /<\s*script.*?>.*?<\s*\/\s*script\s*>/gi.test(formData.content.trim()) || /<[^>]+>/gi.test(formData.content.trim());
        if(isScriptInjectionContent) {
            isSafeData = false;
            router.push("/no-fun")
        }

        if(isSafeData){
            setLoading(true);
            try {
                const sendResponse = await sendContactMessage(formData);
                setNotification(true);
                const timer = setTimeout(() =>{
                    setNotification(false);
                }, 3000);
            } catch (err) {
                console.error('Failed to send contact mail:', err);
            } finally {
                setLoading(false);
            }
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 text-xl">
                <label className="font-bold">Name</label>
                <input
                    className="bg-amber-200 h-[40px] px-4 py-2"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={validateContent}
                />
                <span className={`${errors.name ? "block" : "hidden"} text-gray-500`}>Please insert a valid name.</span>
            </div>
            <div className="flex flex-col gap-2 text-xl">
                <label className="font-bold">Email</label>
                <input
                    className="bg-amber-200 h-[40px] px-4 py-2"
                    type="text"
                    name="email"
                    onChange={handleChange}
                    onBlur={validateContent}
                />
                <span className={`${errors.email ? "block" : "hidden"} text-gray-500`}>Please insert a valid email.</span>
            </div>
            <div className="flex flex-col gap-2 text-xl">
                <label className="font-bold">Subject</label>
                <input
                    className="bg-amber-200 h-[40px] px-4 py-2"
                    type="text"
                    name="subject"
                    onChange={handleChange}
                    onBlur={validateContent}
                />
                <span className={`${errors.subject ? "block" : "hidden"} text-gray-500`}>Please insert a valid subject.</span>
            </div>
            <div className="flex flex-col gap-2 text-xl">
                <label className="font-bold">Message</label>
                <textarea
                    className="bg-amber-200 px-4 py-2"
                    name="content"
                    rows={6}
                    onChange={handleChange}
                    onBlur={validateContent}
                />
                <span className={`${errors.content ? "block" : "hidden"} text-gray-500`}>Please insert a valid message.</span>
            </div>
            <div className="my-4 flex flex-row-reverse">
                <input className="hoverable w-fit px-8 py-4 border border-gray-500 text-2xl cursor-pointer hover:bg-amber-200" type="submit" content="Submit"/>
            </div>
            <div className={`${notification ? "visible opacity-1" : "invisible opacity-0"} text-center text-2xl transition-all`}>Your message is sent!</div>
        </form>
      );
}

export default ContactForm;