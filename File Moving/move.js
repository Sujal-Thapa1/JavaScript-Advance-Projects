function Move(){
    const source=document.getElementById('sourcePath').value;
    const destination=document.getElementById('destinationPath').value;
    if(source&&destination){
        document.getElementById('result').innerText=`Simulated moving file from "${source}"to"${destination}".`;
    }else{
        document.getElementById('result').innerText='Please enter both source and destination paths.';
    }
}