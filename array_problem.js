//leetcode #4
function findMeidanOfTwoSortedArray(nums1 = [], nums2 = []) {
    const arr = mergeTwo(nums1, nums2);
    let len = Math.floor(arr.length / 2);

    if (arr.length % 2 == 0 && len != 0) {
        return (arr[len] + arr[len - 1]) / 2
    }
    return arr[len];
};
function mergeTwo(arr1, arr2) {
    // return [...arr1, ...arr2].sort((a, b) => a - b);

    const res = [];

    while (arr1.length | arr2.length) {
        if (!arr1.length) {
            res.push(arr2.shift());
        } else if (!arr2.length) {
            res.push(arr1.shift())
        } else if (arr1[0] > arr2[0]) {
            res.push(arr2.shift());
        } else {
            res.push(arr1.shift());
        }
    }
    return res;
}
console.log(findMeidanOfTwoSortedArray([1, 2], [3, 4])) //2.50000


// leetcode
function romanToInt(s) {

    const romToIntObj = {
        "I": 1,
        "IV": 4,
        "V": 5,
        "IX": 9,
        "X": 10,
        "XL": 40,
        "L": 50,
        "XC": 90,
        "C": 100,
        "CD": 400,
        "D": 500,
        "CM": 900,
        "M": 1000
    }
    let res = 0;
    for (var i = 0; i < s.length; i++) {

        if (i < s.length - 1 && romToIntObj[s[i] + s[i + 1]]) {
            res += romToIntObj[s[i] + s[i + 1]];
            i++;
        } else if (romToIntObj[s[i]]) {
            res += romToIntObj[s[i]];
        }
    }
    return res;
}
console.log(romanToInt("MCMXCIV"));

// First Unique Character in a String
function firstUniqChar(s = "") {

    const obj = {};
    const res = []
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]]) {
            obj[s[i]]++
        } else {
            obj[s[i]] = 1;
            res.push({ index: i, key: s[i] });
        }
    }
    for (let i = 0; i < res.length; i++) {
        if (obj[res[i]['key']] == 1) {
            return res[i]['index']
        }
    }
    return -1;
};
console.log("leetcode");

// geekforgreeks
function factDigit(number) {

    const map = [];
    let i = 0;
    let max = 1;
    while (max < number) {
        max = fact(i);
        map.push({ val: max, num: i });
        i++;
        if (max == number) {
            return i;
        }
    };
    let res = ""
    for (let x = map.length - 1; x >= 0; x--) {
        if (number >= map[x].val) {
            number -= map[x].val;
            res = x + res;
        }
    }
    return number == 0 ? parseInt(res) : -1;
}
function fact(number) {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact = fact * i;
    }
    return fact;
}
console.log(432);

// LRU (least recently used cache)
function LRU(max) {
    let map = new Map();
    function getFirstKey() {
        return map.keys().next.value;
    }
    return function (key, value) {

        if (map.has(key)) {
            map.delete(key);
        } else if (map.size == max) {
            map.delete(getFirstKey());
        }
        map.set(key, value);
        return map;
    }
}

//leetcode #1338  Reduce Array Size to The Half
function setMinSizeOfArayy(arr = []) {
    var obj = {};
    arr.forEach(a => {
        if (obj[a]) {
            obj[a] = obj[a] + 1;
        } else {
            obj[a] = 1;
        }
    });
    let keys = Object.keys(obj);
    keys.sort((a, b) => obj[b] - obj[a]);
    const target = arr.length / 2;
    let sum = 0;
    for (let i = 0; i < keys.length; i++) {
        sum += obj[keys[i]];
        if (target <= sum) {
            return i + 1;
        }
    }

}
console.log(setMinSizeOfArayy([3, 3, 3, 3, 5, 5, 5, 2, 2, 7]));

//leetcode #659 Split Array into Consecutive Subsequences
// function isPossible(nums = []) {
//     const subArr1 = [];
//     const subArr2 = [];

//     for (let i = 0; i < nums.length; i++) {

//         if (nums[i] == nums[i + 1]) {
//             if ((subArr1[subArr1.length - 1] == nums[i] - 1 || !subArr1.length) && (subArr2[subArr2.length - 1] == nums[i] - 1 || !subArr2.length)) {
//                 subArr1.push(nums[i]);
//                 subArr2.push(nums[i + 1]);
//                 i++;
//             } else {
//                 return false;
//             }

//         } else {
//             if (subArr1.length == 0 || subArr1[subArr1.length - 1] == nums[i] - 1 && !(subArr1.length >= 3 || subArr2[subArr2.length - 1] == nums[i] - 1)) {
//                 subArr1.push(nums[i]);
//             } else if (subArr2.length == 0 || subArr2[subArr2.length - 1] == nums[i] - 1) {
//                 subArr2.push(nums[i]);
//             } else {
//                 return false
//             }
//         }

//     }
//     return subArr1.length > 2 && (subArr2.length > 2 || subArr2.length == 0);
// }
// console.log(isPossible([1, 2, 3, 3, 4, 5]))



