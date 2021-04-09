var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1VlkjhoLrLlZYoX6ctCNJs8eJ8EXEMeTSgIPR6joZP_8/';

function init() {
  Tabletop.init({
    key: publicSpreadsheetUrl,
    callback: showInfo,
    simpleSheet: true
  })
}

function showInfo(data, tabletop) {
  data.forEach(function (data) {
    data01.innerHTML = data.data01;
    data02.innerHTML = data.data02;
    data03.innerHTML = data.data03;
    data04.innerHTML = data.data04;
    data05.innerHTML = data.data05;
    data06.innerHTML = data.data06;
    data07.innerHTML = data.data07;
    data08.innerHTML = data.data08;
    data09.innerHTML = data.data09;
    data10.innerHTML = data.data10;
    data11.innerHTML = data.data11;
  });
}

window.addEventListener('DOMContentLoaded', init)