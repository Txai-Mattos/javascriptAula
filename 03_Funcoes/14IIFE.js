//IIFE -> immediately invoked function expression ==> função auto invocada: quando declarada ja é invocada
//fica entre parenteses e com parenteses seguintes
//usado para fugir o escopo global seja por var,let const se for dentro da função fica isa=olado do global
(function () {
    console.log('Será executado na hora');
    console.log('Foge do escopo mais abrangente');
})
()


