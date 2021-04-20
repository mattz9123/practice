$(document).ready(function () {
    // add the functions as event listeners
    // to the forms in the HTML
    $("#clickForm").on("submit", countClick);
    $("#ageForm").on("submit", checkAge);
    $("#taxForm").on("submit", calcSalesTax);
    $("#catForm").on("submit", recommendFood);
    $("#cardForm").on("submit", drawCard);
});

let clicks = 0;
function countClick(event) {
    event.preventDefault();

    // Increment a variable that tracks the
    // number of button clicks
    clicks += 1;

    // Print the current number of clicks to the
    // <p> with ID "clickCountOutput"
    $("p#clickCountOutput").text(clicks);
    // When the count gets to 10, reset it to 0
    if (clicks === 10){
        clicks = 0;
    }

}


function checkAge(event) {
    event.preventDefault();

    // Get the user's birth year from the text
    // box with ID of "birthYear"
    let birthOfYear = parseInt( $("#birthYear").val() );

    // If they are currently under 18, print "Child"
    // to the <p> with ID of "birthYearOutput"
    if (birthOfYear < 18){
        $("p#birthYearOutput").text("Child");
    }

    // If they are 18 or over, print "Adult" instead
    if (birthOfYear >= 18){
        $("p#birthYearOutput").text("Adult");
    }
}

function calcSalesTax(event) {
    event.preventDefault();

    // Get the purchase amount from the text
    // box with ID of "purchaseAmount"
    let purchaseOfAmount = parseFloat( $("#purchaseAmount").val() );

    // Get the state from the text box with ID "state"
    let ofState = $("#state").val();
    // Tax rates are: WI 5%, IL 8%, MN 7.5%, MI 5.5%

    // Calculate the sales tax amount and print to
    // the <p> with ID of "salesTaxOutput"
    if (ofState === "WI"){
        let total = purchaseOfAmount * 1.05
        $("p#salesTaxOutput").text(total)
    }
    else if (ofState === "IL"){
        let total = purchaseOfAmount * 1.08
        $("p#salesTaxOutput").text(total)
    }
    else if (ofState === "MN"){
        let total = purchaseOfAmount * 1.075
        $("p#salesTaxOutput").text(total)
    }
    else if (ofState === "MI"){
        let total = purchaseOfAmount * 1.055
        $("p#salesTaxOutput").text(total)
    }
    // If the user enters a state not listed above,
    // print "Error" instead
    else{
        $("p#salesTaxOutput").text("Error")
    }


}

function recommendFood(event) {
    event.preventDefault();

    // Get the cat's age from the text box with
    // ID of "catAge"
    let catOfAge = parseFloat ( $("#catAge").val() );

    // Cats under 2 get "kitten chow", between 2 and 10
    // get "adult chow", and over 10 get "senior chow"
    if (catOfAge < 2){
        $("p#catAgeOutput").text("kitten chow");
    }
    else if (catOfAge >=2 && catOfAge <= 10){
        $("p#catAgeOutput").text("adult chow");
    }
    else if (catOfAge > 10) {
        $("p#catAgeOutput").text("senior chow");
    }



    // Print the food recommendation to the <p> with
    // ID of "catAgeOutput"


}

function drawCard(event) {
    event.preventDefault();

    // Generate a random card face value (1 - 13)
    let faceValue = Math.floor(Math.random() * 13) + 1;

    // Generate a random suit (1 - 4)
    let suit = Math.floor(Math.random() * 4) + 1;

    // Declare a variable to hold the description
    // of the card, for example "King of Spades"
    // or "2 of Hearts"
    let description;

    // For face values 2 - 10, you can just print the number.
    // Face value 1 is "Ace", 11 is "Jack", 12 is "Queen",
    // and 13 is "King"
    if (faceValue >=2 && faceValue <=10){
        description = faceValue;
    }
    else if (faceValue === 1){
        description = "Ace";
    }
    else if (faceValue === 11){
        description = "Jack";
    }
    else if (faceValue === 12){
        description = "Queen";
    }
    else if (faceValue === 13){
        description = "King";
    }

    // For the suits, 1 is "Clubs", 2 is "Spades",
    // 3 is "Hearts", 4 is "Diamonds"
    if (suit === 1){
        $("p#drawCardOutput").text(`${description} of Clubs`);
    }
    else if (suit === 2){
        $("p#drawCardOutput").text(`${description} of Spades`);
    }
    else if (suit === 3){
        $("p#drawCardOutput").text(`${description} of Hearts`);
    }
    else if (suit === 4){
        $("p#drawCardOutput").text(`${description} of Diamonds`);
    }

    // Print the card's description to the <p> with
    // ID of "drawCardOutput"


}