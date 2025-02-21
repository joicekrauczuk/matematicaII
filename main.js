<script src="main.js"></script>
const botoes = document.querySelectorAll(".botao");
console.log(botoes);for (let i = 0; i < botoes.length; i++) {
    console.log(i);
  }botoes[i].onclick = function () {};for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
      botoes[i].classList.add("ativo");
    };
  }for (let j = 0; j < botoes.length; j++) {
    botoes[j].classList.remove("ativo");
  }const botoes = document.querySelectorAll(".botao");

  for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
      for (let j = 0; j < botoes.length; j++) {
        botoes[j].classList.remove("ativo");
      }
  
      botoes[i].classList.add("ativo");
    };
  }
  for ([inicialização]; [condição]; [incremento]) {
    declaração;
  }
  for (var i = 1; i <= 5; i++) {
    console.log(i);
  }
  for (var i = 0; i <= 10; i += 2) {
    console.log(i);
  }
  var frutas = ["Maçã", "Banana", "Laranja", "Pera"];
  for (var i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
  }
  let contador = 5;
  contador += 3;
  let contador = 10;
  contador -= 4;
  var numero = 3;
  numero *= 2;
  var numero = 10;
  numero /= 2;
  for ([inicialização]; [condição]; [incremento]) {
    declaração
    }
    for (var i = 1; i <= 5; i++) {
      console.log(i);
    }
    for (var i = 0; i <= 10; i += 2) {
      console.log(i);
    }
    var frutas = ["Maçã", "Banana", "Laranja", "Pera"];
for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
let contador = 5;
contador += 3;
let contador = 10;
contador -= 4;
var numero = 3;
numero *= 2;
var numero = 10;
numero /= 2; 
const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
botoes[i].classList.add("ativo");
textos[i].classList.add("ativo");
botoes[j].classList.remove("ativo");
textos[j].classList.remove("ativo");
for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo");
      textos[j].classList.remove("ativo");
    }

    botoes[i].classList.add("ativo");
    textos[i].classList.add("ativo");
  };
}
contadores[0].textContent = calculaTempo(tempoObjetivo1);
function calculaTempo(tempoObjetivo) {
  let tempoAtual = new Date();
  let tempoFinal = tempoObjetivo - tempoAtual;
}
let segundos = Math.floor(tempoFinal / 1000);
let minutos = Math.floor(segundos / 60);
let horas = Math.floor(minutos / 60);
let dias = Math.floor(horas / 24);
return (
  dias +
  " dias " +
  horas +
  " horas " +
  minutos +
  " minutos " +
  segundos +
  " segundos"
);
function calculaTempo(tempoObjetivo) {
  let tempoAtual = new Date();
  let tempoFinal = tempoObjetivo - tempoAtual;
  let segundos = Math.floor(tempoFinal / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);
  return (
    dias +
    " dias " +
    horas +
    " horas " +
    minutos +
    " minutos " +
    segundos +
    " segundos"
  );
}
segundos %= 60;
minutos %= 60;
horas %= 24;
contadores[0].textContent = calculaTempo(tempoObjetivo1);
contadores[1].textContent = calculaTempo(tempoObjetivo2);
contadores[2].textContent = calculaTempo(tempoObjetivo3);
contadores[3].textContent = calculaTempo(tempoObjetivo4);
const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];
contadores[0].textContent = calculaTempo(tempoObjetivo1); //Antes

contadores[0].textContent = calculaTempo(tempos[0]); // Depois  // Para cada objetivo na lista de contadores
for (let i = 0; i < contadores.length; i++) {
  //Calcular o tempo usando a função e associá-lo ao objetivo
  contadores[i].textContent = calculaTempo(tempos[i]);
}function atualizaCronometro() {
  for (let i = 0; i < contadores.length; i++) {
    contadores[i].textContent = calculaTempo(tempos[i]);
  }
}function comecaCronometro() {
  atualizaCronometro();
  setInterval(atualizaCronometro, 1000);
}

comecaCronometro();return (
  dias +
  " dias " +
  horas +
  " horas " +
  minutos +
  " minutos " +
  segundos +
  " segundos"
);if (tempoFinal > 0) {
  return (
    dias +
    " dias " +
    horas +
    " horas " +
    minutos +
    " minutos " +
    segundos +
    " segundos"
  );
} else {
  return "Prazo Finalizado";
}const diasAniversario = new Date();

function calculaDias(diasAniversario) {
    const hoje = new Date();  
    const tempoRestante = diasAniversario - hoje; 
    const diasRestantes = Math.floor(tempoRestante / (1000 * 60 * 60 * 24)); 
    
    return diasRestantes;
}const diasAniversario = new Date();

