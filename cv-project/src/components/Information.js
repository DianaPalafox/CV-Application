import React from "react";

class Information extends React.Component {
    render(){
        return (
        <div>
            <h2>General Information</h2>
            <form>
                <div>
                    <label htmlFor='firstName'>First Name:</label>
                    <input type='text' id='firstName'/>
                </div>
                <div>
                    <label htmlFor='lastName'>Last Name:</label>
                    <input type='text' id='lastName'/>
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email'/>
                </div>
                <div>
                    <label htmlFor='tel'>Phone Number:</label>
                    <input type='tel' id='tel'/>
                </div>
            </form>
      </div>
    )
  }
}

export default Information;