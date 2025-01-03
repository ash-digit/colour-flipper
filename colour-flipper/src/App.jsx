import { useState, StyleSheet} from 'react'
import './App.css'

function App() {
  const [cName, setCName] = useState("white")
  const [count, setCount] = useState(0)

  const colourPalet = ['red', 'blue', 'green']
  const myFunc = function(){
    
    setCount(count + 1);
    setCName(colourPalet[count])
    if(count >= colourPalet.length-1){
      setCount(0)
    }
    // if(colourNumber > colourNumber.length){
    // console.log(colourNumber, '<---colourNumber before')

    //   colourNumber = 0;
       
    // }
    console.log(cName, count)
  }

  return (<button className={cName}  onClick={myFunc}>Click to flip the colour</button>)
}

export default App
