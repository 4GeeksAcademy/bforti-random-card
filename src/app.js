/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let figuras = ["cora", "pica ", "trebol", "diaman"];
  let valores = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let uno = figuras[Math.floor(Math.random() * 3)];

  let figura = document.querySelector(".figura");
  figura.className = uno;
  let figura2 = document.querySelector(".figura2");
  figura2.className = uno;
  let numero = document.querySelector(".h1");
  numero.innerHTML = valores[Math.floor(Math.random() * (valores.length - 1))];
  if (uno == figuras[0]) {
    figura.innerHTML = "♥";
    figura2.innerHTML = "♥";
    figura.style.color = "red";
    figura2.style.color = "red";
    numero.style.color = "red";
  }
  if (uno == figuras[1]) {
    figura.innerHTML = "♦ ";
    figura2.innerHTML = "♦ ";
    figura.style.color = "red";
    figura2.style.color = "red";
    numero.style.color = "red";
  }
  if (uno == figuras[2]) {
    figura.innerHTML = "♣";
    figura2.innerHTML = "♣";
    figura.style.color = "black";
    figura2.style.color = "black";
    numero.style.color = "black";
  }
  if (uno == figuras[3]) {
    figura.innerHTML = "♠ ";
    figura2.innerHTML = "♠ ";
    figura.style.color = "black";
    figura2.style.color = "black";
    numero.style.color = "black";
  }
};
