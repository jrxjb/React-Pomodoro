import { useState,useRef,useMemo } from 'react'
export default function useCountdown(){
const ref = useRef(false)
const idRef = useRef<any>(null)
const [time,setTime] = useState<number>(1500)

const {m,s}=useMemo(()=>{
 let sx:string = ''
 let mx:string = ''
 if(time>=60){
          const minutos =  time/60
          const minutosSinDecimales = Math.trunc(time/60)
          const segundos =  minutos - minutosSinDecimales 
          const segundos60 = Math.trunc(segundos*60)
         
          if((segundos60)<10){
          sx=`0${segundos60}`}
          else{ 
            sx=`${0}`
            sx=`${Math.trunc(segundos*60)}`}
            mx=`${minutosSinDecimales}`
         
        }
        else{
          if(time<10){
          mx=`${0}`
          sx=`0${time-1}`
          }else{
          mx=`${0}`
          sx=`${time-1}`
          }}
return {m:mx,s:sx}
},[time])




const cronometro=():void=>{
        idRef.current= setInterval(()=>{
        if(!idRef){
          return;
        }
        setTime((prev)=>{
          if(prev<1){fin()}
          return prev - 1
      }
    )
      },1000)


}

const fin=():void=>{
     if (idRef.current) {
        clearInterval(idRef.current)
      }
      idRef.current=null
   
}

const reiniciar = ():void=>{
       if (idRef.current) {
        clearInterval(idRef.current)
      }
      idRef.current=null
      setTime(1500)

}


const pausa =():void=>{

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

return {m,s,reiniciar,pausa,start, time }


}

