import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// The state is what controls what the value is for each input. Inputs get their value from state
//  A controlled component gets its value from the state. 

const New = () => {
    const API = import.meta.env.VITE_BASE_URL
    const navigate = useNavigate()
    const [newLog, setNewLog] = useState({
        captainName: '',
        yearBorn: '',
        yearsAlive: '',
        culture: '',
        timePeriod: '',
        // bornIntoMoney: false,
        title: '',
        whyPiracy: '',
        somethingILoveAboutHer: '',
        knownFor: '',        
        storyEnds: '',
        is_bornIntoMoney: false
    })

    
    const handleChange = (e) => {
        setNewLog((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value }
        })
    }

    const handleCheckBox = (e) => {
        setNewLog((prevState) => {
            const bornIntoMoney = !newLog.bornIntoMoney
            return { ...prevState, is_bornIntoMoney: bornIntoMoney }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(API, {
            method: 'POST',
            body: JSON.stringify(newLog),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            navigate('/logs')
        })
        .catch(err => console.error(err))

    }


    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>New Log</legend>
                <input 
                    type="text"
                    placeholder="Captain's Name"
                    name="captainName"
                    value={newLog.captainName}
                    onChange={handleChange}
                />
                <br/>
                <input 
                    type="text" 
                    placeholder='Birth Year'
                    name="yearBorn"
                    value={newLog.yearBorn}
                    onChange={handleChange}
                />
                <br/>
                <input 
                    type="text" 
                    placeholder='Years Alive' // idea: Death Year entered so yearsAlive is calculated and updated in back-end data once submitted 
                    name="yearsAlive"
                    value={newLog.yearsAlive}
                    onChange={handleChange}
                />
                <br/>
                  <input 
                    type="text"
                    placeholder="Culture (ex. Morrocan, French, Irish)" // I'd give a drop down list of all options
                    name="culture"
                    value={newLog.culture}
                    onChange={handleChange}
                />
                <br/>
                  <input 
                    type="text"
                    placeholder="Time Period (ex. 14th century)" // drop down of a few centuries, other to incl. addtl
                    name="timePeriod"
                    value={newLog.timePeriod}
                    onChange={handleChange}
                />    
                <br/>
                  <input 
                    type="text"
                    placeholder="Title" // choose a title for this Captain's Book
                    name="title"
                    value={newLog.title}
                    onChange={handleChange}
                />
                <br/>
                  <input 
                    type="text"
                    placeholder="Why Piracy?" // why did they choose the life of piracy? the start of their piracy story.
                    name="whyPiracy"
                    value={newLog.whyPiracy}
                    onChange={handleChange}
                />
                <br/>
                  <input 
                    type="text"
                    placeholder="Something you Love" // about this Captain // give prompts
                    name="somethingILoveAboutHer"
                    value={newLog.somethingILoveAboutHer}
                    onChange={handleChange}
                />
                <br/>
                  <input 
                    type="text"
                    placeholder="Known for?" // What are they known for? // may we search the internet to match name and give suggestions?
                    name="knownFor"
                    value={newLog.knownFor}
                    onChange={handleChange}
                />
                <br/>
                  <input 
                    type="text"
                    placeholder="Story end?" // How does their story end
                    name="storyEnds"
                    value={newLog.storyEnds}
                    onChange={handleChange}
                />
                <br/>
                  <input 
                    type="checkbox"
                    id="bornIntoMoney"
                    checked={newLog.bornIntoMoney}
                    onChange={handleCheckBox}
                />
                <label htmlFor="bornIntoMoney">Born Into Money</label>
                <br/>
                <input type="submit" value="Submit"/>
            </fieldset>
        </form>
    );
};

export default New;