"https://cdn.jsdelivr.net/npm/html2canvas@1.0.0-rc.5/dist/html2canvas.min.js"

// Variables
const dice = document.getElementById("dice");
const adviceNum = document.getElementById("advice-number");
const adviceText = document.querySelector(".advice-text");
const soundBtn = document.querySelector(".sound");
const copyBtn = document.querySelector(".copy");

const body = document.querySelector("body");
const toggle = document.querySelector("#toggle");
const sunIcon = document.querySelector(".toggle .bxs-sun");
const moonIcon = document.querySelector(".toggle .bx-moon");


toggle.addEventListener("change", () => {
    body.classList.toggle("dark");
    sunIcon.className=sunIcon.className == "bx bxs-sun" ? "bx bxs-sun" : "bx bxs-sun";
    moonIcon.className=moonIcon.className == "bx bxs-moon" ? "bx bxs-moon" : "bx bxs-sun";

})


function tweetit(){
    window.open("https://twitter.com/intent/tweet?text=" + adviceText.textContent ,"TweetWindow","width=600,height=300");
}    

// Run the showQuote function when the page is loaded
window.onload = showQuote;



// Eventlistener for dice button
dice.addEventListener("click", function(){
    showQuote();
});




// showQuote function to show random quote from API
function showQuote(){
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then((data) => data.slip)
    .then((data) => {
        adviceNum.textContent = data.id;
        adviceText.textContent = data.advice;
    })
    .catch((error) => {
        alert(`Error ${error}`);
    });
}

soundBtn.addEventListener("click", ()=>{
    let utterance = new SpeechSynthesisUtterance(`${adviceText.textContent}`);
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(adviceText.textContent);
});

function takeshot() {
    let div =
        document.getElementById('main-container');
        html2canvas(div).then(
            function (canvas) {
                document
                .getElementById('output')
                .appendChild(canvas);
            })
        }