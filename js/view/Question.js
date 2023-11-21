function Question(question)
{
	Question.instance = this;
	question.visible = false;
	var textfields = [['', '20px Verdana', '#0000FF', 'top', 'center', 50, 31.9, 23, 5, [0, 4, 0, 2, 2]],
					  ['', '12px Verdana', '#0000FF', 'top', 'left', 50, 20.7, 6, 26, [0, 4, 0, 2, 2]],
					  ['', '16px Verdana', '#FF0000', 'top', 'left', 640, 23.45, 52, 0, [0, 4, 0, 2, 2]],
					  ['', '14px Verdana', '#0000FF', 'top', 'left', 615, 21.05, 120, 69, [0, 4, 0, 2, 2]],
					  ['', '14px Verdana', '#0000FF', 'top', 'left', 615, 21.05, 120, 146, [0, 4, 0, 2, 2]],
					  ['', '14px Verdana', '#0000FF', 'top', 'left', 615, 21.05, 120, 222, [0, 4, 0, 2, 2]],
					  ['', '14px Verdana', '#0000FF', 'top', 'left', 615, 21.05, 120, 297, [0, 4, 0, 2, 2]],
					  ['', '11px Verdana', '#FF0000', 'top', 'right', 536, 17.25, 693, 347, [0, 4, 0, 2, 2]]];
	
	var selectednumbers;
	var buttonypos = [];
	for(var i = 1; i <= 4; i++)
	{
		buttonypos.push(question['button' + i].y);
	}
	
	function randomquestion()
	{
		var numbers = [];
		selectednumbers = [];
		for(var i = 0; i < createjs.questionscontent.length; i++)
		{
			numbers.push(i);
		}
		for(var i = 0; i < 10; i++)
		{
			var rand = Math.floor(Math.random() * numbers.length);
			selectednumbers.push(numbers[rand]);
			numbers.splice(rand, 1);
		}
	}
	
	function displayquestion()
	{
		var numbers = [];
		var ypos = [];
		for(var i = 0; i < 4; i++)
		{
			numbers.push(i);
		}
		for(var i = 0; i < 4; i++)
		{
			var rand = Math.floor(Math.random() * numbers.length);
			ypos.push(numbers[rand]);
			numbers.splice(rand, 1);
		}
		question.txt.removeAllChildren();
		createjs.correctanswer = createjs.answerscontent[selectednumbers[createjs.questioncount - 1]][0];
		for(var i = 0; i < textfields.length; i++)
		{
			switch(i)
			{
				case 0:
					textfields[0][0] = String(createjs.questioncount);
					break;
				case 1:
					textfields[1][0] = String('OF ' + selectednumbers.length);
					break;
				case 2:
					textfields[2][0] = createjs.questionscontent[selectednumbers[createjs.questioncount - 1]];
					break;
				case 3:
					textfields[3][0] = createjs.answerscontent[selectednumbers[createjs.questioncount - 1]][ypos[0]];
					question.button1.y = buttonypos[ypos.indexOf(0)];
					break;
				case 4:
					textfields[4][0] = createjs.answerscontent[selectednumbers[createjs.questioncount - 1]][ypos[1]];
					question.button2.y = buttonypos[ypos.indexOf(1)];
					break;
				case 5:
					textfields[5][0] = createjs.answerscontent[selectednumbers[createjs.questioncount - 1]][ypos[2]];
					question.button3.y = buttonypos[ypos.indexOf(2)];
					break;
				case 6:
					textfields[6][0] = createjs.answerscontent[selectednumbers[createjs.questioncount - 1]][ypos[3]];
					question.button4.y = buttonypos[ypos.indexOf(3)];
					break;
				case 7:
					textfields[7][0] = 'Questions by: SOLpass';
					break;
			}
			question.txt.addChild(createjs.textfield(textfields[i]));
		}
	}
	
	for(var i = 1; i <= 4; i++)
	{
		var button = question['button' + i];
		button.name = String(i);
		button.addEventListener('mousedown', onButtonMouseHandler.bind(button), false);
	}
	
	function onButtonMouseHandler(event)
	{
		question.visible = false;
		if(this.name == '1')
		{
			createjs.correctcount++;
			Correct.instance.show();
		}
		else
		{
			createjs.wrongcount++;
			InCorrect.instance.show();
		}
	}
	
	this.show = function()
	{
		if(createjs.questioncount == 1)
		{
			randomquestion();
		}
		displayquestion();
		InCorrect.instance.hide();
		Correct.instance.hide();
		question.visible = true;
	}
}
Question.prototype = new createjs.MovieClip();
Question.instance;