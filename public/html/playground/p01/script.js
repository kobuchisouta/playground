const button = document.querySelector(".increment-btn");
const result = document.querySelector(".result");

let num = 0;

result.textContent = num;

button.addEventListener("click", () => {
    num++;
    result.textContent = num;
});

