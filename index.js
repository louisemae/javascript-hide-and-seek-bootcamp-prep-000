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
   lis[i].innerHTML = i+1+n;
 }
}

function deepestChild() {
  var grandNode = document.getElementsByClassName("grand-node");
  while (grandNode.hasChildNodes()===true) {
    grandNode = grandNode.querySelector('div');
  }
  return grandNode.innerHTML;
}