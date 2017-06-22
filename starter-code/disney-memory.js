console.log("Javascript is ready to go!");



// //******************************************************************
// // Game Logic
// //******************************************************************
function Game() {
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
    this._shuffleCards();

    //shuffling cards with Lodash

}

Game.prototype._shuffleCards = function () {
  this.cards = _.shuffle(this.cards);
 };

 Game.prototype._selectCard = function() {
   if (this.selectedCards.length === 0) {
     $(card).addClass('.blocked');
     this.selectedCards.push(card);
     console.log(this.selectedCards[0].id, this.selectedCards[1].id);
   } else if (this.selectedCards.length === 1) {
     this.pairsClicked++;
     $(card).addClass('.blocked');
     this.selectedCards.push(card);
   }

    if (this.selectedCards[0].id === this.selectedCards[1].id) {
      this.correctPairs++;
    } else {
      $(this.selectedCards[0]).css('background-color', '#D6B3F6');
      $(this.selectedCards[0]).css('background-color', '#D6B3F6');
    }    this.selectedCards = [];


 };




// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var Game;

$(document).ready(function(){
  game = new Game();
  var html = '';

  game.cards.forEach(function(picture, index) {
    html += '<div class= "card"';
    html += 'name ="img"/' + picture.name + ' id= '+ picture.img +'>';
    html += '</div>';
  });

$('#memory_board').append(html);

    $('.card').on("click", function(){
      game.selectedCards(this);
      var imgId = $(this).attr('id');
      $(this).css('background-image', 'url(img/' + imgId + ')');
    });


});
