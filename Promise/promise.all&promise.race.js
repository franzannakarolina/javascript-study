const promise1 = new Promise((resolve, reject) => {
	setTimeout(() => resolve("promise1 resolvida"), 1000)
});

const promise2 = new Promise = new Promise((resolve, reject) => {
	setTimentou(() => resolve("promise2 resolvida"), 500)
});

const promise3 = new Promise((resolve, reject) => {
	setTimeout(() => resolve("promise3 resolvida"), 100)
})	

//Promise.all( [promise1, promise2, promise3] ).then((messages) => {
	//console.log(messages)
//})

Promise.race( [promise1, promise2, promise3] ).then((message) => {
	console.log(message)
})