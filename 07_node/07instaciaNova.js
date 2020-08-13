//retorna uma nova instacia usando factory
module.exports = () => {
    return {
        valor:1,
        inc(){
            this.valor++
        }
     }
}