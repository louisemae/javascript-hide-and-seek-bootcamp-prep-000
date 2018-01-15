function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  var nested = document.getElementById("nested");
  return nested.getElementsByClassName("target")[0];
}

function increaseRankBy(n) {
 var rank = document.getElementById("app");
 const lis = rank.querySelectorAll('ul.ranked-list li');
 for (let i = 0; i < lis.length; i++) {
   lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
 }
}

function deepestChild() {
  var grandNode = document.getElementById("grand-node");
  while (grandNode.querySelector('div') !== null) {
    grandNode = grandNode.querySelector('div');
  }
  return grandNode;
}