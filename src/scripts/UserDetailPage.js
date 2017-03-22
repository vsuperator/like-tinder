import React from 'react';
import { Link } from 'react-router';
import NavigateBefore from 'material-ui/svg-icons/image/navigate-before';
import Divider from 'material-ui/Divider';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import Favorite from 'material-ui/svg-icons/action/favorite';
import HighLightOff from 'material-ui/svg-icons/action/highlight-off';
import { green400, red400, grey100 } from 'material-ui/styles/colors';

export default function UserDetailPage({user}){
  return (
      <div className="user-detail-page">
        <div className="user-detail-page-header">
          <Link to='/' className="go-back">
            <NavigateBefore />
          </Link>
        </div>
        <Divider />
        <List>
          <ListItem
              disabled={true}
              leftAvatar={<Avatar src={user.thumbnail} />}
              >
            {user.name}
          </ListItem>
          <Divider />
          <ListItem
              disabled={true}
              leftAvatar={
                <Avatar
                  color={green400}
                  backgroundColor={grey100}
                  icon={<Favorite />}
                  />
                }
              >
            {user.likes || 0}
          </ListItem>
          <Divider />
          <ListItem
              disabled={true}
              leftAvatar={
                <Avatar
                  color={red400}
                  backgroundColor={grey100}
                  icon={<HighLightOff />}
                  />
                }
              >
            {user.dislikes || 0}
          </ListItem>
        </List>
      </div>
  );
}