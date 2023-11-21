function GameOver(gameover)
{
	GameOver.instance = this;
	gameover.visible = false;
	
	var finalcomment = [["You must get questions correct to force the teacher to walk the plank - you need to do much, much better next time!", "Your lack of knowledge cost you here.  You need to learn a huge amount more before playing again."],
						["You couldn\'t have done much worse!  So that surely means you can only improve - try again and see if you can do better.", "You are a long way away from making that teacher walk the plank.  Have another go but read all the questions carefully this time!"],
						["With eight questions wrong you have a great deal of work to do.  Try again, but this time check all your answers carefully before selecting!", "You got two correct, so that is something.  You now need to concentrate much more, and put your experience to good use - show that teacher who is boss!"],
						["You have not done your best in this go - the teacher seems to find your answers hilarious.  Have another go to give him something else to think about...", "With seven questions wrong, the teacher has hardly had to do any exercise at all.  Have another go and make sure you read everything properly."],
						["With only four questions correct, you need to do much better next time.  The teacher seems to think you haven\'t got a chance - is that really true?", "You have not done well in this go, and that teacher finds it amusing.  Try again and make sure it\'s you who find it amusing!"],
						["Half right, half wrong.  That teacher is getting away with all those insults - you must improve your knowledge and get your own back!", "With only 50% of the question answered correctly, you have a great deal of work to do.  Try again, but think about every answer fully!"],
						["You got six right, which is good, but that teacher hasn\'t got near the edge.  You need to do much better to stand any hope of getting him to walk that plank.", "Four questions incorrect - you need to know more.  Try again and choose your answers carefully."],
						["Three wrong answers and the teacher is nowhere near the edge - he\'s laughing at you.  Have another go and stop his taunting.", "You are getting close, but not close enough.  With more practice you can easily improve - see if you can do better."],
						["With only two questions wrong you should be pleased - but so is that teacher!  Have another go and get them all correct!", "Not bad - but not good enough.  You have shown some useful knowledge of the topic, but your incorrect answers cost you dear."],
						["Your one wrong answer has allowed that teacher to stay dry - get your own back!", "You were so very close - some excellent answers but that incorrect one cost you."],
					    ["Unfortunately you were just really unlucky with the dice - have another go and get that teacher in the sea!", "Unfortunately you were just really unlucky with the dice - have another go and get that teacher in the sea!"]];
	
	var buttons = [[gameover.playagain, 'playagain', ['Play again', '12px Verdana', '#000000', 'top', 'center', 115.8, 18.5, 0, 0, [0, 2, 0, 2, 2]]],
				   [gameover.quitgame, 'quitgame', ['Quit game', '12px Verdana', '#000000', 'top', 'center', 115.8, 18.5, 0, 0, [0, 2, 0, 2, 2]]]];
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
						gameover.visible = false;
						Teacher.instance.hide();
						Intro.instance.show();
						break;
					
					case 'quitgame':
						break;
				}
				break;
		}
	}
	
	gameover.addEventListener('UPDATETEXT', function(event)
	{
		var result; 
		if(createjs.correctcount == 10)
		{
			result = "How unlucky can you get!  You got every single question correct, and the teacher didn\'t walk the plank.";
		}
		else
		{
			var correcttext;
			var wrongtext;
			if(createjs.correctcount == 1)
			{
				 correcttext = '1 question';
			}
			else
			{
				correcttext = createjs.correctcount + ' questions';
			}
			if(createjs.wrongcount == 1)
			{
				wrongtext = 'only 1 question';
			}
			else
			{
				wrongtext = createjs.wrongcount + ' questions';
			}
			result = 'From ten questions, you got ' + correcttext + ' correct and ' + wrongtext + ' wrong.';
		}
		var commentchoice = Math.floor(Math.random() * 2);
		var finaltext = finalcomment[createjs.correctcount][commentchoice];
		gameover.txt.removeAllChildren();
		gameover.txt.addChild(createjs.textfield([result, '13px Verdana', '#000000', 'top', 'left', 320, 22.15, 0, 0, [0, 4, 0, 2, 2]]));
		gameover.txt.addChild(createjs.textfield([finaltext, '13px Verdana', '#0000FF', 'top', 'left', 320, 22.15, 0, 71, [0, 4, 0, 2, 2]]));
		gameover.playagain.visible = true;
		gameover.quitgame.visible = false;
	});	

	this.show = function()
	{
		gameover.gotoAndPlay(0);
		gameover.playagain.visible = true;
		gameover.quitgame.visible = false;
		gameover.visible = true;
		Teacher.instance.gameover();
	}
}
GameOver.prototype = new createjs.MovieClip();
GameOver.instance;