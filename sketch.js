
let brain;
let bola;
let raqueteRights = [];
let savedRaquete = [];
let birds = [];
let raqueteLeft;
let raqueteRight;
let leftScore = 0;
let rightScore = 0;
let cycles = 100;
const TOTAL = 200;
let pontosPC = 0;

function setup() {
	
    createCanvas(640, 480);
	paragraph = createP('Velocidade:');	
	slider = createSlider(1,100,1);
 	bola = new Bola(brain);
	raqueteLeft = new Raquete("left");
	for (let i = 0; i < TOTAL; i++) {
	raqueteRights[i] = new Raquete("right");
  }
	
}

function draw() {
	
	for (let n = 0 ; n < slider.value() ; n++)
	{
	
		background(0);
		bola.raqueteCheck("left",raqueteLeft);
		
		raqueteLeft.show();
		raqueteLeft.update();
		
		//Raquete do computador

		if(raqueteLeft.y>bola.y-50)
		{
			raqueteLeft.y -= 3;
		}
		if(raqueteLeft.y<bola.y+50)
		{
			raqueteLeft.y += 2;
		}
		
		for (let raqueteRight of raqueteRights) 
		{	
			raqueteRight.show(); 
			raqueteRight.think(bola);	
			raqueteRight.update();
			bola.raqueteCheck("right",raqueteRight);
		} 

		if (raqueteRights.length === 0) 
		{
			counter = 0;
      		nextGeneration(); 
	    }

		bola.update();
		bola.bordas();
		bola.show();
	
		fill(255);
		textSize(20);
		text(leftScore+" - Computer", 40, 40);
		text("AI - "+rightScore, width-100, 40);
	}
}

function keyReleased()
{
		raqueteLeft.move(0);
		//raqueteRight.move(0);
}

function keyPressed()
{
	if(key == "a")
	{
		raqueteLeft.move(-10);
	}
	else if(key == "z")
	{
		raqueteLeft.move(10);
	}

	if(key == "s")
	{
		//raqueteRight.move(-10);
	}
	else if(key == "x")
	{
		//raqueteRight.move(10);
	}	
}