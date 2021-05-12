function calculer() 
{ 
    let a = document.getElementById("resultat").value 
    let b = eval(a) 
    document.getElementById("resultat").value = b 
} 

function afficher(val) 
{ 
    document.getElementById("resultat").value+=val 
} 

function effacer() 
{ 
    document.getElementById("resultat").value = "" 
} 