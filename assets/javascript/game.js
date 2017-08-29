//make the characters an object w/ HP as properties, AP and CAP as properties
//look up how to select an object and make the function run off of ot it
var obi = {
    healthPoints: 125,
    attackPoints: 15
};
var luke = {healthPoints: 120, attackPoints: 10  };
var maul = {healthPoints: 140, attackPoints: 20 };
var sidious = {healthPoints: 150, attackPoints: 25 };

//User has to click on an image to select the specific character to play

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
        $(this).remove() && $(".enemy-container").append($( ".players-container" ) );
        //User has to click on an image to select the specific character to challenge as the enemy
        ///set up a function that runs completely independetly of the players container and remove the class "players container" \\\
        $(".enemy-container .img-responsive").on("click", function() {
            // create variable to hold img src.
            var src = $(this).attr("src");
            // create new img tag
            var img = $('<img id="obi">');
            // set src of img tag with variable above
            img.attr('src', src);
            img.attr("class", "img-responsive");
            // append img to appropriate container
            $(".test").append(img);
        });
    });
});
// $(".players-container").replaceWith(" ");
// $(".test").append(img);

//not sure i need this---changes class of containers
//$(".players-container").addClass("remaining-players").removeClass("players-container");

//Remaining characters will move to a new section on the screen called "Waiting Arena"

//User has to click on an image to select the specific character to challenge as an opponent

//The user selected enemy will move to the "Defender Arena"

//User will click "Attack" in which the enemy will lose Health Points "HP"

//Attack points must be randomly generated
$(".attack-button").on("click", function () {
    // ... we generate a random number
    var random = Math.floor(Math.random() * 10) + 1;
    //HP has to be stored
    console.log("is this hp " + random);
    $(obi).attr("attackPoints", random);
    console.log("obi new ap" + obi.attackPoints);
    //The randomly generated Attack points will be stored for the next opponent and increased each time the "Attack button is pressed
    //etc 8, 16, 24, 32
    var increasedHP = (random + random)
    console.log("new HP " + increasedHP);
///The "Attack Points" must be subtracted from the character every single time the "Attack" button is pressed
    var sol = luke.healthPoints - increasedHP
    console.log("decreasing hp " + sol);
    $(obi).attr("healthPoints", (obi.healthPoints - luke.attackPoints));
    console.log("obi new hp " + obi.healthPoints);
});

//and then subtracted from the opposing players


//"HP" will be updated after every click on "Attack"

//The enemy will counter attack as user as the User clicks "Attack" and the User will lost "HP"

//"HP" will be updated after every click on "Attack"


//When the defender's "HP" are reduced to zero or below, move enemy back to "Waiting Arena" and alert "You won!"

//When the defender's "HP" are reduced to zero or below, move enemy back to "Waiting Arena" and alert "You won!"



