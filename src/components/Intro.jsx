import { Form } from "react-router-dom"

// library
import { UserPlusIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

// assets
import illustration from "../assets/illustration.jpg"

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Behalte die Kontrolle über dein Geld.
        </h1>
       
        <Form method="post">
          <div className="form-control">
            <input
              type="text"
              name="userName"
              id="userName" // ID ist wichtig, um mit dem Label zu verbinden
              required
              placeholder=" " // Wichtig: Placeholder ist nur ein Leerzeichen
              autoComplete="given-name"
            />
            <label htmlFor="userName">Wie ist dein Name?</label>
          </div>
          <input type="hidden" name="_action" value="newUser" />
          <button type="submit" className="btn btn--primary btn--pill">
            <span>Benutzerkonto erstellen</span>
            <ArrowRightIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={illustration} alt="Person with money" width={600} />
    </div>
  )
}
export default Intro