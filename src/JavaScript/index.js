// Import di Axios, scss, createElement e createA
import axios from 'axios';
import '../style/main.scss';
import { createElement } from './createHTML.js';
import { createA } from './createHTML.js';

// Lodash
const get = require('lodash.get');

// API
const LATEST_NEWS = process.env.API_NEW;
const BASE_NEWS = process.env.API_BASE;

// Dichiarazioni variabili
let listIdArr = [];
let start = 0;
let end = 10;

// Dichiarazione elementi HTML
const loadMore = document.getElementById('load-more');
const pageContainer = document.getElementById('page-container');


window.onload = getId();

loadMore.addEventListener('click', getId);

function getId(){

  axios.get(LATEST_NEWS)
    .then((res) => {

    for(let i = start; i < end && i < res.data.length; i++){
      listIdArr = res.data[i];
      getNews();
    }

    if(end > res.data.length){
      start = 0;
      end = 10;
    } else {
      start = end;
      end += 10;
    }

  })
.catch((err) => { console.log(err);} );
}

function getNews(){
  let url = `${ BASE_NEWS + listIdArr + '.json' }`;
  
  axios.get(url)
    .then((res) => {

      let newsTitle = get(res, 'data.title');

      let newsUrl = get(res, 'data.url');

      let newsData = get(res, 'data.time');
      convertTime(newsData);

      displayNews(newsTitle, newsUrl, newsData);

    })
    .catch((err) => { console.log(err);} );
}

function convertTime(newsData){
  let dateObj = new Date(newsData * 1000);

  let day = dateObj.getDay().toString();
  let month = dateObj.getMonth().toString();
  let year = dateObj.getFullYear().toString();

  let hours = dateObj.getHours().toString().padStart(2,0);
  let minutes = dateObj.getMinutes().toString().padStart(2,0);

  let time = `${hours}:${minutes}`;
  let date = `${day}/${month}/${year}`;

  let fullDate = ('Time: ' + date + ' at ' + time);

  return fullDate;
}


function displayNews(newsTitle, newsUrl, newsData){

  const newsDiv = createElement('div', 'news-div', '', '')
  pageContainer.appendChild(newsDiv);

  const newsContainer = createElement('div', 'news-container','', '')
  newsDiv.appendChild(newsContainer);

  const titleContainer = createElement('div', 'title-container', '', '')
  newsContainer.appendChild(titleContainer);

  const titleValue = createElement('p', 'title-value', '', newsTitle)
  titleContainer.appendChild(titleValue);

  const dateValue = createElement('div', 'date-value', '',  convertTime(newsData))
  newsContainer.appendChild(dateValue);

  if(newsUrl != undefined){
    const urlValue = createA('a', 'url-value', newsUrl, 'blank','Link to the news')
    newsContainer.appendChild(urlValue);
  }else{
    const urlNull = createElement('button', 'url-null', '','There is no news')
    newsContainer.appendChild(urlNull);
  }
}