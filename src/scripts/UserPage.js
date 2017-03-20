import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers, showNextUser } from './userReducer';
import '../styles/App.css';

class UserPage extends Component {
  constructor(p){
    super(p);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(fetchUsers())
  }
  handleClick(e){
    const { dispatch, currentUser } = this.props;
    dispatch(showNextUser(currentUser.id))
  }
  render() {
    const { currentUser } = this.props;
    if (!currentUser){
      return <pre>Loading...</pre>
    }
    return (
        <div className="user-page">
          <p>Here will be header with logo</p>
          <img src={currentUser.thumbnail} alt=""/>
          <div>
            <button onClick={this.handleClick} value='dislike'>Dislike</button>
            <button onClick={this.handleClick} value='like'>Like</button>
          </div>
        </div>
    );
  }
}


function mapStateToProps (state) {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(UserPage);