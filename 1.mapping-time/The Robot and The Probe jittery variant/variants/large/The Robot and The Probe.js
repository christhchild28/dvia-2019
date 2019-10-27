//The Robot and The Probe


var com = true;


// -----------------------
function setup() {
  createCanvas(720, 480);
  background(200);
  ellipseMode(RADIUS);
}


function draw() {
  noStroke();
  if (com){
     background(200);
    	for (var j = 0; j < 300; j++){
    		var x = random(0,720);
    		var y = random(0,480);
    		fill(0);
    		ellipse(x,y,1,1);
    	}
    	com = false;
    }
  
//fetch current time
  
  var H = hour();
  var M = minute();
  var S = second(); 
  var mappedS = map(S, 0,59, 0,360);
  
  //initializes line spacing at belt
  var div = 90/24;// make this the belt on the robot
  var seg = div - 4;
  
  var cut_start = 219;
  //var cut_end = width/2+109;
  var cut_end = 219;

     //Draw The Robot
  
  // Neck
  stroke(102);                // Set stroke to gray
  line(266, 257, 266, 162);   // Left
  line(276, 257, 276, 162);   // Middle
  line(286, 257, 286, 162);   // Right

  // Antennae
  line(276, 155, 246, 112);   // Small
  line(276, 155, 306, 56);    // Tall
  line(276, 155, 342, 170);   // Medium

  // Body
  noStroke();                 // Disable stroke
  fill(102);                  // Set fill to gray
  ellipse(264, 377, 33, 33);  // Antigravity orb
  fill(0);                    // Set fill to black
  rect(219, 257, 90, 120);    // Main body
  fill(102);                  // Set fill to gray
  rect(219, 290, 90, 6);      // Gray belt
  for (var i = 0; i < H; i++){
    	stroke(60,255,28);
    	strokeWeight(2);
    	line(cut_start+1+i*div, 280, cut_start+1+i*div+seg,275);
  }

  // Head

  fill(0);                    // Set fill to black
  ellipse(276, 155, 45, 45);  // Head
   fill(60,255,28);                  // Set fill to white
  arc(288, 150, 17, 17,0,radians(mappedS)); //recharge ring around large eye mapped to seconds
  
  if (S == 59){

    	strokeWeight(5);
    	line(288,150,720,-480);
    	com = true;
  }
  fill(255);
  ellipse(288, 150, 14, 14);  // Large eye
  
  strokeWeight(2);
    stroke(color(60,255,28));
  
  fill(0);                    // Set fill to black
  ellipse(288, 150, 3, 3);    // Pupil
  
  fill(153);                  // Set fill to light gray
  ellipse(263, 148, 5, 5);    // Small eye 1
  ellipse(296, 130, 4, 4);    // Small eye 2
  ellipse(305, 162, 3, 3);    // Small eye 3
  
 // Probe
var moved = M*(width + 85)/60; 
fill(205,10,20);
ellipse(x+12, y, 45, 45);
fill(255);
ellipse(x+24, y-6, 14, 14);
fill(0);
ellipse(x+24, y-6, 3, 3);
fill(153);
ellipse(x, y-8, 5, 5);
ellipse(x+30, y-26, 4, 4);
ellipse(x+41, y+6, 3, 3);
 
}

 
   
  
