/**
 * Search an item in an array by using a linear algorithm
 *
 * @param {Array} array to search
 * @param {int} number to find
 *
 * @return {int} index of number or -1 if not found
 */
const linealSearch = (array, number) => {
    let index = 0;
    let resp = -1;
    for (index; index < array.length; index++){
	if (array[index] == number){
	    resp = index;
	}
    }
    return resp;
}
x = [1,9,2,8,3,7,4,6,7]
y = 4
console.log(linealSearch(x,y))
