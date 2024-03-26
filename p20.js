//Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.

//The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them. 


function generateTheString(n) 
{ 
	var ans=""; 
	
	if(n%2) 
	{ 
		
		for(var i=0;i<min(n,24);i++) 
		{ 
			ans+=(char)('b' + i); 
		} 
	
		if(n>24) 
		{ 
			for(var i=0;i<(n-24);i++) 
				ans+='a'; 
		} 
	} 
	
	else
	{ 
		
		for(var i=0;i<Math.min(n,25);i++) 
		{ 
			ans+= String.fromCharCode('b'.charCodeAt(0) + i); 
		} 
	 
		if(n>25) 
		{ 
			for(var i=0;i<(n-25);i++) 
				ans+='a'; 
		} 
	} 
	
	return ans; 
} 
 
var n = 34; 
document.write( generateTheString(n)); 


