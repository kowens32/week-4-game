
//User has to click on an image to select the specific character to play

//User selected player will move to "Challenger Arena"
//     $(".down-button").on("click", function () {
//         $(".img-responsive").animate({top: "+=200px"}, "normal");
//     });
// }




// // Move Buttons
// $(".up-button").on("click", function() {
//     $(".img-responsive").animate({ top: "+=200px" }, "normal");
// });

//Remaining characters will move to a new section on the screen called "Waiting Arena"

//User has to click on an image to select the specific character to challenge as an opponent

//The user selected enemy will move to the "Defender Arena"

//User will click "Attack" in which the enemy will lose Health Points "HP"

$(".attack-button").on("click", function() {
    // ... we generate a random number
    var random = Math.floor(Math.random() * 10) + 1;
    // ... and then dump the random number into our random-number div.
    $(".col-large-6").html(random);
    console.log("is this hp " +random);
});

//HP has to be stored and then subtracted from the opposing players


//"HP" will be updated after every click on "Attack"

//The enemy will counter attack as user as the User clicks "Attack" and the User will lost "HP"

//"HP" will be updated after every click on "Attack"


//When the defender's "HP" are reduced to zero or below, move enemy back to "Waiting Arena" and alert "You won!"

//When the defender's "HP" are reduced to zero or below, move enemy back to "Waiting Arena" and alert "You won!"

//The randomly generated HP will be stored for the next opponent and increased each time the "Attack button is pressed
//etc 8, 16, 24, 32

