import React from "react";

function Information() {
    const [informationData, setInformationData] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            tel: ""
        }
    )

    function handleInformationChange(event) {
        const {name, value} = event.target
        setInformationData(prevInformationData => {
            return {
                ...prevInformationData,
                [name]: value
            }
        })
    }

      return (
        <div className="information-form">
            <h2>General Information</h2>
            <form>
                <div>
                    <input 
                        name='firstName' 
                        type='text' 
                        id='firstName' 
                        placeholder="First Name"
                        value={informationData.firstName}
                        onChange={handleInformationChange}
                    />
                    <input 
                        name='lastName' 
                        type='text' 
                        id='lastName' 
                        placeholder="Last Name"
                        value={informationData.lastName}
                        onChange={handleInformationChange}
                    />
                </div>
                <div>
                    <input 
                        name='email' 
                        type='email' 
                        id='email' 
                        placeholder="Email"
                        value={informationData.email}
                        onChange={handleInformationChange}
                    />
                    <input 
                        name='tel' 
                        type='tel' 
                        id='tel' 
                        placeholder="Phone Number"
                        value={informationData.tel}
                        onChange={handleInformationChange}
                    />
                </div>
            </form>
      </div>
    )
}

export default Information;