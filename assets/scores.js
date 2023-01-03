var score;
var ul = document.querySelector('ul');
var btnBack = document.querySelector("#back");
var btnClear = document.querySelector("#clear");
var storage = JSON.parse(localStorage.getItem('scores')) || [];

if (storage) {
    for (let i = 0; i < storage.length; i++) {
        let currentScore = storage[i];
        let li = document.createElement("li");
        li.innerHTML = `<b>${currentScore.name}:</b> ${currentScore.score}`;
        ul.appendChild(li);
    }
}

btnBack.addEventListener("click", () => {
    window.location.href = "./index.html";
})

btnClear.addEventListener("click", () => {
    localStorage.clear();
    ul.textContent = "";
})