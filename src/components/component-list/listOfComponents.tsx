import { Accordion1 } from "../accordion1/Accordion1";
import { AnalogClock } from "../analog-clock/AnalogClock";
import { DefiniteIndefinite } from "../definite-indefinite/definiteIndefinite";
import { GeneratedTable } from "../generated-table/GeneratedTable";
import { HolyGrailLayout } from "../holygrail-layout/HolyGrailLayout";
import { ProgressBarParent } from "../progress-bar/ProgressBarParent";
import { ProgressBarsParent } from "../progress-bar/ProgressBarsParent";
import { Tabs } from "../tabs/Tabs";
import { TemperatureConverter } from "../temperature-converter/TemperatureConverter";

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

const tabsData = [
  {
    value: 'html',
    label: "Product 1",
    content: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser."
  },
  {
    value: 'css',
    label: "Product 2",
    content: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML."
  },
  {
    value: 'js',
    label: "Product 3",
    content: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS."
  }
]

export const listOfCompontents = [
  {
    name: "Analog Clock",
    description: "A widget that renders the current time within an analog clock display, where the clock hands move and update like a real clock.",
    image: "./images/cat.jpeg",
    component: <AnalogClock />
  },
  {
    name: "Holy Grail Layout",
    description: "It consists of a header, footer, and three columns. The left column contains navigation items, the middle column contains the page contents, and the right column contains ads.",
    image: "./images/cat.jpeg",
    component: <HolyGrailLayout />
  },
  {
    name: "Tabs",
    description: "a Tabs component that displays one panel of content at a time depending on the active tab element",
    image: "./images/cat.jpeg",
    component: <Tabs items={tabsData} defaultValue={'css'} />
  },
  {
    name: "Temperature Converter",
    description: "a simple temperature converter widget that contains two text inputs temperatures in Celsius and Fahrenheit respectively, allowing for conversion between the temperature scales",
    image: "./images/cat.jpeg",
    component: <TemperatureConverter />
  },
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