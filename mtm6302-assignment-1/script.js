// JavaScript Document
let emoji_1 = "128512";
let emoji_2 = "8986";

for(let x=0; x<100; x++){
	let emoji = '';
	if(emoji_1 >= "128592"){
		emoji = emoji_2;
	}else{
		emoji = emoji_1;
	}
	
	let div = document.createElement('div');
	div.setAttribute('class', 'flex-item');
	
	let p = document.createElement('p');
	
	let span = document.createElement('span');
	span.innerHTML = "&#"+emoji+";<br />";
	
	let code = document.createElement('code');
	code.innerHTML = emoji;
	
	p.appendChild(span);
	p.appendChild(code);
	div.appendChild(p);
	
	document.getElementById("flex-container").appendChild(div);	
	
	if(emoji_1 >= "128592"){
		emoji_2 = Number(emoji_2)+Number(1);
	}else{
		emoji_1 = Number(emoji_1)+Number(1);
	}
}