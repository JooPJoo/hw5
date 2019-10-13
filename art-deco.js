function setup() 
  {
    createCanvas(600, 400);
  }

//var j = [];
//var y = [];

function draw() 
  {
    background(255);
    noFill();
    rectMode(CENTER);
    
    for (var j = 100; j <= 570; j += 100) 
      {
        for (var i = 20; i <= 90; i += 20)
        {
        
          rect(j, height/2, i, i);
        
 
        }
      }
  }
