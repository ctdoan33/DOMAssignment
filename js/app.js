let contentArray = [
    "This is some content that will be seen using javascript",
    "Also some content, that we will be adding to our ul tag",
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
]
var list = document.getElementById("content");
for(var i=0; i<contentArray.length; i++){
	var item = document.createElement("li");
	var text = document.createTextNode(contentArray[i]);
	item.appendChild(text);
	list.appendChild(item);
}
var button = document.getElementById("moreContent");
button.addEventListener("click", addMoreContent);
function addMoreContent(){
	var item = document.createElement("li");
	var text = document.createTextNode("some random content");
	item.appendChild(text);
	list.appendChild(item);
}