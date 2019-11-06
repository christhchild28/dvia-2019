// set up variables

let table;
let bubbles;

function preload() {
  table = loadTable('data/final set.csv', 'header'); // load data before setup and draw
  //console.log(table);
}

function setup() {
  createCanvas(800, 800);
  loadData();

}


function draw() {
  background(0);

  for(let i=0; i< bubbles.length; i++) {
      bubbles[i].display();
  }

}


function loadData() {

  bubbles = [];  // lets you loop over all data in the table and create a bubble object for each row in the table

  for(let i = 0, i<table.getRowCount(); i++) {
      let row = table.getRow(i);
      let country = row.get('Country');
      let year = row.get('Year');
      let location = row.get('Location');
      let tests = row.get('Tests');
      let yield = row.get('Yield');
// fill the empty array with data
      bubbles[i] = new Bubble(random(0, 800), random(0, 800),Country,Year, Yield);
  } 

}





// display the data

class Bubble{
  constructor(tempX, tempY, tempCountry, tempYear, tempLocation, tempYield){
    this.x=tempX;
    this.y = tempY;
    this.country = tempCountry;
    this.year= tempYear;
    this.location= tempLocation;
    this.yield = tempYield;
  }

  display(){

    ellipse(this.x, this.y, this.yield)
    text(this.county, this.x, this.y-10);
    text(this.year, this.x, this.y+10);
  }
}










