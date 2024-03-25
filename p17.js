//Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.


	function sortSquares(arr)
	{
		let n = arr.length;

		for (let i = 0; i < n; i++)
			arr[i] = arr[i] * arr[i];

		arr.sort();
	}

	let arr = [ -6, -3, -1, 2, 4, 5 ];
	let n = arr.length;

	document.write("Before sort " + "<br/>");
	for (let i = 0; i < n; i++)
		document.write(arr[i] + " ");

	sortSquares(arr);
	document.write("" + "<br/>");
	document.write("After Sort " + "<br/>");
	for (let i = 0; i < n; i++)
		document.write(arr[i] + " ");


