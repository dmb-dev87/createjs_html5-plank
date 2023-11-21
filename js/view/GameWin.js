function GameWin(gamewin)
{
	GameWin.instance = this;
	gamewin.visible = false;
	
	var buttons = [[gamewin.playagain, 'playagain', ['Play again', '12px Verdana', '#000000', 'top', 'center', 115.8, 18.5, 0, 0, [0, 2, 0, 2, 2]]],
				   [gamewin.quitgame, 'quitgame', ['Quit game', '12px Verdana', '#000000', 'top', 'center', 115.8, 18.5, 0, 0, [0, 2, 0, 2, 2]]]];
	for(var i = 0; i < buttons.length; i++)
	{
		var button = buttons[i][0];
			button.buttonMode = true;
			button.mouseChildren = false;
			button.cursor = 'pointer';
			button.name = buttons[i][1];
			button.txt.addChild(createjs.textfield(buttons[i][2]));
			button.addEventListener('mouseover', onButtonMouseHandler.bind(button), false);
			button.addEventListener('mouseout', onButtonMouseHandler.bind(button), false);
			button.addEventListener('mousedown', onButtonMouseHandler.bind(button), false);
	}
	
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
				switch(this.name)
				{
					case 'playagain':
						gamewin.visible = false;
						Teacher.instance.hide();
						Intro.instance.show();
						break;
					
					case 'quitgame':
						break;
				}
				break;
		}
	}
	
	gamewin.addEventListener('UPDATEBUBBLE', function(event)
	{
		gamewin.bubble.txt.removeAllChildren();
		gamewin.bubble.txt.addChild(createjs.textfield(['That shut him up.', '13px Verdana', '#0000FF', 'top', 'center', 150, 22.15, 0, -30, [0, 4, 0, 2, 2]]));
		gamewin.bubble.txt.addChild(createjs.textfield(['Mmmm... tasty!', '13px Verdana', '#0000FF', 'top', 'center', 150, 22.15, 0, 0, [0, 4, 0, 2, 2]]));
	});
	
	gamewin.addEventListener('SHOWBUTTONS', function(event)
	{
		gamewin.playagain.visible = true;
		gamewin.quitgame.visible = false;
	});
	
	gamewin.addEventListener('SHARKSOUND', function(event)
	{
		var audio = new Audio('sounds/sharksound.mp3');
			audio.play();
	});
	
	this.show = function()
	{
		gamewin.gotoAndPlay(1);
		gamewin.playagain.visible = true;
		gamewin.quitgame.visible = false;
		gamewin.visible = true;
	}
}
GameWin.prototype = new createjs.MovieClip();
GameWin.instance;