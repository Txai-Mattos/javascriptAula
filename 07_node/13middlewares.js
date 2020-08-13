//middleware pattern (chain of responsibility)
// Seriam os passos as funções middleware
const passo1 = (contexto,next)=>{
    contexto.valor1 = 'mid1'
    next()
}
const passo2 = (contexto,next)=>{
    contexto.valor2 = 'mid2'
    next()
}
const passo3 = contexto=> contexto.valor3 = 'mid3'

//a função qeu chama os passos
const exec = (contexto,...middlewares) =>{
    const execPasso = indice => {
        middlewares && indice < middlewares.length
            && middlewares[indice](contexto,()=>execPasso(indice+1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx,passo2,passo1,passo3)
console.log(ctx);

