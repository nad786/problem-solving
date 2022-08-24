//phone dialor all possible combination
function phoneDialorCombination(str = "") {

    var obj = { 0: '0', 1: '1', 2: 'abc', 3: 'def', 4: 'ghi', 5: 'jkl', 6: 'mno', 7: 'pqrs', 8: 'tuv', 9: 'wxyz' };
    let res = [];
    function findAllCombination(startingStr = "", s = "") {
        if (startingStr.length != 1) {
            const temp = obj[startingStr[0]];
            for (let i = 0; i < temp.length; i++) {
                findAllCombination(startingStr.substring(1), s + temp[i]);
            }

        } else {
            const temp = obj[startingStr];
            for (let i = 0; i < temp.length; i++) {
                res.push(s + temp[i]);
            }
        }
    }
    findAllCombination(str);
    return res;
}
console.log(phoneDialorCombination('23'));