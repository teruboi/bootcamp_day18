//Importing React modules for rendering
import React from 'react';
import ReactDOM from 'react-dom/client';
import { faker } from "@faker-js/faker";

//Importing components from App.js
import { Navbar, Body, App } from './App';
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
    comment: faker.lorem.lines(1)
  },
  {
    name: faker.name.firstName(),
    avatar: faker.image.avatar(),
    time: faker.date.recent(3),
    comment: faker.lorem.lines(1)
  },
  {
    name: faker.name.firstName(),
    avatar: faker.image.avatar(),
    time: faker.date.recent(3),
    comment: faker.lorem.lines(1)
  }
]

//Rendering to root using createRoot
const el = document.getElementById("root")
const root = ReactDOM.createRoot(el)

//Rendering App component
root.render(<App data={data}/>)
//Renderer
// render(<Navbar />, "navbar")
// render(<Body />, "root")
