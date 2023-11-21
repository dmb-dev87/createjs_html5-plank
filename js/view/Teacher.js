function Teacher(teacher)
{
	Teacher.instance = this;
	
	teacher.visible = false;
	teacher.pirate.image.addChild(new createjs.Bitmap('images/pirate.png'));
	teacher.bridgehandle.addChild(new createjs.Bitmap('images/bridgehandle.png'));
	teacher.animation.gotoAndStop(1);
	
	var interval;
	var teachertext;
	var content = [['You face 10 questions on:', 'bold 13px Verdana', '#000000', 'top', 'left', 400, 19.8, 0, 0, [0, 5, 0, 2, 2]],
				   ['Earth\'s Crust', 'bold 22px Verdana', '#FF0000', 'top', 'left', 400, 30.7, 0, 18.5, [0, 5, 0, 2, 2]]];
	var gameovertext = ["Oh dear.  You didn\'t manage to make me walk the plank.",
					   "[chuckle]  I don\'t see me going swimming today!",
					   "So, I was right all along - you just don\'t know enough!",
					   "He... He... and you thought you were so clever...",
					   "Oh... what a shame.  I didn\'t have to walk the plank!"];
	var audio;
	
	for(var i = 0; i < content.length; i++)
	{
		teacher.title.holder.addChild(createjs.textfield(content[i]));
	}
	
	teacher.pole.addEventListener('POLE', function(event)
	{
		teacher.animation.gotoAndPlay(54);
	});
	
	teacher.pole.addEventListener('FALL', function(event)
	{
		teacher.animation.gotoAndPlay(146);
		var audio = new Audio('sounds/teacherfallsound.mp3');
			audio.play();
		GameWin.instance.show();
	});
	
	function start()
	{
		createjs.targetframe = 40;
		audio = new Audio('sounds/teacherwalksound.mp3');
		audio.loop = true;
		audio.play();
		interval = setInterval(function()
		{
			if(teacher.animation.currentFrame == createjs.targetframe)
			{
				clearInterval(interval);
				audio.pause();
				updatebubble();
				teacher.animation.gotoAndStop(teacher.animation.currentFrame);
				teacher.animation.walking.gotoAndStop(teacher.animation.walking.currentFrame);
				createjs.Tween.get(teacher.animation, {loop:false}).to({alpha:1}, 3000).call(function()
				{
					createjs.targetframe = 144;
					audio = new Audio('sounds/teacherwalksound.mp3');
					audio.loop = true;
					audio.play();
					teacher.animation.gotoAndPlay(146 - teacher.animation.currentFrame);
					teacher.animation.walking.gotoAndPlay(28 - 12);
					teacher.animation.walking.hair.gotoAndStop(createjs.properties[0]);
					teacher.animation.walking.glass.gotoAndStop(createjs.properties[1]);
					teacher.animation.walking.earring.gotoAndStop(createjs.properties[2]);
					teacher.animation.walking.moustache.gotoAndStop(createjs.properties[3]);
					teacher.animation.walking.beard.gotoAndStop(createjs.properties[4]);
					teacher.animation.walking.lips.gotoAndStop(createjs.properties[5]);
					interval = setInterval(function()
					{
						if(teacher.animation.currentFrame == createjs.targetframe)
						{
							clearInterval(interval);
							audio.pause();
							createjs.targetframe = 10;
							createjs.correctcount = 0;
							createjs.wrongcount = 0;
							createjs.questioncount = 1;
							teacher.animation.bubble.txt.removeAllChildren();
							teacher.animation.bubble.image.removeAllChildren();
							teacher.animation.walking.gotoAndStop(teacher.animation.walking.currentFrame);
							audio = new Audio('sounds/teacherwalksound.mp3');
							audio.loop = true;
							audio.play();
							teacher.animation.gotoAndPlay(0);
							teacher.animation.walking.gotoAndPlay(32 - teacher.animation.walking.currentFrame);
							teacher.title.gotoAndStop(0);
							interval = setInterval(function()
							{
								if(teacher.animation.currentFrame == createjs.targetframe)
								{
									clearInterval(interval);
									audio.pause();
									teacher.animation.gotoAndStop(teacher.animation.currentFrame);
									teacher.animation.walking.gotoAndStop(teacher.animation.walking.currentFrame);
								}
							}, 10);
							Question.instance.show();
						}
					}, 10);
				});
			}
		}, 10);
	}
	
	this.removebubble = function()
	{
		teacher.animation.bubble.txt.removeAllChildren();
		teacher.animation.bubble.image.removeAllChildren();
	}
	
	this.moveforward = function()
	{
		if(createjs.targetframe <= 17)
		{
			teachertext = createjs.textselect[0][Math.floor(Math.random() * 7)];
		}
		else if (createjs.targetframe <= 30)
		{
			teachertext = createjs.textselect[1][Math.floor(Math.random() * 7)];
		}
		else if (createjs.targetframe <= 45)
		{
			teachertext = createjs.textselect[2][Math.floor(Math.random() * 7)];
		}
		else if (createjs.targetframe <= 60)
		{
			teachertext = createjs.textselect[3][Math.floor(Math.random() * 7)];
		}
		else
		{
			teachertext = createjs.textselect[4][Math.floor(Math.random() * 7)];
		}
		updatebubble();
		if(teacher.animation.currentFrame != 71)
		{
			audio = new Audio('sounds/teacherwalksound.mp3');
			audio.loop = true;
			audio.play();
			teacher.animation.gotoAndPlay(teacher.animation.currentFrame);
			teacher.animation.walking.gotoAndPlay(teacher.animation.walking.currentFrame);
			interval = setInterval(function()
			{
				if(teacher.animation.currentFrame == createjs.targetframe || teacher.animation.currentFrame == 71)
				{
					audio.pause();
					teacher.animation.gotoAndStop(teacher.animation.currentFrame);
					teacher.animation.walking.gotoAndStop(teacher.animation.walking.currentFrame);
					clearInterval(interval);
				}
			}, 10);
		}
	}
	
	this.movebackward = function()
	{
		if(createjs.targetframe <= 17)
		{
			teachertext = createjs.backtextselect[0][Math.floor(Math.random() * 7)];
		}
		else if (createjs.targetframe <= 30)
		{
			teachertext = createjs.backtextselect[1][Math.floor(Math.random() * 7)];
		}
		else if (createjs.targetframe <= 45)
		{
			teachertext = createjs.backtextselect[2][Math.floor(Math.random() * 7)];
		}
		else if (createjs.targetframe <= 60)
		{
			teachertext = createjs.backtextselect[3][Math.floor(Math.random() * 7)];
		}
		else
		{
			teachertext = createjs.backtextselect[4][Math.floor(Math.random() * 7)];
		}
		updatebubble();
		if(teacher.animation.currentFrame != 0)
		{
			audio = new Audio('sounds/teacherwalksound.mp3');
			audio.loop = true;
			audio.play();
			teacher.animation.gotoAndPlay(146 - teacher.animation.currentFrame);
			teacher.animation.walking.gotoAndPlay(28 - 12);
			interval = setInterval(function()
			{
				if(teacher.animation.currentFrame == (146 - createjs.targetframe) || teacher.animation.currentFrame >= 144)
				{
					audio.pause();
					teacher.animation.gotoAndStop(144 - teacher.animation.currentFrame);
					teacher.animation.walking.gotoAndStop(26 - teacher.animation.walking.currentFrame);
					clearInterval(interval);
				}
			}, 10);
		}
	}
	
	function updatebubble()
	{
		teacher.animation.bubble.txt.removeAllChildren();
		teacher.animation.bubble.txt.addChild(createjs.textfield([teachertext, '13px Verdana', '#FF0000', 'top', 'center', 155, 22.15, 0, 0, [0, 4, 0, 2, 2]]));
		teacher.animation.bubble.image.removeAllChildren();
		teacher.animation.bubble.image.addChild(new createjs.Bitmap('images/sharkbubble.png'));
	}
	
	function hexToR(h) {return parseInt((cutHex(h)).substring(0, 2), 16)}
	function hexToG(h) {return parseInt((cutHex(h)).substring(2, 4), 16)}
	function hexToB(h) {return parseInt((cutHex(h)).substring(4, 6), 16)}
	function cutHex(h) {return (h.charAt(0) == '#') ? h.substring(1, 7) : h}
	
	this.gamewin = function()
	{
		createjs.targetframe = 54;
		audio = new Audio('sounds/teacherwalksound.mp3');
		audio.loop = true;
		audio.play();
		teacher.animation.gotoAndPlay(146 - teacher.animation.currentFrame);
		teacher.animation.walking.gotoAndPlay(28 - 12);
		interval = setInterval(function()
		{
			if(teacher.animation.currentFrame == (146 - createjs.targetframe) || teacher.animation.currentFrame == 144)
			{
				audio.pause();
				teacher.animation.gotoAndStop(144 - teacher.animation.currentFrame);
				teacher.animation.walking.gotoAndStop(26 - teacher.animation.walking.currentFrame);
				teacher.pole.gotoAndPlay(2);
				clearInterval(interval);
			}
		}, 10);
	}
	
	this.gameover = function()
	{
		createjs.targetframe = 24;
		audio = new Audio('sounds/teacherwalksound.mp3');
		audio.loop = true;
		audio.play();
		teacher.animation.gotoAndPlay(0);
		teacher.animation.walking.gotoAndPlay(0);
		interval = setInterval(function()
		{
			if(teacher.animation.currentFrame == createjs.targetframe)
			{
				audio.pause();
				teacher.animation.gotoAndStop(teacher.animation.currentFrame);
				teacher.animation.walking.gotoAndStop(teacher.animation.walking.currentFrame);
				clearInterval(interval);
			}
		}, 10);
		teacher.animation.bubble.txt.removeAllChildren();
		teacher.animation.bubble.txt.addChild(createjs.textfield([gameovertext[Math.floor(Math.random() * 4)], '13px Verdana', '#FF0000', 'top', 'center', 155, 22.15, 0, 0, [0, 4, 0, 2, 2]]));
		teacher.animation.bubble.image.removeAllChildren();
		teacher.animation.bubble.image.addChild(new createjs.Bitmap('images/sharkbubble.png'));
	}
	
	this.show = function()
	{
		teachertext = createjs.teachertext[Math.floor(Math.random() * 20)];
		teacher.animation.walking.hair.gotoAndStop(createjs.properties[0]);
		teacher.animation.walking.glass.gotoAndStop(createjs.properties[1]);
		teacher.animation.walking.earring.gotoAndStop(createjs.properties[2]);
		teacher.animation.walking.moustache.gotoAndStop(createjs.properties[3]);
		teacher.animation.walking.beard.gotoAndStop(createjs.properties[4]);
		teacher.animation.walking.lips.gotoAndStop(createjs.properties[5]);
		var R = hexToR(createjs.selectedskincolor);
		var G = hexToG(createjs.selectedskincolor);
		var B = hexToB(createjs.selectedskincolor);
		teacher.animation.walking.outerskin.filters = [new createjs.ColorFilter(0, 0, 0, 1, R, G, B, 0)];
		teacher.animation.walking.outerskin.cache(0, 0, 150, 150);
		teacher.animation.walking.innerskin.filters = [new createjs.ColorFilter(0, 0, 0, 1, R, G, B, 0)];
		teacher.animation.walking.innerskin.cache(0, 0, 150, 150);
		var R = hexToR(createjs.selectedhaircolor);
		var G = hexToG(createjs.selectedhaircolor);
		var B = hexToB(createjs.selectedhaircolor);
		if(teacher.animation.walking.hair.currentFrame < 5)
		{
			teacher.animation.walking.hair['tint' + teacher.animation.walking.hair.currentFrame].filters = [new createjs.ColorFilter(0, 0, 0, 1, R, G, B, 0)];
			teacher.animation.walking.hair['tint' + teacher.animation.walking.hair.currentFrame].cache(0, 0, 150, 150);
		}
		if(teacher.animation.walking.moustache.currentFrame == 0)
		{
			teacher.animation.walking.moustache.tint.filters = [new createjs.ColorFilter(0, 0, 0, 1, R, G, B, 0)];
			teacher.animation.walking.moustache.tint.cache(0, 0, 150, 150);
		}
		if(teacher.animation.walking.beard.currentFrame == 0)
		{
			teacher.animation.walking.beard.tint.filters = [new createjs.ColorFilter(0, 0, 0, 1, R, G, B, 0)];
			teacher.animation.walking.beard.tint.cache(0, 0, 150, 150);
		}
		teacher.animation.walking.gotoAndPlay(0);
		teacher.animation.bubble.txt.removeAllChildren();
		teacher.animation.bubble.image.removeAllChildren();
		teacher.animation.gotoAndPlay(0);
		teacher.pirate.gotoAndPlay(0);
		teacher.title.gotoAndPlay(0);
		start();
		teacher.visible = true;
	}
	
	this.hide = function()
	{
		teacher.visible = false;
	}
}
Teacher.prototype = new createjs.MovieClip();
Teacher.instance;