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

