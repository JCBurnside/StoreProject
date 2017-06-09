var xml=null;
function load(){
	var xhttp=new XMLHttpRequest;
	xhttp.onreadystatechange=function(){
		if(this.readyState==4&&this.status==200){
			var TEST=this
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
function XMLFile(respone){
	this.xmlDoc=respone.responseXML
	console.log(respone)
	const format="<div class=\"tile\"><img src=\"%s\" alt=\"%s\" height=\"300px\"/><h3>%s</h3><p>%s</p></div>";
	this.getRandom=function(key){
		var elements=this.xmlDoc.getElementsByTagName(key)
		if(!elements)throw key+" doesn't exist in loaded xml";
		return elements[ranNum(0,elements.length)];
	}
	this.convertToObjectArray=function(key){
		if(!this.xmlDoc.getElementsByTagName(key))throw key+" doesn't existin xml";
		let elements=this.xmlDoc.getElementsByTagName(key);
		let out=[]
		elements.forEach((element)=>{
			out.push(element)
		})
		out.toString=function(){
			let o="[";
			this.forEach((i)=>o+=i+",");
			return o.substr(0,o.length-1)+"]";
		}
		return out;
	}
}