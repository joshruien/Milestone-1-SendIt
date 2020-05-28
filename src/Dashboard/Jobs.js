import React from 'react';
import JobItem from './JobItem';
//import PropTypes from 'prop-types';

class Jobs extends React.Component {
    render() {
       return this.props.jobs.map((todo) => (
           <JobItem key={todo.id} todo={todo} markComplete={this.props.markComplete} />
       ));
    }
}


export default Jobs;