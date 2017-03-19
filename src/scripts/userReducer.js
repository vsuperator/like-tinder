export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED';
export const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

const initialState = {
  loading: false,
  error: false,
  currentUser: null,
  users: []
};

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

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return Object.assign({}, state, {loading: true});
    case FETCH_USERS_SUCCEEDED:
      const { users, currentUser } = action.payload;
      return Object.assign({}, state, {users, currentUser, loading: false});
    case FETCH_USERS_FAILED:
      return Object.assign({}, state, {hasError: true});
    default:
      return state;
  }
}