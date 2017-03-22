import React from 'react';
import { Link } from 'react-router';
import Favorite from 'material-ui/svg-icons/action/favorite';
import FloatingActionButton from 'material-ui/FloatingActionButton';

export default function UserPage({ user, onClick }) {
  if (!user){
    return <pre>Loading...</pre>
  }
  return (
      <div className="user-page">
        <p>Here will be header with logo</p>
        <Link to={`/${user.id}/`}>
          <img src={user.thumbnail} alt=""/>
        </Link>

        <div>
          <Favorite />
          <button onClick={onClick} value='dislike'>Dislike</button>
          <button onClick={onClick} value='like'>Like</button>
        </div>
      </div>
  );
}