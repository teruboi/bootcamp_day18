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
const el = document.getElementById("root")
const root = ReactDOM.createRoot(el)

root.render(<App name="Rey" job="Professional Procrastinator" />)
//Renderer
// render(<Navbar />, "navbar")
// render(<Body />, "root")
