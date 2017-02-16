/*
*
*Slider with images
*
*/

var arraySlide = [
	'img0.jpg',
	'img1.jpg',
	'img2.jpg',
	'img3.jpg',
	'img4.jpg'
];

for(var i = 0; i < 4; i++)
{
	document.getElementsByClassName('slide').src = 'img/' + arraySlide[i];
}