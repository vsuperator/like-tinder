import React from 'react';
import '../styles/App.css';
import { fetchUsers, showNextUser, likeUser, dislikeUser } from './userReducer';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(fetchUsers());
  }
  handleClick(e){
    const { dispatch, currentUser } = this.props;
    const { value } = e.target;
    if (value === 'like'){
      dispatch(likeUser(currentUser.id));
    } else {
      dispatch(dislikeUser(currentUser.id));
    }
    dispatch(showNextUser(currentUser.id));
  }
  render(){
    const { children, currentUser } = this.props;
    return (
        <div className='container'>
          {React.cloneElement(children, {
            onClick: this.handleClick,
            user: currentUser
          })}
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(App);