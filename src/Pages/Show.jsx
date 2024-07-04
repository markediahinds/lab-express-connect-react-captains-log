import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

const Show = () => {
    const API = import.meta.env.VITE_BASE_URL
    const [captainDetails, setCaptainDetails] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        fetch(`${API}/${id}`)
            .then(res => res.json()) 
            .then(res => setCaptainDetails(res))
            .catch(err => console.error(err))
    }, [])

    return (
        <div>
            { captainDetails && 
                <div>
                    <h3>Meet Captain {captainDetails.captainName}!</h3>
                    <h5>Born in the Year {captainDetails.yearBorn}, she's known for: {captainDetails.knownFor}</h5>
                </div>
            }
        </div>
    );
};

export default Show;

// <a href={captainDetails.url} target='_blank'>