

// JavaScript program to return title 
// to result of excel sheet.

// Returns result when we pass title
function titleToNumber(s)
{
	// This process is similar to 
	// binary-to-decimal conversion
	let result = 0;
	for (let i = 0; i < s.length; i++)
	{
		result *= 26;
		result += s[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1;
	}
	return result;
}
// Driver Code
document.write(titleToNumber("CDA"));

// This code is contributed by avanitrachhadiya2155
