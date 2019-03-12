
var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var prefix = "https://cors-anywhere.herokuapp.com/";
var myHeaders = {
  'X-Client-Id': '3838',
  'X-Auth-Token': '12bb29e3b81209a529c2c42c0518e8ef'
};


function Column(id, name) {
    var self= this;
    this.id = id;
    this.name = name || 'No name given';
    this.element = generateTemplate('column-template', { name: this.name, id: this.id });

    this.element.querySelector('.column').addEventListener('click', function (event) {
      if (event.target.classList.contains('btn-delete')) {
            self.removeColumn();
      }
  
      if (event.target.classList.contains('add-card')) {
        var cardName = prompt("Enter the name of the card");
        event.preventDefault();
        var data = new FormData();
        data.append('name', cardName);
        data.append('bootcamp_kanban_column_id', self.id);

        fetch(prefix + baseUrl + '/card', {
                method: 'POST',
                headers: myHeaders,
                body: data,
            })
        .then(function(res) {
            return res.json();
        })
        .then(function(resp) {
            var card = new Card(resp.id, cardName);
            console.log(card);
            
            self.addCard(card);
            console.log('addCard function attr', card);
        });
      }
      
  });
}

Column.prototype = {
  addCard: function(card) {
    this.element.querySelector('ul').appendChild(card.element);
  },
  removeColumn: function() {
    var self = this;
    fetch(prefix + baseUrl + '/column/' + self.id, { method: 'DELETE', headers: myHeaders })
      .then(function(resp) {
        return resp.json();
      })
      .then(function(resp) {
        self.element.parentNode.removeChild(self.element);
      });
  }
};

