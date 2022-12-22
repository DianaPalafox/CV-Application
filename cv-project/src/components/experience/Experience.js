import React from "react";

function Experience() {
    const [experienceData, setExperienceData] = React.useState(
        {
            occupation: "",
            employer: "",
            from: "",
            to: "",
            description: ""
        }
    )

    function handleExperienceChange(event) {
        const {name, value} = event.target
        setExperienceData(prevExperienceData => {
            return {
                ...prevExperienceData,
                [name]: value
            }
        })
    }
    
        return (
        <div className="experience-form">
            <h2>Work Experience</h2>
            <form>
                <div>
                    <input 
                        type='text' 
                        id='occupation' 
                        placeholder="Occupation"
                        name="occupation"
                        value={experienceData.occupation}
                        onChange={handleExperienceChange}
                    />
                    <input 
                        type='text' 
                        id='employer' 
                        placeholder="Employer"
                        name="employer"
                        value={experienceData.employer}
                        onChange={handleExperienceChange}
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
                            value={experienceData.from}
                            onChange={handleExperienceChange}
                        />
                    </div>
                    <div className="to">
                        <label htmlFor="To">To: </label>
                        <input 
                            type='date' 
                            id='to' 
                            placeholder="To"
                            name="to"
                            value={experienceData.to}
                            onChange={handleExperienceChange}
                        />
                    </div>
                </div>
                <div>
                    <textarea
                        rows="6" 
                        cols="50"
                        id='description' 
                        placeholder="Job Description"
                        name="description"
                        value={experienceData.description}
                        onChange={handleExperienceChange}
                    />
                </div>
            </form>
      </div>
    )
}

export default Experience;