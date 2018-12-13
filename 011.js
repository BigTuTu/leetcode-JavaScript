/**
 * @param {number[]} height
 * @return {number}
 */
//暴力法
// var maxArea = function(height) {
//     var maxArea = 0;
//     for (i = 0; i < height.length; i++) {
//         for (j = i + 1; j < height.length; j++) {
//             maxArea = Math.max((j - i) * Math.min(height[i], height[j]), maxArea);
//         }
//     }
//     return maxArea;
// };

//双指针法，时间复杂度为O(n)
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var maxArea = 0,
        l = 0,
        r = height.length - 1; //l,r 双指针

    while (l < r) {
        maxArea = Math.max(Math.min(height[l], height[r]) * (r - l), maxArea);
        if (height[l] <= height[r]) {
            l++;
        } else { //一次调整一个指针，留下较高的那个
            r--;
        }
    }

    return maxArea;
};