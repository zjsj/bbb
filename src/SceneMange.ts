class SceneMange extends egret.Sprite{
	private static instance :SceneMange;

	private BeginScene:BeginScene;

	private GameScene:GameScene;

	public constructor() {
		super();
		this.init();
	}
 
    private init(){
		this.BeginScene= new BeginScene();
		this.GameScene =new GameScene();

		this.addChild(this.BeginScene);
	}

	public static getInstance(): SceneMange{
		if(!SceneMange.instance){
			SceneMange.instance=new SceneMange();
		}
		return SceneMange.instance;
	}

	public changeScene(type){
		if(type=='ganmeScene'){
			this.BeginScene.release();
		}

		this.removeChildren();
		this.addChild(this[type]);
	}


}