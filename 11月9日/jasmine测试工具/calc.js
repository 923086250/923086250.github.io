function plus(a,b){
	return a+b;
}


function pingfanghe(a,b){
	return a*a+b*b;
}


function jiecheng(n){
	var result = 1;
	for (var i = 2;i<=n;i++) {
		result*=i;
	}
	return result;
}


function pailie(a,b){
	var result = 1;
	for (var i = 0;i<b;i++) {
		result *= a;
		a--;
	}
	return result;
}

function zuhe(a,b){
	
	if(!a||!b){
		throw new Error("参数不够");
	}
	
	var b = a - b<b?a - b:b;
	return pailie(a,b)/jiecheng(b);
	
}
