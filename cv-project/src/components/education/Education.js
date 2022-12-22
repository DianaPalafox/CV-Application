import React from "react";

class Education extends React.Component {
    render(){
        const { addEducation } = this.props;
        return (
        <div className="education-form">
            <h2>Education</h2>
            <form>
                <div>
                    <input type='text' id='title' placeholder="Degree"/>
                    <input type='text' id='university' placeholder="University"/>
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
                <div className="buttons">
                    <button type="submit" onClick={addEducation}>Add</button>
                    <button type="button">Delete</button>
                </div>
            </form>
      </div>
    )
  }
}

export default Education;