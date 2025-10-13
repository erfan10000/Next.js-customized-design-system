import { ThemeToggleButton } from "../../components/molecules/ThemeToggleButton";
import { SearchInput } from "../../components/molecules/searchInput";

export default function Header(){
    return(
        <div className="flex items-center header=wrapper sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-14 items-center px-6 w-full">
                <div className="flex  me-2 h-8 w-8 items-center justify-center rounded-md border-1 border-b-3 text-primary-foreground dark:bg-accent">
                <span className="text-xs">💻</span>
                </div>
                <span className="text-lg font-semibold">Next.js Design System</span>
                <div className="grow"></div>
                <div className="flex  me-2 h-8 items-center justify-center rounded-md bg-primary  text-primary-foreground mr-3">
                    <SearchInput/>
                </div>
                <div className="flex  me-2 h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <ThemeToggleButton/>
                </div>

            </div>
            

        </div>
    );
}