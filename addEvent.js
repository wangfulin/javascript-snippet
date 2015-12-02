// bind event 
function addEvent(ele, evType, fn, useCapture){
	if(ele.addEventListener){
		ele.addEventListener(evType, fn, useCapture);
		return true;
	}else if(ele.attachEvent){
		var r = ele.attachEvent('on' + evType, fn);
	}else{
		ele['on' + evType] = fn;
	}
}