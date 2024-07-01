import React from 'react'
import {createRoot} from "react-dom/client" 
import { MainNavigation } from "./navmenu/MainNavigation";

  (() => {
    const mountElement = document.querySelector('.nexus-nav')
    if (!mountElement) return
    const renderIn = document.createElement('div')
    mountElement.appendChild(renderIn)
  
    const root = createRoot(renderIn)
    console.log('f1irst Render')
    root.render(
      <div className="use-tailwind">  <div className="antialiased" style={{fontFamily: `Inter, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`}}><MainNavigation activePath=""></MainNavigation> </div></div>
    )
  })()

