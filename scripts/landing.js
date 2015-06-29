

window.onload = function()
{
	var pointsArray = document.getElementsByClassName('point');

	if(window.innerHeight>950)
	{
		animatePoints(pointsArray);
	}
	window.addEventListener('scroll',function()
	{
		if(pointsArray[0].getBoundingClientRect().top<=500)
		{
			animatePoints(pointsArray);
		}
	});
var animatePoints = function(points)
{
	var revealPoint = function(i)
	{
		points[i].style.opacity = 1;
		points[i].style.transform = 'scaleX(1) translateY(0)';
		points[i].style.msTransform = 'scaleX(1) translateY(0)';
		points[i].style.WebkitTransform = 'scaleX(1) translateY(0)';
	}
	for(var i = 0; i<points.length;i++)
	{
		revealPoint(i);
	}
}
}