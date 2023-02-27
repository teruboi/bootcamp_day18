//Implement YouTube API using axios
import axios from 'axios';

export default axios.create({
    //baseURL where the API is
    baseURL: "https://www.googleapis.com/youtube/v3",

    //Auth for the key associated with the user API and other config
    params: {
      part: "snippet",
      maxResults: 5,
      key: 'AIzaSyCFdxM2kGUcrrKhrQtANv94kizOwoPB01w'
    }
  })