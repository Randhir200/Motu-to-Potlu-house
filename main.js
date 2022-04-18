function runProgram(input) {
    var n=+input;
    var step=0;
    
    while(n>0){
           if(n>=5){
            n=n-5 // 26-5=21, 16, 11,6 1
            step++
           }else if(n>=4){
               n=n-4
            step++
           }else if(n>=3){
               n=n-3
            step++

           }else if(n>=2){
               n=n-2
            step++
               
           }else if(n>=1){
               n=n-1
            step++
               
           }
            
        
    }
    console.log(step)
}
if (process.env.USER === "") {
 runProgram(``);
} else {
 process.stdin.resume();
 process.stdin.setEncoding("ascii");
 let read = "";
 process.stdin.on("data", function (input) {
   read += input;
 });
 process.stdin.on("end", function () {
   read = read.replace(/\n$/, "");
   read = read.replace(/\n$/, "");
   runProgram(read);
 });
 process.on("SIGINT", function () {
   read = read.replace(/\n$/, "");
   runProgram(read);
   process.exit(0);
 });
}

