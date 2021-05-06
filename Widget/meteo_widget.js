var press = document.getElementById('press');
console.log(press);  


press.addEventListener('click', function() {

    var ville = document.getElementById('ville').value;
    var city2 = ville || 'Paris';

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city2}&units=metric&lang=fr&appid=447fc0669bb09207018bc0c7329cb612`)
        .then(response => response.json())
        .then(json => {
            var temperature = json.main.temp;
            var description = json.weather[0].description;
            var icon = json.weather[0].icon; 
        });

    /*var image = document.getElementById('image');
    image.src = `http://openweathermap.org/img/w/${icon}.png`; */
    var city = document.getElementById('city');
    city.textContent = city2;
    var temp = document.getElementById('temp');
    temp.textContent = temperature +'C°';
    
});


        