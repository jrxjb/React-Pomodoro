import useCountdown from './hooks/useCountdown'
import Pomodoro from './components/Pomodoro'
import './App.css'

function App() {

const {m,s,reiniciar,pausa,start,time}=useCountdown()

  return (
    <>
    <Pomodoro start={start} reiniciar={reiniciar}  pausa={pausa} time={time} m={m} s={s}/>
    </>
  )
}

export default App
