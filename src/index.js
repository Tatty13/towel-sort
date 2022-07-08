module.exports = function towelSort (matrix = []) {
  let arr = [];
  matrix.forEach((el, i) => {
    if (i % 2 == 0) {
      for(let i = 0; i < el.length; i++) {
        arr.push(el[i]);
      }
    } else {
      for(let i = el.length - 1; i >= 0; i--) {
        arr.push(el[i]);
    }
  }
})
  
  return arr;
}
