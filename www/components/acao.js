// This is a JavaScript file

$(document).on('click',"#mapa",function(){
  $('#mapa').hide();

L.mapquest.key = 'yeBwU2m4gDsqcDjhiTViz2OOa12wVqT9';

// 'map' refers to a <div> element with the ID map
L.mapquest.map('map', {
  center: [37.7749, -122.4194],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12
});
});
