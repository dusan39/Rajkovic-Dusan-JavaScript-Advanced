import axios from 'axios';
import '../style/main.scss';
var _ = require('lodash');

const TECH_ID = process.env.API_ID;

//GET
axios.get(TECH_ID)
.then((res) => {handleResult(res)})
.catch((err) => console.log(err))

function handleResult(data){
  console.log(data);
}

