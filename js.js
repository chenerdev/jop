const chbtn = document.querySelector(".thecircle");
const price = document.querySelector(".price1");
const price2 = document.querySelector(".price2");
const price3 = document.querySelector(".price3");

chbtn.addEventListener("click", () => {
    // botton move
    chbtn.classList.toggle("onbtn");
    // change price
    if (chbtn.classList.contains("onbtn")) {
        price.innerText = "199.99";
        price2.innerText = "249.99";
        price3.innerText = "399.99";

    } else {
        price.innerText = "19.99";
        price2.innerText = "24.99";
        price3.innerText = "39.99";
        }
});

