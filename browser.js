//用户代理字符串
document.write(navigator.userAgent);

var client = function(){

	//引擎
	var engine = {
		ie:false,
		gecko:false,
		webkit:false,
		khtml:false,
		opera:false,

		//引擎的版本
		ver:0
	};

	//浏览器
	
	//系统
	
	//核心检测程序区
	var ua = navigator.userAgent;
	if(/AppleWebKit\/(\S+)/.test(ua)){
	engine.webkit = true;        //表示确定webkit引擎
	engine.ver = RegExp['$1'];
	}else if(/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)){
		engine.gecko = true;    //表示gecko引擎
		engine.ver = RegExp['$1'];
	}

	return{                     //返回一个对象，可以同时返回引擎，浏览器和系统的对象
		engine:engine           //前一个engine是属性，后一个engine是对象值
	}

}();                            //自我执行并赋值



/*if(client.engine.webkit){
	alert("webkit引擎的版本为："+client.engine.ver);
}*/

if(client.engine.gecko){
	alert("gecko引擎的版本为："+client.engine.ver);
}