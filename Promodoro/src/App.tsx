import { useState,useEffect ,useRef} from 'react'

import './App.css'

function App() {
const ref = useRef(false)
const idRef = useRef<any>(null)
const [time,setTime] = useState<number>(60)
const [value,setValue]=useState<boolean>(false)

const stop = ():void=>{
       if (idRef.current) {
        clearInterval(idRef.current)
      }
      idRef.current=null
      setValue(false)
      setTime(0)
      ref.current=false
}

useEffect(()=>{





return 
},[value])

const pausa =():void=>{
   ref.current=false
     if (idRef.current) {
        clearInterval(idRef.current)
      }
}
const start=():void=>{
  if(ref.current)return
        ref.current=true
        idRef.current= setInterval(()=>{
        if(ref.current===false){
          return;
        }
        setTime(prev => prev - 1)
      },1000)


}

  return (
    <>
    <p>Promodoro</p>
    <button onClick={start}>
      Iniciar 
    </button>
      <button onClick={stop}>
   stop
    </button>
          <button onClick={pausa}>
   pausa
    </button>
    {time}
    </>
  )
}

export default App
