import React, { createRef } from 'react';
import moment from "moment";
import './App.css';
//importing unsplash API to be used in here
import youtube from './youtube';



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
  //Where the video data will be stored
  //from youtube.com
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }
  }
  
  //function to find image associated with the query
  //on unsplash.com, then set the data to state.images
  //above.
  onSearchSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: { q: term }
    })

    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
    console.log(this.state);
  }

  handleVideoSelect = (video) => {
    this.setState({selectedVideo: video})
  }

  //rendering the HTML body
  render() {
    return (
      <div className='ui container'>
          {/* Component searchBar for query input, that will be used for search the videos */}
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className='ui grid'>
          {/* Component for rendering the videos called from API */}
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoSelected video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const VideoList = ({ videos , handleVideoSelect }) => {
  return (
    <div className='ui relaxed divided list'>
      {videos.map((e) => {
        return <VideoItem key={e.id.videoId} video={e} handleVideoSelect={handleVideoSelect} />
      })}
    </div>
  )
};

const VideoItem = ({video , handleVideoSelect}) => {
  return (
      <div onClick={ () => handleVideoSelect(video)} className=' video-item item'>
          <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
          <div className='content'>
              <div className='header '>{video.snippet.title}</div>
          </div>
      </div>
  )
};

const VideoSelected = ({ video }) => {
  if (!video) {
    return <div>Loading ...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof(video));
  return (
      <div>
          <div className='ui embed'>
              <iframe src={videoSrc} allowFullScreen title='Video player'/>
          </div>
          <div className='ui segment'>
              <h4 className='ui header'>{video.snippet.title}</h4>
              <p>{video.snippet.description}</p>
          </div>
      </div>
  )
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
    this.inputField = createRef()

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = { value: "" }
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
    console.log(this.inputField.current.value);
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.inputField.current.value)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            ref={this.inputField}
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
  constructor(props) {
    super(props);
    this.state = { term: "" }
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }
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

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.textInput.current.focus();
  }

  render() {
    // tell React that we want to associate the <input> ref
    // with the `textInput` that we created in the constructor
    return (
      <div>
        <input
          type="text"
          value={this.textInput.current}
          ref={this.textInput} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
        <span>

        </span>
      </div>
    );
  }
}
//Exporting components to index.js
export { Navbar, App, Clock, Form, SearchBar, CustomTextInput };
