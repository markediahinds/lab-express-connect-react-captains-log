import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const [captainLogs, setCaptainLogs] = useState([])

    useEffect(() => {
        fetch('http://localhost:9999/logs')
        .then(res => res.json())
        .then(res => {
            setCaptainLogs(res)
            })
        .catch(err => console.error(err))
    }, [])

    return (
        <div>
            {captainLogs.map((captainLog, i) => {
                return (
                    <main key={i}>
                        <Link to={`/logs/${i}`}>{captainLog.captainName}</Link>
                    </main>
                )
            })}
        </div>
    );
};

export default Home;

/* fetch data, store array, need Hook, useState, save our array to our apps state, */