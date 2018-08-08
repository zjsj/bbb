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
var BeginScene = /** @class */ (function (_super) {
    __extends(BeginScene, _super);
    function BeginScene() {
        return _super.call(this) || this;
    }
    BeginScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    BeginScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    //初始化
    BeginScene.prototype.init = function () {
        this.replay.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapHandler, this);
    };
    BeginScene.prototype.tapHandler = function () {
        //切换画面
        SceneMange.getInstance().changeScene('gameScene');
    };
    BeginScene.prototype.release = function () {
        //移除事件
        if (this.replay.hasEventListener(egret.TouchEvent.TOUCH_TAP)) {
            this.replay.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tapHandler, this);
        }
    };
    return BeginScene;
}(eui.Component));
