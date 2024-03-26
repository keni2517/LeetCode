//Given a pattern and a string s, find if s follows the same pattern.

//Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

var detectCapitalUse = function(word) {
    const len = word.length;
    if (len === 0) return false;
    let cnt = 0;
    let first = false;
    for (let i = 0; i < len; ++ i) {
        const ch = word.charAt(i);
        if ((ch >= 'A') && (ch <= 'Z')) {
            cnt ++;
            if (i == 0) first = true;
        }
    }
    return (cnt === 0) || ((cnt === 1) && first) || (cnt === len);
};