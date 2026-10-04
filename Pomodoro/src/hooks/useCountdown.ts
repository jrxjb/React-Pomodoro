import { useState,useRef,useMemo,type FormEvent ,useEffect} from 'react'



export default function useCountdown(){
const ref = useRef(false)
const idRef = useRef<any>(null)
const [time,setTime] = useState<number>(1500)
const[minutosInput,setMinutosInput]=useState<any>('')
const {m,s}=useMemo(()=>{
 let sx:string = ''
 let mx:string = ''
 if(time>=60){
          const minutosSinDecimales = Math.floor(time/60)
          const segundos60 = time % 60
         
          if((segundos60)<10){
          sx=`0${segundos60}`}
          else{ 
            sx=`${0}`
            sx=`${segundos60}`}
            mx=`${minutosSinDecimales}`
         
        }
        else{
          if(time<10){
          mx=`${0}`
          sx=`0${time}`
          }else{
          mx=`${0}`
          sx=`${time}`
          }}
return {m:mx,s:sx}
},[time])




const cronometro=():void=>{
        ref.current =true 
        idRef.current= setInterval(()=>{
        if(!idRef){
          return;
        }
        setTime((prev)=>Math.max(prev - 1, 0))
      },1000)


}


const reiniciar = ():void=>{
       ref.current =false
       if (idRef.current) {
        clearInterval(idRef.current)
      }
      idRef.current=null
      setTime(1500)

}


const pausa =():void=>{
     ref.current =false
     if (idRef.current) {
        clearInterval(idRef.current)
           idRef.current=false
      }
}


const start=():void=>{
  if(ref.current)return
  else{
 cronometro()
  }

  
}

const handleInput = (e: FormEvent<HTMLFormElement>): void => {
e.preventDefault()
if(!minutosInput.trim())return
const minutosIsNaN = parseInt(minutosInput)
if (isNaN(minutosIsNaN))return
//if(minutosIsNaN>25)return 
const FistInputValue = minutosIsNaN*60 

 clearInterval(idRef.current)
 idRef.current=null
 setTime(FistInputValue)
}

useEffect(()=>{
  if(time===0){
    ref.current =false
    clearInterval(idRef.current)
    idRef.current=null
  }
},[time])



useEffect(()=>()=>{ clearInterval(idRef.current) },[])


return {m,s,reiniciar,pausa,start, time ,handleInput,setMinutosInput,minutosInput}


}

