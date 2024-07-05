import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'

const Show = () => {
    const API = import.meta.env.VITE_BASE_URL
    const navigate = useNavigate()
    const { id } = useParams()
    const [captainDetails, setCaptainDetails] = useState(null)

    const handleDelete = () => {
        fetch(`${API}/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(res => {
                navigate('/logs')
            })
            .catch(err => console.error(err))
    }

    useEffect(() => {
        fetch(`${API}/${id}`)
            .then(res => res.json()) 
            .then(res => setCaptainDetails(res))
            .catch(err => console.error(err))
    }, [])

    if(!captainDetails) return <div>Loading...</div>
    return (
        <div>
            { captainDetails && 
                <div>
                    <h3>Meet Captain {captainDetails.captainName}!</h3>
                    <h5>Born in the Year {captainDetails.yearBorn}</h5>
                    <h4>Something I love about her story: {captainDetails.somethingILoveAboutHer}</h4>
                    <Link to={`/logs/${id}/edit`}>
                        <button>Edit</button>
                    </Link>
                    <br/>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            }
        </div>
    );
};

export default Show;

// <a href={captainDetails.url} target='_blank'>