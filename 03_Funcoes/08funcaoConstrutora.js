function carro(velocidadeMAxima = 200,delta = 5) { // uma função construtora usada para poder criar obejtos
    //atributo privado
    let velocidadeAtual = 0
    //metodo publico
    this.acelerar = function () {   //o this é usado para deixar a funçãp publica
        if (velocidadeAtual+delta <= velocidadeMAxima) {
            velocidadeAtual+=delta 
        }else{
            velocidadeAtual = velocidadeMAxima
        }
    }
    //metodo publico
    this.getVelocidadeAtual = () => velocidadeAtual
}

const uno = new carro
uno.acelerar()
console.log(uno.getVelocidadeAtual());

const ferrari = new carro(350,20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual());

console.log(typeof carro);
console.log(typeof ferrari);

