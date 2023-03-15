// Import di Axios, sass, createElement e createA
import axios from 'axios';
import '../style/main.scss';
import { createElement, createA, loadMore, loadMoreBtn, loaderBtn, pageContainer, loadingText,footer} from './createHTML.js';

// Lodash
const get = require('lodash.get');

// API
const LATEST_NEWS = process.env.API_NEW;
const BASE_NEWS = process.env.API_BASE;

// Dichiarazioni variabili
let listIdArr = [];
let start = 0;
let end = 10;

window.addEventListener('DOMContentLoaded', () => {
  loaderBtn.removeAttribute('id'); 
  getId();
});

loadMoreBtn.addEventListener('click', () => {
  loaderBtn.classList.add('loading-visible');
  loadingText.innerHTML = 'Loading... ';
  getId();
});

function getId(){

  axios.get(LATEST_NEWS)
    .then((res) => {

    for(let i = start; i < end && i < res.data.length; i++){
      listIdArr = res.data[i];
      getNews();
    }    

    if(end > res.data.length){
      loadMoreBtn.style.visibility = 'hidden'
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
    .then(() => {
      const loader = document.querySelector('#loader');
      loader.classList.add('loader-hidden');
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

  if(newsUrl != undefined){

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

    const urlValue = createA('a', 'url-value', newsUrl, 'blank','Link to the news')
    newsContainer.appendChild(urlValue);

  }else{
    return null;
  }

  const loadingText = document.querySelector('#loading-text');
  loaderBtn.classList.remove('loading-visible');
  loadingText.innerHTML = 'Load more ';

  const loader = document.querySelector('#loader');
  loader.classList.add('loader-hidden');
}

// Year update of the footer
let footerDate = new Date().getFullYear();

const footerDateDisplay = createElement('p', 'footer-date', '', footerDate)
footer.appendChild(footerDateDisplay);