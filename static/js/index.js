var button = document.getElementById('button');

button.onclick =  function(){
	var content = document.getElementById('comment-box');
	if (content.value != ""){
		var display = document.getElementById('posted-comments');
		display.innerHTML = display.innerHTML + "<li>" + content.value + "</li>";
		content.value = '';
	}else{
		alert('no value');
	}
}
