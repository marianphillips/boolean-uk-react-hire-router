import { useState } from "react"
import { Routes, Route } from "react-router"
// import { useEffect } from "react/cjs/react.production.min"
import Dashboard from './pages/Dashboard/index.js'
import PersonProfile from "./pages/PersonProfile/index.js"
import "./styles.css"

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
        <ul>
            <li>Dashboard</li>
          </ul>
        </nav>
      </header>
  <Routes>
 <Route path="/" element={<Dashboard hiredPeople={hiredPeople}/>} />
 <Route path="/view/:id" element={<PersonProfile hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>} />
</Routes>
    </>
  )
}
