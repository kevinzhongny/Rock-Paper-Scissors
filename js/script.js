let player1Choice = "";
let computerChoice = "";
let player1Score = 0;
let computerScore = 0;

let enableClick = function(ele) {
    $(ele).removeAttr("disabled");
}
let hideImage = function(ele) {
    $(ele).css("opacity","0");
}
let showImage = function(ele) {
    $(ele).css("opacity","1");
}
let updatePlayer1Score = function (ele) {
    $("#P1Score").text(player1Score);
}
let updateComputerScore = function (ele) {
    $("#P2Score").text(computerScore);
}
let sameChoice = function (ele) {
    $(ele).css("background-color", "red");
}
let player1Color = function (ele) {
    $(ele).css("background-color", "green");
}
let computerColor = function (ele) {
    $(ele).css("background-color", "orange");
}
let resetColor = function (ele) {
    $(ele).css("background-color", "transparent");
}

// starts rock paper scissors game on click
$(":image").click(function() {
    player1Choice = this.id; // sets player1's choice to mouseclick

    // randomizes computers choice
    let randomChoice = Math.ceil((Math.random()*3)); 
    if (randomChoice === 1) { 
        computerChoice = "rock";
    } else if (randomChoice === 2) {
        computerChoice = "paper";
    } else if (randomChoice === 3) {
        computerChoice = "scissors";
    }
    console.log(player1Choice);
    console.log(computerChoice);

    $(".choice").attr("disabled", true); // sets image to disabled
    setTimeout(function() { enableClick($(".choice")) }, 10000); // reenables image after 5 seconds

    // increments score of player or computer depending on who wins
    if (player1Choice === computerChoice) {
        setTimeout(function() { sameChoice($(".choice")) }, 4000);
    } else if (player1Choice === "rock" & computerChoice === "paper") {
        computerScore += 1;
    } else if (player1Choice === "rock" & computerChoice === "scissors") {
        player1Score += 1;
    } else if (player1Choice === "paper" & computerChoice === "scissors") {
        computerScore += 1;
    } else if (player1Choice === "paper" & computerChoice === "rock") {
        player1Score += 1;
    } else if (player1Choice === "scissors" & computerChoice === "rock") {
        computerScore += 1;
    } else if (player1Choice === "scissors" & computerChoice === "paper") {
        player1Score += 1;
    }
    
    // toggles paper image for animation, highlights paper if selected
    setTimeout(function() { hideImage($("#paper")) }, 0); 
    setTimeout(function() { showImage($("#paper")) }, 1000);
    setTimeout(function() { hideImage($("#paper")) }, 2000); 
    // setTimeout(function() { showImage($("#paper")) }, 3000);
    setTimeout(function() { showImage($("#paper")) }, 4000);
    if (player1Choice === "paper") {
        setTimeout(function() { player1Color($("#paper")) }, 3999);
    } else if (computerChoice === "paper") {
        setTimeout(function() { computerColor($("#paper")) }, 4000);
    } else {
        setTimeout(function() { hideImage($("#paper")) }, 4000);
        setTimeout(function() { showImage($("#paper")) }, 10000);
    }
    

    // toggles rock image for animation, highlights rock if selected
    setTimeout(function() { hideImage($("#rock")) }, 1000);
    setTimeout(function() { showImage($("#rock")) }, 4000);
    if (player1Choice === "rock") {
        setTimeout(function() { player1Color($("#rock")) }, 3999);
    } else if (computerChoice === "rock") {
        setTimeout(function() { computerColor($("#rock")) }, 3999);
    } else {
        setTimeout(function() { hideImage($("#rock")) }, 4000);
        setTimeout(function() { showImage($("#rock")) }, 10000);
    }

    // toggles scissors image for animation, highlights scissors if selected
    setTimeout(function() { hideImage($("#scissors")) }, 0);
    setTimeout(function() { showImage($("#scissors")) }, 2000);
    setTimeout(function() { hideImage($("#scissors")) }, 3000);
    setTimeout(function() { showImage($("#scissors")) }, 4000);
    if (player1Choice === "scissors") {
        setTimeout(function() { player1Color($("#scissors")) }, 3999);
    } else if (computerChoice === "scissors") {
        setTimeout(function() { computerColor($("#scissors")) }, 3999);
    } else {
        setTimeout(function() { hideImage($("#scissors")) }, 4000);
        setTimeout(function() { showImage($("#scissors")) }, 10000);
    }

    // updates scoreboard and resets colors
    setTimeout(function() { updatePlayer1Score() }, 4000);
    setTimeout(function() { updateComputerScore() }, 4000);
    setTimeout(function() { resetColor($(".choice")) }, 10000);
    
  })