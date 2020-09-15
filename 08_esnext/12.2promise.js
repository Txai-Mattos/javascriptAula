// setTimeout(() => {
//     console.log('Executando timeout 1')
//     setTimeout(() => {
//         console.log('Executando timeout 2')
//         setTimeout(() => {
//             console.log('Executando timeout 3')
//         }, 2000);
//     }, 2000);
// }, 2000)

const esperarPor = (tempo = 2000) => {

    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Executando timeout 3')
            resolve()
        }, tempo);

    })
}

esperarPor()
.then(a => esperarPor(5000))
.then(esperarPor)