function adduser()
{
 Player1=document.getElementById("player1_name").value;
 Player2=document.getElementById("player2_name").value;
 localStorage.setItem("player_1",Player1);
 localStorage.setItem("player_2",Player2);
 window.location="gamepage.html";
}
