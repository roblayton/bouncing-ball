require(['core/utils/FpsTracker', 'dom/primitives/Container', 'dom/readers/MouseReader', 'proj/Ball', 'proj/Walls'], function(FpsTracker, Container, MouseReader, Ball, Walls) {
	var Master = function() {

		var init = function() {
            var balls = [];

			// Fps
			var fps = new FpsTracker();

			var container = new Container({
				css: {
					position: 'absolute',
					width: '100%',
					height: '100%'
				},
				insert: {
					type: 'parent',
					target: document.body
				}
			});

            var createBall = function(x, y) {

                var ball = new Ball({
                    radius: 50,
                    css: {
                        backgroundColor: '#FF0000',
                        position: 'absolute'
                    },
                    x: x,
                    y: y,
                    insert: {
                        type: 'parent',
                        target: document.body
                    }
                });

                balls.push(ball);
            };

			var walls = new Walls(0, window.innerWidth, window.innerHeight, - window.innerWidth);

			var mr = new MouseReader(document.body, {
				callbacks: {
					onMouseDown: function(evt, x, y) {
                        createBall(x, y);
					}
				}
			});

			var loop = function() {
				requestAnimationFrame(loop);

                for (var i = 0, len = balls.length; i < len; i++) {
                    balls[i].update(walls.b);
                };
			};

			requestAnimationFrame(loop);
		};

		init();

	}; // End
	var master = new Master();
});

