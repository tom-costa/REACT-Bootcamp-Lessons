// // import Foods from './foods'

function choice(items) {
    let randFruit = Math.floor(Math.random() * items.length)
    return items[randFruit];
}

function remove(items, item) {
	for (let i = 0; i < items.length; i++) {
		if (items[i] === item) {
			return [ ...items.slice(0, i), ...items.slice(i + 1) ];
		}
	}
}

export { choice, remove }

