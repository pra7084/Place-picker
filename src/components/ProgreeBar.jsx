import {useState,useEffect} from 'react';
export default function ProgrssBar({timer}){
    const[timeRemaining,setTimeRemaining]=useState(timer);
  useEffect(()=>{
    // console.log('set interval');
     const interval=  setInterval(()=>{
       setTimeRemaining((prevTime)=>prevTime-10);
  },10);
  return ()=>{
     clearInterval(interval);
  }
  },[]);
    return(
        <progress value={timeRemaining} max={timer}/>
    )
}