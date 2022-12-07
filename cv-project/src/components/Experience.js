import React from "react";

class Experience extends React.Component {
    render(){
        return (
        <div>
            <h2>Work Experience</h2>
            <form>
                <div>
                    <input type='text' id='occupation' placeholder="Occupation"/>
                    <input type='text' id='employer' placeholder="Employer"/>
                </div>
                <div className="date">
                    <div className="from">
                        <label htmlFor="from">From: </label>
                        <input type='date' id='from' placeholder="From"/>
                    </div>
                    <div className="to">
                        <label htmlFor="To">To: </label>
                        <input type='date' id='to' placeholder="To"/>
                    </div>
                </div>
                <div>
                    <input type='textarea' rows="6" cols="50" id='description' placeholder="Job Description"/>
                </div>
                <div className="buttons">
                    <button type="submit">Add</button>
                    <button type="button">Delete</button>
                </div>
            </form>
      </div>
    )
  }
}

export default Experience;