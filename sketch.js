//Defining GLobal Variables
var boy, girl, boyImage, girlImage, dist, mask, touch, cope, aesImage, aes, watermark

//Loading images
function preload(){
    boyImage = loadImage("CoronaBoy.png")
    girlImage = loadImage("CoronaGirl.png")
    aesImage = loadImage("Airson.png");
}

//Setting up the code
function setup(){
   //Substituting values such that the canvas (place where the output occurs) is placed in center
   var cnv = createCanvas(600,600)
   var x = (windowWidth-width)/2
   var y = (windowHeight-height)/2
   cnv.position(x,y);

   //creating a boy object and applying image to it
   boy = createSprite(100,402,10,10)
   boy.addImage(boyImage);
   boy.scale = 0.5

   //creating a girl object and applying image to it
   girl = createSprite(500,400,10,10)
   girl.addImage(girlImage)
   girl.scale = 0.5

   //creating Airson English School Logo object and applying image to it
   aes = createSprite(300,250,10,10);
   aes.addImage(aesImage);  
}

//Drawing Text and images on the Canvas
function draw(){
    //background colour value in grey value (greyness between 0-255)
    background(200);

    //Defining text to be entered
    dist = "Maintain Distance Of 6 Feet or 2 Meters"
    mask = "Wear Mask And Use Sanitizer Frequently"
    cope = "Let Us All Cope Through This Situation"
    watermark = "Coded by Vedant Gole Student of AES"

    //Border thickness of Line and Text
    strokeWeight(1.25)
    //Border Colour in grey value
    stroke(0)
    //Social Distancing Line
    line(150,400,450,400)

    //Aligning the text in Center
    textAlign(CENTER);
    textFont('Calibri')

    //Filling colour in (R,G,B) or (Red,Green,Blue) value
    //Displaying text which was defined before
    fill(250,0,5)
    textSize(15.5)
    text(dist,300,425)

    fill(75,120,255)
    textSize(27)
    text(mask,300,60)

    fill(82,184,255)
    textSize(26)
    text(cope,300,100)

    textSize(14)
    fill(0)
    text(watermark, 480,590)
    
    //Drawing all the objects to which images were applied
    drawSprites();
}
