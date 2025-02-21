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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name:'State of a component',
    exercises: 14
  }
  return (
    <>
      <Header title={course}/>
      <Content p1={part1.name} p2={part2.name} p3={part3.name} e1={part1.exercises} e2={part2.exercises} e3={part3.exercises}/>
      <Total e1={part1.exercises} e2={part2.exercises} e3={part3.exercises}/>
    </>
  )
}

export default App