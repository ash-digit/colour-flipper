import { useState, StyleSheet} from 'react'
import './App.css'

function App() {
  const [cName, setCName] = useState("bg black")
  const [count, setCount] = useState(0)

  const colourPalet = ['red', 'blue', 'green']
  const myFunc = function(){
    
    setCount(count + 1);
    setCName(`bg ` + colourPalet[count])
    if(count >= colourPalet.length-1){
      setCount(0)
    }
  }

  return (
  <>
    <div className={cName}></div>
  <button className='btn' onClick={myFunc}>Click to flip the colour</button>
  </>

)
}

export default App
