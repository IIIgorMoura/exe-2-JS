function calcQuad() {
    let a=Number(prompt("Qual é o valor do lado 1 da forma?"));
    let b=Number(prompt("Qual é o valor do lado 2 da forma?"));

    let result="A área do retângulo é "+a*b+"m²";

    document.getElementById("valorQuad").innerHTML = result;
}

function calcTria() {
    let a=Number(prompt("Qual é o tamanho da base da forma?"));
    let b=Number(prompt("Qual é a altura da forma?"));

    let result="A área do triângulo é "+a*b/2+"m²";

    document.getElementById("valorTria").innerHTML = result;
}

function calcCirc() {
    let a=Number(prompt("Qual é o raio (R) do círculo?"));

    let o=Math.PI
    
    let result="A área do círculo"+o*a**2+"m²";
    document.getElementById("valorCirc").innerHTML = result;

    alert("A área do círculo é a "+result+"m²");
}

function calcTrap() {
    let a=Number(prompt("Qual é o tamanho da base MAIOR?"));
    let b=Number(prompt("Qual é o tamanho da base MENOR?"));
    let c=Number(prompt("Qual é a altura?"));
    
    let result=(a+b)*c/2;
    alert("A área da forma é igual a "+result+"m²");
}

function calcLosa() {
    let a=Number(prompt("Qual é o tamanho da diagonal MAIOR?"));
    let b=Number(prompt("Qual é o tamanho da diagonal MENOR?"));
    
    let result=a*b/2;
    alert("A área da forma é igual a "+result+"m²");
}