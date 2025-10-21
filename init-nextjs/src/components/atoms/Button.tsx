'use client';
import { ReactNode } from "react";
import { clsx } from "clsx";

type ButtonProps = {
    children?: ReactNode;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    type?: "primary" | "secondary" | "outline" | "icon";
    size?: "full" | "medium" | "icon";
    icon?: ReactNode;
    loading?: boolean;
    imgSrc?:string;
}



export function InitButton({
    children,
    className,
    imgSrc,
    onClick,
    disabled = false,
    type = "primary",
    size = "medium",
    icon,
    loading = false,
}: ButtonProps) {
    const baseStyle = 'duration-300 transition-all p-2 rounded-md flex items-center justify-center text-sm transition-all duration-3 cursor-pointer disabled:cursor-not-allowed';
    const buttonType = {
        primary: 'bg-foreground text-white font hover:bg-blue-800 dark:bg-blue-900 dark:hover:bg-blue-950',
        secondary: 'bg-background text-black dark:text-white hover:bg-gray-300 dark:bg-gray-700  dark:hover:bg-gray-600',
        outline: 'border border-gray-300 text-gray-700  hover:bg-unset dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800',
        icon: 'bg-transparent text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800',
    };
    
    const buttonSize = {
        full: 'w-full',
        medium: 'w-auto',
        icon: 'w-10 h-10',
    };

    return(
        <button
            className={clsx(
                baseStyle,
                buttonSize[size],
                buttonType[type],
                className,
                loading && "opacity-60 cursor-not-allowed"
            )}
            onClick={onClick}
            disabled={disabled|| loading}
        >
                {loading ? (
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                <>
                {imgSrc && <img src={imgSrc} alt="button-img" className="w-5 h-5 mr-2" />}
                {icon && <span className="mr-2 text-xl">{icon}</span>}
                {children}
                </>
            )}
           
        </button>
    );

}  

