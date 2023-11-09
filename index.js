
// TO get the number of buttons
var n = document.getElementsByTagName("button").length;
// var n = document.querySelectorAll(".drum").length;
for (var i = 0; i<n; i++) {
    // Adding event Listener For mouse button detectiona and corresponding function
    document.getElementsByTagName("button")[i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML;

        // Calling function to play sound corresponding to mouse clicked.
        makeSound(buttonInnerHtml);

        // Calling function to show animation when mouse clicked
        showAnimation(buttonInnerHtml);
    })
}


// Adding event Listener For keypress detection and corresponding function
// Passing event to get the details of keypress event
document.addEventListener("keydown", function (event) {
    // alert("Key was pressed")

    // even.key to get the key which was pressed.
    // Calling function to play sound corresponding to key pressed.
    makeSound(event.key);

    // Calling function to show animation when key pressed
    showAnimation(event.key);
})

// Function to make sound corresponding to buttons or keypress
function makeSound(key) {
    switch (key) {
        case "w":
            var audio1 = new Audio("./sounds/crash.mp3");
            audio1.play();
            break;
        case "a":
            var audio2 = new Audio("./sounds/kick-bass.mp3");
            audio2.play();
            break;
        case "s":
            var audio3 = new Audio("./sounds/snare.mp3");
            audio3.play();
            break;
        case "d":
            var audio4 = new Audio("./sounds/tom-1.mp3");
            audio4.play();
            break;
        case "j":
            var audio5 = new Audio("./sounds/tom-2.mp3");
            audio5.play();
            break;
        case "k":
            var audio6 = new Audio("./sounds/tom-3.mp3");
            audio6.play();
            break;
        case "l":
            var audio7 = new Audio("./sounds/tom-4.mp3");
            audio7.play();
            break;

        default:
            console.log(this.innerHTML);
            break;
    }
}

// Function to show animation on clicked or keypress
function showAnimation(currentKey) {
    // We will add pressed class as we have created its style in attached css to effect the current key pressed.
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    // Now we want to remove this class after some time so that it will look like animation
    // For this we will use timeout function of javascript
    // First attribute will be function that will be executed after some give time
    // 2nd attriute will be the timeout time
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100)
}