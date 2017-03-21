import React from 'react';
import { Link } from 'react-router';

export default function UserDetailPage({user}){
  if (!user){
    return <pre>Loading...</pre>
  }
  return (
      <div>
        <Link to='/'>
          <div>Go back</div>
        </Link>
        <div className="content">
          <img src={user.thumbnail} alt=""/>
          <p>{user.name}</p>
          <ul>
            <li>Upvoted: {user.likes || 0}</li>
            <li>Downvoted: {user.dislikes || 0}</li>
          </ul>
        </div>
      </div>
  );
}