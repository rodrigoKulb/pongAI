// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Neuro-Evolution Flappy Bird

// Editado por Rodrigo Kulb
// https://youtube.com/rodrigoKulb


function nextGeneration() {
  // console.log('next generation');
  calculateFitness();
  for (let i = 0; i < TOTAL; i++) {
    raqueteRights[i] = pickOne();
  }
  savedRaquete = [];
}

function pickOne() {
let maior = 0;
let melhor;
 let index = 0;
	/* comentado por rodrigo kulb 06/02/2020
  let r = random(1);
  while (r > 0) {
 r = r - savedRaquete[index].fitness;
 index++;
*/	
	for (let savedRaqueteBest of savedRaquete) 
	{
		if(savedRaqueteBest.score>=maior)
		{
			maior = savedRaqueteBest.score;
			melhor = savedRaqueteBest;
		}
	}

  console.log(maior);
  index--;
  if(maior>10000)
  {
		//console.log(savedRaquete[index]);
	  let raqueteRight = melhor;
	  let child = new Raquete("right",raqueteRight.brain);
	  child.mutate();
	  return child;
  }
  else
  {
	  let raqueteRight = melhor;
	  let child = new Raquete("right");
	  child.mutate();
	  return child;
	 }
}

function calculateFitness() {
  let sum = 0;
  for (let raqueteRight of savedRaquete) {
    sum += raqueteRight.score;
	//console.log(raqueteRight.score);
  }
  
  for (let raqueteRight of savedRaquete) {
    raqueteRight.fitness = raqueteRight.score / sum;
  }
}
