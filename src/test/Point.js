"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        var _this = this;
        this.drawPoint = function () {
            console.log('x:', _this.x, 'y:', _this.y);
        };
        this.getInstance = function (p) {
            return Math.pow(p.X - _this.x, 2) + Math.pow(p.Y - _this.y, 2);
        };
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(Point.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('x 不能小于0');
            }
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "Y", {
        get: function () {
            return this.y;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('y 不能小于0');
            }
            this.y = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;
