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
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this) || this;
        _this.blockArr = [];
        _this.reBackBlockArr = [];
        //所有方块资源的数组
        _this.blockSourceNames = [];
        return _this;
    }
    GameScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameScene.prototype.createBlock = function () {
        var blockNode = null;
        if (this.reBackBlockArr.length) {
            blockNode = this.reBackBlockArr.splice(0, 1)[0];
        }
        else {
            blockNode = new eui.Image();
        }
        //随机使用背景图
        var n = Math.floor(Math.random() * this.blockSourceNames.length);
        blockNode.source = this.blockSourceNames[n];
        this.blockPanel.addChild(blockNode);
        //设置锚点
        blockNode.anchorOffsetX = 222;
        blockNode.anchorOffsetY = 78;
        this.blockArr.push(blockNode);
        return blockNode;
    };
    GameScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    GameScene.prototype.init = function () {
        this.blockSourceNames = ["block1_png", "block2_png", "block3_png"];
        this.start = RES.getRes('start_mp3');
        this.gather = RES.getRes('gather_mp3');
        this.success = RES.getRes('success_mp3');
        this.certain = RES.getRes('certain_mp3');
        this.gameover = RES.getRes('gameover_mp3');
        //添加触摸事件
        this.blockPanel.touchEnabled = true;
        this.blockPanel.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onKeyDown, this);
        this.blockPanel.addEventListener(egret.TouchEvent.TOUCH_END, this.onKeyUp, this);
        this.i.anchorOffsetX = this.i.width / 2;
        this.i.anchorOffsetY = this.i.height - 20;
    };
    GameScene.prototype.onKeyDown = function () {
    };
    GameScene.prototype.onKeyUp = function () {
    };
    return GameScene;
}(eui.Component));
