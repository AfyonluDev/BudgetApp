// rrd imports
import { Form, NavLink } from "react-router-dom"

// library
import { TrashIcon, UserMinusIcon } from '@heroicons/react/24/solid'

// assets
import logomark from "../assets/logomark.svg"

const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink
        to="/"
        aria-label="Go to home"
      >
        <img src={logomark} alt="" height={50} />
        <span>Privat Budget</span>
      </NavLink>
      {
        userName && (
          <Form
            method="post"
            action="logout"
            onSubmit={(event) => {
              if (!confirm("Benutzerkonto löschen und alle dazugehörigen Daten?")) {
                event.preventDefault()
              }
            }}
          >
            <button type="submit" className="btn btn--warning btn--pill">
              <span>Benutzerkonto löschen</span>
              <UserMinusIcon width={20} />
            </button>

          </Form>
        )
      }
    </nav>
  )
}
export default Nav