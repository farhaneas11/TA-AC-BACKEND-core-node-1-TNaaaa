var fs = require('fs');

console.log('execute first')

setTimeout(()=>{
    console.log('timeout executed');
    console.timeEnd('task1');
},1000);

console.log('execute last');



let buff1 = buffer.alloc(10);
buff1.write("welcome to buffer");
buff1.toString();


fs.readFile('./content.md',(err,content)=>{
    console.log(err,content);
})