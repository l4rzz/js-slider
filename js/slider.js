/*
*
*Slider with images
*
*/

//put image in div
var slide = document.getElementById('slide');

var arraySlide = [
	'img0.jpg',
	'img1.jpg',
	'img2.jpg',
	'img3.jpg',
	'img4.jpg'
];

for(i = 0; i < 4; i++)
{
	console.log(arraySlide[i]);
	document.getElementById('slide').src = 'img/' + arraySlide[i];
}
