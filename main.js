var operador;

function onclickOperador (valueOperador) {
    this.operador = valueOperador;
}

function onClickButtonOp () {
   var valueN1 = parseInt(document.getElementById('campoValor1').value);
   var valueN2 =parseInt( document.getElementById('campoValor2').value);

   switch (operador) {
       case '+' :
           alert(valueN1 + valueN2);
        break;
        case '-':
            alert(valueN1 - valueN2);
        break;
        case '*':
            alert(valueN1 * valueN2);
        break;
        case '/':
            alert(valueN1 / valueN2);
        break;
        default:
            alert('Nenhum operador foi selacionado.')
   }
   
}