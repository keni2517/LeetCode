//Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

//You must write an algorithm with O(log n) runtime complexity.


function find_index(arr, n, K)
{
	
	// Traverse the array
	for(let i = 0; i < n; i++)
	
		// If K is found
		if (arr[i] == K)
			return i;

		// If current array element
		// exceeds K
		else if (arr[i] > K)
			return i;

	// If all elements are smaller
	// than K
	return n;
}

// Driver code
let arr = [ 1, 3, 5, 6 ];
let n = arr.length;
let K = 2;

document.write(find_index(arr, n, K));


