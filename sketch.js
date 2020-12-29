
var fixedRect, movingRect;
 function setup() {
    createCanvas(1200,800);
   fixedRect = createSprite(600, 400, 70, 80);
    fixedRect.shapeColor = "green";
     fixedRect.debug = true;
      movingRect = createSprite(300,400,80,30);
       movingRect.shapeColor = "green";
        movingRect.debug = true;
       }
        function draw()
         {
            background(0,0,0);
           movingRect.x = World.mouseX;
            movingRect.y = World.mouseY;
             console.log(movingRect.x-fixedRect.x); 
             if( movingRect.x-fixedRect.x< movingRect.width/2 + fixedRect.width/2 
              && movingRect.x-fixedRect.x  < movingRect.width/2 + fixedRect.width/2 &&
              movingRect.y-fixedRect.y< movingRect.height/2 + fixedRect.height/2 
              && movingRect.y-fixedRect.y < movingRect.height/2 + fixedRect.height/2 ) {
                fixedRect.shapeColor = "red";
               } 
             else {
                fixedRect.shapeColor = "green"; 
            }
 drawSprites();
 }