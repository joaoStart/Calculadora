function onclickOperador (valueOper) {//exibir os operadores na tela
    document.getElementById('visor').value += valueOper;
}
function onChangeInput () {
    document.getElementById('visor').style.color = 'black';
}
function onclickNumber(num) {//exibir os numeros na tela
    document.getElementById('visor').value += num;
}
function clearAll() {//Limpar o conteudo da tela 
    document.getElementById('visor').style.color = 'black';
    document.getElementById('visor').value = "";
}
function onClickButtonOp () {
   var value = document.getElementById('visor').value;
   document.getElementById('visor').value = eval(value).toString();
   document.getElementById('visor').style.color = 'blue'
}