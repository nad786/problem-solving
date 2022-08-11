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
    return [...arr1, ...arr2].sort((a, b) => a - b);
}

console.log(findMeidanOfTwoSortedArray([1, 2], [3, 4])) //2.50000

