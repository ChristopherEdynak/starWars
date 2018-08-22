// global variables.
var attack;
var defend;
var attackcharacter;
var attackerHP;
var attackerAP;
var attackerCAP;
var defendcharacter;
var defenderHP;
var defenderAP;
var defenderCAP;
var name;
var YourCharacter;
var YourDefender;
var myChar = "";
var myDef = "";

function reset() {

    $("#picRow").show();

    $(".restart").hide();
    $(".attackButton").show();

    // reset myChar and myDef to equal nothing.
    var myChar = "";
    var myDef = "";
    // var YourCharacter;
    // var YourDefender;


    // reset health points.
    characters.ObiWan.healthPoints = 120;
    characters.LukeSky.healthPoints = 100;
    characters.BobaFett.healthPoints = 150;
    characters.Emperor.healthPoints = 180;

    // reset attack power.
    characters.ObiWan.attackPower = 8;
    characters.LukeSky.attackPower = 10;
    characters.BobaFett.attackPower = 10;
    characters.Emperor.attackPower = 12;

    // delete all in-game text.
    $(".youAttacked").empty();
    $(".attackedBack").empty();
    $(".youDefeated").empty();
    $(".youWon").empty();
    $(".youLose").empty();
    $(".noEnemy").empty();

    //writing each characters full name to the html so they show up on the page.
    $(".nameo").html(characters.ObiWan.fullName);
    $(".namel").html(characters.LukeSky.fullName);
    $(".nameds").html(characters.BobaFett.fullName);
    $(".namedm").html(characters.Emperor.fullName);

    //adding the picture for each character so they show up on the page.
    $("#bobaF").appendTo("#picRow");
    $("#emperor").appendTo("#picRow");
    $("#luke").appendTo("#picRow");
    $("#obi").appendTo("#picRow");

    //writing each characters healthpoints to the html so they show up on the page.
    $(".ob1hp").html(characters.ObiWan.healthPoints);
    $(".lukehp").html(characters.LukeSky.healthPoints);
    $(".bobafhp").html(characters.BobaFett.healthPoints);
    $(".emperorhp").html(characters.Emperor.healthPoints);

    // reset border colors. 
    $(".firstRow").css({
        "background-color": "white",
        "outline-color": "limegreen",
        "border-width": "3px",
        "outline-style": "solid",
        "border-color": "white",
        "outline-width": "3px"
    });

};

// array to hold each characters stats.
var characters = {

    ObiWan: {
        name: "ObiWan",
        visual: 'assets/img/obi.jpg',
        healthPoints: 120,
        attackPower: 8,
        fullName: "Obi-Wan Kenobi",
        counterAttackPower: 24
    },

    LukeSky: {
        name: "LukeSky",
        visual: 'assets/img/Luke_Skywalker.jpg',
        healthPoints: 100,
        attackPower: 10,
        fullName: "Luke Skywalker",
        counterAttackPower: 5
    },

    BobaFett: {
        name: "BobaFett",
        visual: 'assets/img/boba_fett.jpg',
        healthPoints: 150,
        attackPower: 10,
        fullName: "Boba Fett",
        counterAttackPower: 20
    },

    Emperor: {
        name: "Emperor",
        visual: 'assets/img/The_Emperor.jpg',
        healthPoints: 180,
        attackPower: 12,
        fullName: "The Emperor",
        counterAttackPower: 25
    }
};


