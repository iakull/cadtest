const btn_open = document.querySelector(".btn");
const btn_close = document.querySelector(".close");
const body = document.querySelector(".body");

function hideOverflow() {
    if (body.classList.contains("modal-active")) {
        body.classList.remove("modal-active");
    } else {
        body.classList.add("modal-active");
    }
}

btn_open.addEventListener("click", hideOverflow, false);
btn_close.addEventListener("click", hideOverflow, false);