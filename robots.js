function load(){
	var xhttp=new XMLHttpRequest;
	xhttp.onreadystatechange=function(){
		if(this.readyState==4&&this.status==200){
			console.log(this.responseText);
		}
	}
	xhttp.open("GET","robots.xml",true);
	xhttp.send();
}