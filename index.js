// array simples
//const pessoa = ["João",30,"Engenheiro","joao@gmail.com"]
//console.log(pessoa[2]);
//com chaves e valor
const pessoa = {nome:"jose", idade:32, profissao:"engenheiro",email:"jo@gmail.com"};
console.log(pessoa.profissao);//objeto
console.log(pessoa.idade);
//adicionar
pessoa.altura = 1.90;
console.log(pessoa);
//deletar quase não usa essa função
delete pessoa.idade;
console.log(pessoa);

const paginas = [
    {
        login:"Jo2",
        senha: 1234
    },
    {
        nome: "jose",
        idade: 32,
        dataDeNascimento: "04/12/1986",
        sexo: "masculino",
        email:"josew@gmail.com"
    },
    {
        questao1 : "Muito Satisfeito",
        questao2 : 4,
        questao3 : 5
    }

]
 console.log(paginas);
 console.log(paginas[0]);
console.log(paginas[1]);
console.log(paginas[2]);
console.log(paginas[0].login, ",",paginas[0].senha);