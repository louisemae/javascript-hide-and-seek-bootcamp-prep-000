
/* Accepts a selector and returns the first element 
 * that matches.
 */
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

/* Pulls an element with class .target out of 
 * an element with id #nested.
 */
function nestedTarget() {
  var nested = document.getElementById("nested");
  return nested.getElementsByClassName("target")[0];
}

/* Increases the ranks in all of the elements with
 * class .ranked-list by n. 
 */
function increaseRankBy(n) {
 var rank = document.getElementById("app");
 const lis = rank.querySelectorAll('ul.ranked-list li');
 for (let i = 0; i < lis.length; i++) {
   lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
 }
}

/* Pulls out the most deeply nested child from 
 * div#grand-node. 
 */
function deepestChild() {
  var grandNode = document.getElementById("grand-node");
  while (grandNode.querySelector('div') !== null) {
    grandNode = grandNode.querySelector('div');
  }
  return grandNode;
}