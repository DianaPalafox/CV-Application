import './App.css';
import React from "react";
import Education from "./components/Education"
import Information from "./components/Information"
import Experience from "./components/Experience"
import Header from "./components/Header"

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <div className='Content'>
          <Information />
          <Education />
          <Experience />
        </div> 
      </div>
    )
  }
}

export default App;


