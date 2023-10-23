const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close',function(){
    const str = input.join('\n');
    console.log(str.split('').map((e) => /[a-z]/.test(e) ? e.toUpperCase() : e.toLowerCase()).join(''));
});