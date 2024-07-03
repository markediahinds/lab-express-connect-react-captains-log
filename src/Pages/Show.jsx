import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

const Show = () => {
    const [captainDetails, setCaptainDetails] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:9999/logs/${id}`)
            .then(res => res.json()) 
            .then(res => setCaptainDetails(res))
            .catch(err => console.error(err))
    }, [])

    return (
        <div>
            { captainDetails && 
                <div>
                    <h3>Meet Captain {captainDetails.captainName}!</h3>
                </div>
            }
        </div>
    );
};

export default Show;

// <a href={captainDetails.url} target='_blank'>