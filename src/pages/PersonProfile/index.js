import { useState, useEffect } from "react"
import {useLocation} from 'react-router'
import HireForm from "./components/HireForm"

function PersonProfile(props) {
  const [personProfile, setPersonProfile] = useState(null)

  const location = useLocation()

  useEffect(() => {
    if(location.state) {
      const {person} = location.state
      setPersonProfile(person)
    }
  }, [location] )

  if (!personProfile) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {personProfile.name.first} {personProfile.name.last}
      </h2>
      <HireForm person={personProfile} hiredPeople={props.hiredPeople} setHiredPeople={props.setHiredPeople} />
    </article>
  )
}

export default PersonProfile
