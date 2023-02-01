import { Accordion1 } from "../accordion1/Accordion1";
import { DefiniteIndefinite } from "../definite-indefinite/definiteIndefinite";
import { ProgressBarParent } from "../progress-bar/ProgressBarParent";
import { ProgressBarsParent } from "../progress-bar/ProgressBarsParent";

export const listOfCompontents = [
  {
    name: "Definite Indefinite Grammar Practice",
    description: "This is a multiple choice grammar quiz that tests the user's knowledge of articles",
    image: "./images/cat.jpeg",
    component: <DefiniteIndefinite />
  },
  {
    name: "Static Progress Bars",
    description: "A custom progress bar that displays a completed percentage number",
    image: "./images/cat.jpeg",
    component: <ProgressBarParent />
  },
  {
    name: "Dynamic Progress Bars",
    description: "Progress bars that fill up gradually as soon as they are shown",
    image: "./images/cat.jpeg",
    component: <ProgressBarsParent />
  },
  {
    name: "Accordion 1",
    description: "Accordion component that displays a list of vertically stacked sections that each contain a title and content snippet.",
    image: "./images/cat.jpeg",
    component: <Accordion1 />
  },
]