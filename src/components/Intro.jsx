import React, { useState, useEffect } from 'react';
import { Form } from "react-router-dom"
import { UserPlusIcon, ArrowRightIcon, FaceSmileIcon, CreditCardIcon, ForwardIcon  } from "@heroicons/react/24/solid";
import illustration from "../assets/illustration.jpg"

const Intro = () => {
  const textToAnimate = "Behalte die Kontrolle über dein Geld.";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < textToAnimate.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + textToAnimate[index]);
        setIndex((prev) => prev + 1);
      }, 100); // Verzögerung in Millisekunden für jeden Buchstaben

      return () => clearTimeout(timeoutId);
    }
  }, [index, textToAnimate]);

  return (
    <div className="intro">
      <div>
        <h1>
          {displayedText}
        </h1>

        <Form method="post">
          <div className="form-control">
            <input
              type="text"
              name="userName"
              id="userName"
              required
              placeholder=" "
              autoComplete="given-name"
            />
            <label htmlFor="userName">Wie ist dein Name?</label>
          </div>
          <input type="hidden" name="_action" value="newUser" />
          <button type="submit" className="btn btn--custom-color btn--pill">
            <span>Benutzerkonto erstellen</span>
            <FaceSmileIcon  width={20} />
          </button>
        </Form>
      </div>
      <img src={illustration} alt="Person with money" width={600} />
    </div>
  )
}

export default Intro;

