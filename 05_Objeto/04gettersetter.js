const sequencia = {
    _valor: 1,   //Não torna o campo privado mas por convenção quando tem o "_" 
    //sub entende que mesmo visível não deve ser mexido diretamente
    get valor() { return this._valor++ },   //criando metodo GET
    set valor(valor) {                      //criando metodo SET
        if (valor > this._valor) {
            this._valor = valor
        }        
    }
}
//o JS ja entende o get e set como sendo tipo atributos mas chama o metodos associados
console.log(sequencia.valor,sequencia.valor);  //como pseudo atributo - mas é o get
sequencia.valor = 1000          //como pseudo atributos - mas é o set
console.log(sequencia.valor,sequencia.valor);
sequencia.valor =900
console.log(sequencia.valor,sequencia.valor);