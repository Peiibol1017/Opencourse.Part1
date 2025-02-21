const Header = (title) =>{
  return(
    <>
    <h1>{title.title}</h1>
    </>
  )
}
const Content = (contents) => {
  return (
  <div>
    <p>{contents.p1}{contents.e1}</p>
    <p>{contents.p2}{contents.e2}</p>
    <p>{contents.p3}{contents.e3}</p>
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