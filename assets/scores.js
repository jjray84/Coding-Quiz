var score;
var ol = document.querySelector('ol');
var btnBack = document.querySelector("#back");
var btnClear = document.querySelector("#clear");

if (localStorage.length !== 0) {
    for (let i = 0; i < localStorage.length; i++) {
        let li = document.createElement("li");
        li.textContent = "`${i + 1}. ${localStorage.key(i)} --- ${localStorage.getItem(localStorage.key(i))}`"
        ol.appendChild(li);
    }
}

btnBack.addEventListener("click", () => {
    window.location.href = "./index.html";
})

btnClear.addEventListener("Click", () => {
    localStorage.clear();
    ol.textContent = "";
})