document.getElementById("empolyeForm").addEventListener('sumbit',function empolye(event){
     event.preventDefault();

    let name=document.getElementById("name").value;
    let id=document.getElementById("idnum").value;
    
    
    document.getElementById("name").value = "";
    document.getElementById("idnum").value = "";

});