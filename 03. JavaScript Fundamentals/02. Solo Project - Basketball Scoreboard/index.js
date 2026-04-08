let homeId = document.getElementById("home")
let guestId = document.getElementById("guest")

function changeScore(isHome, increaseBy) {
    if (isHome) {
        homeId.innerText = Number(homeId.innerText) + increaseBy
    }
    else {
        guestId.innerText = Number(guestId.innerText) + increaseBy
    }
}