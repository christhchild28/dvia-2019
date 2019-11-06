//UseThis-- replace the divergent palette sketch.js with this

var allTests
var allYield

//var table

function preload(){
  allTests = loadTable('data/johnson_all_tests.csv', 'csv', 'header')
  allYield = loadTable('data/johnson_all_yield.csv', 'csv', 'header')
  //table = loadTable('data/totals.csv', 'csv', 'header')
}

function setup(){
  createCanvas(3900, 2250)
  background(127)
  noStroke()
  textAlign(CENTER)
  textSize(16)

  // calculate the total number of tests per year (and also the max in any given year)
  var years = []
  var totals = []
  var lowest = 0
  var highest = 0
  for (var r=0; r<table.getRowCount(); r++){
    var sum = 0
    var year = table.getString(r, 0)
    for (var c=1; c<table.getColumnCount(); c++){
      sum += table.getNum(r, c)
    }

    years.push(year)
    totals.push(sum)
    highest = Math.max(sum, highest)
  }

  console.log(years)
  console.log(sum)

  // draw a box for each year and set its color based on the total number of tests
  var x = 100
  var y = 100
  var dim = 50
  var numberOfShades = 9
  var palette = Brewer.sequential('BuPu', numberOfShades, lowest, highest)

  for (var i=0; i<years.length; i++){
    // draw the box
    var color = palette.colorForValue(totals[i])
    fill(color)
    rect(x, y, dim, dim)

    // draw the year number on top
    fill('white')
    text(years[i], x+dim*.5, y+dim*.6)
    x+=dim
  }

}



// var atmospheric
// var underground

// function preload(){
//   // atmospheric = loadTable('data/atmospheric.csv')
//   // underground = loadTable('data/underground.csv')
//   atmospheric = loadJSON('data/atmospheric.json')
//   underground = loadJSON('data/underground.json')
//   console.log(preload)

// }

// function setup(){
//   createCanvas(3200, 700)
//   background(0)

//   // pick one of the three data files to work with and call it 'data'
//   var data = atmospheric

//   // create a divergent palette where we'll use negative values for underground tests
//   // and positive values for atmospheric (the -60 .. 80 range came from eyeballing the data)
//   var palette = Brewer.divergent('RdBu', Infinity, -60, 0, 80)

//   // set up typography
//   textFont("Rokkitt")
//   textSize(16)
//   fill(230)
//   noStroke()

//   var x = 200
//   var y = 100
//   var rowHeight = 60
//   var colWidth = 40

//   // draw country name labels on the left edge of the table
//   textStyle(BOLD)
//   //textAlign(RIGHT)
//   for (var country in data.tests){
//     text(country, x-colWidth, y)
//     y += rowHeight
//   }

//   // draw each year's totals, one column at a time
//   textStyle(NORMAL)
//   textAlign(CENTER)
//   for (var i=0; i<data.years.length; i++){
//     y = 100
//   // for (var i=0; i<data.years.length; i++){
//   //   y = 100

//     // draw the year label in the header row
//     var year = data.years[i]
//     fill(230)
//     text(year, x, y-rowHeight)

//     // step through all the countries' totals for the year, row by row
//     for (var country in data.tests){
//       // draw the atmospheric tests as an upper semicircle using the palette to set the color by value
//       var value = atmospheric.tests[country][i]
//       var radius = Math.sqrt(60 * value)
//       var color = palette.colorForValue(value)
//       fill(color)
//       arc(x, y, radius, radius, -PI, 0)

//       // draw the underground tests as a lower semicircle using its *negative* value to pick the color
//       value = underground.tests[country][i]
//       radius = Math.sqrt(60 * value)
//       color = palette.colorForValue(-value)
//       fill(color)
//       arc(x, y, radius, radius, 0, PI)

//       // shift downward before drawing the next country
//       y += rowHeight
//     }

//     // at the bottom, draw a full circle with the total number of tests that year
//     var totalTests = 0
//     for (var country in data.tests){
//       totalTests += atmospheric.tests[country][i] + underground.tests[country][i]
//     }
//     var radius = Math.sqrt(60 * totalTests)
//     fill(255, 80)
//     ellipse(x, y, radius)

//     // shift leftward before drawing the next year
//     x += colWidth
//   }

// }
