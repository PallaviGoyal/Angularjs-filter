var app = angular.module("MyApp",[]).filter('num',function() {
	return function(num) {
	if(!num)  {return ''; }
	var country = num.slice(0,2);
	var num1 = num.slice(2,7);
	var num2 = num.slice(7,9);
	var num3 = num.slice(9);
	return "(+" + country +")" + num1 + "-" + num2 + "-" + num3;
	};
});