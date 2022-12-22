import './App.css';
import React from "react";
import Education from "./components/education/Education"
import Information from "./components/information/Information"
import Experience from "./components/experience/Experience"
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


