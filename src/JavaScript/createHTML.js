export const createElement = (tag, id, href, content) => {
	const el = document.createElement(tag)
  el.id = id
  el.href = href
  el.innerHTML= content
  return el
}

export const createA = (tag, id, href, target, content) => {
  const el = document.createElement(tag)
  el.id = id
  el.href = href
  el.target = target
  el.innerHTML= content
  return el
}

export const  headerSection = createElement('section', 'top-page', '', '');
document.body.appendChild(headerSection);

export const loadMore = createElement('div', 'loader', '', '');
document.body.appendChild(loadMore);

export const sfondoTitleContainer = createElement('div', 'sfondo-title-container', '', '');
document.body.appendChild(sfondoTitleContainer);

export const titleContainer = createElement('div', 'title-container', '', '');
sfondoTitleContainer.appendChild(titleContainer);

export const title = createElement('h1', 'title', '', 'Tech News');
titleContainer.appendChild(title);

export const description = createElement('p', 'description', '', 'Welcome to our tech blog showcasing the latest news articles in the world of technology.');
titleContainer.appendChild(description);

export const pageContainer = createElement('div', 'page-container', '', '');
document.body.appendChild(pageContainer);

export const loadMoreContainer = createElement('div', 'load-more-container', '', '');
document.body.appendChild(loadMoreContainer);

export const loadMoreBtn = createElement('button', 'load-more-btn', '', '');
loadMoreContainer.appendChild(loadMoreBtn);

export const loadingText = createElement('h4', 'loading-text', '', '');
loadMoreBtn.appendChild(loadingText);

export const loaderBtn = createElement('div', 'loading', '', '');
loadMoreBtn.appendChild(loaderBtn);

export const footer = createElement('footer', '', '', 'Dusan Rajkovic&nbsp');
document.body.appendChild(footer);