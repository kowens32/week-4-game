//Execute this code when the DOM has fully loaded
$(document).ready(function() {
    //VARIABLE DECLARATION
    //=========================================================================
    var characters = {
        "obi": {
            name: "obi",
            health: 125,
            attack: 15,
            enemyAttackBack: 20,
            imageURL: "assets/images/obiwan.jpg"
        },

        "luke": {
            name: "luke",
            health: 120,
            attack: 10,
            enemyAttackBack: 15,
            imageURL: "assets/images/luke.jpg"
        },
        "maul": {
            name: "maul",
            health: 140,
            attack: 20,
            enemyAttackBack: 25,
            imageURL: "assets/images/darthmaul.jpg"
        },
        "sidious": {
            name: "sidious",
            health: 150,
            attack: 25,
            enemyAttackBack: 30,
            imageURL: "assets/images/darthsidious.jpg"
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
    var killCount = 0;


//FUNCTIONS
//=================================================

//This function will render a character card to the page
//The character rendered, the area they are rendered to, and their status is determined
//by the arguments passed in.
    var renderCharacter = function(character, renderArea) {
        var charDiv = $("<div class ='character' data-name='" + character.name + "'>");
        var charName  = $("<div class='character-name'>").text(character.name);
        var charImage = $("<img alt='image' class='character-image'>").attr("src", character.imageURL);
        var charHealth = $("<div class ='character-health'>").text(character.health);
        charDiv.append(charName).append(charImage).append(charHealth);
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
        for (var i =0; i < enemyArr.length; i++) {
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
        var restart = $("<button>Restart</button>").click(function(){
            location.reload();
        });
        //Build div that will display the victory/defeat message
        var gameState = $("div").text(resultMessage);

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
                if (key !== name) {
                    combatants.push(characters[key]);
                }
            }
        }

        //Hide the character select div.
        $("#characters-section").hide();

        //then render our selected character and combatants.
        updateCharacter(attacker, '#selected-characters');
        renderEnemies(combatants);
    })

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
$('#attack-button').on("click", function() {
    //if there is a defender, combat will occur
    if ($('#defender').children().length !== 0) {
        //creates messages for our attack and our opponents counter attack
        var attackMessage = 'You attacked ' + defender.name + " for " + attacker.attack * turnCounter + " damage ";
        var counterAttackMessage = defender.name + " attacked you back for " + defender.enemyAttackBack + " damage ";
        clearMessage();

        //Reduce defender's health by your attack value
        defender.health -= attacker.attack * turnCounter;

        //If the enemy still has health..
        if (defender.health > 0) {
            updateCharacter(defender, "defender");

            //Render the combat messages.
            renderMessage(attackMessage);
            renderMessage(counterAttackMessage);

            //Reduce your health by the opponenet's attack value
            attacker.health -= defender.enemyAttackBack;

            //Render the player's updated character card.
            updateCharacter(attacker, '#selected-character');

            //If you have less than zero health the game ends
            //We call the restartGame function to allow the user to restart the game and play again
            if (attacker.health <= 0) {
                clearMessage();
                restartGame('You have been defeated! Game Over!');
                $('#attack-button').off('click');
            }
        }

    else {
        //if the enemy has less than zero health they are defeated
        //remove your opponent's character card
        $('#defender').empty();

        var gameStateMessage = 'You have defeated ' + defender.name + ", you can choose to fight another enemy";
        renderMessage(gameStateMessage);

        //Increment your kill count
        killCount++;

        //if you have killed all of your opponents you win
        //Call the restartGame function to allow the user to restart the game and play win
        if (killCount >= combatants.length) {
            clearMessage();
            $('#attack-button').off('click');
            restartGame('You won! Game over!');
          }
        }

    turnCounter++;

    }

        else
              {
            //if there is no defender, render an error message
            clearMessage();
            renderMessage('No enemy here');
        }
    });





