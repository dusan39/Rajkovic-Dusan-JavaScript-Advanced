// Import of Axios, scss and get from lodash
import axios from 'axios';
import '../style/main.scss';
import get from 'lodash.get';
import { result } from 'lodash';
import { createElement } from './createHTML.js';
import { createA } from './createHTML.js';

// API
const LATEST_NEWS = process.env.API_NEW;
const BASE_NEWS = process.env.API_BASE;

// Dichiarazioni variabili
let listIdArr = [];

function getId(){
  axios.get(LATEST_NEWS)
    .then((res) => {
      listIdArr = res.data[0];
      getNews();   
    })
    .catch((err) => { console.log(err);} );
}

getId();

function getNews(){
  let url = `${ BASE_NEWS + listIdArr + '.json' }`;
  
  axios.get(url)
    .then((res) => {
      let newsTitle = res.data.title;
      console.log('Title: ' + newsTitle);

      let newsUrl = res.data.url;
      console.log('Url: ' + newsUrl);
      getUrl(newsUrl);

      let newsData = res.data.time;
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
  console.log(fullDate);

  return fullDate;
}


function displayNews(newsTitle, newsUrl, newsData){
  const newsDiv = createElement('div', 'news-div', '', '')
  document.body.appendChild(newsDiv);

  const newsContainer = createElement('div', 'news-container','', '')
  newsDiv.appendChild(newsContainer);

  const titleContainer = createElement('div', 'title-container', '', '')
  newsContainer.appendChild(titleContainer);

  const titleValue = createElement('p', 'title-value', '', newsTitle)
  titleContainer.appendChild(titleValue);

  const dateValue = createElement('div', 'date-value', '',  convertTime(newsData))
  newsContainer.appendChild(dateValue);

  const urlValue = createA('a', 'url-value', newsUrl, 'blank','Link to the news')
  newsContainer.appendChild(urlValue);
}

function getUrl(newsUrl){
  if(newsUrl === undefined){
    // disabilitare il tasto per visualizzare l'informazione
  }else{
    // assegnare il valore all'elemento html
  }
}

