import { Link } from "react-router-dom"

function PeopleListItem(props) {
  const { person } = props

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      <Link to={`/view/${person.login.uuid}`} state={{person}}>Profile</Link>
      {person.wage && <div><p>Wage: £{person.wage}</p>
      <Link to={`/view/${person.login.uuid}`} state={{person}}><button>Edit</button></Link></div>}

    </li>
  )
}

export default PeopleListItem
