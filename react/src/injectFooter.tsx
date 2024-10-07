
import {createRoot} from "react-dom/client" 
import { DocsFooter } from '@cqcl/quantinuum-ui'

(() => {
    const mountElement = document.querySelector('.nexus-footer')
    if (!mountElement) return
    const renderIn = document.createElement('div')
    renderIn.style.padding = '0'
    renderIn.style.margin = '0'
    mountElement.appendChild(renderIn)

    const root = createRoot(renderIn)

    root.render(
        <div className="use-tailwind">
            <div className="antialiased" style={{fontFamily: `Inter, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`}}><DocsFooter/> </div></div>
    )
})()
