//your JS code here. If required.
let n=document.getElementById('name');
let a=document.getElementById('age');
let b=document.getElementById('btn');


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
alert(`Please enter valid details`);
    }
});	
});

p.then((d)=>{
        alert(`d`);
	}).catch((e)=>{
       alert(`e`);
	});