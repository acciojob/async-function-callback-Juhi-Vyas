const url = "https://jsonplaceholder.typicode.com/posts/1";
let btn = document.getElementById("btn")
let output = document.getElementById("output")


btn.addEventListener("click", ()=>{
	fetch(url)
	.then(res=>res.json())
	.then(data=>{
		output.textContent = data.title
	})
	
})



