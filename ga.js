// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Neuro-Evolution Flappy Bird

// Editado por Rodrigo Kulb
// https://youtube.com/rodrigoKulb

function nextGeneration() {
  console.log('next generation');
  calculateFitness();
  for (let i = 0; i < TOTAL; i++) {
    raqueteRights[i] = pickOne();
  }
  savedRaquete = [];
}

function pickOne() {
  let index = 0;
  let r = random(1);
  while (r > 0) {
 r = r - savedRaquete[index].fitness;
 index++;

  }
  index--;
  let raqueteRight = savedRaquete[index];
  let child = new Raquete("right",raqueteRight.brain);
  child.mutate();
  return child;
}

function calculateFitness() {
  let sum = 0;
  for (let raqueteRight of savedRaquete) {
    sum += raqueteRight.score;
  }
  for (let raqueteRight of savedRaquete) {
    raqueteRight.fitness = raqueteRight.score / sum;
  }
}
