import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Student } from './components/Student/Student'

function App() {
  const [count, setCount] = useState(0)
  const studentName = "Adam" // we want to pass this to the footer from here using Props
  const instructor = "Joe"
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  studentData = [
    {firstName: "Tyler", occupation: "UI/UX designer"},
    {firstName: "Tony", occupation: "Backend Boi"}
  ]

  return (
    <div className="App">
      <Header instructor={instructor}/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <div className="card">
        <p> count is {count} </p>
        <p> Check out our awesome students: </p>
        {studentData.map((student) => (
          <Student student={student}/>
        ))}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer studentName={studentName} count={count}/> 
    </div> // studentName is a prop here.
  )
}

export default App