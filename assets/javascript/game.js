
var obiHP = 100
var lukeHP = 90
var maulHP = 120
var sidiousHP = 140

//make the characters an object w/ HP as properties

//User has to click on an image to select the specific character to play

//User selected player will move to "Challenger Arena"
// Move Buttons (Keyboard Down)
$(document).ready(function() {
    $(".players-container .img-responsive").on("click", function() {
        // create variable to hold img src.
        var src = $(this).attr("src");
        // create new img tag
        var img = $('<img id="obi">');
        // set src of img tag with variable above
        img.attr('src', src);
        img.attr("class", "img-responsive");
        // append img to appropriate container
        $(".user-container").append(img);
        $(this).remove() && $(".enemy-container").append($( "#obi" ) );
        // $(".players-container").replaceWith(" ");
        // $(".test").append(img);

     //not sure i need this
        //$(".players-container").addClass("remaining-players").removeClass("players-container");

    });

    $(".test .img-responsive").on("click", function() {
        // create variable to hold img src.
        var src = $(this).attr("src");
        // create new img tag
        var img = $('<img id="obi">');
        // set src of img tag with variable above
        img.attr('src', src);
        img.attr("class", "img-responsive");
        // append img to appropriate container
        $(".enemy-container").append(img);
        $(this).remove();

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



