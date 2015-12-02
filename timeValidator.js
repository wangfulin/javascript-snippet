// 判断字符串是否符合时间的格式
function TimeUtil(){
	
}

// 支持YYYY-mm-DD [HH:MM:SS]
// 支持YYYY/mm/DD [HH:MM:SS]
// 支持YYYY_mm_DD [HH:MM:SS]
// 支持YYYY.mm.DD [HH:MM:SS]
// 支持YYYY年mm月DD日 [HH时mm分ss秒]
TimeUtil.prototype.validate = function(timeStr){
	var dateExp = new RegExp(/((^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._年])(10|12|0?[13578])([-\/\._月])(3[01]|[12][0-9]|0?[1-9])日?)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._年])(11|0?[469])([-\/\._月])(30|[12][0-9]|0?[1-9]))日?|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._年])(0?2)([-\/\._月])(2[0-8]|1[0-9]|0?[1-9])日?)|(^([2468][048]00)([-\/\._年])(0?2)([-\/\._月])(29)日?)|(^([3579][26]00)([-\/\._年])(0?2)([-\/\._月])(29)日?$)|(^([1][89][0][48])([-\/\._年])(0?2)([-\/\._月])(29)日?)|(^([2-9][0-9][0][48])([-\/\._年])(0?2)([-\/\._月])(29)日?)|(^([1][89][2468][048])([-\/\._年])(0?2)([-\/\._月])(29)日?)|(^([2-9][0-9][2468][048])([-\/\._年])(0?2)([-\/\._月])(29)日?)|(^([1][89][13579][26])([-\/\._年])(0?2)([-\/\._月])(29)日?)|(^([2-9][0-9][13579][26])([-\/\._年])(0?2)([-\/\._月])(29)日?))((\s+)(0?\d{1}|1\d{1}|2[0-3])[:时](0?|[1-5])\d{1}[:分](0?|[1-5])\d{1}秒?)?$/);
	return dateExp.test(timeStr.trim());
	
}

// 获取日期字符串的年月日，时分秒分别的值
TimeUtil.prototype.getSplittedTime = function(timeStr){
	var TimeSplitted = timeStr.trim().split(/\s+|-|\.|_|:|[年月日时分秒]/),
	    filteredTimeSplitted = removeEmptyStrInArray(TimeSplitted);
		
	return filteredTimeSplitted;
}

TimeUtil.prototype.compare = function(timeStr1, timeStr2){
	var filteredTimeSplitted1 = this.getSplittedTime(timeStr1);

	var filteredTimeSplitted2 = this.getSplittedTime(timeStr2);
	
	for(var i=0;i<6;i++){
		if(filteredTimeSplitted1[i]>filteredTimeSplitted2[i]){
			return false;
		}
	}
	return true;
}

// 把数组中的''空字符串去掉，同时将字符串转化为数字
function removeEmptyStrInArray(arr){
	var len = arr.length;
	var newArr = [];
	for(var i = 0;i < len; i++){
		if(arr[i] !== ""){
			newArr.push(parseInt(arr[i]));
		}
	}
	return newArr;
}

TimeUtil.prototype.getTime = function(timeStr){
	var filteredTimeSplitted = this.getSplittedTime(timeStr);
	var time = new Date();
	time.setFullYear(filteredTimeSplitted[0]);
	time.setMonth(filteredTimeSplitted[1]-1);
	time.setDate(filteredTimeSplitted[2]);
	time.setHours(filteredTimeSplitted[3]);
	time.setMinutes(filteredTimeSplitted[4]);
	time.setSeconds(filteredTimeSplitted[5]);
	
	return time.getTime();
}

TimeUtil.prototype.format = function(timeStr, format){
	
}