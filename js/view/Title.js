function Title(title)
{
	Title.instance = this;
	
	//title.website.alpha = 0;
	//title.website.addChild(new createjs.Bitmap('images/website.png'));
	//createjs.Tween.get(title.website, {loop:false}).to({alpha:1}, 600);
	
	//title.icon.alpha = 0;
	//title.icon.addChild(new createjs.Bitmap('images/icon.png'));
	//createjs.Tween.get(title.icon, {loop:false}).to({alpha:1}, 600);
	
	//title.addEventListener('ADDLISTENER', function(event)
	//{
		//title.button.buttonMode = true;
		//title.button.mouseChildern = false;
		//title.button.cursor = 'pointer';
		//title.button.addEventListener('mousedown', onButtonMouseHandler.bind(title.button), false);
	//});
	
	title.addEventListener('NEXT', function(event)
	{
		Intro.instance.show();
	});

	//function onButtonMouseHandler(event)
	//{
		//window.open('http://www.contentgenerator.net', '_blank');
	//}
}
Title.prototype = new createjs.MovieClip();
Title.instance;