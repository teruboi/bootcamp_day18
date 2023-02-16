//Importing React modules for rendering
import React from 'react';
import ReactDOM from 'react-dom/client';

//Importing components from App.js
import { Navbar, Body, App } from './App';
import './index.css';

//Function to simplify rendering to HTML
function render(content, id) {
  ReactDOM.render(content, document.getElementById(id))
}

//Rendering to root using createRoot
const el = document.getElementById("root")
const root = ReactDOM.createRoot(el)

//Rendering App component
root.render(<App/>)
//Renderer
// render(<Navbar />, "navbar")
// render(<Body />, "root")
