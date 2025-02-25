import { useState } from 'react'
const Button = (props) => {
  return (
    <button onClick = {props.handleClick}>
      {props.text}
    </button>
  )
}
const StatisticsLine = ({text, value}) => {
  return(
    <tr>
    <td>{text}</td>
    <td>{value}</td>
    </tr>  
  )
}
const Statistics = ({good, bad, average, all, percent, neutral}) => {
  if (all === 0) {
    return (
      <>
      <h2>Statistics</h2>
      <div>No votes given yet</div>
      </>
    )
  }
  return(
    <div>
  <h2>Statistics</h2>
  <table> 
    <tbody>
  <StatisticsLine text = "good" value = {good}/>
  <StatisticsLine text = "neutral" value = {neutral}/>
  <StatisticsLine text = "bad" value = {bad}/>
  <StatisticsLine text = "total" value = {all}/>
  <StatisticsLine text = "average" value = {average}/>
  <StatisticsLine text = "percent" value = {percent}/>
      </tbody> 
  </table>
  </div>
)
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [percent, setPercent] = useState(0)
  const Header = () => {
    return(
    <h1>Give Feedback</h1>
  )
  }
  const setToGood = () => {
const newGood = good + 1
setGood(newGood)
const newTotal = all + 1
setAll (newTotal)
const newAverage = (newGood - bad) / newTotal
setAverage ( newAverage)
setPercent (newGood / newTotal * 100)
  }
  const setToNeutral = () => {
    const newNeutral = neutral + 1
    setNeutral(newNeutral)
    const newTotal = all + 1
    setAll (newTotal)
    const newAverage = (good - bad) / newTotal
setAverage ( newAverage)
    setPercent (good / newTotal * 100)
  }
  const setToBad = () => {
    const newBad = bad + 1
    setBad(newBad)
    const newTotal = all + 1
    setAll (newTotal)
    const newAverage = (good - newBad) / newTotal
setAverage ( newAverage)
    setPercent (good / newTotal * 100)
  }
    
  return(
    <div>
      <Header/>
    <Button handleClick = {setToGood} text = "Good"/>
    <Button handleClick = {setToNeutral} text = "Neutral"/>
    <Button handleClick = {setToBad} text = "Bad"/>
    <Statistics good = {good} 
    bad = {bad} 
    neutral = {neutral} 
    average = {average}
    all = {all}
    percent = {percent}
    />
    </div>
  )
}

export default App
