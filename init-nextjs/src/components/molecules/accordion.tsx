'use client';
import { InitButton } from "../atoms/Button";
import { FaAngleDown } from "react-icons/fa6";
import clsx from "clsx";
import { useState } from "react";


type AccordionProps = {
    type: "text" | "link";
    title: string;
    content: string;
    icon?: React.ReactNode;

}


export function Accordion({type,title, content,icon}: AccordionProps ){

    const [isClicked, setIsClicked] = useState(false);
    
    const accordionClicked = () => {
        setIsClicked(prev => !prev);
    };

    return(
        <div className="accordion-wrap">
        <div onClick={accordionClicked} className="accordion-wrap flex justify-between items-center py-2 px-3 transition-all cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800">
            <div className="accordion-title flex items-center text-gray-700 accordion-wrap-hover:text-black dark:text-white text-sm font-black">
                {icon && <span className="mr-2 text-xl">{icon}</span>}
                {title}
            </div>
            <InitButton  type="icon" size="icon" className="hover:bg-transparent">
                <FaAngleDown className={clsx({"rotate 180":isClicked})}/>
            </InitButton>
        </div>

        {type === "text" && isClicked && <div className="accordion-content text-gray-600 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 px-3 ps-5 py-3 text-sm">{content}</div>}
        {type === "link" && isClicked && <div className="accordion-content text-gray-700 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 px-3 ps-5 py-3 text-sm cursor-pointer hover:bg-gray-200 transition-all align-middle border-l-2 border-l-blue-500"><a href={content} target="_blank" rel="noreferrer">{content}</a></div>}
        </div>
         
    );
}