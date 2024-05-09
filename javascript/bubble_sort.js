function bubbleSort(arr) {
  //* Based on ObservableHQ post by gpazo
// This declares a variable swapped without initializing it. This variable will be used to track whether any swaps were made during an iteration of the sorting process.
  let swapped;
  // This is a do-while loop that continues executing the code block inside the curly braces as long as the swapped variable is true. This loop ensures that the sorting process continues until no more swaps are needed, indicating that the array is sorted.
  do {
    // swapped = false;: This resets the swapped variable to false at the beginning of each iteration of the do-while loop.
    swapped = false;
    // arr.forEach((num, index) => { ... });: This iterates over each element of the array arr using the forEach method. For each element, it executes the code block inside the arrow function.
    arr.forEach((num, index) => {
      // if (num > arr[index + 1]) { ... }: This condition checks if the current element (num) is greater than the next element (arr[index + 1]). If true, it means that the elements are out of order and need to be swapped.
      if (num > arr[index + 1]) {
        // [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];: This line performs the swap of the current element (arr[index]) with the next element (arr[index + 1]). It uses array destructuring assignment to swap the values without needing a temporary variable.
        [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
        // swapped = true;: After a swap is made, this sets the swapped variable to true, indicating that at least one swap occurred during this iteration.
        swapped = true
      }
    });
  } while (swapped);
  // Finally, once the do-while loop exits (when no more swaps are needed), the sorted array is returned.
  return arr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2, 3, 4]");
  console.log("=>", bubbleSort([3, 2, 1, 4]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", bubbleSort([1, 2, 3]));

  console.log("");

  console.log("Expecting: []");
  console.log("=>", bubbleSort([]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", bubbleSort([2, 3, 1]));
}

module.exports = bubbleSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
