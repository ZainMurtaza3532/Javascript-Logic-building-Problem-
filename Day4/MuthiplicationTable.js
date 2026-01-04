function printMultiplicationTable(tableOf, tableTille){
    for(let i=1; i<=tableTille; i++){
        console.log(`${tableOf} x ${i} = ${tableOf * i}`);

    }

} 
printMultiplicationTable(5,10);
printMultiplicationTable(7,12);
printMultiplicationTable(3,15);