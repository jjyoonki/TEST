C5
C2
window.onload = function(){
	var n=1;
	while(1){
		var obj_code = document.getElementById('code'+n);
		var obj_js   = document.getElementById('js'+n);
		if( obj_code==undefined || obj_js==undefined )
			break;
		obj_code.innerHTML = obj_js.innerHTML.slice(1);
		n++;
	}
}

function rainbow_code(){
	var n=1;
	while(1){
		var obj_code = document.getElementById('code'+n);
		var obj_js   = document.getElementById('js'+n);
		if( obj_code==undefined || obj_js==undefined )
			break;
		obj_code.innerHTML = obj_js.innerHTML.slice(1);
		n++;
	}
}
