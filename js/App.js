"use strict";
// General function
function generateTemplate(name, data, basicElement) {
  	const template = document.getElementById(name).innerHTML;
  	const element = document.createElement(basicElement || 'div');
  
  	Mustache.parse(template);
  	element.innerHTML = Mustache.render(template, data);
  
  	return element;
}

//API KODILLA

var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var prefix = "https://cors-anywhere.herokuapp.com/";
var myHeaders = {
  'X-Client-Id': '3838',
  'X-Auth-Token': '12bb29e3b81209a529c2c42c0518e8ef'
};

fetch(prefix + baseUrl + '/board', { headers: myHeaders })
  .then((resp) => {
    return resp.json();
  })
  .then((resp) => {
    setupColumns(resp.columns);
  });

  function setupColumns(columns) {
    columns.forEach((column) => {
      let col = new Column(column.id, column.name);
      board.addColumn(col);
      setupCards(col, column.cards);      
    });
  }

  function setupCards(col, cards) {
	cards.forEach((card) => {
    var cardObj = new Card(card.id, card.name);
  	col.addCard(cardObj);
	});
}