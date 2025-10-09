const Salario = document.getElementById('Salario');
const Final = document.getElementById('Final');
const Taxa = document.getElementById('Taxa');
const btnCal = document.getElementById('btnCal');
const btnL = document.getElementById('btnL');

const taxaJuros = document.getElementById('taxaJuros');
const btnCalc = document.getElementById('btnCalc');
const result = document.getElementById('result');
const btnLi = document.getElementById('btnLi');

let val, Inv, tx, res

btnCal.onclick = () =>{
    val = parseFloat(Salario.value);
    tx = parseFloat(Taxa.value);
    tx = tx / 100
    Inv = val * tx
    Final.value = Inv + val
    Salario.value = "";
    Taxa.value = "";
}

btnL.onclick = () =>{
    Final.value = "";
}

btnCalc.onclick = () =>{
    res = 72 / taxaJuros.value
    result.value = res
    taxaJuros.value = "";
}

btnLi.onclick = () =>{
    result.value = "";
}

