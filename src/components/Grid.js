import React, { useEffect, useState, useRef } from 'react';
import moment from 'moment';
const Grid = (props) => {
  const { double, overSize, setDouble, size,centrar,center} = props
  const [coordinates, setCoordinates] = useState([])
 
  //const coorRef = useRef([])
  
  // const centrar = () =>{
  //   const clock = document.getElementById('clock');
  //   const centerPosition = [clock.parentElement.offsetLeft,clock.parentElement.offsetTop]
  //   const clockPosition = [clock.offsetLeft,clock.offsetTop]
  //   const x = centerPosition[0] - clockPosition[0]
  //   const y = centerPosition[1] - clockPosition[1]
  //   coorRef.current = [x,y]
  // }
  useEffect(() => {
    document.addEventListener("dragstart", function (event) {
      const data = event.target.id
      
      if (data) {
        event.dataTransfer.setData("clock", data);
      }
    });
  
    document.addEventListener("dragover", (event) => {
      event.preventDefault();
    });
  
    document.addEventListener("dragenter", function (event) {
  
      if (event.target.className == "dropzone") {
        event.target.style.background = "gray";
      }
    });
  
    document.addEventListener("dragleave", function (event) {
      if (event.target.className == "dropzone") {
        event.target.style.background = "";
      }
  
    });
  
    document.addEventListener("drop", function (event) {
      event.preventDefault();
      const data = event.dataTransfer.getData("clock");
      const clock = document.getElementById(data)
      if (event.target.className == "dropzone") {
        event.target.style.background = "";
        if (data) {
          event.target.appendChild(clock);
        }
      }
    });
    document.addEventListener("dragend", (event) => {
     centrar()
    // const x = document.getElementById('clock').offsetLeft;
    // const y = document.getElementById('clock').offsetTop;
    // coorRef.current = [x,y]
    });
      
    

    
    return () => {
      document.removeEventListener('dragstart')
      document.removeEventListener('drop')
      document.removeEventListener('dragleave')
      document.removeEventListener('dragenter')
      document.removeEventListener('dragover')
      document.removeEventListener('dragend')
   
    };
  }, []);
 


 

  let ratio = double ? `scale(${size * 0.90}) translate(${center[0]/size}px,${center[1]/size}px)` : overSize ? `scale(${size * 0.70})` : 'scale(1)';

  const clockdate = (
   
      <div className='grid-container '   onClick={() => {setDouble()}}
         style={{ transform: ratio }} draggable='true' id="clock" >
        <div className="item-hora ">
          <h1 className="change">{moment().format('h:mm')}</h1>
        </div>
        <div className="item-seg">
          <h1 className="change">{moment().format('ss')}</h1>
        </div>
        <div className="item-am">
          <h1 className="change">{moment().format('A')}</h1>
        </div>
        <div className="item-date text-center">
          <h1 className="change">
            {moment().format('MMMM dddd YYYY')}
          </h1>
        </div>
      </div>
    

  )

  return (
    <div className="w-100 h-100">
      <div className=" parentBox d-flex justify-content-around  bg bg-default">
        <div className='dropzone'> </div>
        <div className='dropzone' > </div>
        <div className='dropzone' > </div>

      </div>

      <div className="  parentBox d-flex justify-content-around  bg bg-default">
        <div className='dropzone' > </div>
        <div className='dropzone' id='center'>
          {clockdate}
        </div>
        <div className='dropzone' > </div>
      </div>

      <div className=" parentBox d-flex justify-content-around  bg bg-default">
        <div className='dropzone' > </div>
        <div className='dropzone' > </div>
        <div className='dropzone' > </div>
      </div>
    </div>

  )
}

export default Grid;