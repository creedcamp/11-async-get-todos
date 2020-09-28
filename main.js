//step one: fetch api
//step two:convert to arr
//step three: convert to string
//step four: input to html

const goTo = document.querySelector("#todos")

function whichIsIt(todos) {
  const itsThose = todos.map((item) => {
    return `<li><strong>id</strong>: ${item.id}, <strong>title</strong>: ${item.title}, <strong>completed</strong>: ${item.completed}</li>`
  })
  const pullOne = itsThose.join("")
  goTo.innerHTML = pullOne
}

// function whatIsIt(todos) {
//   const itsThis = todos.map((item) => {
//     return `<li>${item.title}</li>`
//   })
//   const pullTwo = itsThis.join("")
//   goTo.innerHTML = pullTwo
// }

// function isItDone(todos) {
//   const findOut = todos.map((item) => {
//     return `<li>${item.completed}</li>`
//   })
//   const pullThree = findOut.join("")
//   goTo.innerHTML = pullThree
// }
fetch(`https://jsonplaceholder.typicode.com/todos`)
  .then((resp) => resp.json())
  .then(whichIsIt)

//not really sure what to apply my .map to here, but I know .join comes after one the last parenthases.
// let html = userId

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
//However, it did not let me check my work due to that error.
