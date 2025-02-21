const Header = (title) =>{
  return(
    <>
    <h1>{title.title}</h1>
    </>
  )
}
const Part1 = (parts1) => {
  return(
    <p>{parts1.p1} have {parts1.e1} exercises</p>
  )
}
const Part2 = (parts2) => {
  return(
<p>{parts2.p2} have {parts2.e2} exercises</p>
  )
}
const Part3 = (parts3) => {
  return(
<p>{parts3.p3} have {parts3.e3} exercises</p>
  )
}
const Content = (contents) => {
  return (
  <div>
    <Part1 p1={contents.p1} e1={contents.e1}/>
    <Part2 p2={contents.p2} e2={contents.e2}/>
    <Part3 p3={contents.p3} e3={contents.e3}/>
  </div>
  )
}
  const Total = (totals) =>{
    return (
      <div>
        <p>Number of exercises {totals.e1 + totals.e2 + totals.e3}</p>
      </div>
    )
  }

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header title={course}/>
      <Content p1={part1} p2={part2} p3={part3} e1={exercises1} e2={exercises2} e3={exercises3}/>
      <Total e1={exercises1} e2={exercises2} e3={exercises3}/>
    </>
  )
}

export default App