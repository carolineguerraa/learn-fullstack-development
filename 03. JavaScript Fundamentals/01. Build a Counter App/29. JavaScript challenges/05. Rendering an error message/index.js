// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

function purchase() {
    let errorId = document.getElementById("error")
    errorId.innerText = "Something went wrong, please try again"
}
