function setup() 
  {
    createCanvas(400, 400);
  }

    //var xPosition1 = 0;
    //var xPosition2 = 0;
    //var y = 0;

function draw() 
  {
    background(220);
    
    for (var i = 1; i <= width; i = i + 10)
    {
      //var startX = 190 + i;
      //var startY = i;
      //var endX = 190 - i ;
      //var endY = i;
      
      line(abs(width/2 - i), i, width - abs(width/2 - i), i);
    }
    
    /*for (var i = 10; i <= width-10; i = i + 10)
    {
      var startX = 190 + i ;
      var startY = i;
      var endX = 190 - i  ;
      var endY = i;
      
      line(startX, startY, endX, endY);
    }*/
  }  
