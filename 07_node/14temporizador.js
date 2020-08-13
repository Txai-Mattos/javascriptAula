const schedule = require('node-schedule')

//'*/5 * 21 * * 3'=> */5 de 5em 5 seg, 21=> as 21hrs, 3=> da quaratfeira
const tarefa1 = schedule.scheduleJob('*/5 * 21 * * 3',function () {  //agendador de tarefas do schedulke
    console.log('executando tarefa 1',new Date().getSeconds());
})

setTimeout(function () {    //setTimeOUt temporizador padrão do JS
    tarefa1.cancel()    //função para cancelar o agendamento do scheduleJob
    console.log('Cancelando Tarefa 1');
},20000)    //tempo que ele vai rodar, ele vai rodar com 20 seg

//setImmediate função do proprio JS tipo o settimeout porém com o tempo de execução zerado, que o faz ser executado assim qeu chamado.
//setInterval função do proprio JS que agenda para um execução, a diferenção é que não noed-schedule tem masi flexibilidade

const regraParaRecorrencia = new schedule.RecurrenceRule() //regra para recorrência
regraParaRecorrencia.dayOfWeek = [new schedule.Range(1,5)] //de seg a sext
regraParaRecorrencia.hour = 21
regraParaRecorrencia.second = 30

const tarefa2 = schedule.scheduleJob(regraParaRecorrencia,function () {
    console.log("tarefa 2!!",new Date().getSeconds());
})