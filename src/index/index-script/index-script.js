const img = document.querySelector("#moya");
const button = document.querySelector("#toggle-button");

button.addEventListener("click", () => {
    img.classList.toggle("hidden");
});
