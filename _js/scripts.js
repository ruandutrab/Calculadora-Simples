tempNum = [];
tempNum2 = [];
operador = "";
function botao(num) {
    var numDisp = document.getElementById('numDisp');  
    tempNum.push(num);
            if (tempNum.includes("C")){
                tempNum.pop();
                numDisp.innerHTML = ``;
                tempNum = [];
                tempNum2 = [];
                return false;
            }
     
            if (tempNum.includes("+")){
                operador = "soma";
                tempNum.pop();
                tempNum2 = tempNum;
                tempNum = [];
                } else if (tempNum.includes("-")){
                operador = "subtra";
                tempNum.pop();
                tempNum2 = tempNum;
                tempNum = [];
                } else if (tempNum.includes("/")){
                operador = "divisao";
                tempNum.pop();
                tempNum2 = tempNum;
                tempNum = [];
                } else if (tempNum.includes("*")){
                operador = "multipli";
                tempNum.pop();
                tempNum2 = tempNum;
                tempNum = [];
                }
    numDisp.innerHTML += `${num}`;
}
function verif(){
    const reduzirTn1 = tempNum.reduce((total,currentValue) => {
        return total + currentValue;}
);
    const reduzirTn2 = tempNum2.reduce((total,currentValue) => {
        return total + currentValue;}
);
        var convertTn1 = parseFloat(reduzirTn1);
        var convertTn2 = parseFloat(reduzirTn2);
         if(operador == "soma"){
            res = convertTn2 + convertTn1;
         }else if(operador == "subtra"){
            res = convertTn2 - convertTn1;
         }else if(operador == "divisao"){
            res = convertTn2 / convertTn1;
         }else if(operador == "multipli"){
            res = convertTn2 * convertTn1;
         };
        numDisp.innerHTML += ` = ${res}`;
}
