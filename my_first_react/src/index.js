//Importing React modules for rendering
import React from 'react';
import ReactDOM from 'react-dom';
import { faker } from "@faker-js/faker";
import moment from 'moment';


//Importing components from App.js
import { App, Navbar, Body, Comments, Counting, Clock, Form, SearchBar, CustomTextInput } from './App';
import './index.css';



//Function to simplify rendering to HTML
function render(content, id) {
  ReactDOM.render(content, document.getElementById(id))
}

//Rendering App component
render(<App />, "root")
//Renderer
// render(<Navbar />, "navbar")
// render(<Body />, "root")
