import axios from 'axios';

const SERVER = 'https://www.reddit.com/r/aww.json';

const Api = {
  fetchUsers() {
    return axios.get(SERVER)
        .then(response => response.data)
        .catch(error => {throw error});
  }
};

export default Api;