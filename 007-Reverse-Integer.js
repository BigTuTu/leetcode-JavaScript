/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var rev = 0;
    
    while(x != 0){
        rev = rev *10 + x % 10;
        x = parseInt(x/10);//js 是弱类型语言
        if (rev < Math.pow(-2,31) || rev > (Math.pow(2,31) -1)){return 0;} //解决可能超过整数最大范围的问题
    }
    return rev;
};