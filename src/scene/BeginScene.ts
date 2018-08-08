class BeginScene extends eui.Component implements  eui.UIComponent {
	public replay:eui.Button;

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();

		this.init();
	}
	
	//初始化
	private init() {
		this.replay.addEventListener(egret.TouchEvent.TOUCH_TAP,this.tapHandler,this);
	}

	private tapHandler() {
		//切换画面
		SceneMange.getInstance().changeScene('gameScene');
	}

	public release(){
		//移除事件
		if(this.replay.hasEventListener(egret.TouchEvent.TOUCH_TAP)) {
			this.replay.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.tapHandler,this);
		}
	}
	
}