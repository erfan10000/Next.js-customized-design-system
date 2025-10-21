import { Accordion } from "../molecules/accordion";
import { FaPalette } from "react-icons/fa6";


export function SideMenu() {
    return(
        <div className="sidemenu-wrap border-r-1 border-gray-300 h-full bg-white dark:bg-gray-900 fixed w-70">
            <Accordion title="Elements" content="Colors" type="link" icon={<FaPalette/>}/>
        </div>
    );
}