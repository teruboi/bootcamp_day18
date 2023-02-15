//Importing React modules for rendering
import React from 'react';
import ReactDOM from 'react-dom';

//Importing components from App.js
import { Navbar, Body } from './App';
import './index.css';

//Function to simplify rendering to HTML
function render(content, id) {
  ReactDOM.render(content, document.getElementById(id))
}

//Renderer
render(<Navbar />, "navbar")
render(<Body />, "root")
