import React, { useEffect, useState, useDebugValue } from 'react';
import { ChromePicker } from 'react-color';
import moment from 'moment';

const App = (props) => {
  const [clock, setClock] = useState(new Date);
  const [double, setDouble] = useState(false);
  const [gradient, setGradient] = useState(false);
  const [overSize, setOverSize] = useState(false);
  
  const [cGradient, setCGradient] = useState( {
    color1: '#ff0027',
    color2: '#7c00ff',
    color3: '#020fff',
  })
  const [color, setColor] = useState('#FFFFFFF')
  const [fcolor, setFcolor] = useState('#000000')
  const [size, setSize] = useState(1);
  const [light, setLight] = useState(false);
  
  useEffect(() => {
    const updateSize = () => {
      const parentWidth = window.innerWidth;
      const childWidth = document.getElementById('clock').offsetWidth;
      childWidth > parentWidth ? setOverSize(true) : setOverSize(false); 
      setSize(parentWidth / childWidth )

    }
    
    window.addEventListener('resize', updateSize)
    updateSize();
    
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      tick();

    }, 1000);

    return () => {
      clearInterval(id)
    }
  })

  const turnLights = () =>{
    setLight(!light)
  }

  const newColor = (color, bool) => {
    if (bool) {
    
      setColor(color.value);
    } else {
      setFcolor(color.value);
    }

  }

  const checkWidth = () =>{
    const parentWidth = window.innerWidth;
    const childWidth = document.getElementById('clock').offsetWidth;
    childWidth > parentWidth ? setOverSize(true) : setOverSize(false); 
  }

  const newGradientColor = (gradientColor) => {
    const {color1,color2,color3} = gradientColor;
    setCGradient( {
      color1: color1.value,
      color2: color2.value,
      color3: color3.value,
    })
    
    
  }

  document.title = moment().format('h:mm:ss')

  const tick = () => {
    setClock(new Date)
  }


  // const scale = () =>{
  //   const parent = document.body.offsetWidth;
  //   const child = document.getElementById('clock').offsetWidth;
  //   setSize(parent/child)

  // }
  let width ;
  let bgColor;
  let fColor;
  let ratio = double ? `scale(${size * 0.90})` : overSize ? `scale(${size *0.70})` :  'scale(1)';
  let gradientColor = {
    color1: 'red',
    color2: 'blue',
    color3: 'white',
  }
  let a ;
  const bgType = gradient ? {background: ` linear-gradient(120deg, ${cGradient.color1} 0%,  ${cGradient.color2} 50%,  ${cGradient.color3} 100%)`
  ,color: fcolor} :
  {background: color,color: fcolor}

  const lightsOn = {background:'rgba(235, 235, 235, 0.7)',color:'black'};
  const lightsOff = {background:'rgba(11, 11, 11, 0.7)',color:'white'};

  const bgSelector =
    <span>
      <label htmlFor="backgroundColor" className="mx-2">Select background color </label>
      <input id="backgroundColor" type="color" name="color" ref={node => bgColor = node} onChange={()=>newColor(bgColor,true)}  />
    </span>;

  const bgGradientSelector =
    <span>
      <label htmlFor="gradientColor" className="mx-2">Select background gradient color </label>
      <input id="gradientColor1"  className="mx-2" type="color" value={cGradient.color1} name="color1"
       ref={node=> gradientColor.color1 = node}  onChange={()=>newGradientColor(gradientColor)}/>
      <input id="gradientColor2"  className="mx-2" type="color" value={cGradient.color2} name="color2" 
      ref={node=> gradientColor.color2 = node}  onChange={()=>newGradientColor(gradientColor)}/>
      <input id="gradientColor3"   className="mx-2" type="color" value={cGradient.color3} name="color3" 
      ref={node=> gradientColor.color3 = node}  onChange={()=>newGradientColor(gradientColor)}/>
      
    </span>;

  return (

    <div className="clock-div" style={bgType}>
      <div className="navBar d-flex justify-content-between mr-5" style= {light ? lightsOff : lightsOn}>
      <div>
      
      <button className={"lightbulb btn btn-" + (light ? 'dark' : 'default')} onClick={()=>turnLights()}>
      <h6 className="d-inline-block mr-2">
        Turn lights off
      </h6> 
      <i class="fa fa-lightbulb-o" aria-hidden="true"></i>
      </button>
      </div>
      
      <i className="fa fa-clock-o clock" aria-hidden="true"></i>
      <button className={'btn btn-' + (light ? 'dark' : 'default')} >
       <h6>Themes</h6>
      </button>
      </div>

      <div className="clock-2 w-10. d-flex justify-content-center align-items-center flex-column" >
        <div className='grid-container'
          onClick={() => setDouble(!double)}
          id="clock" style={{ transform: ratio }}>
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
      </div>

      {/* <div className="menu d-flex justify-content-start flex-column ">
        
        <button className="btn btn-light" onClick={() => setDouble(!double)}>Change Size</button>
        <button className="btn btn-light" onClick={() => setDouble(!double)}>Change Size</button>
        <button className="btn btn-light" onClick={() => setDouble(!double)}>Change Size</button>
        <button className="btn btn-light" onClick={() => setDouble(!double)}>Change Size</button>

      </div> */}
      <div className="options bg bg-default "  style= {light ? lightsOff : lightsOn}>
        <div>
          <label htmlFor="check" className="mx-2">Gradient background</label>

          <div className="switch">
            <input onClick={() => setGradient(!gradient)} id="check" className="check" type="checkbox" />
            <span className="slider">  </span>
          </div>
          {gradient ? bgGradientSelector : bgSelector}
          {/* <label htmlFor="backgroundColor" className="mx-2">Select background color </label>
          <input id="backgroundColor" type="color" name="color" ref={node => bgColor = node} onChange={() => newColor(bgColor, true)} /> */}
          <label htmlFor="fontColor" className="mx-2">Select font color </label>
          <input id="fontColor" type="color" name="color" ref={node => fColor = node} onChange={() => newColor(fColor, false)} />
          <div>
            <input style={{width:50}} ref={node=> width = node} onChange={()=>checkWidth(width)} type="text"/> 
            <button onClick={()=>console.log(overSize)}> check </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App;