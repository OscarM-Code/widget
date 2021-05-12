var press = document.getElementById('presss');

press.addEventListener('click', function() {

    var value1 = document.getElementById('value1').value;
    var value2 = document.getElementById('value2').value;
    
    valeur.textContent = value1;
    valeur2.textContent = value2;
    console.log(typeof value1)

    fetch(`https://v6.exchangerate-api.com/v6/3e6b9f0105412bb8134db031/pair/${value1}/${value2}`)
        .then(response => response.json())
        .then(json => {
            
            var rate = json.conversion_rate
            var montant = document.getElementById('montant').value;
            var result = rate * montant;
            var resultred = result.toFixed(3);
            document.getElementById('resultats').textContent = resultred;

            });
    
});