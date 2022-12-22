import React from "react";

class Information extends React.Component {
    render(){
        return (
        <div className="information-form">
            <h2>General Information</h2>
            <form>
                <div>
                    <input name='firstName' type='text' id='firstName' placeholder="First Name"/>
                    <input name='lastName' type='text' id='lastName' placeholder="Last Name"/>
                </div>
                <div>
                    <input name='email' type='email' id='email' placeholder="Email"/>
                    <input name='tel' type='tel' id='tel' placeholder="Phone Number"/>
                </div>
            </form>
      </div>
    )
  }
}

export default Information;