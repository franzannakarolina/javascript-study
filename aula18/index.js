// const pessoa1 = {
//   nome: 'Luiz',
//   sobrenome: 'Miranda',
//   idade: 25,

//   fala() {
//     console.log(`A minha idade atual é ${this.idade}.`);
//   },

//   incrementaIdade() {
//     this.idade++;
//   }
// };

// pessoa1.fala();
// pessoa1.incrementaIdade();
// pessoa1.fala();
// pessoa1.incrementaIdade();
// pessoa1.fala();
// pessoa1.incrementaIdade();
// pessoa1.fala();

function criaPessoa(nome, sobrenome, idade) {
  // parametro
  return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa("Luiz", "Miranda", 25); // argumento é o valor que é passado para o parametro
