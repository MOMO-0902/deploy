import axios from 'axios';

export default function getUserInfo(){
  return axios.get(`https://api.github.com/users/MOMO-0902`)
  .then((res) => ({
    gitInfo:res.data
  }))
}
