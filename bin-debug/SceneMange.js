var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SceneMange = /** @class */ (function (_super) {
    __extends(SceneMange, _super);
    function SceneMange() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    SceneMange.prototype.init = function () {
        this.BeginScene = new BeginScene();
        this.GameScene = new GameScene();
        this.addChild(this.BeginScene);
    };
    SceneMange.getInstance = function () {
        if (!SceneMange.instance) {
            SceneMange.instance = new SceneMange();
        }
        return SceneMange.instance;
    };
    SceneMange.prototype.changeScene = function (type) {
        if (type == 'ganmeScene') {
            this.BeginScene.release();
        }
        this.removeChildren();
        this.addChild(this[type]);
    };
    return SceneMange;
}(egret.Sprite));
