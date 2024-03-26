//Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.



function wordBreak(wordList, word) {
	
	if (word === '') {
		return true;
	}

	const wordLen = word.length;

	for (let i = 1; i <= wordLen; i++) {
		const prefix = word.substr(0, i);

		if (wordList.includes(prefix) && wordBreak(wordList, word.substr(i))) {
			return true;
		}
	}

	return false;
}


function main() {
	const wordList = [
		"mobile", "samsung", "sam", "sung", "man",
		"mango", "icecream", "and", "go", "i",
		"like", "ice", "cream"
	];

	const result = wordBreak(wordList, "ilikesamsung");

	console.log(result);
}

main();
