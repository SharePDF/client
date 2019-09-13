// document.addEventListener("DOMContentLoaded", function (event) {
//     modal.style.display = "block";

// })



var modal = document.getElementById("modal-create");

// Get the button that opens the modal
var btn = document.getElementById("button-modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function open_modal() {
    modal.style.display = "block";
}

function hide_modal() {
    modal.style.display = "none"
}

const createPDF = document.getElementById('create-pdf')

createPDF.addEventListener("submit", function (event) {
    event.preventDefault();
    hide_modal();
})