import React from "react";

class Experience extends React.Component {
    render(){
        return (
        <div>
            <h2>Work Experience</h2>
            <form>
                <div>
                    <label htmlFor='occupation'>Occupation:</label>
                    <input type='text' id='occupation'/>
                </div>
                <div>
                    <label htmlFor='employer'>Employer:</label>
                    <input type='text' id='employer'/>
                </div>
                <div>
                    <label htmlFor='from'>From:</label>
                    <input type='date' id='from'/>
                </div>
                <div>
                    <label htmlFor='to'>To:</label>
                    <input type='date' id='to'/>
                </div>
                <div>
                    <label htmlFor='description'>Job Description:</label>
                    <input type='textarea' rows="6" cols="50" id='description'/>
                </div>
            </form>
      </div>
    )
  }
}

export default Experience;