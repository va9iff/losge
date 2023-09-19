export function losge(defaultObj = {}, key = "losge") {
	const objString = localStorage.getItem(key) ?? JSON.stringify(defaultObj)
	const obj = JSON.parse(objString)
	obj.save = () => localStorage.setItem(key, JSON.stringify(obj))
	obj.update = arg => Object.assign(obj, arg).save()
	Object.defineProperty(obj, "freshed", {
		get: () => {
			localStorage.removeItem(key)
			return losge(defaultObj, key)
		},
	})
	return obj
}
