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
          <input
            type="text"
            name="userName"
            required
            placeholder="Wie ist dein Name?" aria-label="Your Name" autoComplete="given-name"
          />
          <input type="hidden" name="_action" value="newUser" />
          <button type="submit" className="btn btn--primary">
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