function Panel(panel)
{
	Panel.instance = this;
	
	panel.visible = false;
	var content = [['Create your victim...', '13px Verdana', '#000000', 'top', 'left', 255, 19.8, 78, 17, [0, 5, 0, 2, 2]],
				   ['Skin colour', '11px Verdana', '#0000FF', 'top', 'left', 100, 17.25, 72, 186, [0, 5, 0, 2, 2]],
				   ['Hair colour', '11px Verdana', '#0000FF', 'top', 'left', 100, 17.25, 72, 241, [0, 5, 0, 2, 2]],
				   ['Hairstyle', '11px Verdana', '#0000FF', 'top', 'left', 100, 17.25, 72, 288, [0, 5, 0, 2, 2]],
				   ['Extras', '11px Verdana', '#0000FF', 'top', 'left', 100, 17.25, 72, 332, [0, 5, 0, 2, 2]]];
	var buttons = [[panel.begin, 'begin', ['Arr - begin!', '11px Verdana', '#000000', 'top', 'center', 115.8, 18.5, 0, 0, [0, 2, 0, 2, 2]]],
	 			   [panel.holder.randomfeatures, 'randomfeatures', ['Random features', '11px Verdana', '#000000', 'top', 'center', 115.8, 18.5, 0, 0, [0, 2, 0, 2, 2]]],
				   [panel.holder.hair1, 'hair1'], [panel.holder.hair2, 'hair2'], [panel.holder.hair3, 'hair3'], [panel.holder.hair4, 'hair4'], [panel.holder.hair5, 'hair5'], [panel.holder.hair6, 'hair6'], [panel.holder.beard, 'beard'], [panel.holder.moustache, 'moustache'], [panel.holder.glass, 'glass'], [panel.holder.earring, 'earring'], [panel.holder.lips, 'lips'], [panel.holder.skincolor, 'skincolor'], [panel.holder.haircolor, 'haircolor']];
	var selectedicon;
	
	for(var i = 0; i < content.length; i++)
	{
		panel.holder.txt.addChild(createjs.textfield(content[i]));
	}
	for(var i = 0; i < buttons.length; i++)
	{
		var button = buttons[i][0];
			button.buttonMode = true;
			button.mouseChildren = false;
			button.name = buttons[i][1];
			button.cursor = 'pointer';
			if(buttons[i].length >= 3)
			{
				button.txt.addChild(createjs.textfield(buttons[i][2]));
			}
			button.addEventListener('mouseover', onButtonMouseHandler.bind(button), false);
			button.addEventListener('mouseout', onButtonMouseHandler.bind(button), false);
			button.addEventListener('mousedown', onButtonMouseHandler.bind(button), false);
	}
	var shape = new createjs.Shape();
		shape.alpha = 0.01;
		shape.graphics.beginFill('#000000').drawRect(0, 0, 710, 380);
	panel.holder.overlay.addChild(shape);
	panel.holder.overlay.mouseChildren = false;
	panel.holder.overlay.name = 'overlay';
	panel.holder.overlay.addEventListener('mousedown', onButtonMouseHandler.bind(panel.holder.overlay), false);
	
	panel.addEventListener('NEXT', function()
	{
		panel.visible = false;
		Teacher.instance.show();
		Intro.instance.hide();
	});
	
	function onButtonMouseHandler(event)
	{
		switch(event.type)
		{
			case 'mouseover':
				switch(this.name)
				{
					case 'randomfeatures':
						this.gotoAndStop(1);
						break;
					
					case 'begin':
						this.gotoAndStop(1);
						break;
				}
				break;
			
			case 'mouseout':
				switch(this.name)
				{
					case 'randomfeatures':
						this.gotoAndStop(0);
						break;
					
					case 'begin':
						this.gotoAndStop(0);
						break;
				}
				break;
			
			case 'mousedown':
				switch(this.name)
				{
					case 'randomfeatures':
						var arr = [Math.floor(Math.random() * 6), Math.floor(Math.random() * 2), Math.floor(Math.random() * 2), Math.floor(Math.random() * 2), Math.floor(Math.random() * 2), Math.floor(Math.random() * 2)];
						panel.holder.piratehead.hair.gotoAndStop(arr[0]);
						panel.holder.piratehead.glass.gotoAndStop(arr[1]);
						panel.holder.piratehead.earring.gotoAndStop(arr[2]);
						panel.holder.piratehead.moustache.gotoAndStop(arr[3]);
						panel.holder.piratehead.beard.gotoAndStop(arr[4]);
						panel.holder.piratehead.lips.gotoAndStop(arr[5]);
						createjs.properties = [arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]];
						break;
					
					case 'skincolor':
						selectedicon = 'skin';
						panel.holder.colorpalette.x = this.x;
						panel.holder.colorpalette.y = this.y;
						colorpalette();
						break;
					
					case 'haircolor':
						selectedicon = 'hair';
						panel.holder.colorpalette.x = this.x;
						panel.holder.colorpalette.y = this.y;
						colorpalette();
						break;
					
					case 'glass':
						if(panel.holder.piratehead.glass.currentFrame == 0)
						{
							panel.holder.piratehead.glass.gotoAndStop(1);
							createjs.properties[1] = 1;
						}
						else
						{
							panel.holder.piratehead.glass.gotoAndStop(0);
							createjs.properties[1] = 0;
						}
						break;
					
					case 'earring':
						if(panel.holder.piratehead.earring.currentFrame == 0)
						{
							panel.holder.piratehead.earring.gotoAndStop(1);
							createjs.properties[2] = 1;
						}
						else
						{
							panel.holder.piratehead.earring.gotoAndStop(0);
							createjs.properties[2] = 0;
						}
						break;
					
					case 'moustache':
						if(panel.holder.piratehead.moustache.currentFrame == 0)
						{
							panel.holder.piratehead.moustache.gotoAndStop(1);
							createjs.properties[3] = 1;
						}
						else
						{
							panel.holder.piratehead.moustache.gotoAndStop(0);
							createjs.properties[3] = 0;
						}
						changecolor();
						break;
						
					case 'beard':
						if(panel.holder.piratehead.beard.currentFrame == 0)
						{
							panel.holder.piratehead.beard.gotoAndStop(1);
							createjs.properties[4] = 1;
						}
						else
						{
							panel.holder.piratehead.beard.gotoAndStop(0);
							createjs.properties[4] = 0;
						}
						changecolor();
						break;
						
					case 'lips':
						if(panel.holder.piratehead.lips.currentFrame == 0)
						{
							panel.holder.piratehead.lips.gotoAndStop(1);
							createjs.properties[5] = 1;
						}
						else
						{
							panel.holder.piratehead.lips.gotoAndStop(0);
							createjs.properties[5] = 0;
						}
						break;
						
					case 'overlay':
						panel.holder.colorpalette.removeAllChildren();
						break;
					
					case 'begin':	
						this.gotoAndStop(2);
						panel.begin.mouseEnabled = false;
						panel.gotoAndPlay('hide');
						break;
						
					default:
						var id = Number(this.name.split('hair')[1]) - 1;
						panel.holder.piratehead.hair.gotoAndStop(id);
						createjs.properties[0] = id;
						changecolor();
						break;
				}
				break;
		}
	}
	
	function colorpalette()
	{
		panel.holder.colorpalette.removeAllChildren();
		var shapes = [['#FFFFFF', 0.5, 0, 0, 199, 144],
					  ['#EEEEEE', 1, 0, 0, 197, 142],
					  ['#FFFFFF', 0, 0, 195, 140],
					  ['#DDDDDD', 1, 1, 34, 17],
					  ['#DDDDDD', 1, 1, 34, 17],
					  ['#DDDDDD', 1, 38, 1, 98, 17],
					  ['#FFFFFF', 1, 39, 2, 96, 15],
					  [selectedicon == 'skin' ? createjs.selectedskincolor : createjs.selectedhaircolor, 1, 2, 2, 32, 15]];
		for(var i = 0; i < shapes.length; i++)
		{
			var shape = new createjs.Shape();
				shape.alpha = shapes[i][1];
				shape.name = String(i);
				shape.graphics.beginFill(shapes[i][0]).drawRect(shapes[i][2], shapes[i][3], shapes[i][4], shapes[i][5]);
			panel.holder.colorpalette.addChild(shape);
		}
		for(var i = 0; i < createjs.colors.length; i++)
		{
			for(var j = 0; j < createjs.colors[i].length; j++)
			{
				var container = new createjs.Container();
				var shape = new createjs.Shape();
					shape.graphics.beginFill('#333333').drawRect(-1, -1, 12, 12);
				container.addChild(shape);
				var shape = new createjs.Shape();
					shape.graphics.beginFill(createjs.colors[i][j]).drawRect(0, 0, 10, 10);
				container.addChild(shape);
				if(i == 0)
				{
					container.x = 1.5;
				}
				else
				{
					container.x = 4.5 + (i * 10);
				}
				container.y = 19.5 + (j * 10);
				container.name = String(i + '_' + j);
				container.mouseChildren = false;
				container.addEventListener('mouseover', onColorMouseHandler.bind(container), false);
				container.addEventListener('mousedown', onColorMouseHandler.bind(container), false);
				panel.holder.colorpalette.addChild(container);
			}
		}
		var txt = new createjs.Text('#FF0000', '9px Arial', '#333333');
			txt.lineWidth = 98;
			txt.x = 42;
			txt.y = 5;
			txt.name = 'txt';
			if(selectedicon == 'skin')
			{
				txt.text = String(createjs.selectedskincolor).toUpperCase();
			}
			else
			{
				txt.text = String(createjs.selectedhaircolor).toUpperCase();
			}
		panel.holder.colorpalette.addChild(txt);
	}
	
	function onColorMouseHandler(event)
	{
		var i = this.name.split('_')[0];
		var j = this.name.split('_')[1];
		switch(event.type)
		{
			case 'mouseover':
				var txt = panel.holder.colorpalette.getChildByName('txt');
				txt.text = String(createjs.colors[i][j]).toUpperCase();
				var R = hexToR(createjs.colors[i][j]);
				var G = hexToG(createjs.colors[i][j]);
				var B = hexToB(createjs.colors[i][j]);
				var shape = panel.holder.colorpalette.getChildByName('7');
				if(shape)
				{
					shape.filters = [new createjs.ColorFilter(0, 0, 0, 1, R, G, B, 0)];
					shape.cache(0, 0, 32, 15);
				}
				break;
			
			case 'mousedown':
				if(selectedicon == 'skin')
				{
					createjs.selectedskincolor = createjs.colors[i][j];
				}
				else
				{
					createjs.selectedhaircolor = createjs.colors[i][j];
				}
				changecolor();
				break;
		}
	}
	
	function changecolor()
	{
		var R = hexToR(createjs.selectedskincolor);
		var G = hexToG(createjs.selectedskincolor);
		var B = hexToB(createjs.selectedskincolor);
		var shape = panel.holder.colorpalette.getChildByName('7');
		if(shape)
		{
			shape.filters = [new createjs.ColorFilter(0, 0, 0, 1, R, G, B, 0)];
			shape.cache(0, 0, 32, 15);
		}
		panel.holder.piratehead.outerskin.filters = [new createjs.ColorFilter(0, 0, 0, 1, R, G, B, 0)];
		panel.holder.piratehead.outerskin.cache(0, 0, 150, 150);
		panel.holder.piratehead.innerskin.filters = [new createjs.ColorFilter(0, 0, 0, 1, R, G, B, 0)];
		panel.holder.piratehead.innerskin.cache(0, 0, 150, 150);
		panel.holder.skincolor.tint.filters = [new createjs.ColorFilter(0, 0, 0, 1, R, G, B, 0)];
		panel.holder.skincolor.tint.cache(0, 0, 19, 19);
		panel.holder.colorpalette.removeAllChildren();
		
		var R = hexToR(createjs.selectedhaircolor);
		var G = hexToG(createjs.selectedhaircolor);
		var B = hexToB(createjs.selectedhaircolor);
		if(panel.holder.piratehead.hair.currentFrame < 5)
		{
			panel.holder.piratehead.hair['tint' + panel.holder.piratehead.hair.currentFrame].filters = [new createjs.ColorFilter(0, 0, 0, 1, R, G, B, 0)];
			panel.holder.piratehead.hair['tint' + panel.holder.piratehead.hair.currentFrame].cache(0, 0, 150, 150);
		}
		if(panel.holder.piratehead.moustache.currentFrame == 0)
		{
			panel.holder.piratehead.moustache.tint.filters = [new createjs.ColorFilter(0, 0, 0, 1, R, G, B, 0)];
			panel.holder.piratehead.moustache.tint.cache(0, 0, 150, 150);
		}
		if(panel.holder.piratehead.beard.currentFrame == 0)
		{
			panel.holder.piratehead.beard.tint.filters = [new createjs.ColorFilter(0, 0, 0, 1, R, G, B, 0)];
			panel.holder.piratehead.beard.tint.cache(0, 0, 150, 150);
		}
		panel.holder.haircolor.tint.filters = [new createjs.ColorFilter(0, 0, 0, 1, R, G, B, 0)];
		panel.holder.haircolor.tint.cache(0, 0, 19, 19);
	}
	
	function hexToR(h) {return parseInt((cutHex(h)).substring(0, 2), 16)}
	function hexToG(h) {return parseInt((cutHex(h)).substring(2, 4), 16)}
	function hexToB(h) {return parseInt((cutHex(h)).substring(4, 6), 16)}
	function cutHex(h) {return (h.charAt(0) == '#') ? h.substring(1, 7) : h}
	
	this.show = function()
	{
		panel.holder.piratehead.hair.gotoAndStop(0);
		panel.holder.piratehead.glass.gotoAndStop(1);
		panel.holder.piratehead.earring.gotoAndStop(1);
		panel.holder.piratehead.moustache.gotoAndStop(1);
		panel.holder.piratehead.beard.gotoAndStop(1);
		panel.holder.piratehead.lips.gotoAndStop(1);
		panel.begin.mouseEnabled = true;
		panel.gotoAndPlay(0);
		createjs.properties = [0, 1, 1, 1, 1, 1];
		createjs.selectedskincolor = '#F3C8A5';
		createjs.selectedhaircolor = '#B04000';
		changecolor();
		panel.visible = true;
	}
}
Panel.prototype = new createjs.MovieClip();
Panel.instance;