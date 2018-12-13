/**
 * @param {string[]} strs
 * @return {string}
 * 
 * java语言描述
 *  public String longestCommonPrefix(String[] strs) {
    if (strs.length == 0) return "";
    String prefix = strs[0];
    for (int i = 1; i < strs.length; i++)
        while (strs[i].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length() - 1);
            if (prefix.isEmpty()) return "";
        }        
    return prefix;
}
 */

//去第一个元素作为基准
var longestCommonPrefix = function(strs) {
    if (strs.length == 0) return '';
    var prefix = strs[0];
    for (i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix.length == 0) return '';
        }
    }
    return prefix;
};