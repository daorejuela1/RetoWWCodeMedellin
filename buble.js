/**
 * Swap values in array.
 *
 * @param {int}   x         Description.
 * @param {int}   y         Description of optional variable.
 *
 * @return {Array} Array with swaped values.
 */
Array.prototype.swap = function (x,y) {
  [this[x], this[y]] = [this[y], this[x]]
  return this;
}

/**
 * Sorts Array by using the bubble sort method.
 *
 * @param {Array}  Array  array of integers.
 *
 * @return {Array} Array with sorted values from min to max.
 */
const bubleSort = (array) => {
    let arraySort = array
    let unsorted = false;
    do {
	unsorted = false;
    	for (let index = 0; index < arraySort.length - 1; index++) {
	    if (arraySort[index] > arraySort[index + 1]) {
    	        arraySort.swap(index, index + 1);
	        unsorted = true;
	    }
        }
    } while (unsorted);
    return arraySort
}

array = [1,9,2,8,3,7,4,6,7]
console.log(bubleSort(array))
