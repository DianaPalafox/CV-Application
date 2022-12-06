import React from "react";

class Education extends React.Component {
    render(){
        return (
        <div>
            <h2>Education</h2>
            <form>
                <div>
                    <label htmlFor='title'>Title of qualification:</label>
                    <input type='text' id='title'/>
                </div>
                <div>
                    <label htmlFor='university'>University:</label>
                    <input type='text' id='university'/>
                </div>
                <div>
                    <label htmlFor='from'>From:</label>
                    <input type='date' id='from'/>
                </div>
                <div>
                    <label htmlFor='to'>To:</label>
                    <input type='date' id='to'/>
                </div>
            </form>
      </div>
    )
  }
}

export default Education;