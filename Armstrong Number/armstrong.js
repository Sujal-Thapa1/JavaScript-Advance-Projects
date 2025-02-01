function checkArmstrong(){
    const number=document.getElementById('numberInput').value;
    const numDigits=number.length;
    let sum=0;
    for(let i=0;i<numDigits;i++){
        sum+=Math.pow(parseInt(number.charAt(i)),numDigits);
    }
    const resultDiv=document.getElementById('result');
    if(sum==number){
        resultDiv.innerHTML=`${number}is an Armstrong number.`;
    }else{
        resultDiv.innerHTML=`${number}is not an Armstrong number.`;
    }
}