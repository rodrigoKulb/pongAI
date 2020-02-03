class Bola {
	 constructor() 
	 {
	this.x = width/2;
	this.y  = height/2;
	this.xspeed = 30;
	this.yspeed = 10;	 
	this.fitness = 0;
	this.brain = 0;
	this.brainNew = 0;
	this.reset();
	this.r = 12;
	this.inputs = [];
	this.score = 0;
	 }
	 
	 

	 
	 
	raqueteCheck(lado,p)
	{
		if(lado=="left")
		{
			if(this.y < p.y + p.h/2 &&  this.y > p.y - p.h/2 && this.x - this.r <p.x + p.w/2)
			{
					if(this.x > p.x)
					{
						var diff = this.y - (p.y - p.h/2);
						var rad = radians(45);
						var angle = map(diff, 0, p.h, -rad, rad);
						this.xspeed = 5 * cos(angle);
						this.yspeed  = 5 * sin(angle);
						this.x = p.x + p.w/2+ this.r;
					}
			}
		}
		else if(lado=="right")
		{
			if(this.y < p.y + p.h/2 &&  this.y > p.y - p.h/2 && this.x + this.r  > p.x - p.w/2)
			{
				if(this.x < p.x)
					{
						for (let i = raqueteRights.length - 1; i >= 0; i--) 
						{
							console.log(i+" -> "+raqueteRights[i].y);
							if(raqueteRights[i].y==p.y)
							{
							 	savedRaquete.push(raqueteRights[i]);
								raqueteRights[i].score++;
							}
							else
							{
								raqueteRights.splice(i, 1)[0]	
							}
						}		
						var diff = this.y - (p.y - p.h/2);
						var angle = map(diff, 0, p.h,  radians(225), radians(135));
						console.log(angle);
						this.xspeed = 5 * cos(angle);
						this.yspeed  = 5 * sin(angle);
						this.x = p.x - p.w/2 - this.r;
						this.score++;
						
					}
			}
			else
			{
			
			}
		}
	}


//

//


	 
	 
	 
	 
	 update()
	 {
		this.x = this.x + this.xspeed;
		this.y = this.y + this.yspeed;
	}
	
	reset()
	{
		
		this.x = width/2;
		this.y  = height/2;
		var angle = random(-PI/4, PI/4);
		this.xspeed = 5 * cos(angle);
		this.yspeed = 5 * sin(angle);
		
		if(random(1) < 0.5)
		{
			this.xspeed *= -1;
		}
		
		
	}
	
	bordas()
	{
		if(this.y<0 || this.y > height)
		{
			this.yspeed *= -1;
		}
		
		if(this.x > width)
		{
			this.reset();
			leftScore++;
			if(this.score>1 && savedRaquete.length)
			{
				nextGeneration();
			}
		}
		if(this.x <0)
		{
			this.reset();
			rightScore++;	
		}
	}
	
	show()
	{
		fill(255);
		ellipse(this.x,this.y,this.r*2,this.r*2);
	}
}