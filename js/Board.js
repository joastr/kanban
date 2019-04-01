"use strict";
var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var prefix = 'https://cors-anywhere.herokuapp.com/';
var myHeaders = {
  'X-Client-Id': '3838',
  'X-Auth-Token': '12bb29e3b81209a529c2c42c0518e8ef'
};


const board = {
    name: 'Tablica Kanban',
    addColumn: (column) => {
      board.element.appendChild(column.element);
    },
    element: document.querySelector('#board .column-container')
};


document.querySelector('#board .create-column').addEventListener('click', function() {
    const name = prompt('Enter a column name');
    const data = new FormData();
  
    data.append('name', name);
  
    fetch(prefix + baseUrl + '/column', {
        method: 'POST',
        headers: myHeaders,
        body: data,
      })
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        const column = new Column(resp.id, name);
        board.addColumn(column);
        board.test();
      });
});


