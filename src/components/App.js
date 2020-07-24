import React, { useEffect, useState, useRef } from 'react';
import { ChromePicker } from 'react-color';
import moment from 'moment';
import Navbar from './Navbar'
import Grid from './Grid'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
const App = () => {
  const [clock, setClock] = useState(new Date);
  const [double, setDouble] = useState(false);
  const [gradient, setGradient] = useState(false);
  const [overSize, setOverSize] = useState(false);
  const [width, setWidth] = useState(1);
  const [cGradient, setCGradient] = useState({
    color1: '#ff0027',
    color2: '#7c00ff',
    color3: '#020fff',
  })
  const [color, setColor] = useState(localStorage.getItem('bgc') || '#FF4D67')
  const [fcolor, setFcolor] = useState(localStorage.getItem('fc')||'#000000')
  const [size, setSize] = useState(1);
  const [light, setLight] = useState(false);
  const coorRef = useRef([0, 0])
  const widhtRef = useRef(0)
  const [font, setFont] = useState( localStorage.getItem('font')||'Bangers')

  localStorage.getItem('bgc')
  localStorage.getItem('fc')

  const centrar = () => {
    const clock = document.getElementById('clock').getBoundingClientRect();
    const center = document.getElementById('center').getBoundingClientRect();
    const centerPosition = [center.x + center.width / 2, center.y + center.height / 2]
    const clockPosition = [clock.x + clock.width / 2, clock.y + clock.height / 2]
    const x = centerPosition[0] - clockPosition[0]
    const y = centerPosition[1] - clockPosition[1]
    coorRef.current = [x, y]
  }
  const updateSize = () => {
    const parent = window.innerWidth;
    const child = document.getElementById('clock').offsetWidth;
    const input = document.getElementById('widthInput').value
    console.log(input)
    centrar()
    if (input != null) {
      input >= parent ? setOverSize(true) : setOverSize(false)
    }
    setSize(parent / child);
  }

  useEffect(() => {
    window.addEventListener('scroll',()=>{
     const ad =  document.getElementById('ad')
     console.log(window.pageYOffset)
    if (85 > window.pageYOffset && window.pageYOffset > 75){
      ad.style.display = 'inline-block'
      ad.style.opacity = 0.7
      setTimeout(() => {
      ad.style.opacity = 0
      
      }, 3000);
      
     
    }

    })
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => {
      window.removeEventListener('resize', updateSize);
      window.removeEventListener('scroll');
    }
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      tick();

    }, 1000);
    return () => {
      clearInterval(id)
    }
  })

  const turnLights = () => {
    setLight(!light)
  }

  const newColor = (e, bool) => {
    if (bool) {
      setColor(e.value)
      localStorage.setItem('bgc',color)

    } else {
      setFcolor(e.value);
      localStorage.setItem('fc',fcolor)
    }
  }
  const newGradientColor = (gradientColor) => {
    const { color1, color2, color3 } = gradientColor;
    setCGradient({
      color1: color1.value,
      color2: color2.value,
      color3: color3.value,
    })
  }

  const tick = () => {
    setClock(new Date)
  }

  const setDoublefun = () => {
    setDouble(!double)
  }

  const changeWidth = () => {
    const actualWidth = document.getElementById('clock').offsetWidth
    const maxWidth = window.innerWidth
    w.value >= maxWidth ? setWidth(size * 0.7) : setWidth(w.value / actualWidth)
    console.log(actualWidth)
  }

  const changeFont = (e) => {
    setFont(e.target.value)
    localStorage.setItem('font',e.target.value)
    changeWidth()  
  }

  document.title = moment().format('h:mm:ss')
  let w = { value: 200 };
  let bgColor;
  let fColor;
  //let ratio = double ? `scale(${size * 0.90})` : overSize ? `scale(${size * 0.70})` : 'scale(1)';
  let gradientColor = {
    color1: 'red',
    color2: 'blue',
    color3: 'white',
  }

  const lightsOn = { background: 'rgba(235, 235, 235, 0.7)', color: 'black' };
  const lightsOff = { background: 'rgba(11, 11, 11, 0.7)', color: 'white' };
  const bgSelector =
    <div className='d-inline-block'>
      <label htmlFor="backgroundColor" className="mx-2">Select background color </label>
      <input id="backgroundColor" type="color" name="color" ref={node => bgColor = node} onChange={() => newColor(bgColor, true)} />
    </div>;

  const changeBg = () => {

    if (gradient) {
      document.body.style.backgroundAttachment = 'fixed';
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.backgroundImage = `linear-gradient(120deg, ${cGradient.color1} 0%,  ${cGradient.color2} 50%,  ${cGradient.color3} 100%)`
      return (
        <div className='d-inline-block'>
          <label htmlFor="gradientColor" className="mx-2">Select background gradient color </label>
          <input id="gradientColor1" className="mx-2" type="color" name="color1"
            ref={node => gradientColor.color1 = node} value={cGradient.color1} onChange={() => newGradientColor(gradientColor)} />
          <input id="gradientColor2" className="mx-2" type="color" name="color2"
            ref={node => gradientColor.color2 = node} value={cGradient.color2} onChange={() => newGradientColor(gradientColor)} />
          <input id="gradientColor3" className="mx-2" type="color" name="color3"
            ref={node => gradientColor.color3 = node} value={cGradient.color3} onChange={() => newGradientColor(gradientColor)} />
        </div>
      )
    } else {
      document.body.style.background = color
      return (
        <div className='d-inline-block'>
          <label htmlFor="backgroundColor" className="mx-2">Select background color </label>
          <input id="backgroundColor" type="color" name="color" value ={color} ref={node => bgColor = node} onChange={() => newColor(bgColor, true)} />
        </div>
      )

    }

  }

  const props = {
    'font': font,
    'width': width,
    'center': coorRef.current,
    'double': double,
    'overSize': overSize,
    'setDouble': setDoublefun,
    'size': size,
    'centrar':centrar,
  }
  return (


    <div className="clock-div" style={{ color: fcolor }}>
      
      <Navbar turnOn={turnLights} light={light} />
      <Switch>

        <Route path='/' render={() => <Grid {...props} />} exact />
      </Switch>

      <div className="options bg bg-default " style={light ? lightsOff : lightsOn}>

        <label htmlFor="check" className="mx-2">Gradient background</label>

        <div className="switch">
          <input onClick={() => setGradient(!gradient)} id="check" className="check" type="checkbox" />
          <span className="slider">  </span>
        </div>

        {changeBg()}

        <div className="d-inline-block">
          <label htmlFor="fontColor" className="mx-2">Select font color </label>
          <input id="fontColor" type="color" name="color" ref={node => fColor = node} onChange={() => newColor(fColor, false)} />
        </div>
        <div class="d-inline-block">
          <input defaultValue='200' id='widthInput' style={{ width: '5em' }} type="number" class="form-control d-inline-block" ref={(node) => w = node} />
          <button class="btn btn-outline-primary " onClick={() => changeWidth()} >
            Change clock's size!
            </button>
        </div>
        <div class="d-block">
          <select className="select" id="exampleFormControlSelect1" onChange={(e) => changeFont(e)}>
            <option value='Bangers' selected>Bangers</option>
            <option value="Bebas Neue">Bebas Neue</option>
            <option value="Lobster">Lobster</option>
            <option value="Anton">Anton</option>
            <option value="Open Sans">Open Sans</option>
            <option value="Oswald">Oswald</option>
            <option value="Poppins">Poppins</option>
          </select>
          <button className="d-inline-block btn btn-default">
            asdwq
          </button>
        </div>
      </div>
    </div>
  )
}

export default App;