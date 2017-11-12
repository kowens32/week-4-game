    //Execute this code when the DOM has fully loaded
$(document).ready(function() {
    //VARIABLE DECLARATION
    //=========================================================================
var characters = {
    "obi": {
        userName: "obi",
        healthPoints: 125,
        attackPoints: 15,
        counterAttack: 20,
        visual: "assets/images/obiwan.jpg"
    },

"luke": {
    userName: "luke",
    healthPoints: 120,
    attackPoints: 10,
    counterAttack: 15,
    visual: "assets/images/luke.jpg"
},
"maul": {
    userName: "maul",
    healthPoints: 140,
    attackPoints: 20,
    counterAttack: 25,
    visual: "assets/images/darthmaul.jpg"
},
"sidious": {
    userName: "sidious",
    healthPoints: 150,
    attackPoints: 25,
   counterAttack: 30,
    visual: "assets/images/darthsidious.jpg"
    }
};

//Will be populated when the players selects a character

var attacker;

//Populated with all the characters the player didn't select

var combatants = [];

//Will be populated when the player chooses an opponent

var defender;

//Will keep track of turns during combat. Used for calculating player damage
var turnCounter = 1;

//Tracks number of defeated opponents
var killCount =0;


//FUNCTIONS
//=================================================

//This function will render a character card to the page
//The character rendered, the area they are rendered to, and their status is determined
//by the arguments passed in.


//User has to click on an image to select the specific character to play



    $(document).on("click", ".players-container .img-responsive", function () {
        //removed the images once they were clicked on and appended them to their appropriate containers
        //STILL TRYING TO FIGURE OUT HOW TO MATCH THE IDS WITH THE OBJECTS ABOVE

///var src = $(this).attr("src"); but replace src with id
        // create variable to hold img src.
        var src = $(this).attr("src");
        var name = $(this).attr("id");
        //if (src = characters.visual) {
         // userHero.push(characters.visual);
         // }
        // console.log(characters);
        // create new img tag
        var img = $('<img>');
        img.attr("id", name);
        // set src of img tag with variable above
        img.attr('src', src);
        img.attr("class", "img-responsive");
        // img.attr("heroAttackPoints", );
        //  img.attr("id",);
        // append img to appropriate container
        $(".user-container").append(img);
        console.log("what user is " + src);
        heroId = (name);
        console.log('hero' + heroId);
        //turned this off so that my images would not continue to append to the user-container
        $(".players-container .img-responsive").off("click");
        //   $(this).remove() && $(".enemy-container").append($( ".players-container" ) );
        $(this).remove() && $(".players-container").addClass("remaining-players").removeClass("players-container");
        //now change "select your player" to "select your enemy"

    $(document).on("click", ".remaining-players .img-responsive", function () {
        // create variable to hold img src.
        var src = $(this).attr("src");
        var name = $(this).attr("id");
        // create new img tag
        var img = $('<img>');
        img.attr("id", name);
        // set src of img tag with variable above
        img.attr('src', src);
        img.attr("class", "img-responsive");
        // append img to appropriate container
        $(".test").append(img);
        enemyId = (name);
        aPoints = this.attackPoints;
        console.log('enemy' + enemyId);
        console.log(name.attackPoints);
        $(this).remove();

         });
    });


    function firstAttack() {

        $(".attack-button").on("click", function () {


//properly logging the right heroId and enemyId
            console.log(enemyId);
            console.log(heroId);
            console.log(heroAttackPoints);



            // heroAttackPoints = ($(this).attr("heroAttackPoints"));
            //
            //
            // // console.log(characters.userName);
            // console.log($(this).attr("heroAttackPoints"));
            // console.log("hero attack points "+heroAttackPoints);
            // $(this).attr("healthPoints", (this.healthPoints - this.counterAttack));
            // // $(".user-container").append("<br>" +obi.healthPoints);
            // $(this).attr("healthPoints", (this.healthPoints - heroAttackPoints));
            // //  $(".test").append("<br>" +luke.healthPoints);
            // console.log("hero attack points "+heroAttackPoints);
            // console.log("is this obi's first attack " + this.healthPoints);
            // console.log("is this luke's first attack" + this.healthPoints);

        });
    };

    firstAttack();
});




// //////
// console.log("do you know the src? "+src);
// if(!userHero) {
//     userHero = characters.userName;
//     for (var key in characters) {
//         if (key !== userName)
//         {
//             remainingPlayers.push(characters[key]);
//         }
//     }
// }







// $(".players-container").replaceWith(" ");
// $(".test").append(img);




//Remaining characters will move to a new section on the screen called "Waiting Arena"

//User has to click on an image to select the specific character to challenge as an opponent

//The user selected enemy will move to the "Defender Arena"

//User will click "Attack" in which the enemy will lose Health Points "HP"

//Attack points must be randomly generated

///Can i have an img as a property in an object?















    //////Old code from randomly generated AP\\\\\\\
    // ... we generate a random number
//     var random = Math.floor(Math.random() * 10) + 1;
//     //HP has to be stored
//     console.log("is this hp " + random);
//     $(obi).attr("attackPoints", random);
//     console.log("obi new ap" + obi.attackPoints);
//     //The randomly generated Attack points will be stored for the next opponent and increased each time the "Attack button is pressed
//     //etc 8, 16, 24, 32
//     var increasedHP = (random + random)
//     console.log("new HP " + increasedHP);
// ///The "Attack Points" must be subtracted from the character every single time the "Attack" button is pressed
//     var sol = luke.healthPoints - increasedHP
//     console.log("decreasing hp " + sol);
//     $(obi).attr("healthPoints", (obi.healthPoints - luke.attackPoints));
//     console.log("obi new hp " + obi.healthPoints);

//
// //and then subtracted from the opposing players


//"HP" will be updated after every click on "Attack"

//The enemy will counter attack as user as the User clicks "Attack" and the User will lost "HP"

//"HP" will be updated after every click on "Attack"


//When the defender's "HP" are reduced to zero or below, move enemy back to "Waiting Arena" and alert "You won!"

//When the defender's "HP" are reduced to zero or below, move enemy back to "Waiting Arena" and alert "You won!"



