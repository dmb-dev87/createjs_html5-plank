function Intro(intro)
{
	Intro.instance = this;
	
	intro.visible = false;
	intro.background.addChild(new createjs.Bitmap('images/background.png'));
	intro.sea.holder.addChild(new createjs.Bitmap('images/sea.jpg'));
	intro.walktheplank.holder.addChild(new createjs.Bitmap('images/walktheplank.png'));
	intro.piratespeech.image.addChild(new createjs.Bitmap('images/piratebubble.png'));
	intro.bridge.addChild(new createjs.Bitmap('images/bridge.png'));
	
	var piratespeech	= 	[['Arr! That there teacher has been getting too clever!', '12px Verdana', '#0000FF', 'top', 'left', 190, 18.5, 0, 0, [0, 4, 0, 2, 2]],
			   	   		   	 ["Teach 'im a lesson - make 'im Walk the Plank!", '12px Verdana', '#0000FF', 'top', 'left', 190, 18.5, 0, 45, [0, 4, 0, 2, 2]]];
	var textfields 		= 	[['10 questions chosen from a bank of 10', 'bold 13px Verdana', '#FFFF00', 'top', 'left', 400, 19.8, 6, 24, [0, 4, 0, 2, 2]],
						     ['Earth\'s Crust', 'bold 22px Verdana', '#FFFFFF', 'top', 'left', 400, 30.7, 6, 44, [0, 7, 0, 3, 3]],
						     ['by SOLpass', 'bold 15px Verdana', '#000000', 'top', 'left', 400, 22.25, 6, 105, [0, 5, 0, 2, 2]],
						     ['A ContentGenerator.net game', '11px Verdana', '#0000FF', 'top', 'left', 250, 17.25, 3, 326, [0, 4, 0, 2, 2]],
						     ['©Andrew Field  Version 3.2', '11px Verdana', '#0000FF', 'top', 'left', 250, 17.25, 3, 340, [0, 4, 0, 2, 2]],
						     ['Registered to SOLpass', '11px Verdana', '#000000', 'top', 'right', 526, 17.25, 526, 360, [0, 5, 0, 3, 3]]];
	var buttons 		= 	[[intro.startgame, 'startgame', ['Start game', '12px Verdana', '#ff0000', 'top', 'center', 115.8, 18.5, 0, 0, [0, 3, 0, 3, 6]]]];
				   			
	
	for(var i = 0; i < piratespeech.length; i++)
	{
		intro.piratespeech.txt.addChild(createjs.textfield(piratespeech[i]));
	}
	for(var i = 0; i < textfields.length; i++)
	{
		intro.txt.addChild(createjs.textfield(textfields[i]));
	}	
	for(var i = 0; i < buttons.length; i++)
	{
		var button = buttons[i][0];
			button.buttonMode = true;
			button.mouseChildren = false;
			button.name = buttons[i][1];
			button.txt.addChild(createjs.textfield(buttons[i][2]));
			button.addEventListener('mouseover', onButtonMouseHandler.bind(button), false);
			button.addEventListener('mouseout', onButtonMouseHandler.bind(button), false);
			button.addEventListener('mousedown', onButtonMouseHandler.bind(button), false);
	}
	
	intro.pirate.addEventListener('SCENE1', function(event)
	{ 
		bitmap([[0, 0, 'images/piratehead1.png'], [3, 148.6, 'images/piratebody.png']]);
	});
	
	intro.pirate.addEventListener('SCENE2', function(event)
	{
		bitmap([[-4, -1, 'images/piratehead2.png'], [3, 148.6, 'images/piratebody.png'], [30, 67.4, 'images/pirateeye1.png']]);
		intro.piratespeech.visible = true;
	});
	
	intro.pirate.addEventListener('SCENE3', function(event)
	{
		bitmap([[-4, -1, 'images/piratehead2.png'], [3, 148.6, 'images/piratebody.png'], [30, 67.4, 'images/pirateeye2.png']]);
	});
	
	intro.pirate.addEventListener('SCENE4', function(event)
	{ 
		bitmap([[-4, -1, 'images/piratehead2.png'], [3, 148.6, 'images/piratebody.png'], [30, 67.4, 'images/pirateeye3.png']]);
	});
	
	intro.pirate.addEventListener('SCENE5', function(event)
	{
		bitmap([[-4, -1, 'images/piratehead2.png'], [3, 148.6, 'images/piratebody.png'], [30, 67.4, 'images/pirateeye4.png']]);
	});
	
	intro.pirate.addEventListener('SCENE6', function(event)
	{
		bitmap([[-4, -1, 'images/piratehead2.png'], [3, 148.6, 'images/piratebody.png'], [30, 67.4, 'images/pirateeye5.png']]);
	});
	
	intro.pirate.addEventListener('SCENE7', function(event)
	{
		bitmap([[0, 0, 'images/piratehead1.png'], [3, 148.6, 'images/piratebody.png']]);
	});
	
	function bitmap(content)
	{
		intro.pirate.image.removeAllChildren();
		for(var i = 0; i < content.length; i++)
		{
			var bitmap = new createjs.Bitmap(content[i][2]);
				bitmap.x = content[i][0];
				bitmap.y = content[i][1];
			intro.pirate.image.addChild(bitmap);
		}
	}
	
	intro.addEventListener('DISPLAYSHARK', function()
	{
		var textfields = [[createjs.introsharktext[Math.floor(Math.random() * 15)], '13px Verdana', '#FF0000', 'top', 'center', 155, 22.15, 0, 0, [0, 4, 0, 2, 2]]];
		intro.bubble.txt.removeAllChildren();
		intro.bubble.txt.addChild(createjs.textfield(textfields[0]));
		intro.bubble.image.removeAllChildren();
		intro.bubble.image.addChild(new createjs.Bitmap('images/sharkbubble.png'));
		intro.bubble.visible = true;
		
		var bitmap = new createjs.Bitmap('images/shark.png');
			bitmap.x = -24;
			bitmap.y = -26.5;
		intro.shark.holder.addChild(bitmap);
		intro.shark.visible = true;
		
		Panel.instance.show();
	});
	
	function onButtonMouseHandler(event)
	{
		switch(event.type)
		{
			case 'mouseover':
				this.gotoAndStop(1);
				break;
			
			case 'mouseout':
				this.gotoAndStop(0);
				break;
			
			case 'mousedown':
				this.gotoAndStop(2);
				audio.pause();
				intro.gotoAndPlay(1);
				break;
		}
	}
	
	this.show = function()
	{
		audio = new Audio('sounds/introsound.mp3');
		audio.play();
		intro.bubble.visible = false;
		intro.shark.visible = false;
		intro.piratespeech.visible = false;
		intro.walktheplank.gotoAndPlay(0);
		intro.pirate.visible = true;
		intro.pirate.gotoAndPlay(0);
		intro.gotoAndStop(0);
		intro.visible = true;
	}
	
	this.hide = function()
	{
		intro.bubble.visible = false;
		intro.shark.visible = false;
		intro.pirate.visible = false;
	}
}
Intro.prototype = new createjs.MovieClip();
Intro.instance;