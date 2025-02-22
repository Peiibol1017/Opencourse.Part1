import { useState } from 'react'
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const Header = () => {
    return(
    <h1>Give Feedback</h1>
  )
  }
  const Result = () => {
    return(
      <div>
    <h2>Statistics</h2>
    <p>Good {good}</p>
    <p>Neutral {neutral}</p>
    <p>Bad {bad}</p>
    </div>
  )
  }
  const setToGood = (newValue) => {
setGood(newValue)
  }
  const setToNeutral = (newValue) => {
    setNeutral(newValue)
  }
  const setToBad = (newValue) => {
    setBad(newValue)
  }
  return(
    <div>
      <Header/>
    <button onClick = {()=>setToGood(good + 1)}>Good</button>
    <button onClick = {() => setToNeutral(neutral + 1)}>Neutral</button>
    <button onClick ={() => setToBad(bad + 1)}>Bad</button>
    <Result/>


    </div>
  )
}

export default App
