import { DefiniteIndefinite } from "../definite-indefinite/definiteIndefinite";
import { ProgressBarParent } from "../progress-bar/ProgressBar";

export const listOfCompontents = [
  {
    name: "Definite Indefinite Grammar Practice",
    description: "This is a multiple choice grammar quiz that tests the user's knowledge of articles",
    image: "./images/definite-indefinite.jpg",
    component: <DefiniteIndefinite />
  },
  {
    name: "Progress Bar",
    description: "A custom progress bar that displays a completed percentage number",
    image: "./images/cat.jpeg",
    component: <ProgressBarParent />
  },
]