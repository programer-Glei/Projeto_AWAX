

var slider = document.querySelector('.sliders')

var inicio;

slider.style.marginLeft = '0vw';

//setInterval(atualizartempo, 8000)

function atualizartempo(){
    inicio = setInterval(atualizarSlider, 200)
}

function atualizarSlider(){
    slider.style.marginLeft = (parseInt(slider.style.marginLeft) - 1) + 'vw';
    if(parseInt(slider.style.marginLeft) == -100){
        clearInterval(inicio)
    }
}

// create map
var mymap = L.map('mapid').setView([-8.3053059,-35.0219841], 16);

// create and add tileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

// create icon
const icon = L.icon({
    iconUrl: "img/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// create popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanages.html?id=1" class="choose-orphanage"><img src="img/arrow-white.svg"/></a>')

//create and add marker
L.marker([-8.3053059,-35.0219841],{icon}).addTo(mymap)
    .bindPopup(popup)
