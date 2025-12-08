function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

const imgList = []

for (const grid of document.getElementsByClassName('square-grid')) {
  for (const img of grid.getElementsByTagName('img')) {
    imgList.push(img);
  }
}

for (const img of imgList) {
  /*const circle = document.createElement('div');
  circle.className = 'blur-circle';
  document.body.appendChild(circle);
  insertAfter(circle, img);**/
  const whiteImg = img.cloneNode();
  insertAfter(whiteImg, img);
  whiteImg.className += ' white';
  /*const borderImg = img.cloneNode();
  insertAfter(borderImg, img);
  borderImg.className += ' b-border';**/
}