//your JS code here. If required.
const levelElement = document.getElementById('level');
const levelCount = 0;
const current = levelElement;
while(current){
	levelCount++;
	current = current.parentElement;
}
alert(`The level of the element is: ${levelCount}`);