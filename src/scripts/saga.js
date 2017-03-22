import { put, takeEvery } from 'redux-saga/effects';
import Api from './Api';
import { fetchUsersSucceeded, fetchUsersFailed } from './userReducer';


function* fetchUsers() {
  try {
    const data = yield Api.fetchUsers();
    const users = data.data.children.map(user => user.data);
    const sorted = users.sort((a,b) => (new Date(b.created) - new Date(a.created)));
    const currentUser = sorted[0];
    yield put(fetchUsersSucceeded({ users, currentUser}))
  } catch (error) {
    yield put(fetchUsersFailed(error))
  }
}

export default function* rootSaga() {
  yield takeEvery('FETCH_USERS', fetchUsers);
}