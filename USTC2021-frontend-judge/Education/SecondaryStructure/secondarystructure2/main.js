var barWord = document.getElementsByClassName("barword")
var barWordA = document.getElementsByClassName("barworda")
var img4 = document.getElementById("img4")
var vanishes = document.getElementsByClassName("vanish")

img4.addEventListener("click", () => {
    window.location.href = "../secondarystructure3/index.html"
})
var x = document.getElementById("x")
x.addEventListener("click", () => {
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
    
for(let i = 0; i < vanishes.length; i++){
    vanishes[i].addEventListener("click", () => {
        vanishes[i].classList.add("vanish-mode");
    })
}