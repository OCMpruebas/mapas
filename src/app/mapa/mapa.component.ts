import { Component, OnInit } from '@angular/core';
// import 'https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-omnivore/v0.3.1/leaflet-omnivore.min.js';


declare let L: any;
declare let omnivore: any;


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const mymap = L.map('mapid', {
      // La Lat y Log deben estar al reves que en Mapbox
       // center: [36.68731461086896,-6.135306358337402],
       // zoom: 18

       center: [36.69512622732945, -6.125478744506836],
       zoom: 13
      // center: [36.769316564542,-6.0269378662109375],    // Incluido Jerez Rural Distritos 09 y 10
       // zoom: 11
     });

     L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
     // tslint:disable-next-line:max-line-length
     attribution: 'Cartografia &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contribuyen, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagen © <a href="https://www.mapbox.com/">Mapbox</a>',
     maxZoom: 20,
     id: 'mapbox.streets',
     accessToken: 'pk.eyJ1IjoibWFtamVyZXoiLCJhIjoiY2lqMnRuN3ZxMDAxdnVta3BuY2hoa3Y4byJ9.nw3FJ42_Qm-ZFZi-ja0bgg'
 }).addTo(mymap);

 // var marker = L.marker([36.684241, -6.114764]).addTo(mymap);

 // var circle = L.circle([36.68731461086896,-6.135306358337402], {
 //     color: 'red',
 //     fillColor: '#f03',
 //     fillOpacity: 0.5,
 //     radius: 500
 // }).addTo(mymap);

 // var latlngs =[[-6.136444,36.686954],[-6.135074,36.687044],[-6.136444,36.686954]];
 // var polygon = L.polygon(latlngs, {color: 'blue'}).addTo(mymap);

 const Rosario = omnivore.geojson('/assets/Entorno-Rosario.geojson');
 Rosario.bindPopup('<b>Entorno</b><br>Calle Rosario.');
 Rosario.setStyle({
   fillOpacity: 1,
   color: 'red',
   weight: 1
 });
 Rosario.addTo(mymap);

 // Rosario =  {
 //     color: 'red',
 //     fillColor: '#f03',
 //     fillOpacity: 0.5,
 //     radius: 500
 // };

 const Conservatorio = omnivore.geojson('/assets/Conservatorio.geojson').addTo(mymap);
 Conservatorio.bindPopup('Conservatorio de música.');

 // omnivore.kml('/assets/Distritos.kml').addTo(mymap);

 omnivore.geojson('/assets/Distrito01.json').addTo(mymap);
 omnivore.geojson('/assets/Distrito02.json').addTo(mymap);

 const D02_005 = omnivore.geojson('/assets/02-005.json').addTo(mymap);
 D02_005.bindPopup('Distrito 02.<br>Sección 005.');

 omnivore.geojson('/assets/Distrito03.json').addTo(mymap);
 omnivore.geojson('/assets/Distrito04.json').addTo(mymap);
 omnivore.geojson('/assets/Distrito05.json').addTo(mymap);
 omnivore.geojson('/assets/Distrito06.json').addTo(mymap);
 omnivore.geojson('/assets/Distrito07.json').addTo(mymap);
 omnivore.geojson('/assets/Distrito08.json').addTo(mymap);
 omnivore.geojson('/assets/Distrito09.json').addTo(mymap);
 omnivore.geojson('/assets/Distrito10.json').addTo(mymap);


  }

}
