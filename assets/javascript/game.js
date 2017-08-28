
var obiHP = 100
var lukeHP = 90
var maulHP = 120
var sidiousHP = 140



//User has to click on an image to select the specific character to play

//User selected player will move to "Challenger Arena"
// Move Buttons (Keyboard Down)
$(document).ready(function() {
    $(".down-button").on("click", function() {
        $(".captain-planet").animate({ top: "-=200px" }, "normal");
    });


});

//Remaining characters will move to a new section on the screen called "Waiting Arena"

//User has to click on an image to select the specific character to challenge as an opponent

//The user selected enemy will move to the "Defender Arena"

//User will click "Attack" in which the enemy will lose Health Points "HP"


$(".attack-button").on("click", function () {
    // ... we generate a random number
    var random = Math.floor(Math.random() * 10) + 1;
    //HP has to be stored
    console.log("is this hp " + random);
    $(".attack-button").on("click", function () {
        //The randomly generated HP will be stored for the next opponent and increased each time the "Attack button is pressed
//etc 8, 16, 24, 32
        var increasedHP = (random + random)
        console.log("new HP " + increasedHP);


    $(".attack-button").on("click", function () {
        //The randomly generated HP will be stored for the next opponent and increased each time the "Attack button is pressed
//etc 8, 16, 24, 32
        var sol = maulHP - increasedHP
        console.log("decreasing hp " + sol);
    });

    });



});


//and then subtracted from the opposing players


//"HP" will be updated after every click on "Attack"

//The enemy will counter attack as user as the User clicks "Attack" and the User will lost "HP"

//"HP" will be updated after every click on "Attack"


//When the defender's "HP" are reduced to zero or below, move enemy back to "Waiting Arena" and alert "You won!"

//When the defender's "HP" are reduced to zero or below, move enemy back to "Waiting Arena" and alert "You won!"



