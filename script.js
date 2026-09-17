//your JS code here. If required.
let container= document.querySelector(".container")
for(let i=0;i<800;i++)
	{
		let box=document.createElement("span")
		box.setAttribute("class","square")
		container.append(box)
		box.addEventListener("mouseenter",()=>{
			box.style.backgroundColor="green"
			setTimeout(()=>{
				box.style.backgroundColor="white"
			},1000)
		})
	}