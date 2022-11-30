
let termo,n1=1,n2=0;

termo = prompt("digite o termo:");
document.write("a sequencia de fibonacci com o termo desejado é:");
document.write(n1);

for(let i=1; i<termo; i++){
    n1=n1+n2;
    n2=n1-n2;
    document.writeln(n1);
    
}