/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var n = str.length; //
    var sign = 1;  //记录正负号
    var base = 0;//记录数字
    var i = 0;  //字符串的位数

    if (n === 0) return 0;
    
    while(i < n && str.charAt(i) === ' '){
        i++;  //找到不是空格的位置
    }

    if(str.charAt(i) == '+' || str.charAt(i) == '-'){
    	sign = (str.charAt(i) == '+') ? 1 : -1;
    	i++;//往前进一位
    }

    while(i < n && str.charAt(i) >= '0' && str.charAt(i) <= '9'){
    	base = base * 10 + (str.charAt(i) - 0);  //特别注意，两个字符串的加法是直接拼接得到新的String，其他运算是返回Number类型
    	i = i + 1;
        
    }
    var result = base * sign;
    //预防溢出
    if(result > Math.pow(2,31)-1){
    	result = Math.pow(2,31)-1;
    }

    if(result < Math.pow(-2,31)){
    	result = Math.pow(-2,31);
    }
    return result;
};