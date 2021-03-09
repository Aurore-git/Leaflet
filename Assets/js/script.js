/* Carte de Narbonne*/
var mymap = L.map('mapid').setView([43.184277, 	3.003078], 15
    );

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYXVyb3JlbWFsb2NoZXQiLCJhIjoiY2tqbDk4OXJ2MXFmNTJ6cW8xYW16c2FiZyJ9.nO51EmYwSruVvE7R7LFV9g'
}).addTo(mymap);


/* Office du Tourisme*/
var tourismIcon = L.icon({
    iconUrl: 'Assets/images/odt.jpg',
    iconSize: [45, 45],
    iconAnchor: [0, 45],
    popupAnchor: [22.5, -45],
});

var marker = L.marker([   43.183331 , 3],{icon: tourismIcon}).addTo(mymap);

var circle = L.circle([ 43.183331, 3], {
    color: '#BA55D3',
    fillColor: 'purple',
    fillOpacity: 0.5,
    radius: 10
}).addTo(mymap);

marker.bindPopup("<p><b>Office du Tourisme</b><br>L’Office de Tourisme de Narbonne : un outil au service des professionnels,des visiteurs et des narbonnais.</p><img src='Assets/images/tourisme.jpeg'>");

/*Stade*/
var sportIcon = L.icon({
    iconUrl: 'Assets/images/sport.png',
    iconSize: [45, 45],
    iconAnchor: [0, 45],
    popupAnchor: [22.5, -45],
});

var marker2 = L.marker([  43.181115060687645,3.0207012891769303],{icon: sportIcon}).addTo(mymap);

var circle = L.circle([  43.181115060687645, 3.0207012891769303], {
    color: '#BA55D3',
    fillColor: 'purple',
    fillOpacity: 0.5,
    radius: 120
}).addTo(mymap);

marker2.bindPopup("<p><b>Stade d'Honneur du Parc des Sports et de l'Amitié (Egassiairal)</b><br/>Stade principal</p><img src='Assets/images/ega.jpeg'>");


/*Médiathèque*/

var bookIcon = L.icon({
    iconUrl: 'Assets/images/livre.png',
    iconSize: [45, 45],
    iconAnchor: [0, 45],
    popupAnchor: [22.5, -45],
});

var marker3 = L.marker([43.18527767545014, 3.0002760887145996],{icon: bookIcon}).addTo(mymap);

var circle = L.circle([ 43.18527767545014, 3.0002760887145996], {
    color: '#BA55D3',
    fillColor: 'purple',
    fillOpacity: 0.5,
    radius: 40
}).addTo(mymap);

marker3.bindPopup("<p><b>Médiathèque du Grand Narbonne</b></p><img src='Assets/images/media.jpeg'>");


/*Théâtre*/

var theatreIcon = L.icon({
    iconUrl: 'Assets/images/masque.png',
    iconSize: [55, 55],
    iconAnchor: [0, 45],
    popupAnchor: [22.5, -45],
});

var marker4 = L.marker([43.17983271386533, 3.014824390411377],{icon: theatreIcon}).addTo(mymap);

var circle = L.circle([ 43.17983271386533, 3.014824390411377], {
    color: '#BA55D3',
    fillColor: 'purple',
    fillOpacity: 0.5,
    radius: 30
}).addTo(mymap);

marker4.bindPopup("<p><b>Théâtre et cinéma</b><br/>Théâtre + Cinéma Scène nationale Grand Narbonne. Direction Marion Fouilland-Bousquet.</p><img src='Assets/images/theatre.jpeg'>");

/*Cathédrale*/

var cathIcon = L.icon({
    iconUrl: 'Assets/images/cath.jpeg',
    iconSize: [65, 65],
    iconAnchor: [0, 45],
    popupAnchor: [22.5, -45],
});


var marker5 = L.marker([43.184878707684476, 3.0037522315979004],{icon: cathIcon}).addTo(mymap);

var circle = L.circle([ 43.183331, 3], {
    color: '#BA55D3',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 100
}).addTo(mymap);

marker5.bindPopup("<p><b>Cathédrale Saint-Just et Saint-Pasteur</b><br>monument le plus prestigieux de la ville de Narbonne.<br/> Elle a rang de cocathédrale du diocèse de Carcassonne.</p><img src='Assets/images/cathedrale.jpeg'>");


let url = "https://api.openweathermap.org/data/2.5/weather?q=Narbonne&appid=568d40c6d8a3d82ffa15a3effa57bdf7&units=metric&lang=fr";

 
fetch(url).then((response) =>
 response.json().then((data) => {
   console.log(data);
   document.querySelector ('#city').innerHTML ="<i class='fas fa-city'></i>" + data.name;
   document.querySelector ('#temp').innerHTML ="<i class='fas fa-thermometer-three-quarters'></i>" +  data.main.temp + ' °C';
   document.querySelector ('#humidity').innerHTML = "<i class='fas fa-tint'></i>" + data.main.humidity + ' %';
   document.querySelector ('#wind').innerHTML = "<i class='fas fa-wind'></i>" + data.wind.speed  + ' m/sec';
   document.querySelector ('#Meteo').innerHTML = "<img src='http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png'>" + data.weather[0].description;
 })

);
