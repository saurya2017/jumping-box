var canvas;
var music;
var surface1,surface2,surface3,surface4
var box
var edges

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    surface1=createSprite(68,600,100,50)
    surface1.shapeColor = "yellow";

    surface2=createSprite(255,589,100,35)
    surface2.shapeColor = "orange"

    surface3=createSprite(427,591,100,45)
    surface3.shapeColor = "red"

    surface4=createSprite(592,597,100,55)
    surface4.shapeColor = "lightgreen"



    //create box sprite and give velocity

     box=createSprite(320,60,30,30)
     box.shapeColor = "white"
     box.velocityX=5
     box.velocityY=5


}

function draw() {
    background("black");
    //create edgeSprite
    edges=createEdgeSprites();

    box.bounceOff(edges)

    //add condition to check if box touching surface and make it box

    if(surface1.isTouching(box)&&box.bounceOff(surface1)){
        box.shapeColor="yellow"
        music.play();
        }


        if(surface2.isTouching(box)&&box.bounceOff(surface2)){
            box.shapeColor="orange"
            music.play();
        }


         if(surface3.isTouching(box)&&box.bounceOff(surface3)){
             box.shapeColor="red"
             music.play();
         }    
         
         
         if(surface4.isTouching(box)&&box.isTouching(surface4)){
             box.shapeColor="lightgreen"
             music.play();
         }



         if(surface3.isTouching(box)&&box.isTouching(surface3)){
             box.shapeColor="red"
             box.velocityX = 0
             
             music.stop();
         }
    

    
        
    
 
    


    


    drawSprites();



     fill("white")

     //for knowing the  x and y position of mouse when we take mouse to the canvas
     text(mouseX + ',' + mouseY,10,45);

}
