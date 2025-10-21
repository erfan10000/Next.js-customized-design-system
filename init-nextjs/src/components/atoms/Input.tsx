'use client';
import { clsx } from "clsx";

type InputProps = {
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    placeholder?: string;
    type?: "text" | "password" | "email" | "number";
    value?: string;
    size?: "full" | "medium";
    imgSrc?:string;
}

export function InitInput({
    className,
    imgSrc,
    onChange,
    disabled = false,
    placeholder = "Enter text",
    type = "text",
    value,
    size = "medium",
}: InputProps) {
    const baseStyle = 'focus:ring-white p-2 rounded-md flex items-center justify-center text-sm transition-all duration-3 cursor-text disabled:cursor-not-allowed border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 placeholder-foreground dark:placeholder-gray-400 dark:text-white';
    const inputSize = {
        full: 'w-full',
        medium: 'w-auto',
    };

    return(
        <div className="initinput-wrapper relative">
            {imgSrc && <img src={imgSrc} alt="input-img" className="w-5 h-5 mr-2 absolute" />}
            <input
                className={clsx(
                    baseStyle,
                    inputSize[size],
                    className,
                )}
                onChange={onChange}
                disabled={disabled}
                placeholder={placeholder}
                type={type}
                value={value}
            />
        </div>
    );
}