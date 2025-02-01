function countCharacters(){
    const sentence=document.getElementById('Input').value;
    const characterCount=sentence.length;
    document.getElementById('result').innerText=`Character count:${characterCount}`;
}