
//Given two strings a and b, return the length of the longest uncommon subsequence between a and b. If no such uncommon subsequence exists, return -1.

	function findLUSlength(a,b)
	{
	
	let map= new Map(); 
	let strArr= [];
	strArr.push(a);
	strArr.push(b);

	for (let s=0; s<strArr.length;s++) 
	{
	
		for (let i = 0; i < (1 << strArr[s].length); i++) 
		{
			let t = "";
			for (let j = 0; j < strArr[s].length; j++) {

				if (((i >> j) & 1) != 0)
					
					t += strArr[s][j];
					
			}

		
			if (map.has(t))
				map.set(t,map.get(t)+1);
			else
				map.set(t,1);
		}
	}
	let res = 0;
	for (let [key, value] of map.entries())

	{
	
		if (value == 1)
			res = Math.max(res, key.length); 
	}
	return res;
	}
	

	let a = "abcdabcd", b = "abcabc"; 
	document.write(findLUSlength(a, b));
	


