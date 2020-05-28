import React from 'react';
import Jobs from './Jobs'
import AddJob from './AddJob'
//import uuid from 'uuid';
import axios from 'axios';

class JobsList extends React.Component {
    state = {
        jobs: [
            // {
            //     id: uuid.v4(),
            //     title: 'Small parcel from Woodlands to Ang Mo Kio',
            //     completed: false
            // },
            // {
            //     id: uuid.v4(),
            //     title: 'Large parcel from Simei to Yishun',
            //     completed: false
            // },
            // {
            //     id: uuid.v4(),
            //     title: 'Medium parcel from Jurong to Tuas',
            //     completed: false
            // }
        ]
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(res => this.setState({ jobs: res.data}))
    }

    markComplete = (id) => {
        this.setState({jobs: this.state.jobs.map(todo => {
            if(todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo;
        })})
    }

    addJobs = (title) => {
        // const newJob = {
        //     id: uuid.v4(),
        //     title: title,
        //     completed: false
        // }
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed:false
        })
        .then(res => this.setState({jobs: [...this.state.jobs, res.data] }));
        // this.setState({jobs: [...this.state.jobs, newJob] })
    }

    render() {
        return (
          <div>
              <AddJob addJobs={this.addJobs} />
              <Jobs jobs={this.state.jobs} markComplete={this.markComplete}/>
          </div>
        )
    }
}

export default JobsList;