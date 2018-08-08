class GameScene extends eui.Component implements  eui.UIComponent {
	public blockPanel:eui.Group;
	public bg:eui.Image;
	public i:eui.Image;
	public scoreLabel:eui.Label;

	private blockArr:Array<string> = [];
	private reBackBlockArr:Array<string> = [];
	//所有方块资源的数组
	private blockSourceNames:Array<string>=[];
	//游戏开始音频
	private start:egret.Sound;
	//蓄力音频
	private gather:egret.Sound;
	//按下音频的soundCHANEL对象，用来停止该音频
	private pushSoundChannel:egret.SoundChannel;
	//成功落盒音频
	private success:egret.Sound;
    //落到中心音频
	private certain:egret.Sound;
	//结束音频
	private gameover:egret.Sound;

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	private createBlock():eui.Image {
		var blockNode=null;
		if(this.reBackBlockArr.length){
			blockNode=this.reBackBlockArr.splice(0,1)[0];
		}else{
			blockNode=new eui.Image();
		}
		//随机使用背景图
		let n =Math.floor(Math.random()*this.blockSourceNames.length);
		blockNode.source=this.blockSourceNames[n];
		this.blockPanel.addChild(blockNode);
		//设置锚点
		blockNode.anchorOffsetX=222;
		blockNode.anchorOffsetY=78;

		this.blockArr.push(blockNode);
		return blockNode;
		}

	protected childrenCreated():void
	{
		super.childrenCreated();
		this.init();
	}
	private init(){
		this.blockSourceNames =["block1_png","block2_png","block3_png"];
		this.start = RES.getRes('start_mp3');
		this.gather = RES.getRes('gather_mp3');
		this.success = RES.getRes('success_mp3');
		this.certain = RES.getRes('certain_mp3');
		this.gameover = RES.getRes('gameover_mp3');

		//添加触摸事件
		this.blockPanel.touchEnabled = true;
		this.blockPanel.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onKeyDown,this);
		this.blockPanel.addEventListener(egret.TouchEvent.TOUCH_END,this.onKeyUp,this);

		this.i.anchorOffsetX=this.i.width/2;
		this.i.anchorOffsetY=this.i.height - 20;
	}

	private onKeyDown(){
	}

	private onKeyUp(){
	}
}