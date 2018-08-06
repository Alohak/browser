function validB(){
	var u_agent = navigator.userAgent;
	var B_name = "Failed to identify the browser";
	if(u_agent.indexOf("Firefox")>-1){
		B_name = "Firefox";
	}else if(u_agent.indexOf("Chrome")>-1){
		B_name = "Chrome";
	}else if(u_agent.indexOf("Opera")>-1){
		B_name = "Opera";
	}else
	if(u_agent.indexOf("MISE")>-1&&u_agent.indexOf("Trident")>-1){
		B_name = "IE";
	}
	document.write("B_name:"+B_name+"<br>");
	document.write("u_agent"+u_agent+"<br>");
}

validB();