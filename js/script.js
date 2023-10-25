const submitButton = document.getElementById("submitButton")

submitButton.addEventListener("click", function(event){
    event.preventDefault();
    const firstNameInput = document.getElementById("firstNameInput")
    const lastNameInput = document.getElementById("lastNameInput")
    inputValidation(firstNameInput.value, lastNameInput.value)
})
function inputValidation(firstName, lastName) {
    if(firstName == "" || lastName == "") {
        alert("Ada yang kosong")
    } else {
        alert("Sukses")
    }
}
var slideIndex = 1
setInterval(function() {
    plusDiv(1)
}, 2000)
function plusDiv(index) {
    showImage(slideIndex += index)
}
function showImage(index) {
    const imageList = document.getElementsByClassName("slider")
    console.log(imageList)
    var i;
    if(index > imageList.length) { slideIndex = 1  }
    if (index < 1) { slideIndex = imageList.length}
    for (i=0; i < imageList.length; i++) {
        imageList[i].style.display = "none"
    }
    imageList[slideIndex - 1].style.display = "block"
}

