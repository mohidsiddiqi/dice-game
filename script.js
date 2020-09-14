
function generateRandom()
{
    return Math.floor(Math.random()*6)+1;
}

function play()
{
    player1Guess=generateRandom();
    player2Guess=generateRandom();

    document.querySelector("#player-1-dice").src="images/dice"+player1Guess+".png";
    document.querySelector("#player-2-dice").src="images/dice"+player2Guess+".png";
    checkwinner(player1Guess,player2Guess);
}

function checkwinner(player1dice,player2dice)
{
    var heading=document.querySelector(".heading");
    heading.classList.add("winner");
    if(player1dice>player2dice)
    {
        heading.innerHTML='Player 1 Wins <span class="fas fa-trophy">🏆</span>';
    }
    else if(player1dice<player2dice)
    {
        heading.innerHTML='Player 2 Wins <span class="fas fa-trophy">🏆</span>';
    }
    else
    {
        heading.innerHTML="Draw";
    }

retry();
}

function retry()
{
    var tryagain=document.createElement("div");
    tryagain.innerHTML="<span onclick='location.reload()'>Click to Reload Page</span>"
    tryagain.classList.add("retry");
    document.querySelector("#topheading").appendChild(tryagain);
    
}