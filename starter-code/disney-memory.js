console.log("Javascript is ready to go!");


// //******************************************************************
// // Game Logic
// //******************************************************************
var MemoryGame = function() {
  this.cards = [
  		{ name: "anna",            img: "anna.jpg" },
  		{ name: "aurora",          img: "aurora.jpg" },
  		{ name: "belle",           img: "belle.jpg" },
  		{ name: "cinderella",      img: "cinderella.jpg" },
  		{ name: "elsa",            img: "elsa.jpg" },
      { name: "jasmine",         img: "jasmine.jpg" },
  		{ name: "mermaid",         img: "mermaid.jpg" },
  		{ name: "moana",           img: "moana.jpg" },
  		{ name: "mulan",           img: "mulan.jpg" },
  		{ name: "rapunzel",        img: "rapunzel.jpg" },
  		{ name: "snowhite",        img: "snowhite.jpg" },
  		{ name: "wonderwoman",     img: "wonderwoman.jpg" },
      { name: "anna",            img: "anna.jpg" },
  		{ name: "aurora",          img: "aurora.jpg" },
  		{ name: "belle",           img: "belle.jpg" },
      { name: "cinderella",      img: "cinderella.jpg" },
  		{ name: "elsa",            img: "elsa.jpg" },
  		{ name: "jasmine",         img: "jasmine.jpg" },
  		{ name: "mermaid",         img: "mermaid.jpg" },
  		{ name: "moana",           img: "moana.jpg" },
  		{ name: "mulan",           img: "mulan.jpg" },
  		{ name: "rapunzel",        img: "rapunzel.jpg" },
  		{ name: "snowhite",        img: "snowhite.jpg" },
  		{ name: "wonderwoman",     img: "wonderwoman.jpg" },
  	];
    this.selectedCards = [];
    this.pairsClicked = 0;
    this.correctPairs = 0;
};

// Shuffle cards method
MemoryGame.prototype._shuffleCards = function(array, random) {
     var i = array.length, j, swap;
      random = random || Math.random;
        while (--i) {
          j = random() * (i + 1) | 0;
            swap = array[i];
              array[i] = array[j];
                array[j] = swap;
         }
    return array;
};

// Select a card
MemoryGame.prototype.selectCard = function(card) {

};



// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  var html = '';

  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

    html += '<div class= "card" id="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="img/' + pic.name + '"';
    html += '    id="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(\'img/' + pic.img + '\') no-repeat"';
    html += '    id="'       + pic.img +  '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;
});
