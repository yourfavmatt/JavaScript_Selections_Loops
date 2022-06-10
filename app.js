console.log("Hello World!\n==========\n");

for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        continue;
    } else { 
    console.log(i);
}
}




for (let i = 1; i < 100; i++) {
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FIZZBUZZ");
    } else 
    if (i % 3 == 0) {
        console.log("FIZZ");
    }
    if (i % 5 == 0) {
        console.log("BUZZ");
    }
}   

let i = 1;

while (i <= 100) {
    let output = "";

    if (i % 3 == 0) {
        output += "FIZZ";
    }

    if (i % 5 == 0) {
        output += "BUZZ";
    }

    console.log('${i} ${output}');

    i++;


}

let value = Math.round((Math.random() * 500)); 
let n = Math.round(Math.random() * (500 - 100) + 100);

    for (let i = 1; i <= n; i++) {
        if (i == value){
        console.log("Found ${value}");
        break;
     }  
    
    if (i ==n) {
       console.log("Did not find ${value} within 1-${n}"); 
    }
    
}


let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);
console.log(start, end);
    
for(let i = start; i<= end; i ++) {
    let output = "";

    if (i % fizzDivisor == 0) {
        output += "FIZZ"
    }

    if (I % buzzDivisor == 0){
        output += "BUZZ"
    }

    console.log("${i} ${output}");
    console.log(fizzDivisor, buzzDivisor)
}







