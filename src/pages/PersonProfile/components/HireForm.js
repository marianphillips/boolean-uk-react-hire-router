import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

function HireForm({person , hiredPeople, setHiredPeople}) {
  const [wage, setWage] = useState(0)

  let navigate = useNavigate()

  useEffect(() => {
    if(person.wage) {
      setWage(person.wage)
    }
  }, [])

  function handleSubmit(event) {
    event.preventDefault()
    if(person.wage) {
    const editedEmployees = hiredPeople.map(employee => employee.login.uuid === person.login.uuid ? {...employee, wage: wage} : employee)
    setHiredPeople(editedEmployees)
    }
    else {
    setHiredPeople([...hiredPeople, {...person, wage: wage}])
    }
    navigate(`/`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Hire</button>
    </form>
  )
}

export default HireForm
