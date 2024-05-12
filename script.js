//your JS code here. If required.
let n=document.getElementById('name');
let a=document.getElementById('age');
let b=document.getElementById('btn');
let p=new Promise((resolve,reject)=>{
	if(parseInt(a.value)>=18){
		resolve `Welcome, ${n.value}. You can vote.`;
	}
	else{
		reject `Oh sorry ${n.value}. You aren't old enough.`
	}
	
});
b.addEventListener('click',()=>{
	const tag=document.createElement('p');
	p.then((d)=>{
		tag.innerHTML=`${d}`;
	});
	document.getElementById('form').style.display='none';
	document.querySelector('body').appendChild(tag);
});