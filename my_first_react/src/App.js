import React, { useRef, useState } from 'react';
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

//Class for the comment container,
//converted from the function above
class CommentContainer extends React.Component {
  //Props used in the class
  //In this case, the comment data
  //(Name, Likes, Date, Comment, PP)
  constructor (props) {
    super(props)
    this.state = {
      count: parseInt(this.props.likes)
    }
  }
  render() {
    return (
      <div className='ui container comments'>
        <div className='comment'>
          <a href='/' className='avatar'>
            <img alt='avatar' src={this.props.avatar} />
          </a>
          <div className='content'>
            <a href='/' className='author' style={{textDecoration: "none"}}>
              {this.props.name}
              <div className='metadata'>
                <span className='date'>
                  {this.props.day} at {this.props.time}
                </span>
              </div>
              {/* Likes count */}
              | Likes: {this.state.count}
            </a>
            <div className='text'>
              {this.props.comment}
            </div>
            {/* Button for adding 1 like to Likes */}
            <div className='mini ui icon red button' onClick={()=>this.setState({ count: this.state.count + 1 })}>
              <i className='heart icon'></i> Like
            </div>
          </div>
        </div>
      </div>
    )
  }
}

//Calling the CommentContainer component with
//props from database
class Comments extends React.Component {
  render() {
    return this.props.data.map((dataComment, index) => (
      <div className='CommentContainer' key={index}>
        <CommentContainer
          avatar={dataComment.avatar}
          name={dataComment.name}
          day={moment(dataComment.time).format("ddd")}
          time={moment(dataComment.time).format("LT")}
          comment={dataComment.comment}
          likes={dataComment.like}
        />
      </div>
    ))
  }
}

//Example of data counting dynamically
class Counting extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  render() {
    return (
      <div>
        <h1>you clicked {this.state.count} times</h1>
        <button onClick={()=>this.setState({ count: this.state.count + 1 })}>click on me!</button>
      </div>
    )
  }
}

//Show time
class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }
  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.date.toLocaleTimeString()}.
        </h1>
      </div>
    )
  }
}
//Exporting components to index.js
export { Navbar, Body, App, CommentContainer, Comments, Counting, Clock };
