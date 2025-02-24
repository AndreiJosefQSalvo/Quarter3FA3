function numbers() {
	var num1 = Math.random() * 20;
	var num2 = Math.random() * 20;
	var num3 = Math.random() * 20;

	num1 = Math.round(num1);
	num2 = Math.round(num2);
	num3 = Math.round(num3);

	document.getElementById('num1').innerHTML = num1;
	document.getElementById('num2').innerHTML = num2;
	document.getElementById('num3').innerHTML = num3;

var high = Math.max(num1, num2, num3);
var highestnums = [];
var highestprods = [];

if(num1 == high) highestnums.push(num1);
if(num2 == high) highestnums.push(num2);
if(num3 == high) highestnums.push(num3);

if(num1 == high) highestprods.push("Chips");
if(num2 == high) highestprods.push("Bottled Water");
if(num3 == high) highestprods.push("Instant Noodles");

document.getElementById('highnum').innerHTML = highestnums;
document.getElementById('product').innerHTML = highestprods;

var al = "abcdefghijklmnopqrstuvwxyz";
var letter = al.charAt(num1 - 1);

document.getElementById('lett').innerHTML = letter;

var mins = num2*num3;
var hr = mins/60;
var min = mins%60;

document.getElementById('hours').innerHTML = parseInt(hr);
document.getElementById('minutes').innerHTML = parseInt(min);

}