function calculaDias(diasAniversario) {
    const hoje = new Date();  
    const tempoRestante = diasAniversario - hoje; 
    const diasRestantes = Math.floor(tempoRestante / (1000 * 60 * 60 * 24)); 
    
    return diasRestantes;
}function contagemRegressiva(tempoFinal) {
  let dias = Math.floor(tempoFinal / (60 * 60 * 24));

  if (tempoFinal > 0) {
    return "CHEGOU O DIA!";
  } else {
    return "Faltam " + dias + " dias ";
  }
}function comecaCronometro(){
  setInterval(atualizaCronometro,1000);
}function comecaCronometro(){
  setInterval(atualizaCronometro(),1000);
}console.log(Math.round(3.4));  // Saída: 3
console.log(Math.round(5.7));  // Saída: 6v
comecaCronometro();function atualizaCronometro() {
  for (let i = 0; i < contadores.length; i++) {
    //contadores[i].textContent = calculaTempo(tempos[i]);
  }
}if (tempoFinal > 0) {
  return (
    dias +
    " dias " +
    horas +
    " horas " +
    minutos +
    " minutos " +
    segundos +
    " segundos"
  );
} else {
  return [0, 0, 0, 0];
}function atualizaCronometro() {
  document.getElementById("dias0").textContent = calculaTempo(tempos[0]);
  for (let i = 0; i < contadores.length; i++) {
    //contadores[i].textContent = calculaTempo(tempos[i]);
  }
}function atualizaCronometro() {
  document.getElementById("dias0").textContent = calculaTempo(tempos[0])[0];
  for (let i = 0; i < contadores.length; i++) {
    //contadores[i].textContent = calculaTempo(tempos[i]);
  }
}function atualizaCronometro() {
  document.getElementById("dias0").textContent = calculaTempo(tempos[0])[0];
  document.getElementById("horas0").textContent = calculaTempo(tempos[0])[1];
  document.getElementById("min0").textContent = calculaTempo(tempos[0])[2];
  document.getElementById("seg0").textContent = calculaTempo(tempos[0])[3];
  for (let i = 0; i < contadores.length; i++) {
    //contadores[i].textContent = calculaTempo(tempos[i]);
  }
}function atualizaCronometro() {
  document.getElementById("dias0").textContent = calculaTempo(tempos[1])[0];
  document.getElementById("horas0").textContent = calculaTempo(tempos[1])[1];
  document.getElementById("min0").textContent = calculaTempo(tempos[1])[2];
  document.getElementById("seg0").textContent = calculaTempo(tempos[1])[3];
  for (let i = 0; i < contadores.length; i++) {
    //contadores[i].textContent = calculaTempo(tempos[i]);
  }
}function calculaTempo(tempoObjetivo) {
  let tempoAtual = new Date();
  let tempoFinal = tempoObjetivo - tempoAtual;
  let segundos = Math.floor(tempoFinal / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);

  segundos %= 60;
  minutos %= 60;
  horas %= 24;
  if (tempoFinal > 0) {
    return [dias, horas, minutos, segundos];
  } else {
    return [0, 0, 0, 0];
  }
}const livro = ["O Pequeno Príncipe", "1943"];<div>
<p>Nome:</p>
<p id="nome"></p>
</div>
<div>
<p>Ano:</p>
<p id="ano"></p>
</div><p id="texto1">Olá, mundo!</p>document.getElementById("texto1");#texto1 {
  
}document.getElementById("texto1");let textoParagrafo = document.getElementById("texto1");document.getElementById("texto1").style.color = "red";document.getElementById("seg0").textContent = calculaTempo(tempos[0])[3];
document.getElementById("seg1").textContent = calculaTempo(tempos[1])[3];
document.getElementById("seg2").textContent = calculaTempo(tempos[2])[3];
document.getElementById("seg3").textContent = calculaTempo(tempos[3])[3];for (let i = 0; i < tempos.length; i++) {
  document.getElementById("seg" + i).textContent = calculaTempo(tempos[i])[3];
}for (let i = 0; i < contadores.length; i++) {
  document.getElementById("dias" + i).textContent = calculaTempo(tempos[i])[0];
  document.getElementById("horas" + i).textContent = calculaTempo(tempos[i])[1];
  document.getElementById("min" + i).textContent = calculaTempo(tempos[i])[2];
  document.getElementById("seg" + i).textContent = calculaTempo(tempos[i])[3];
}