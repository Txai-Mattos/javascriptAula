const nums = [1,2,3,4,5,6,7,8,9,10]

for (i in nums) {
   if (i==5) {
       break;   //para não o if mas a estrutura de repetição mas próxima, ele para o for
   }
   console.log(`${i}=${nums[i]}`)
}

for (y in nums) {
    if (y==5) {
        continue; // para a execução e pula para o próximo item, dentro a estrutura de repetição não do FI
    }
    console.log(`${y}=${nums[y]}`)
 }

 externo: //Rotulando o laço mas externo
 for (a in nums) {
    for (b in nums) {
        if (a==2 && b==3) {
            break externo //Como esta chamando o rotulado, ele para o mais externo e não o for interno
            }
                console.log(`par = ${a},${b}`);
            
        
    }
 }