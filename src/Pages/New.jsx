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
                    placeholder="Culture (ex. Morracan, French, Irish)" // I'd give a drop down list of all options
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
                {/* <input 
                    type="radio"
                    id="moneyTrue"
                    name="bornIntoMoney"
                    value={newLog.bornIntoMoney}
                    onChange={handleRadioBtn}
                />
                <label for='moneyTrue'>Born Into Money</label>
                <input 
                    type="radio"
                    id="moneyFalse"
                    name="bornIntoMoney"
                    value={newLog.bornIntoMoney}
                    onChange={handleRadioBtn}
                />
                <label for='moneyTrue'>NOT Born Into Money/Poverty</label> */}
                <br/>
                  <input 
                    type="text"
                    placeholder="Title this Captain's Book"
                    name="title"
                    value={newLog.title}
                    onChange={handleChange}
                />
                <br/>
                  <input 
                    type="text"
                    placeholder="Why the life of Piracy?"
                    name="whyPiracy"
                    value={newLog.whyPiracy}
                    onChange={handleChange}
                />
                <br/>
                  <input 
                    type="text"
                    placeholder="Something you Love about this Captain"
                    name="somethingILoveAboutHer"
                    value={newLog.somethingILoveAboutHer}
                    onChange={handleChange}
                />
                <br/>
                  <input 
                    type="text"
                    placeholder="Tell us what they are Known for"
                    name="knownFor"
                    value={newLog.knownFor}
                    onChange={handleChange}
                />
                <br/>
                  <input 
                    type="text"
                    placeholder="How does their story end?"
                    name="storyEnds"
                    value={newLog.storyEnds}
                    onChange={handleChange}
                />
                <br />
                  <input 
                    type="checkbox"
                    id="bornIntoMoney"
                    checked={newLog.bornIntoMoney}
                    onChange={handleCheckBox}
                />
                <label htmlFor="bornIntoMoney">True</label>
                <br/>
                <input type="submit" value="Submit"/>
            </fieldset>
        </form>
    );
};

export default New;