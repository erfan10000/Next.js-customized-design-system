
"use client";

import { toggleTheme } from "@/app/Utilities/themeToggle";
import { InitButton } from "../atoms/Button";
import { MdOutlineNightsStay } from "react-icons/md";

export function ThemeToggleButton() {
    return(
     <InitButton
      onClick={toggleTheme}
      type="outline"
      className="bg-transparent border border-white text-white h-9"
    >
      <MdOutlineNightsStay />
    </InitButton>
    );
}
