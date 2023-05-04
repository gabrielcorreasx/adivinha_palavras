function addUser(){
    player1Name=document.getElementById("player1NameInput").value;
    player2Name=document.getElementById("player2NameInput").value;


    localStorage.setItem("player1Name",player1Name)
    localStorage.setItem("player2Name",player1Name)
    window.location="game_page.html"
}