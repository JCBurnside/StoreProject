var xml=null;
function load(){
	var xhttp=new XMLHttpRequest;
	xhttp.onreadystatechange=function(){
		if(this.readyState==4&&this.status==200){
			xml=new XMLFile(this)
			console.log("READY!!!!!");
		}
	}
	xhttp.open("GET","robots.xml",true);
	xhttp.send();
}
function out(){
	console.log(xml.convertToObjectArray("robot"));
}
function ranNum(start,end){
	return Math.round(Math.random()*(end-start)+start)
}
Array.prototype.toString = function() {
	let out="["
	this.forEach((element)=>{
		out+=element.toString()+",";
	})
	out=out.substr(0,out.length-1);
	return out;
};
function XMLFile(respone){
	this.xmlDoc=respone.responseXML	
	console.log(respone)
	this.getRandom=function(key){
		var elements=this.xmlDoc.getElementsByTagName(key)
		if(!elements)throw key+" doesn't exist in loaded xml";
		return elements[ranNum(0,elements.length)];
	}
	this.getArrayOf=function(key){
		var elements=this.xmlDoc.getElementsByTagName(key);
		var out=[];
		for(let ctr=0;ctr<elements.length;ctr++) out.push(elements[ctr])
		return out;
	}
}
function Robot(XML){
	if(!XML.getElementsByTagName)throw "NO XML"
	this.name=XML.getElementsByTagName("name")[0];
	this.desc=XML.getElementsByTagName("description")[0];
	this.imgp=XML.getElementsByTagName("imgPath")[0];
	this.price=XML.getElementsByTagName("price")[0];
	this.tags=XML.getElementsByTagName("tags")[0];
	this.class=XML.getAttribute("class");
}
function MainControl(XML){
	if(!XML.xmlDoc)throw "NO XML LOADED"
	const format="<div class=\"tile\"><img src=\"%s\" alt=\"%s\" height=\"300px\"/><h3>%s</h3><p>%s</p><br/><button>%d</button></div>";
	this.ROBOTS=XML.getArrayOf("robot");
	this.fillMain=function(){
		let mainSec=document.getElementById("main")
		if(!mainSec)throw "NO MAIN ELEMENT"
		this.ROBOTS.forEach((element)=>{
			let robot=new Robot(element)
			mainSec.innerHTML+='\n'+new String(format,robot.imgp,"Robot",robot.name,robot.desc,robot.price)
		});
	}
}