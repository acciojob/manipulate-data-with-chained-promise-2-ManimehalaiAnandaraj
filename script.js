//your JS code here. If required.
function manipulateArray() {
	return new Promise(resolve => {
		setTimeout(() =>{
			resolve([1,2,3,4]);		
			},3000);
	})
	.then(array =>{
		return new Promise(resolve => {
		const filteredArray=array.filter(num => num % 2 === 0);
		const output=document.getElementById('output');
		output.textContent=JSON.stringify(filteredArray);
		setTimeout(()=>{
			resolve(filteredArray);
		},1000)
	})
})
.then( filteredArray =>{
	return new Promise(resolve =>{
		const multipliedArray=filteredArray.map(num => num * 2);
		const output=document.getElementById('output');
		setTimeout(()=>{
			output.textContent=JSON.stringify(multipliedArray); 
			resolve(multipliedArray);
		},2000)
	})
})
}