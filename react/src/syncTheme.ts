import { getTheme, subscribeToTheme } from '@quantinuum/quantinuum-ui'
(() =>  {
    document.body.setAttribute("data-theme",  getTheme().isDark ? "dark" : 'light') 
    subscribeToTheme(({isDark}) => {
        document.body.setAttribute("data-theme",  isDark ? "dark" : 'light') 
    })
})()
