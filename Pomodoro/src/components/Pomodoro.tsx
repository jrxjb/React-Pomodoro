import { useContext,useId, type FormEvent } from 'react'                
import ThemeContext from '../context/theme-context'
import './Pomodoro.css'

interface pomodoro{
    start:()=>void;
    reiniciar:()=>void;
    pausa:()=>void;
    handleInput:(e:FormEvent<HTMLFormElement>)=>void;
    setMinutosInput:(value:any)=>void;
    m:string;
    s:string;
    minutosInput:number;
}

export default function Pomodoro({start,reiniciar,pausa,m,s,handleInput,setMinutosInput,minutosInput}:pomodoro){
const { dark, setDark } = useContext(ThemeContext)
const idEnterValue = useId()

const sentInput=(e:any)=>{
setMinutosInput(e.target.value)
}
    return<>

      <div className={dark ? 'dark' : 'light'}>

        <header >
          <button onClick={() => setDark(v => !v)}>
                    {dark ? 'Modo claro' : 'Modo oscuro'}
          </button>
        </header>
        <div className='principal'>
        <p >Pomodoro Technique</p>
        <div className="timer"> {m}:{s}</div>
        <section className='buttons-controls'>
          <button onClick={start}>
            Start 
          </button>
          <button onClick={pausa}>
            Pausa
          </button>
          <button onClick={reiniciar}>
            Reset
          </button>
        </section>

        <form onSubmit={handleInput} >
            <label htmlFor={idEnterValue}>Set time (minutes) </label>
          <section>
            <input id={idEnterValue} value={minutosInput} onChange={sentInput} type="number" placeholder="15"/>
            <button type="submit" >Sent</button>
          </section>
      </form>
      </div>
    </div>
    </>
}
