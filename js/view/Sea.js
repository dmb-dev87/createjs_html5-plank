function Sea(sea) {
    Sea.instance = this;

    sea.addEventListener('FISH1', function (event) {
        var xpos = -356.5 + Math.random() * 710;
        var ypos = -58.85 + Math.random() * 125;
        if (sea.fish1) {


            sea.fish1.x = xpos;
            sea.fish1.y = ypos;
        }
    }, false);

    sea.addEventListener('FISH2', function (event) {
        var xpos = -356.5 + Math.random() * 710;
        var ypos = -58.85 + Math.random() * 125;
        if (sea.fish2) {
            sea.fish2.x = xpos;
            sea.fish2.y = ypos;
        }
    }, false);

    sea.addEventListener('FISH3', function (event) {
        var xpos = -356.5 + Math.random() * 710;
        var ypos = -58.85 + Math.random() * 125;
        if (sea.fish3) {
            sea.fish3.x = xpos;
            sea.fish3.y = ypos;
        }
    }, false);

    sea.addEventListener('FISH4', function (event) {
        var xpos = -356.5 + Math.random() * 710;
        var ypos = -58.85 + Math.random() * 125;
        if (sea.fish4) {
            sea.fish4.x = xpos;
            sea.fish4.y = ypos;
        }
    }, false);

    sea.addEventListener('FISH5', function (event) {
        var xpos = -356.5 + Math.random() * 710;
        var ypos = -58.85 + Math.random() * 125;
        if (sea.fish5) {
            sea.fish5.x = xpos;
            sea.fish5.y = ypos;
        }
    }, false);

    sea.addEventListener('FISH6', function (event) {
        var xpos = -356.5 + Math.random() * 710;
        var ypos = -58.85 + Math.random() * 125;
        if (sea.fish6) {
            sea.fish6.x = xpos;
            sea.fish6.y = ypos;
        }
    }, false);

    sea.addEventListener('FISH7', function (event) {
        var xpos = -356.5 + Math.random() * 710;
        var ypos = -58.85 + Math.random() * 125;
        if (sea.fishf) {
            sea.fish7.x = xpos;
            sea.fish7.y = ypos;
        }
    }, false);
}
Sea.prototype = new createjs.MovieClip();
Sea.instance;
