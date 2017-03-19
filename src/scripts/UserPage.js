import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from './userReducer';

class UserPage extends Component {
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(fetchUsers())
  }
  render() {
    return (
        <div className="App">
          <p>Here will be header with logo</p>
          Here we will have some info about user
        </div>
    );
  }
}


function mapStateToProps (state) {
  return {
    userState: state
  }
}

export default connect(mapStateToProps)(UserPage);