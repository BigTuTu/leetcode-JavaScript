/**
 * @param {number} num
 * @return {string}
 * 贪婪算法
建立罗马符号和对应整数的数组；
每次查表找出当前最大的数，减去该数后再继续查表。

 */
var intToRoman = function(num) {
    var val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        str = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"],
        res = '';

    for (i = 0; i < val.length; i++) {
        while (num >= val[i]) {
            num -= val[i];
            res += str[i];
        }
    }
    return res;

};