// randomizando numero 1-6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// procurando o elemento corresponde as classes .dice, .img e mudando o atributo src para o dado correspondente ao numero randomizado
document.querySelector(".dice .img1").setAttribute("src", "images/dice"+randomNumber1+".png");
document.querySelector(".dice .img2").setAttribute("src", "images/dice"+randomNumber2+".png");

// validando resultados
if(randomNumber1>randomNumber2){
    document.querySelector(".container h1").textContent = "Player 1 Wins!";
} else if(randomNumber2>randomNumber1){
    document.querySelector(".container h1").textContent = "Player 2 Wins!";
}else{
    document.querySelector(".container h1").textContent = "Draw!";
}