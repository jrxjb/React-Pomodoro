import { useContext,useId, type FormEvent } from 'react'                
import ThemeContext from '../context/theme-context'


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
      <p>Pomodoro</p>
      <button onClick={start}>
        Iniciar 
      </button>
        <button onClick={reiniciar}>
    Reiniciar
      </button>
            <button onClick={pausa}>
    pausa
      </button>
      <p>pantalla</p>
      <div> {m}:{s}</div>
      <form onSubmit={handleInput} >
        <label htmlFor={idEnterValue}>  ingresa el valor  </label>
        <input id={idEnterValue} value={minutosInput} onChange={sentInput} type="number" placeholder="15"/>
        <button type="submit" >Insertar Valor</button>
     </form>


      <button onClick={() => setDark(v => !v)}>
                {dark ? 'Modo claro' : 'Modo oscuro'}
      </button>
    </div>
    </>
}
