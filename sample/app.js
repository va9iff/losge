import { losge } from "../index.js"

let data = losge({
	value: 99,
})

let add = document.querySelector("#add"),
	save = document.querySelector("#save"),
	reset = document.querySelector("#reset"),
	result = document.querySelector("#result")
result.innerHTML = data.value

add.onclick = e => {
	data.value++
	result.innerHTML = data.value
}
save.onclick = e => {
	data.save()
	result.innerHTML = data.value
}
reset.onclick = e => {
	console.log(data)
	data = data.freshed
	console.log(data)
	result.innerHTML = data.value
}

console.log(data)
