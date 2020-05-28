import React from 'react';
import {Link} from 'react-router-dom'

const LandingPage = () => {
    return (
        <div className="container">
            <h1>Landing</h1>
            <p>This is the landing page</p>
            <Link to="/dashboard">Go to Dashboard</Link>
        </div>
    )
  }

export default LandingPage;