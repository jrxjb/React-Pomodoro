import {createContext,useContext} from 'react'

const ThemeContext = createContext({
    dark:false,
    setDark:()=>{}
})
