import React from 'react';
import { Link } from 'react-router';
import Favorite from 'material-ui/svg-icons/action/favorite';
import Clear from 'material-ui/svg-icons/content/clear';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';

export default function UserPage({ user, onClick }) {
  return (
      <div className="user-page">
        <div className="user-page-header">
          Tinder Test
        </div>
        <div className="user-page-photo">
          <Link to={`/${user.id}/`}>
            <img src={user.thumbnail} alt=""/>
          </Link>
        </div>
        <div className="user-page-btns">
          <FloatingActionButton
              className="user-page-dislike-btn"
              mini={true}
              onClick={onClick.bind(null, 'dislike')} value='dislike'
              >
            <Clear />
          </FloatingActionButton>
          <FloatingActionButton
              mini={true}
              onClick={onClick.bind(null, 'like')}
              >
            <Favorite />
          </FloatingActionButton>
        </div>
      </div>
  );
}