/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {   //考点仍然是整数反转
	var rev = 0,
        oldX = x;
    
	if(x < 0){return false;}

	while(x !== 0){
		rev = rev * 10 + x % 10;
		x = parseInt(x / 10);
	}

	if (oldX === rev) {
		return true;
	}
	else {
		return false;  //别漏了！！不等的时候返回false
	}
    
};