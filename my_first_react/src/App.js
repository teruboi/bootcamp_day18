import { useRef, useState } from 'react';
import moment from "moment";
import './App.css';

//Module for navbar, copied from Bootstrap and modified
function Navbar() {
  return (
    <div className="Navbar">
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand fw-bold" href='#'>BOOTCAMP Batch 5 : Experiment with REACTJS</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="d-flex" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href='#'>Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href='#'>About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href='#'>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

//Module for the body, in this case only heading text
function Body() {
  return (
    <div class="container-fluid">
      <h1>This is React</h1>
    </div>
  );
}

//Component for the main chat / comment app
function App(props) {

  //Calling the data from props
  const data = props.data
  // console.log(data);

  //Looping return for each data in the array
  const comments = data.map((e) => {

    //Configuring past day until present
    const date = moment().format()
    const diff = moment(date).diff(e.time, 'days')

    let day

    //If the day difference between today and comment date is 0
    //prints out "Today"
    //else prints out "... days ago"
    if (diff === 0) {
      day = 'Today'
    } else {
      day = moment(date).to(e.time)
    }

    //Returning the whole comment component
    return(
      <div class="comment">
        <a class="avatar">
          <img alt='avatar' src={e.avatar} />
        </a>
        <div class="content">
          <a class="author" >{e.name}</a>
          <div class="metadata">
            <span class="date">{day} at {moment(e.time).format('LT')}</span>
          </div>
          <div class="text">
            {e.comment}
          </div>
        </div>
      </div>
    )  
  })

  //HTML (JSX)
  return( 
    <div class="ui comments">
      {comments}
    </div>
  )
}

//Exporting components to index.js
export { Navbar, Body, App };
