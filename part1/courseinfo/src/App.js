import React from 'react'

const Header = (prop) => {
  return (
    <>
      <h1>{prop.course}</h1>
    </>
  )
}

const Part = (prop) => {
  return (
    <p>{prop.title} {prop.exercises}</p>
  )
}

const Content = (prop) => {
  return (
    <>
      <Part title={prop.parts[0].name} exercises={prop.parts[0].exercises}/>
      <Part title={prop.parts[1].name} exercises={prop.parts[1].exercises}/>
      <Part title={prop.parts[2].name} exercises={prop.parts[2].exercises}/>
    </>
  )
}

const Total = (prop) => {
  let total = 0
  prop.parts.forEach(part => {
    total += part.exercises
  })

  return (
    <>
      <p>Number of exercises {total} </p>
    </>
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
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
