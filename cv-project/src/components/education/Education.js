import React from "react";

function Education() {
    const [educationData, setEducationData] = React.useState(
        {
            title: "",
            university: "",
            from: "",
            to:"",
        }
    )

    function handleEducationChange(event) {
        const {name, value} = event.target
        setEducationData(prevEducationData => {
            return {
                ...prevEducationData,
                [name]: value
            }
        })
    }

        return (
        <div className="education-form">
            <h2>Education</h2>
            <form>
                <div>
                    <input 
                        type='text' 
                        id='title' 
                        placeholder="Degree" 
                        name="title"
                        value={educationData.title}
                        onChange={handleEducationChange}
                    />
                    <input 
                        type='text' 
                        id='university' 
                        placeholder="University"
                        name="university"
                        value={educationData.university}
                        onChange={handleEducationChange}
                    />
                </div>
                <div className="date">
                    <div className="from">
                        <label htmlFor="from">From: </label>
                        <input 
                            type='date' 
                            id='from' 
                            placeholder="From"
                            name="from"
                            value={educationData.from}
                            onChange={handleEducationChange}
                        />
                    </div>
                    <div className="to">
                        <label htmlFor="To">To: </label>
                        <input 
                            type='date' 
                            id='to' 
                            placeholder="To"
                            name="to"
                            value={educationData.to}
                            onChange={handleEducationChange}
                        />
                    </div>
                </div>
            </form>
      </div>
    )

}

export default Education;