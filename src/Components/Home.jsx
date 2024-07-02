import React, { useState, useEffect } from 'react';

const Home = () => {
    const [logs, setLogs] = useState([])

    useEffect(() => {
        fetch('http://localhost:9999')
        .then(res => res.json())
        .then(res => {
            console.log(res)
            })
        .catch(err => console.error(err))
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default Home;

/* fetch data, store array, need Hook, useState, save our array to our apps state, */