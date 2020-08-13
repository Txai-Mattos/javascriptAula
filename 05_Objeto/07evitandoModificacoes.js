//Object.preventExtensions => evita adicionar novos atributos no objetos
const produto = Object.preventExtensions({
    nome:'Qualquer', preco: 1.99, tag: 'promocao'
})
console.log('Extensivel: ', Object.isExtensible(produto)); //verifica se pode adicionar novos atributos

produto.nome= 'Borracha'
produto.descricao= 'Borracha Escolar Branca'
delete produto.tag
console.log(produto);

//Object.seal => sela o objeto, evitando adição ou exclução de atributos nesse objeto
const pessoa = {nome:'Juliana',idade:35}
Object.seal(pessoa)
console.log('selado: ',Object.isSealed(pessoa)); //verifica se esta selado
pessoa.sobrenome= 'Borracha'
delete pessoa.nome
pessoa.idade =10
console.log(pessoa); // não excluiu nem adicionou

//Object.freeze() => congela os atributos evitando adionar novo e excluir, congela tbm o valors dos atributos
Object.freeze()