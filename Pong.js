// jogo do pong prof stênio maio de 2022

// variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro/2;

// velocidade da bolinha
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

let colidiu = false;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
  createCanvas(600, 400);
}
function mostraRaquete (x ,y) {
  rect (x, y, raqueteComprimento, raqueteAltura)  
}

function mostraBolinha (){
  circle (xBolinha, yBolinha, diametro); 
}
function movimentaBolinha(){
 xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha; 
}
function verificaColisaoRaquete (x,y){
  colidiu = collideRectCircle (x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha,raio)
  if (colidiu) {
    velocidadeXBolinha *= -1; }
}

function verificaColisaoBorda(){
  if (xBolinha +raio>width || xBolinha -raio<0) {velocidadeXBolinha *= -1}
 if (yBolinha+raio>height || yBolinha-raio<0) {velocidadeYBolinha *= -1}
}

function movimentaMinhaRaquete (){
  if (keyIsDown(UP_ARROW))
yRaquete -= 10;   
  if (keyIsDown(DOWN_ARROW))
yRaquete += 10;   
}
function movimentaRaqueteOponente (){
  velocidadeYOponente=yBolinha-yRaqueteOponente-raqueteComprimento/2-30;
  yRaqueteOponente += velocidadeYOponente
}

function incluirPlacar(){
  fill (255);
  textSize(32);
  text (meusPontos, 278, 26);
  text (pontosDoOponente, 321, 26);
}

function marcaPonto(){
  if (xBolinha>590){
    meusPontos +=1;
  }
    if (xBolinha<10){
    pontosDoOponente +=1;}
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete (xRaquete, yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete(xRaquete,yRaquete);
  verificaColisaoRaquete (xRaquete,yRaquete) ;
  mostraRaquete(xRaqueteOponente, yRaqueteOponente) ;
  movimentaRaqueteOponente ();
  verificaColisaoRaquete (xRaqueteOponente,yRaqueteOponente) ;
  incluirPlacar ();
  marcaPonto();
}

