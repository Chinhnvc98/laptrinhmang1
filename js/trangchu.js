function move_left(vt){
	var a = vt.replace("px","");
	a = Number(a);
	if(a == 0){
		a = -5360;
	}
	a = a+670;
	document.getElementById('ul').style.left = a + "px";
	document.getElementById('ul').style.transition = "left 1s";
}
function move_right(vt){
	var a = vt.replace("px","");
	a = Number(a);
	if(a == -4690){
		a = 670;
	}
	a = a-670;
	document.getElementById('ul').style.left = a + "px";
	document.getElementById('ul').style.transition = "left 1s";
}
function move_left2(vt){
	var a = vt.replace("px","");
	a = Number(a);
	if(a == 0){
		a = -2010;
	}
	a = a+670;
	document.getElementById('ul2').style.left = a + "px";
	document.getElementById('ul2').style.transition = "left 1s";
}
function move_right2(vt){
	var a = vt.replace("px","");
	a = Number(a);
	if(a == -1340){
		a = 670;
	}
	a = a-670;
	document.getElementById('ul2').style.left = a + "px";
	document.getElementById('ul2').style.transition = "left 1s";
}
function maudo(a){
	a.style.backgroudColor = '#000';
}