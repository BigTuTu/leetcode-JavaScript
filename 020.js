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
        if (stackS[i] == '(') {
            stackS.push(')');
        } else if (stackS[i] == '[') {
            stackS.push(']')
        } else if (stackS[i] == '{') {
            stackS.push('}')
        } else if (stackS.pop != stackS[i]) {
            return false;
        }
    }
    return true;
};