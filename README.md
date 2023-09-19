Use normal JavaScript objects, save them in localstorage, load them or load a 
default object. 

### `losge(initial, key)`

# Usage
```js
let data = losge({ value: 99 }) // just wrap with losge
data.value += 1                 // make changes
data.save()                     // save
```
The losge call will load the last saved value. If there's no saved value, 
the argument is used as the initial value.

# Resetting
```js
data = data.freshed
```
The `freshed` getter will remove the saved values and return a losge with 
initial value. Ready to be changed and saved or even freshed again.

# Update multiple properties at once and save
```js
data.update({ value: 88 })
```


# Dealing with multiple storage keys
Losge is nothing more than a pretty wrapper that adds `save` and `freshed` 
utility methods. This means you can integrate your existing localstorages to 
losge. The second argument is the key to save localstorage. By default it uses 
"losge" but you can change them to use multiple top level losges or adapt your 
current localstorage objects to losge.