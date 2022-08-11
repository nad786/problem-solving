//leetcode #3
function findLongestSubsrting(s = "") {
    let len = 0;
    for (let i = 0; i < s.length; i++) {
        let str = '';
        for (let j = i; j < s.length; j++) {
            if (!str.includes(s[j])) {
                str += s[j];
            } else {
                break;
            }

        }
        if (len < str.length) {
            len = str.length;


        }

    }
    return len;
}
console.log(findLongestSubsrting("pwwkew")) //wke


//leetcode #5
function longestPalidromSubstring(str) {
    const len = str.length;
    let resLength = 0;
    let res = ''
    for (let i = 0; i < len - resLength; i++) {
        for (let j = len - 1; j >= resLength; j--) {
            if (str[i] == str[j]) {
                const temp = str.substring(i, j + 1);
                if (checkPalindrome(temp) & resLength < temp.length) {
                    resLength = temp.length;
                    res = temp;
                    break;
                }
            }
        }
    }
    return res;
};
function checkPalindrome(string) {
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(longestPalidromSubstring("babad"));
//leetcode #5 using algo
function longestPalidromSubstringUsingAlgo(str) {

    const len = str.length
    const trackerArrray = new Array(len);
    for (let i = 0; i < len; i++) {
        trackerArrray[i] = new Array(len);
        trackerArrray[i][i] = true;
    }

    let maxSubStringLen = 1;
    let res = ''
    for (let i = 1; i < len - maxSubStringLen; i++) {
        for (let j = 0; j < len - i + 1; j++) {
            if (trackerArrray[i + 1][j - 1] && str[i] == str[j]) {
                trackerArrray[i][j] = true;
                if (maxSubStringLen < (i + j - 1)) {
                    maxSubStringLen = i + j - 1;
                }
            } else {
                trackerArrray[i][j] = false;
            }
        }
    }
    return maxSubStringLen;
};
console.log(longestPalidromSubstringUsingAlgo("babadab"));