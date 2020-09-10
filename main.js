//step one: fetch api
//step two:convert to arr
//step three: convert to string
//step four: input to html
fetch(`https://jsonplaceholder.typicode.com/todos`)
  .then((resp) => resp.json())
  .then((itemObj) => {
    console.log(itemObj)
    return fetch(itemObj.userId)
  })
  .then((resp) => resp.json())
  .then((userId) => {
    console.log(userId)
    return fetch(userId[0])
  })
  .then((resp) => resp.json())
  .then((id) => {
    console.log(id)
    return fetch(id[0])
  })
  .then((resp) => resp.json())
  .then((title) => {
    return fetch(title[0])
  })
  .then((resp) => resp.json())
  .then((completed) => {
    return fetch(completed[0])
  })

//not really sure what to apply my .map to here, but I know .join comes after one the last parenthases.
let html = userId
  .map((userId) => {
    return `<li>${(userId[0], id[0], title[0], completed[0])}</li>`
  })
  .join("")

document.querySelector(html).innerHTML("boo")

//const prom = new Promis((resolve, reject) => {
//  setTimeout(() =>)
//  resolve()
//}, 5000)

//prom.then(function (v) {
//  console.log(v)
//})
// got the understanding on what a promise is, and what I can set inside, but thought that
// the fetch method would start the promise for me, allowing me to use .then immediately after.
//Also, I kept having an issue where the browser wanted to know what a setting was toward it being an external or not, and
//and I figured don't use catch, cause it might not help, and we haven't covered it, so it's likely not the answer.
