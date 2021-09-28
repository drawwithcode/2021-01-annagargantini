function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  // put setup code here
}

function draw() {
  // put drawing code here
background(220);
translate(0, -70, 0);
rotateX (60);
noFill();

let myColor = lerpColor(color("#FF008D"), color("#FFAD00"), frameCount/1080);
stroke(myColor);

rotate(frameCount/3);
 for (var i = 0 ; i < 50 ; i ++) { // numero forme
   beginShape()
   for (var j = 0; j < 360 ; j += frameCount/3) { // numero lati
     var rad = i * 7 
     var x = rad * cos (j)
     var y = rad * sin (j)
     var z = sin (frameCount*5 + i * 10 ) * 50

     vertex(x, y, z)
   }


   endShape(CLOSE)

   
   if (frameCount === 1080) {
    noLoop();
  }
 
}
}

