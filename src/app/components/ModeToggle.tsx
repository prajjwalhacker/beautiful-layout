"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  console.log("Theme");
  console.log(theme);

  return (
        <div className="mode-toggle">
          {theme === 'light' ? <Moon className="toggle-moon" onClick={() => { setTheme('dark'); }}/>
          : <Sun className="toggle-sun" style={{ color: "black" }} onClick={()=>{ setTheme('light'); }}/> }
        </div>
  )
}
