import React from 'react';
import {Dropdown} from 'react-bootstrap'
import JobsList from './JobsList'
import {Link} from 'react-router-dom';

    const Dashboard = () => {
    const authInstance = window.gapi.auth2.getAuthInstance()
    const user = authInstance.currentUser.get()
    const profile = user.getBasicProfile()
    const email = profile.getEmail() 
    const userName = profile.getName()

    return (
        <>
            <nav>
              <div>Dashboard</div>
                <Dropdown>
                    <Dropdown.Toggle as="a">
                        {email}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={authInstance.signOut}>Sign out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </nav>
            <div className="container">
                <p>Welcome to dashboard {userName}! </p>
                <JobsList/>
                <p>These are the jobs</p>
                <Link to={"/about"}>About</Link>
            </div>
        </>
    )
  }

  export default Dashboard;