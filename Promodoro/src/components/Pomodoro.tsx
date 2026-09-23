
interface pomodoro{
    start:()=>void;
    reiniciar:()=>void;
    pausa:()=>void;
    time:number;
    m:string;
    s:string;
}

export default function Pomodoro({start,reiniciar,pausa,time,m,s}:pomodoro){
    
    return<>
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
    {time}
    <p>pantalla</p>
    <div> {m}:{s}</div>
    
    </>
}