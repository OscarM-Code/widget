class MeteoWidgetElement extends HTMLElement {
    

    constructor(){
        super();
        this.attachShadow({mode: 'open'});

        this.shadowRoot.innerHTML = `
        <img src="">
        <h2>Paris</h2>
        <h3><span id="temperature">25 C°</span> (<span
             id="description">Nuageux</span>)</h3>
        `
    }

    capitalize(str){
        return str.split(' ').map(mot => mot[0].toUpperCase() + mot.slice(1))
        .join(' ');
    }

    fetchAPIData(){
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this._city}&units=${this._units}&lang=${this._lang}&appid=447fc0669bb09207018bc0c7329cb612`)
        .then(response => response.json())
        .then(json => {
            this._temperature = json.main.temp;
            this._description = json.weather[0].description;
            this._icon = json.weather[0].icon;

            this.render();
        })
    }

    connectedCallback(){
        var ville = document.getElementById("city").value;
        this._city = ville || 'Paris';
        this._units = this.getAttribute('units') || 'metric';
        this._lang = this.getAttribute('lang') || 'fr';

        this.fetchAPIData();
    }

    render(){
        this.shadowRoot.querySelector('img').src = `http://openweathermap.org/img/w/${this._icon}.png`;
        this.shadowRoot.querySelector('h2').textContent = this._city;
        
        this.shadowRoot.querySelector('h3 #temperature').textContent = 
        this._temperature + (this._units == 'metric' ? ' C°' : 'F°');

        this.shadowRoot.querySelector('h3 #description').textContent =
        this.capitalize(this._description);
    }
}

window.customElements.define('meteo-widget', MeteoWidgetElement)