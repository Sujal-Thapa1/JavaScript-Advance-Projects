function createTextFile(){
    const text=document.getElementById('textInput').value;
    const blob=new Blob([text],{ type:'text/plain'});
    const url=URL.createObjectURL(blob);
    const a=document.createElement('a');
    a.href=url;
    a.download='textfile.txt';
    a.click();
    URL.revokeObjectURL(url);
}