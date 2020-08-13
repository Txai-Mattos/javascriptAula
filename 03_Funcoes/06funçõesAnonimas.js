//função anonima é uam função sem nome e pode ser usada em varios lugares
const soma = function (a,b) { //função anonima sendo passada para ser atribuida em uma constante
    return a+b
}

const imprimirResultafo = soma (1 , function (x,y) { //passando uma funçao anonima como parametro
    
});
const imprimirResultafo1 = soma (2 , (x,y) => 'Algo'); //passand o arrow function anonima