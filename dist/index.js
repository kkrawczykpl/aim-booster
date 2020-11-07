"use strict";
var AimBooster = /** @class */ (function () {
    function AimBooster(squares, strokeStyle, lineWidth) {
        if (squares === void 0) { squares = 25; }
        if (strokeStyle === void 0) { strokeStyle = '#636e72'; }
        if (lineWidth === void 0) { lineWidth = 0.1; }
        this.canvas = this.getCanvas();
        this.ctx = this.getContext();
        this.ctx.strokeStyle = strokeStyle;
        this.ctx.lineWidth = lineWidth;
        this.squares = squares;
        this.initGame();
    }
    AimBooster.prototype.getCanvas = function () {
        var canvas = document.getElementsByClassName('game')[0];
        if (!canvas) {
            throw new Error('Canvas not found!');
        }
        return canvas;
    };
    AimBooster.prototype.getContext = function () {
        var ctx = this.canvas.getContext('2d');
        if (!ctx) {
            throw new Error('2d context not supported!');
        }
        return ctx;
    };
    AimBooster.prototype.initGame = function () {
        // Get rid of blurry canvas bg
        this.ctx.translate(0.5, 0.5);
        var canvasWidth = this.canvas.width;
        var sqrW = canvasWidth / this.squares;
        for (var i = 0; i < this.squares; i++) {
            for (var j = 0; j < this.squares; j++) {
                this.ctx.strokeRect(i * sqrW, j * sqrW, sqrW, sqrW);
            }
        }
    };
    return AimBooster;
}());
//# sourceMappingURL=index.js.map