// Sharing link
//var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1VlkjhoLrLlZYoX6ctCNJs8eJ8EXEMeTSgIPR6joZP_8/edit?usp=sharing';

// Copied from URL
var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1VlkjhoLrLlZYoX6ctCNJs8eJ8EXEMeTSgIPR6joZP_8/edit#gid=0';


function init() {
  Tabletop.init( {key: publicSpreadsheetUrl,
                  callback: showInfo,
                  simpleSheet: true } )
}

function showInfo(data, tabletop) {
  data.forEach(function(data) {
    header.innerHTML = data.header;
    header2.innerHTML = data.header2;
    body.innerHTML = data.body;
    body2.innerHTML = data.body2;
    body3.innerHTML = data.body3;
    body4.innerHTML = data.body4;
    body5.innerHTML = data.body5;
    body6.innerHTML = data.body6;
    body7.innerHTML = data.body7;
    body8.innerHTML = data.body8;
    body9.innerHTML = data.body9;
 });
}

window.addEventListener('DOMContentLoaded', init)