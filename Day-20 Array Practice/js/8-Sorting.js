// Bubble Sort
var data = [4, 2, 8, 1, 5];
console.log("Unsorted: ",data);

var len = data.length;
for (i = 0; i < len - 1; i++) {
  for (j = 0; j < len - 1 - i; j++) {
    if (data[j] > data[j + 1]) {
      // swap of two elements
      let temp = data[j];
      data[j] = data[j + 1];
      data[j + 1] = temp;
    }
  }
}
console.log("Sorted: ",data);
