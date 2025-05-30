//your JS code here. If required.
const levelElement = document.getElementById('level');
let levelCount = 0;
let current = levelElement;
while(current){
	levelCount++;
	current = current.parentElement;
}
alert(`The level of the element is: ${levelCount}`);
