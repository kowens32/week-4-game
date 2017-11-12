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
var renderCharacter = function(character, renderArea) {
    var chardDiv = $("<div class ='character' data-name=''" + character.name + "'>");
    var charName  = $("<div class='character-name'>").text(character.name);
    var charImage = $("<img alt='image' class='character-image'>").attr("src", character.imageURL);
    var charHealth = $("<div class ='character-health'>").text(charHealth);
    chardDiv.append(charName).append(charImage).append(charHealth);
    $(renderArea).append(charDiv);

};

//this function will load all the characters into the character selection to be selected
    var initializeGame = function() {
        //Loop through the characters object and call the renderCharacter function on each character to render their card.
        for (var key in characters) {
            renderCharacter(characters[key], "#characters-section");
        }
    };

    //run the game function
    initializeGame();


    //This function handles updating the selected player or the current defender. If there is no selected
    // player/defender this function will also place the character based on the areaRender chosen (
    var updateCharacter = function(charObj, areaRender){
        //make sure to empy the area so we can re-render the new object
        $(areaRender).empty();
        renderCharacter(charObj, areaRender)
    };

    //This function will render the available-to-attack enemies. This should be run once after a character has been selected

    var renderEnemies = function(enemyArr){
        for (var i =0; i <enemyArr.length; i++) {
            renderCharacter(enemyArr[i], '#available-to-attack-section');
        }
    };

    //Function to handle rendering game messages
    var renderMessage = function(message) {
        //builds the message and appends it to the page
        var gameMessageSet = $('#game-message');
        var newMessage = $("<div>").text(message);
        gameMessageSet.append(newMessage);
    };

    //Function which handles restarting the game after victory or defeat
    var restartGame = function(resultMessage){
        //When the 'Restart' button is clicked, reload the page.
        var restart =$("<button>Restart</button>").click(function(){
            location.reload();
        });
        //Build div that will display the victory/defeat message
        var gasmeState = $("div").text(resultMessage);

        //Render the restart button and victory/defeat message to the page.
        $("body").append(gameState);
        $("body").append(restart);
    };

    //Function to clear the game message section
    var clearMessage = function (){
        var gameMessage = $('#game-message');
        gameMessage.text("");
    };

    //============================================================================================

    //On click event for selecting our character.
    $('#characters-section').on("click", ".character", function () {
        //saving the clicked character's name
        var name = $(this).attr("data-name");

        //If a a player has not yet been chosen
        if (!attacker) {
            //We populate attacker with the selected character's information
            attacker = characters[name];
            //We then loop through the reaminign characters and push them to the combatanats array
            for (var key in characters) {
                combatants.push(characters[key]);
            }
        }

        //Hide the character select div.
        $("#characters-section").hide();

        //then render our selected character and combatants.
        updateCharacter(attacker, '#selected-characters');
        renderEnemies(combatants);
    }
    });

    //Creates an on click event for each enemy
    $("#available-to-attack-section").on('click', '.character', function(){
        //saving the opponet's name
        var name = $(this).attr("data-name");

        //if there is no defender, the clicked enemy will become the defender
        if ($("#defender").children().length ===0){
            defender = characters[name];
            updateCharacter(defender, "#defender");

            //remove element as it will now be a new defender
            $(this).remove();
            clearMessage();
        }
    });

    //when you click the attack button, run the following game logic
    $('#attack-button').on("click", function(){
        //if there is a defender, combat will occur
        if ($('#defender').children().length !== 0){
            //creates messages for our attack and our opponents counter attack
            var attackMessage = 'You attacked ' + defender.name + " for " + attacker.atack * turnCounter
        }
    })


















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











