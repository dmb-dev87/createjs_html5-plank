function Correct(correct)
{
	Correct.instance = this;
	
	correct.visible = false;
	var textfields = [['Roll dice', '12px Verdana', '#000000', 'top', 'center', 115.8, 18.5, 0, 0, [0, 2, 0, 2, 2]],
					  ['Next question', '12px Verdana', '#000000', 'top', 'center', 115.8, 18.5, 0, 0, [0, 2, 0, 2, 2]]];
	var buttons = [[correct.rolldice, 'rolldice'], [correct.next, 'next']];
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
	correct.dice.addEventListener('mousedown', onButtonMouseHandler.bind(correct.dice), false);
	
	correct.addEventListener('FRAME13', function(event)
	{
		correct.next.visible = true;
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
						else if(createjs.correctcount == 10)
						{
							correct.visible = false;
							Teacher.instance.gamewin();
						}
						else
						{
							correct.visible = false;
							GameOver.instance.show();
						}
						break;
					
					default:
						audio = new Audio('sounds/dicesound.mp3');
						audio.play();
						correct.gotoAndPlay(1);
						correct.rolldice.visible = false;
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
							message = 'You rolled ' + rand1 + ' and ' + rand2 + ' = ' + createjs.totalroll + ' units forward.';
						}
						updatetext(message);
						correct.dice1.gotoAndStop(rand1);
						correct.dice2.gotoAndStop(rand2);
						createjs.targetframe += createjs.totalroll;
						Teacher.instance.moveforward();
						break;
				}
				break;
		}
	}
	
	function updatetext(message)
	{
		correct.txt.removeAllChildren();
		correct.txt.addChild(createjs.textfield([message, '11px Verdana', '#000000', 'top', 'left', 340, 17.25, 0, 0, [0, 4, 0, 2, 2]]));
	}
	
	this.show = function()
	{
		audio = new Audio('sounds/correctsound.mp3');
		audio.play();
		correct.next.visible = false;
		correct.rolldice.visible = true;
		correct.dice1.gotoAndStop(0);
		correct.dice2.gotoAndStop(0);
		updatetext('Roll dice to see how far the teacher moves back');
		correct.status.gotoAndPlay(0);
		correct.gotoAndStop(0);
		correct.visible = true;
	}
	
	this.hide = function()
	{
		correct.visible = false;
	}
}
Correct.prototype = new createjs.MovieClip();
Correct.instance;