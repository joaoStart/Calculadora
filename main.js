var operador;

function onclickOperador (valueOper) {//exibir os operadores na tela
    document.getElementById('visor').value += valueOper;
    this.operador = valueOper;
}
function onclickNumber(num) {//exibir os numeros na tela
    document.getElementById('visor').value += num;

}
function clearAll() {//Limpar o conteudo da tela 
    document.getElementById('visor').value = "";
}

// function onClickButtonOp () {
//    var valueN1 = parseInt(document.getElementById('campoValor1').value);
//    var valueN2 =parseInt( document.getElementById('campoValor2').value);

//    switch (operador) {
//        case '+' :
//            alert(valueN1 + valueN2);
//         break;
//         case '-':
//             alert(valueN1 - valueN2);
//         break;
//         case '*':
//             alert(valueN1 * valueN2);
//         break;
//         case '/':
//             alert(valueN1 / valueN2);
//         break;
//         default:
//             alert('Nenhum operador foi selacionado.')
//    }
   
// }