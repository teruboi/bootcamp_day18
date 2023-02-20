//Importing React modules for rendering
import React from 'react';
import ReactDOM from 'react-dom';
import { faker } from "@faker-js/faker";
import moment from 'moment';

//Importing components from App.js
import { Navbar, Body, Comments, Counting, Clock } from './App';
import './index.css';

//Function to simplify rendering to HTML
function render(content, id) {
  ReactDOM.render(content, document.getElementById(id))
}

//Data faker
const data = [
  {
    name: faker.name.firstName(),
    avatar: faker.image.avatar(),
    time: faker.date.recent(3),
    comment: faker.lorem.lines(1),
    like: faker.random.numeric()
  },
  {
    name: faker.name.firstName(),
    avatar: faker.image.avatar(),
    time: faker.date.recent(3),
    comment: faker.lorem.lines(1),
    like: faker.random.numeric()
  },
  {
    name: faker.name.firstName(),
    avatar: faker.image.avatar(),
    time: faker.date.recent(3),
    comment: faker.lorem.lines(1),
    like: faker.random.numeric()
  }
]

//Rendering to root using createRoot
const el = document.getElementById("root")
const root = ReactDOM.createRoot(el)

//Calling Comments component to App
const App = () => {
  return (
    <div>
      {<Comments data={data} />}
    </div>
  )
}

//Rendering App component
render(<Clock />, "clock")
render(<App data={data} />, "root")
//Renderer
// render(<Navbar />, "navbar")
// render(<Body />, "root")
