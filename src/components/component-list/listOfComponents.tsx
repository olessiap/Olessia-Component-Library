import { Accordion1 } from "../accordion1/Accordion1";
import { DefiniteIndefinite } from "../definite-indefinite/definiteIndefinite";
import { GeneratedTable } from "../generated-table/GeneratedTable";
import { ProgressBarParent } from "../progress-bar/ProgressBarParent";
import { ProgressBarsParent } from "../progress-bar/ProgressBarsParent";

const accordion1Data = [
  {
    'value': 'html',
    'title': "HTML",
    'content': "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    "value": "css",
    "title": "CSS",
    'content': "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML",
  }
]

export const listOfCompontents = [
  {
    name: "Generated Table",
    description: "Generates a table of numbers given the rows and columns from user input",
    image: "./images/cat.jpeg",
    component: <GeneratedTable />
  },
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
    component: <Accordion1 accordionData={accordion1Data} />
  },
]