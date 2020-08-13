function area (largura,altura){
    const area = largura * altura
    if (area > 20) {
        console.log(`valor acima do permitido: ${area}m2`);        
    } else {
        return area
    }
}
//A quantidade de parametros pode ser maior ou menor qua não vai ter erro
console.log(area(2,2));
console.log(area(2));
console.log(area());
console.log(area(2,5,13,54,56,6,7,));
console.log(area(5,5)); // como a função não teve retorno quando de 20 , retornou undefined
