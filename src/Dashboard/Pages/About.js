import React from 'react';
import {Link} from 'react-router-dom';

export default function About() {
    return (
        <div>
            <h1>About</h1>
            <p>This is the SendIt App for Orbital 2020 attempt 1</p>
            <Link to={"/dashboard"}>Go back to dashboard</Link>
        </div>
    );
}
