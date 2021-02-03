/* 
Bubble sort is the classic "terrible" sorting algorithm.
In bubble sort, you keep looping through an array to find out whether adjacent values need swapping,
and you keep going until there are no more values that need swapping.
*/

function swap(array, i, j) {
    // swap function simply swaps the value at 2 indices in an array.
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

// the bubbleSort function looks through adjacent pairs of values in the array.
// best case is that the nodes are already in order so it simply needs to check each pair 1 time; an O(n) operation.
// each value needs swapping with each other value, so that's O(n^2). And this is the same as the average case, which is also O(n^2).
function bubbleSort(array) {
    let swaps = 0; 
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            swap(array, i, i + 1);
            swapps++;
        }
    }
    if (swaps > 0) {
        return bubbleSort(array);
    }
    return array;
}

/* 
Merge Sort takes a divide and conquer approach to sorting. 
It breaks the array down into continually smaller chunks, then merges them back together in the correct order.
*/

function mergeSort(array) {
    // if the array has 1 or 0 elements it is by definition sorted, so you can return the array itself
    if (array.length <= 1) {
        return array;
    }
    // else you slice the array into 2 halves and sort each half by recursively calling mergeSort.
    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mergeSort(left);
    right = mergeSort(right);
    return mergeSort(left, right, array);
};

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }
    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }
    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
}

/* 
Quicksort is another sorting algorithm with O(log(n)) best and average-case performance, although it is O(n^2) is the worst case.
Despite this, quicksort is more commonly used than merge sort, as it is more cache-efficient and can easily be performed in place 
*/

function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
};

/* 
There are different partitioning algorithms. A common in-place algorithm is Lomuto's algorithm
*/

function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
}