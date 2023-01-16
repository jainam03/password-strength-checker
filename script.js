let submitBtn = document.getElementById("submit-btn")
let inputEl = document.getElementById("input-el")

submitBtn.addEventListener("click",function() {
    // alert("Button pressed")
    if(inputEl.value == "") {
        alert("Please enter your password first")
    } else {
        alert("button pressed")
    }
})