var i,n;

n = parseInt(prompt("informe o número que deseja:"));
document.write("<h1>Tabuada</h1>");
for (i = 1; i <= 10; i++){
    document.write(n + " x " + i + " = " + (n*i) + "<br>");
}
