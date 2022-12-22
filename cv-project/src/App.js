import './App.css';
import React from "react";
import Education from "./components/education/Education"
import Information from "./components/information/Information"
import Experience from "./components/experience/Experience"
import Header from "./components/Header"

function App() {
  const [education, setEducation] = React.useState(false)
  const [experience, setExperience] = React.useState(false)

  function addEducation() {
    setEducation(prevEducation => !prevEducation)
  }

  function addExperience() {
    setExperience(prevExperience => !prevExperience)
  }
  

    return (
      <div className='App'>
        <Header />
        <div className='Content'>
          <Information />
          <Education />
          {education && <Education />}
          <div className="buttons">
              <button type="submit" onClick={addEducation}>{education ? "Delete" : "Add"}</button>
          </div>
          <Experience />
          {experience && <Experience />}
          <div className="buttons">
              <button type="submit" onClick={addExperience}>{experience ? "Delete" : "Add"}</button>
          </div>
        </div> 
      </div>
    ) 
}

export default App;


