//?? Since Next.js renders on the server first, we need to apply the theme on the client side.??
"use client"; //??

import { useEffect } from "react"; //??
import { applyTheme } from "./themeToggle";

export function ThemeInitializer(){
    useEffect(() => {
        applyTheme(); 
    }, []);

    return null; //کامپوننت های ری‌اکت باید یچی برگردونن یا نال یا یه کامپوننت
}