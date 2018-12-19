/**
 * @param {string} s
 * @return {boolean}
 * 
 * 一一对称
 * 数据结构-栈
 */
var isValid = function(s) {
    if (s == '') return true;
    var stackS = [];

    for (i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            stackS.push(')');
        } else if (s[i] == '[') {
            stackS.push(']');
        } else if (s[i] == '{') {
            stackS.push('}');
        } else if (stackS.pop() != s[i]) {
            return false;
        }
    }
    if (stackS.length == 0) return true;
};