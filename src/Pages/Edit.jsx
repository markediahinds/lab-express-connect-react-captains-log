import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
    const API = import.meta.env.VITE_BASE_URL
    const navigate = useNavigate()
    const { id } = useParams()
    const [editedLog, setEditedLog] = useState({
        captainName: '',
        yearBorn: '',
        yearsAlive: '',
        culture: '',
        timePeriod: '',
        is_bornIntoMoney: false,
        title: '',
        whyPiracy: '',
        somethingILoveAboutHer: '',
        knownFor: '',        
        storyEnds: '',
        // is_bornIntoMoney: false
    })

useEffect(() => {
    fetch(`${API}/${id}`)
    .then(res => res.json())
    .then(res => {setEditedLog((prevState) => res)})
    .catch(err => console.error(err))
}, [id])

const handleChange = (e) => {
    setEditedLog((prevState) => {
        return { ...prevState, [e.target.name]: e.target.value }
    })
}

const handleCheckBox = (e) => {
    setEditedLog((prevState) => { //setters //asynchronous //we console.log before state finished updating 
        // const important = !editedLog.is_bornIntoMoney
        return { ...prevState,  [e.target.name]: e.target.checked }
    }) 
    console.log("edit", editedLog) // avoid trying to use the state in the function that sets/updates the state. we don't have access to the new value yet.
}
console.log(editedLog)

const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`${API}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(editedLog),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(res => {
            navigate(`/logs/${id}`)
        })
        .catch(err => console.error(err))
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Edit Log</legend>
                <input 
                    type="text"
                    placeholder="Captain's Name"
                    name="captainName"
                    value={editedLog.captainName}
                    onChange={handleChange}
                />
                <br/>
                <input 
                    type="number" 
                    placeholder='Birth Year'
                    name="yearBorn"
                    value={editedLog.yearBorn}
                    onChange={handleChange}
                />
                <br/>
                <input 
                    type="number" 
                    placeholder='Years Alive' // idea: Death Year entered so yearsAlive is calculated and updated in back-end data once submitted 
                    name="yearsAlive"
                    value={editedLog.yearsAlive}
                    onChange={handleChange}
                />
                <br/>
                  <input 
                    type="text"
                    placeholder="Culture (ex. Morrocan, French, Irish)" // I'd give a drop down list of all options
                    name="culture"
                    value={editedLog.culture}
                    onChange={handleChange}
                />
                <br/>
                  <input 
                    type="text"
                    placeholder="Time Period (ex. 14th century)" // drop down of a few centuries, other to incl. addtl
                    name="timePeriod"
                    value={editedLog.timePeriod}
                    onChange={handleChange}
                />    
                <br/>
                  <input 
                    type="text"
                    placeholder="Title" // choose a title for this Captain's Book
                    name="title"
                    value={editedLog.title}
                    onChange={handleChange}
                />
                <br/>
                  <input 
                    type="text"
                    placeholder="Why Piracy?" // why did they choose the life of piracy? the start of their piracy story.
                    name="whyPiracy"
                    value={editedLog.whyPiracy}
                    onChange={handleChange}
                />
                <br/>
                  <input 
                    type="text"
                    placeholder="Something you Love" // about this Captain // give prompts
                    name="somethingILoveAboutHer"
                    value={editedLog.somethingILoveAboutHer}
                    onChange={handleChange}
                />
                <br/>
                  <input 
                    type="text"
                    placeholder="Known for?" // What are they known for? // may we search the internet to match name and give suggestions?
                    name="knownFor"
                    value={editedLog.knownFor}
                    onChange={handleChange}
                />
                <br/>
                  <input 
                    type="text"
                    placeholder="Story end?" // How does their story end
                    name="storyEnds"
                    value={editedLog.storyEnds}
                    onChange={handleChange}
                />
                    <br/>
                  <input 
                    type="checkbox"
                    id="bornIntoMoney"
                    name="is_bornIntoMoney"
                    checked={editedLog.is_bornIntoMoney}
                    onChange={handleCheckBox}
                />
                <label htmlFor="bornIntoMoney">Born Into Money</label>
                <br/>
                <input type="submit" value="Submit"/>
            </fieldset>
        </form>
        </div>
    );
};

export default Edit;