$(document).ready(function() {
    reset();

    // When the player clicks on any of the characters, the game determines which one was clicked, moves the one clicked into
    // "Your Character" and moves the other three into "Enemies available to attach".
    $(".firstRow").click(function() {

        if (myChar == "") {
            // appends the chosen character to "Your Character"
            console.log(this);
            $(this).appendTo("#yourChar");
            myChar = $(this);
            YourCharacter = $(myChar).attr("value");
        }
        // if else statements that determine who is currently "Your Character" and assign
        // that person to the character array's properties. 
        if (YourCharacter == characters.ObiWan.name) {
            attackerHP = characters.ObiWan.healthPoints;
            attackerAP = characters.ObiWan.attackPower;
            attackerCAP = characters.ObiWan.counterAttackPower;
            attackerFN = characters.ObiWan.fullName;
            attack = characters.ObiWan;
        } else if (YourCharacter == characters.LukeSky.name) {
            attackerHP = characters.LukeSky.healthPoints;
            attackerAP = characters.LukeSky.attackPower;
            attackerCAP = characters.LukeSky.counterAttackPower;
            attackerFN = characters.LukeSky.fullName;
            attack = characters.LukeSky;
        } else if (YourCharacter == characters.BobaFett.name) {
            attackerHP = characters.BobaFett.healthPoints;
            attackerAP = characters.BobaFett.attackPower;
            attackerCAP = characters.BobaFett.counterAttackPower;
            attackerFN = characters.BobaFett.fullName;
            attack = characters.BobaFett;
        } else if (YourCharacter == characters.Emperor.name) {
            attackerHP = characters.Emperor.healthPoints;
            attackerAP = characters.Emperor.attackPower;
            attackerCAP = characters.Emperor.counterAttackPower;
            attackerFN = characters.Emperor.fullName;
            attack = characters.Emperor;
        }

        // clones the three remaining characters to "Enemies available to attack" three separate divs.
        for (var i = 0; i < 4; i++) {
            $("._" + [i]).not(myChar).appendTo("#enemies" + [i]);

            // changing color
            $("._" + [i]).not(myChar).css({
                "background-color": "red",
                "outline-color": "black",
                "border-width": "3px",
                "outline-style": "solid",
                "border-color": "black",
                "outline-width": "1px"
            });


        }

        // Clears the characters from the top.
        // $("#picRow").empty();
        $("#picRow").hide();

    });

    // When the player clicks on any of the characters in the "enemies available to attack" section, the game 
    // determines which one was clicked and moves the one clicked into the "Defender" position. The other two 
    // characters remain in "enemies available to attack" section.     
    $(".move").click(function() {

        // if (myDef === "") {
        // clones the chosen character to "Defender"
        // moves that character to the "Defender" section on the page.
        $(this).appendTo("#defender");
        myDef = $(this);
        YourDefender = $(myDef).children().attr("value");
        $(".youDefeated").empty();

        // }
        // if else statements that determine who is currently "Defender" and assign
        // that person to the character array's properties.
        if (YourDefender == characters.ObiWan.name) {
            defenderHP = characters.ObiWan.healthPoints;
            defenderAP = characters.ObiWan.attackPower;
            defenderCAP = characters.ObiWan.counterAttackPower;
            defenderFN = characters.ObiWan.fullName;
            defend = characters.ObiWan;

        } else if (YourDefender == characters.LukeSky.name) {
            defenderHP = characters.LukeSky.healthPoints;
            defenderAP = characters.LukeSky.attackPower;
            defenderCAP = characters.LukeSky.counterAttackPower;
            defenderFN = characters.LukeSky.fullName;
            defend = characters.LukeSky;

        } else if (YourDefender == characters.BobaFett.name) {
            defenderHP = characters.BobaFett.healthPoints;
            defenderAP = characters.BobaFett.attackPower;
            defenderCAP = characters.BobaFett.counterAttackPower;
            defenderFN = characters.BobaFett.fullName;
            defend = characters.BobaFett;

        } else if (YourDefender == characters.Emperor.name) {
            defenderHP = characters.Emperor.healthPoints;
            defenderAP = characters.Emperor.attackPower;
            defenderCAP = characters.Emperor.counterAttackPower;
            defenderFN = characters.Emperor.fullName;
            defend = characters.Emperor;

        }


    });


    // when the user clicks attack, the player/Your Character's Health Points go down based on the counter attack 
    // property of the "Defender".Their counter attack decreases your health.
    $(".attackButton").click(function() {

        // if player clicks attack button and no one is in the "defender" div, then 
        // game says "no enemy here".
        if ($("#defender").children().length == 0) {
            $(".noEnemy").html("No enemy here.");
        }

        if (!(attackerHP < 1) || !(defenderHP < 1)) {

            // when button is clicked (if both players healthpoints are not 0, 
            // the game subtracks the defendersCAP from the attackers HP.)
            attackerHP = (attackerHP - defenderCAP);

            // writing the attacker/Your Character's new healthpoints to the html. 
            $("." + YourCharacter).html(attackerHP);

            // writing the text "You attacked Luke Skywalker for 8 damage".
            $(".youAttacked").html("You attacked " + defenderFN + " for " + attackerAP + " damage.");

            // when button is clicked (if both players healthpoints are not 0, 
            // the game subtracks the attackers AP points from the defenders HP.)
            defenderHP = (defenderHP - attackerAP);

            // writing the text "Luke Skywalker attacked you back for 10 damage."
            $(".attackedBack").html(defenderFN + " attacked you back for " + defenderCAP + " damage.");

            // write the defender's new healthpoints to the html.
            $("." + YourDefender).html(defenderHP);

        }
        // if your character defeats the defender.
        if (defenderHP <= 0) {

            // clear text from the bottom and add defeated text.
            $(".youAttacked").empty();
            $(".attackedBack").empty();
            $(".youDefeated").html("You have defeated " + defenderFN + ", you can choose to fight another enemy.");

            // remove defender from the page.
            $("#defender").empty();

            // Your Character's attack power goes up by 10. 
            console.log(attackerAP);
            attackerAP = (attackerAP + 10);

            // redefining "YourCharacter"'s attack power to equal the new value. 
            attack.attackPower = attackerAP;
            console.log(attackerAP);

        }

        // if all enemies have been defeated and the attacker still has health, then the player wins
        if ($(".move").children().length == 0) {

            // clear out the other paragraphs and let user know they won.
            $(".youAttacked").empty();
            $(".attackedBack").empty();
            $(".youDefeated").empty();
            $(".noEnemy").empty();
            $(".youWon").html("You Won!!!! GAME OVER!!!");

            // show the restart button. 
            $(".restart").show();

            // When you click "Restart" the game begins again. 
            $(".restart").click(function() {
                location.reload(true);
            })

        }

        // if your characters hp = 0 then you lose.
        if (attackerHP <= 0) {

            // show the restart button.
            $(".restart").show();

            // hide the attack button.
            $(".attackButton").hide();

            // You lose.
            $(".youAttacked").empty();
            $(".attackedBack").empty();
            $(".youDefeated").empty();
            $(".youLose").html("You've been defeated...GAME OVER!!!")

            // When you click "Restart" the game begins again. 
            $(".restart").click(function() {
                location.reload(true);
            });

        }

    });


    // The game remembers every time you attack and slowly increases your attack power. 
});