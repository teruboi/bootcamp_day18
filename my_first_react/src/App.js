import React from 'react';
import moment from "moment";
import './App.css';
//importing unsplash API to be used in here
import unsplash from './unsplash';



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

//Component for the main app
class App extends React.Component {
  //Where the image data will be stored
  //from unsplash.com
  state = { images: [] }
  
  //function to find image associated with the query
  //on unsplash.com, then set the data to state.images
  //above.
  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    })

    this.setState({ images: response.data.results })
    console.log(this.state.images);
  }

  //rendering the HTML body
  render() {
    return (
      <div className='ui fluid container centered'>
        <div className='ui container' style={{ marginTop: '10px' }}>
          {/* Component searchBar for query input, that will be used for search the images */}
          <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
        <div className='ui grid centered container' style={{ marginTop: '10px', alignContent: 'center'}}>
          {/* Component for rendering the images called from API */}
          <Images data={this.state.images} />
        </div>
      </div>
    
    )
  }
}

//Images renderer
class Images extends React.Component {
  render() {
    return (
      //Using map function to output all image in the data array
       this.props.data.map((data, index) => (
        // using semantic ui and inline css
        // to group the image into 4 images/row with same ratio
        <div className='four wide column' key={index}>
          <img className='ui image Images' src={data.urls.small_s3} alt={data.alt_description} style={{ objectFit: 'cover', width: 300, height: 300 }}/>
        </div>
       ))
    );
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

//Component for handling form input
//In this case for submitting name
class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: "" }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

//Component to add search bar to body that
// will call the function in props
class SearchBar extends React.Component{
  state = { term: "" }

  //The function calls for another function
  //called in the component props
  onFormSubmit = (event) => {
    event.preventDefault()

    this.props.onSubmit(this.state.term)
  }

  //Rendering the search bar body to HTML
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className='field'>
            <label>Image Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    )
  }
}
//Exporting components to index.js
export { Navbar, Body, App, CommentContainer, Comments, Counting, Clock, Form, SearchBar };
