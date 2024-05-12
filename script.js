//your JS code here. If required.
let n=document.getElementById('name');
let a=document.getElementById('age');
let b=document.getElementById('btn');
let tag=document.createElement('p');

    let p=new Promise((resolve,reject)=>{
        b.addEventListener('click',()=>{
    if(n.value && a.value){
        if(parseInt(a.value)>=18){
		resolve(`Welcome, ${n.value}. You can vote.`);
	}else{
		reject (`Oh sorry ${n.value}. You aren't old enough.`)
	}
}
else{
tag.innerHTML=`Please enter valid details`;
document.querySelector('body').appendChild(tag); 
    }
});	
});

p.then((d)=>{
        tag.innerHTML='';
		tag.innerHTML=`${d}`;
	}).catch((e)=>{
        tag.innerHTML='';
		tag.innerHTML=`${e}`;
	}).finally(()=>{
    document.getElementById('form').style.display='none';
	document.querySelector('body').appendChild(tag);
    });