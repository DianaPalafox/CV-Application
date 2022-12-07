import React from "react";

class Information extends React.Component {
    render(){
        return (
        <div>
            <h2>General Information</h2>
            <form>
                <div>
                    <input type='text' id='firstName' placeholder="First Name"/>
                    <input type='text' id='lastName' placeholder="Last Name"/>
                </div>
                <div>
                    <input type='email' id='email' placeholder="Email"/>
                    <input type='tel' id='tel' placeholder="Phone Number"/>
                </div>
            </form>
      </div>
    )
  }
}

export default Information;