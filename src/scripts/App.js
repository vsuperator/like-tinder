import React from 'react';
import '../styles/App.css';
import { fetchUsers, showNextUser, likeUser, dislikeUser } from './userReducer';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(fetchUsers());
  }
  handleClick(value){
    const { dispatch, currentUser } = this.props;
    if (value === 'like'){
      dispatch(likeUser(currentUser.id));
    } else {
      dispatch(dislikeUser(currentUser.id));
    }
    dispatch(showNextUser(currentUser.id));
  }
  renderLoader(){
    return <CircularProgress size={60} thickness={7} />
  }
  renderChildren(){
    const { children, currentUser } = this.props;
    return React.cloneElement(children, {
      onClick: this.handleClick,
      user: currentUser
    })
  }
  render(){
    const { currentUser } = this.props;
    return (
        <div className='container'>
          {
            currentUser ?
                this.renderChildren() :
                this.renderLoader()

          }
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