const UrlBase = "https://api.openweathermap.org/data/2.5/weather?";
const ApiKey = "44104619054eff915d9d5030f5a161f5";

const inputCity = document.querySelector('#city');
const btnBuscar = document.querySelector('#btnBuscar');

const fetchApi = url => fetch(url).then(response => response.json ());

async function getClima(lat, lon){
    const url = `${UrlBase}lat=${lat}&lon=${lon}&appid=${ApiKey}`;
    console.log(url);
    const clima = await fetchApi(url);
    console.log(clima);
    const climaCel = (clima.main.temp -273.15); 
    document.querySelector('#left h2').innerHTML = clima.name;
    document.querySelector('#left h3').innerHTML = climaCel.toFixed(2) +" ºC";
    color(climaCel);
}

async function getClimaByCity(city){
    const url = `${ UrlBase }q=${ city }&appid=${ApiKey}`;
    const clima = await fetchApi(url);
    console.log(clima);
    
    const climaCel = (clima.main.temp -273.15); 
    document.querySelector('#left h2').innerHTML = clima.name;
    document.querySelector('#left h3').innerHTML = climaCel.toFixed(2) +" ºC";
    color(climaCel);
}


navigator.geolocation.getCurrentPosition(
    position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        getClima(lat, lon);
    }
    );


    function color(climaCel){
        const body = document.querySelector('body');
        if(climaCel <= 10){
            body.style.background = '#0651e5';
        }else if(climaCel <= 20 ){
            body.style.background = '#e5cf06';
        } else {
            body.style.background = '#e55b06';
    
        }
    }

    btnBuscar.addEventListener('click', ()=> {
        const city = inputCity.value;
        if(city){
            getClimaByCity(city);
        }
    });