const Header = (title) =>{
  return(
    <>
    <h1>{title.course.name}</h1>
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
    <Part1 p1={contents.course.parts[0].name} e1={contents.course.parts[0].exercises}/>
    <Part2 p2={contents.course.parts[1].name} e2={contents.course.parts[1].exercises}/>
    <Part3 p3={contents.course.parts[2].name} e3={contents.course.parts[2].exercises}/>
  </div>
  )
}
  const Total = (totals) =>{
    return (
      <div>
        <p>Number of exercises {totals.course.parts[0].exercises + totals.course.parts[1].exercises + totals.course.parts[2].exercises}</p>
      </div>
    )
  }

  const App = () => {
    const course = {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        }
      ]
    }
  return (
    <>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </>
  )
}

export default App