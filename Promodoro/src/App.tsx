import useCountdown from './hooks/useCountdown'
import Pomodoro from './components/Pomodoro'
import './App.css'

function App() {

const {m,s,reiniciar,pausa,start}=useCountdown()

  return (
    <>
    <Pomodoro start={start} reiniciar={reiniciar}  pausa={pausa} m={m} s={s}/>
    </>
  )
}

export default App
