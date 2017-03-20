export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED';
export const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';
export const SHOW_NEXT_USER = 'SHOW_NEXT_USER';

export function fetchUsers(){
  return {
    type: FETCH_USERS
  }
}

export function fetchUsersSucceeded(payload){
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload
  }
}

export function fetchUsersFailed(error){
  return {
    type: FETCH_USERS_FAILED,
    payload: error
  }
}

export function showNextUser(userId){
  return {
    type: SHOW_NEXT_USER,
    payload: userId
  }
}

const initialState = {
  loading: false,
  error: false,
  currentUser: null,
  users: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return Object.assign({}, state, {loading: true});
    case FETCH_USERS_SUCCEEDED:
      const { users, currentUser } = action.payload;
      return Object.assign({}, state, {users, currentUser, loading: false});
    case FETCH_USERS_FAILED:
      return Object.assign({}, state, {hasError: true});
    case SHOW_NEXT_USER:
        const usersLength = state.users.length;
      return Object.assign({}, state, {
        currentUser: state.users[(state.users.findIndex(user => user.id === action.payload) + 1)%usersLength]
      });
    default:
      return state;
  }
}