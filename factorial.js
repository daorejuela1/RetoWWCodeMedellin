/**
 * Calculate the factorial of a number by using recursion.
 *
 * @param {int} number to calculate the factorial.
 *
 * @return{int} factorial of number.
 */
const factorial = (number) => {
	if (number == 0)
		return 1;
	return (number * factorial(number - 1));
}

x = 3
console.log(factorial(x))
