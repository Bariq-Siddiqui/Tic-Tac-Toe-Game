var firstPlayer=document.getElementById("firstPlayer");
var secondPlayer=document.getElementById("secondPlayer");
var firPlayer=prompt("Enter First Player Name","Player 1");
var secPlayer=prompt("Enter Second Player Name","Player 2");
firstPlayer.innerHTML=firPlayer;
secondPlayer.innerHTML=secPlayer;

var grid=[["","",""],["","",""],["","",""]];
var playerTurn=true;
function tic(e,n){
    if(grid[Math.floor(n/3)][n%3] == ""){
        if(playerTurn == true){
            e.innerText="X";
            grid[Math.floor(n/3)][n%3] = "X";
            playerTurn = false;
        }
        else{
            e.innerText="O";
            grid[Math.floor(n/3)][n%3] = "O";
            playerTurn = true;
        }
    }
    for(var i=0;i<3;i++){
        if(grid[i][0] == "X" && grid[i][1] == "X" && grid[i][2] == "X"){
            alert(firPlayer+" has won")
            reset()
            return;
        }
        else if(grid[i][0] == "O" && grid[i][1] == "O" && grid[i][2] == "O"){
            alert(secPlayer +" has won")
            reset()
            return;
        }
        else if(grid[0][i] == "X" && grid[1][i] == "X" && grid[2][i] == "X"){
            alert(firPlayer+" has won")
            reset()
            return;
        }
        else if(grid[0][i] == "O" && grid[1][i] == "O" && grid[2][i] == "O"){
            alert(secPlayer +" has won")
            reset()
            return;
        }
    }
    if(grid[0][0] == "X" && grid[1][1] == "X" && grid[2][2] == "X" || grid[0][2] == "X" && grid[1][1] == "X" && grid[2][0] == "X"){
        alert(firPlayer+" has won")
        reset()
        return;
    }
    else if(grid[0][0] == "O" && grid[1][1] == "O" && grid[2][2] == "O" || grid[0][2] == "O" && grid[1][1] == "O" && grid[2][0] == "O"){
        alert(secPlayer +" has won")
        reset()
        return;
    }   
    else if ((grid[0][0] == 'X' || grid[0][0] == 'O') && (grid[0][1] == 'X' 
        || grid[0][1] == 'O') && (grid[0][2] == 'X' || grid[0][2] == 'O') && 
        (grid[1][0] == 'X' || grid[1][0] == 'O') && (grid[1][1] == 'X' || 
        grid[1][1] == 'O') && (grid[1][2] == 'X' || grid[1][2] == 'O') && 
        (grid[2][0]    == 'X' || grid[2][0] == 'O') && (grid[2][1] == 'X' || 
        grid[2][1] == 'O') && (grid[2][2] == 'X' || grid[2][2] == 'O')) {
        alert('Match Tie');
        reset()
        return
    }
    
}
function reset(){
    location.reload();
}
