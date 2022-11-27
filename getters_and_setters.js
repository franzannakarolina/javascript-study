const obj = {
	listString: [ "Inscreva-se", "Ative o sino", "Brazilian Dev"],
	get primaryString(){
		return this.listString.length ? this.listString[0] : null;
	},
	set primaryString(item){
		this.listString.unshift(item)
	},
};

console.log(obj.primaryString);
obj.primaryString = "Deixa um like";

//https://www.youtube.com/watch?v=56Llpd47XjM