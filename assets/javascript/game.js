console.log("Linked");

//variables::

var randomNumber = 50;
var winCounter = 0;
var lossCounter = 0;
var crystalsTotal = 0;
var runGame = function () {

    //makes a random # between:: 19-120

    var randomNumber = Math.floor((Math.random() * (120 - 19 + 1)) + 19);
    console.log(randomNumber);
    $("#randomNumber").text(randomNumber);

    //makes a random # for each btn::

    var btn1 = Math.floor((Math.random() * (12 - 1 + 1)) + 1);
    console.log("Gem1: " + btn1);
    var btn2 = Math.floor((Math.random() * (12 - 1 + 1)) + 1);
    console.log("Gem2: " + btn2);
    var btn3 = Math.floor((Math.random() * (12 - 1 + 1)) + 1);
    console.log("Gem3: " + btn3)
    var btn4 = Math.floor((Math.random() * (12 - 1 + 1)) + 1);
    console.log("Gem4: " + btn4);


    // btn 1-4 clicks, functions::

    //gem 1
    $(".btn-1").click(function () {
        console.log("Gem1 adds: " + btn1);
        crystalsTotal += btn1;
        console.log("Score is: " + crystalsTotal);
    })
    //gem 2
    $(".btn-2").click(function () {
        console.log("Gem2 adds: " + btn2);
        crystalsTotal += btn2;
        console.log("Score is: " + crystalsTotal);
    })
    //gem 3
    $(".btn-3").click(function () {
        console.log("Gem3 adds: " + btn3);
        crystalsTotal += btn3;
        console.log("Score is: " + crystalsTotal);
    })
    //gem 4
    $(".btn-4").click(function () {
        console.log("Gem4 adds: " + btn4);
        crystalsTotal += btn4;
        console.log("Score is: " + crystalsTotal);
    })

    //crystals total::

    $("#crystalTotals").text(crystalsTotal);
    console.log(crystalsTotal);

    //crystals total w/ clicks::

    $(".btn").click(function () {
        $("#crystalTotals").text(crystalsTotal);
        console.log("You clicked a button!");

        var resetGame = function () {

            //makes a random # between 19-120:

            var randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
            console.log(randomNumber);
            $("#randomNumber").text(randomNumber);
        }
        //Reset setup???
        //function start () {
        // = true;
        //function stop () {
        // = false;


        //reset crystal total back to 0 :: HOW DO I RESET THE GAME?????


        if (crystalsTotal === randomNumber) {
            winCounter++;
            alert("You've won!");
            $("#winCounter").text(winCounter);
            confirm("Play Again?")
            console.log("WIN!");
            resetGame();

        }
        else if (crystalsTotal >= randomNumber) {
            $("#lossCounter").text(lossCounter);
            lossCounter++;
            alert("You've lost.");
            confirm("Play Again?");
            console.log("LOSE!");
            resetGame();

        }
    });
}
runGame();
