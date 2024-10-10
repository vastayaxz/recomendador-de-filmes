let campoIdade;
let campoFantasia
let campoAventura

function setup() {
  createCanvas(800, 400);
  createCanvas("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("white");
  let idade = campoIdade.value():
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostadeFantasia, gostaDeAventura);
 
  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSlize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return " O menino que descobriu o vento";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Homen aranha: no aranhaverso";
        } else{
          return "Ladrões de bicicleta";
        }
      } else {
        if (gostaDeFantasia) {
          return "As aventura de pi";
        } else {
          return "Depois da chuva";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "A viagem de chiriro";
    } else {
      return "O feitiço do tempo";
    }
  }
}
