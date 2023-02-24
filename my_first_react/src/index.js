//Importing React and ReactDOM libraries
import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import Contact from './pages/contact';
import About from './pages/about';
import Navbar from './navbar';
import { Counter } from './counter/counter';
import store from './store'
import { Provider } from 'react-redux'

function render(id, object) {
  const root = createRoot(document.getElementById(id))
  root.render(object)
}

//Create a function for navigation
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/counter" exact element={<Counter />} />
      </Routes>
    </Router>    
  );
}

render('root', (
  <Provider store={store}>
    <App />
  </Provider>
))