var barWord = document.getElementsByClassName("barword")
var barWordA = document.getElementsByClassName("barworda")
var show = document.getElementById("show")
var next = document.getElementById("next")
var close = document.getElementById("close")
close.addEventListener("click", () => {
    window.location.href = "../../FourModels/index.html"
})
for(let i = 0; i < 4; i++){
    barWord[i].addEventListener("mouseover", () => {
        barWord[i].style.background = "white"
        barWord[i].style.cursor = "pointer"
        barWordA[i].style.color = "black"

    })
    barWord[i].addEventListener("mouseout", () => {
        // console.log("ok");
        barWord[i].style.background = "black"
        barWordA[i].style.color = "white"
    })
    barWordA[i].addEventListener("mouseover", () => {
        barWord[i].style.background = "white"
        barWordA[i].style.color = "black"
    })
    barWordA[i].addEventListener("mouseout", () => {
        barWordA[i].style.color = "white"
        barWord[i].style.background = "black"
    })
}

show.addEventListener("click", () => {
    window.location.href = "../CNN2/index.html"
})  
next.addEventListener("click", () => {
    window.location.href = "../CNN2/index.html"
})  
