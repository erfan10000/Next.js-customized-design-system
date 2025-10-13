export function toggleTheme(){
    const htmlElement = document.documentElement;
    const isDark = htmlElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light")
}

export function applyTheme(){
    const savedTheme = localStorage.getItem("theme");
    if(savedTheme === "dark"){
        document.documentElement.classList.add("dark");
    
    } else{
        document.documentElement.classList.remove("dark");
    }
}