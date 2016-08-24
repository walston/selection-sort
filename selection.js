function selection(A, log) {
  if (log) log("Init: " + A);
  if (A.length < 2) return A;

  var array = (function(original) {
    var copy = [];
    for (var i = 0; i < original.length; i++) {
      copy[i] = original[i];
    }
    return copy;
  })(A);

  var key = 0;

  while (key < array.length - 1) {
    var logString = "";
    var lowest = array[key];
    var index = key;
    for (var i = key + 1; i < array.length; i++) {
      if (array[i] < lowest) {
        lowest = array[i];
        index = i;
      }
    }
    logString += "Array:  " + array + "\n";
    array[index] = array[key];
    array[key] = lowest;
    key++;
    if (log) log(logString);
  }
  return array;
}
