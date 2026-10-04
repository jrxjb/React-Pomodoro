import {createContext, type Dispatch, type SetStateAction} from 'react'

interface valueDark{
    dark:boolean;
    setDark:Dispatch<SetStateAction<boolean>>;
}
const ThemeContext = createContext<valueDark>({
    dark:false,
    setDark:()=>{}
})

export default ThemeContext;