import React,{useState} from "react";

const App =()=>{

  var time= new Date().toLocaleTimeString();

  const[ currentTime, setCurrentTime] =useState(time);

  const updateTime=()=>{
    var time= new Date().toLocaleTimeString();
    setCurrentTime(time);
  }

  setInterval( updateTime,1000);





  return(
    <>
      <h1>{currentTime}</h1>
    </>
  )
}

export default App;
