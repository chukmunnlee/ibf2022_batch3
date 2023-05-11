// create a promise
let p = new Promise(
	(resolve, reject) => {
		// do some work
		setTimeout(() => {
			console.info('completed')
			resolve('success')
			//reject('there is an error')
		}, 2000)
	}
)

p
	.then(v => {
		console.info('got data from promise: ', v)
		throw "I have found an error"
		//return 'after the first then'
	})
	.then(v => {
		console.info('second then: ', v)
	})
	.catch(err => {
		console.error('>> error: ', err)
		return "problem solved"
	})
	.then(v => {
		console.info('After catch: ', v)
	})
	.catch(err => {
		console.info('In second catch: ', v)
	})

console.info('>> after creating the promise')
