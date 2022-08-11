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