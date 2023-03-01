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