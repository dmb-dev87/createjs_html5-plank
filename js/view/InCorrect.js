function InCorrect(incorrect)
{
	InCorrect.instance = this;
	
	incorrect.visible = false;
	var textfields = [['Roll dice', '12px Verdana', '#000000', 'top', 'center', 115.8, 18.5, 0, 0, [0, 2, 0, 2, 2]],
					  ['Next question', '12px Verdana', '#000000', 'top', 'center', 115.8, 18.5, 0, 0, [0, 2, 0, 2, 2]]];
	var buttons = [[incorrect.rolldice, 'rolldice'], [incorrect.next, 'next']];
	var audio;
	
	for(var i = 0; i < buttons.length; i++)
	{
		var button = buttons[i][0];
		button.buttonMode = true;
		button.mouseChildren = false;
		button.name = buttons[i][1];
		button.cursor = 'pointer';
		button.txt.removeAllChildren();
		button.txt.addChild(createjs.textfield(textfields[i]));
		button.addEventListener('mouseover', onButtonMouseHandler.bind(button), false);
		button.addEventListener('mouseout', onButtonMouseHandler.bind(button), false);
		button.addEventListener('mousedown', onButtonMouseHandler.bind(button), false);
	}
	incorrect.dice.addEventListener('mousedown', onButtonMouseHandler.bind(incorrect.dice), false);
		
	incorrect.addEventListener('FRAME13', function(event)
	{
		incorrect.next.visible = true;
	});
	
	incorrect.answer.addEventListener('CORRECTANSWER', function(event)
	{
		var correctanswer = ['The answer was: ' + createjs.correctanswer,
					   		 'You should have chosen: ' + createjs.correctanswer,
					  		 createjs.correctanswer + ' was the answer!',
					 		 createjs.correctanswer + ' was actually correct.'];
		var textfields = [[correctanswer[Math.floor(Math.random() * 4)], 'bold 14px Verdana', '#FF0000', 'top', 'left', 340, 21.05, 0, 0, [0, 4, 0, 2, 2]]];
		incorrect.answer.txt.removeAllChildren();
		incorrect.answer.txt.addChild(createjs.textfield(textfields[0]));
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
				switch(this.name)
				{
					case 'next':
						createjs.questioncount++;
						Teacher.instance.removebubble();
						if(createjs.questioncount <= 10)
						{
							Question.instance.show();
						}
						else
						{
							incorrect.visible = false;
							GameOver.instance.show();
						}
						break;
					
					default:
						audio = new Audio('sounds/dicesound.mp3');
						audio.play();
						incorrect.gotoAndPlay(1);
						incorrect.rolldice.visible = false;
						var rand1 = 1 + Math.round(Math.random() * 5);
						var rand2 = 1 + Math.round(Math.random() * 5);
						createjs.totalroll = rand1 + rand2;
						if(createjs.totalroll == 12)
						{
							createjs.totalroll = 24;
							message = 'Oh no - double six! Double score back!';
						}
						else
						{
							message = 'You rolled ' + rand1 + ' and ' + rand2 + ' = ' + createjs.totalroll + ' units backwards.';
						}
						updatetext(message);
						incorrect.dice1.gotoAndStop(rand1);
						incorrect.dice2.gotoAndStop(rand2);
						createjs.targetframe -= createjs.totalroll;
						if(createjs.targetframe < 0)
						{
							createjs.targetframe = 0;
						}
						Teacher.instance.movebackward();
						break;
				}
				break;
		}
	}
	
	function updatetext(message)
	{
		incorrect.txt.removeAllChildren();
		incorrect.txt.addChild(createjs.textfield([message, '11px Verdana', '#000000', 'top', 'left', 340, 17.25, 0, 0, [0, 4, 0, 2, 2]]));
	}
	
	this.show = function()
	{
		audio = new Audio('sounds/wrongsound.mp3');
		audio.play();		
		incorrect.next.visible = false;
		incorrect.rolldice.visible = true;
		incorrect.dice1.gotoAndStop(0);
		incorrect.dice2.gotoAndStop(0);
		updatetext('Roll dice to see how far the teacher moves back');
		incorrect.answer.gotoAndPlay(0);
		incorrect.status.gotoAndPlay(0);
		incorrect.gotoAndStop(0);
		incorrect.visible = true;
	}
	
	this.hide = function()
	{
		incorrect.visible = false;
	}
}
InCorrect.prototype = new createjs.MovieClip();
InCorrect.instance;