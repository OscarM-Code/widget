var press = document.getElementById('press');
console.log(press);  

function capitalize(str){
    return str.split(' ').map(mot => mot[0].toUpperCase() + mot.slice(1))
    .join(' ');
}

press.addEventListener('click', function() {

    var ville = document.getElementById('ville').value;
    var city2 = ville || 'Paris';
    city.textContent = city2;

    fetch("https://api.openweathermap.org/data/2.5/weather?q="+city2+"&units=metric&lang=fr&appid=447fc0669bb09207018bc0c7329cb612")
        .then(response => response.json())
        .then(json => {
            var temperature = json.main.temp;
            document.getElementById('temp').textContent = temperature + '°C';
            var description = json.weather[0].description;
            document.getElementById('desc').textContent = capitalize(description);
            var icon = json.weather[0].icon; 
            var image = document.getElementById('image');
            image.src = `http://openweathermap.org/img/w/${icon}.png`;
        }); 
});

document.querySelector('#ville').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        var ville = document.getElementById('ville').value;
        var city2 = ville || 'Paris';
        city.textContent = city2;

        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city2}&units=metric&lang=fr&appid=447fc0669bb09207018bc0c7329cb612`)
            .then(response => response.json())
            .then(json => {
                var temperature = json.main.temp;
                document.getElementById('temp').textContent = temperature + '°C';
                var description = json.weather[0].description;
                document.getElementById('desc').textContent = capitalize(description);
                var icon = json.weather[0].icon; 
                var image = document.getElementById('image');
                image.src = `http://openweathermap.org/img/w/${icon}.png`;
            });
    }
});




        