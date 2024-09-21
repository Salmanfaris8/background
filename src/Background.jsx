import React from 'react'
import './Background.css'

const Background = () => {
    const changeColor=(color)=>{
        document.body.style.backgroundColor=color
    }
  return (
    <div>
        <h1>Background Changing App</h1>
        <div className='main-d1'>
            <button onClick={()=>changeColor("green")} className='green'>Green</button>
            <button onClick={()=>changeColor("blue")} className='blue'>Blue</button>
            <button onClick={()=>changeColor("yellow")} className='yellow'>Yellow</button>
            <button onClick={()=>changeColor("orange")} className='orange'>Orange</button>
            <button onClick={()=>changeColor("red")} className='red'>Red</button>
        </div>
    </div>
  ) 
}

export default Background