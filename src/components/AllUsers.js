import React from 'react';
import { Link } from 'react-router-dom';
import { profile, back } from '../assets/images';

export const AllUsers = () => {
    return (
        <div className="all-users">
            <Link to={`/geducar-julio-flores-test`}>
                <img style={{ width: '40px' }} src={`${back}`} />
            </Link>
            <img src={`${profile}`} alt="users"/>
            <h2>All users from API</h2>
        </div>
    )
}