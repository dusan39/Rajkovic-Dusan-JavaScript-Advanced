import axios from 'axios';
import '../style/main.scss';
var _ = require('lodash');

//GET
axios.get('https://reqres.in/api/users?page=2')
.then((res) => {handleResult(res)})
.catch((err) => console.log(err))

function handleResult(data){
  console.log(data);
}

console.log(process.env.API_ID);

/*axios.get(process.env.API_ID)
.then((res) => {handleResult(res)})
.catch((err) => console.log(err))*/