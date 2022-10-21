// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
//Grab the heart/like button to be clicked
const heart = document.querySelectorAll("span.like-glyph");
//Add the event listener
heart.forEach(heart => heart.addEventListener('click', likeHearts))
//Write a function sending request to the server
function likeHearts(heart) {
 mimicServerCall()
  .then(() => {
    if (heart.target.innerText === EMPTY_HEART){
      heart.target.innerText = FULL_HEART
     heart.target.classList.add('activated-heart')
    }
    else {
      heart.target.classList.remove('activated-heart')
      heart.target.innerText = EMPTY_HEART
    }
  })
  .catch(() => {
  let hiddenError = document.getElementById("modal");
  hiddenError.className = "show"
  setTimeout(() => {
    let hiddenError = document.getElementById("modal");
    hiddenError.className = "hidden"}, 3000);
})}
})




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}