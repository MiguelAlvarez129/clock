import React, { useEffect, useState, useRef } from 'react';
import moment from 'moment';
const Grid = (props) => {
  const { font,double, overSize, setDouble, size,centrar,center,width} = props
  const off = useRef(0)
  useEffect(() => {
    document.addEventListener("dragstart", function (event) {
      const data = event.target.id
      
      if (data == 'clock') {
        event.dataTransfer.setData("clock", data);
      } else{
        event.preventDefault();
      }
    });
  
    document.addEventListener("dragover", (event) => {
      event.preventDefault();
    });
  
    document.addEventListener("dragenter", function (event) {
      if (event.target.className == "dropzone") {
        
        event.target.style.background = "lightgray";
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
      if (event.target.className.startsWith("dropzone")) {
        event.target.style.background = "";
        if (data) {
          event.target.appendChild(clock);
          
        }
      }
    });
    document.addEventListener("dragend", (event) => {
    
    centrar()
    

    console.log(off.current)
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
 
  const offset = () =>{
    const child = document.getElementById('clock').getBoundingClientRect();
    const parent = document.getElementById('clockWrapper').getBoundingClientRect();
    let of= 0;
    if (child.x < parent.x){
      of = parent.x - child.x 
    } else if (child.right > parent.right){
      of =  parent.right - child.right 
    }
    
    console.log(of)
    return of > 0 ? of + off.current : of;

   
  }

  let ratio = double ? `scale(${size*0.75}) translate(${center[0]/size*1.33}px,${center[1]/size*1.33}px)` : overSize ?  `scale(${size*0.8})`: `scale(${width}) translateX(${off.current}px)`;

  const clockdate = (
   
      <div className='grid-container '   onClick={() => {setDouble()}}
         style={{ transform: ratio , fontFamily: font}} draggable={double ? 'false' : 'true'} id="clock" >
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
    
    <div className="w-100 h-100" id='clockWrapper'>
    <span class="ad badge title" id='ad'><h5>Click and drag the clock</h5></span>
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