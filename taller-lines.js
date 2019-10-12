function setup() 
  {
    createCanvas(400, 400);
  }

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
    
    for (var i = 5; i <= width-5; i = i + 5)
    {
      var startX = i;
      var startY = 0;
      var endX = i;
      var endY = i*2;
      
      line(startX, startY, endX, endY);
    }
    
    
      line(5,5,5,5);
    /*for (var i = 10; i <= width-10; i = i + 10)
    {
      var startX = (-210 + i);
      var startY = i;
      var endX = (-210 - i);
      var endY = i;
      
      line(startX, startY, endX, endY);
    }*/
  }  
      
      
      
      
      
      /*line(x1, y, x2, y);
    }  
      
      for (var x2 = 390; x2 <= 210; x2 = x2 - 10)
      {  
        for (var y = 10; y <= height-10; y = y + 10)
        {
          
          line(x1, y, x2, y);
        
      }
    }*/
  //}  




