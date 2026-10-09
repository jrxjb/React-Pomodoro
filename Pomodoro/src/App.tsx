import useCountdown from './hooks/useCountdown'
import Pomodoro from './components/Pomodoro'
import './App.css'
import ThemeContext from './context/theme-context'
import { useState} from 'react'
function App() {

const {percent,m,s,reiniciar,pausa,start,handleInput,setMinutosInput,minutosInput,time}=useCountdown()
const [dark,setDark]= useState<boolean>(false)
  return (
    < ThemeContext.Provider value={{ dark, setDark }}>  
    <Pomodoro start={start} reiniciar={reiniciar}
      pausa={pausa} m={m} s={s} 
      handleInput={handleInput}
      setMinutosInput={setMinutosInput}
      minutosInput={minutosInput}
      time={time} 
      percent={percent}
      />

    </ ThemeContext.Provider>
    
  )
}

export default App
