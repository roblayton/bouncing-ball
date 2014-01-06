define(['dom/shapes/Circle'], function(Circle){
    var Ball = function(options) {
        var scope = this;
        var bounce = -0.6;
        var gravity = 0.4;

        this.vx = 10;
        this.vy = 10;

        Circle.call(this, options);

        this.update = function(bounds) {
            scope.set({
                vy: scope.vy + gravity 
            });

            scope.set({
                y: scope.y + scope.vy
            });

            if ( (scope.y + parseInt(scope.height) / 2) > bounds) {
                scope.y = bounds - parseInt(scope.height) / 2;
                scope.set({
                    vy: scope.vy *= bounce
                });
            }
        };
    };
    
    return Ball;    
});
