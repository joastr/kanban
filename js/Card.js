'use strict'
// class KANBAN CARD

var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var prefix = "https://cors-anywhere.herokuapp.com/";
var myHeaders = {
  'X-Client-Id': '3838',
  'X-Auth-Token': '12bb29e3b81209a529c2c42c0518e8ef'
};

function Card(id, name) {
    var self = this;

    this.id = id;
    this.name = name || 'No name given';
    this.element = generateTemplate('card-template', { description: this.name }, 'li');

    this.element.querySelector('.card').addEventListener('click', (event) => {
      event.stopPropagation();

      if (event.target.classList.contains('btn-delete')) {
            self.removeCard();
      }
    });
}
Card.prototype = {
  
removeCard: () => {
  var self = this;

  fetch(prefix + baseUrl + '/card/' + self.id, { method: 'DELETE', headers: myHeaders })
    .then((resp) => {
      return resp.json();
    })
    .then((resp) => {
      self.element.parentNode.removeChild(self.element);
    });
  }
};

