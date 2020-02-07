class Raquete{
	 constructor(lado,brain) {
	this.x;
	this.y  = height/2;
	this.w = 20;
	this.h = 120;
	this.ychange = 0;
	this.fitness = 0;
	this.score = 0;
	
		if(lado=='left')
		{
			this.x = this.w;	
		}
		else
		{
			this.x = width - this.w;
		}
		
	    if (brain) 
		{
      		this.brain = brain.copy();
    	} 
		else 
		{
      		this.brain = new NeuralNetwork(5, 8, 3);
    	}	
		
	 }
	
	
  mutate() {
    this.brain.mutate(0.1);
  }
	
	update()
	{
		this.score++;	
		document.getElementById('maiorPonto').value = this.score;
		this.y += this.ychange;
		this.y = constrain(this.y,this.h/2,height-this.h/2)
	}
	
	move(steps)
	{
		this.ychange = steps;
	}
	

  think(bola) {
    // Find the closest pipe
    let inputs = [];
    inputs[0] = this.y / height; // posição da raquete
    inputs[1] = bola.x / width; // x da bolinha
    inputs[2] = bola.y / height; // y da bolinha
    inputs[3] = bola.xspeed / 10
    inputs[4] = bola.yspeed / 10
	this.inputs = inputs;
	
    let output = this.brain.predict(inputs);
	//console.log(output);
   
    if (output[0] == Math.max(output[0], output[1],output[2]))
	{
     	this.move(10);
    }
	else if (output[1] == Math.max(output[0], output[1],output[2]))
	{
		this.move(-10);
	}
	else if (output[2] == Math.max(output[0], output[1],output[2]))
	{
		this.move(0);
	}
	
  }

	
	show()
	{
		//alert(this.x);
		//console.log(this.x);
		fill(255);
		rectMode(CENTER);
		rect(this.x,this.y,this.w,this.h);
	}
}