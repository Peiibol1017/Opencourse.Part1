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
    <Part1 p1={contents.parts[0].name} e1={contents.parts[0].exercises}/>
    <Part2 p2={contents.parts[1].name} e2={contents.parts[1].exercises}/>
    <Part3 p3={contents.parts[2].name} e3={contents.parts[2].exercises}/>
  </div>
  )
}
  const Total = (totals) =>{
    return (
      <div>
        <p>Number of exercises {totals.parts[0].exercises + totals.parts[1].exercises + totals.parts[2].exercises}</p>
      </div>
    )
  }

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name:'State of a component',
    exercises: 14
  }
]
  return (
    <>
      <Header title={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </>
  )
}

export default App