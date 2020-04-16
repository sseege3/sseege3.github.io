/* global L */
var map1 = L.map('map1').setView([30.000478, -90.094209], 8)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map1)
var map1MarkerObject = L.marker([30.000478, -90.094209]).addTo(map1)
var map1PolygonObject = L.polygon([
  [30.026160, -90.120425],
  [29.919661, -90.132919],
  [29.936120, -90.048460],
  [29.869403, -89.916024],
  [29.913164, -89.919022],
  [29.949111, -90.010478],
  [29.987643, -89.982491],
  [30.015804, -89.706948],
  [30.146688, -89.626078],
  [30.176469, -89.745136],
  [30.100704, -89.830499],
  [30.149926, -89.879919]
]).addTo(map1)
var map1Polyline = L.polyline([
  [30.364796, -90.093864],
  [30.020682, -90.154327]
]).addTo(map1)
map1PolygonObject.bindPopup('New Orleans, LA')
map1MarkerObject.bindPopup('City Park, New Orleans, LA')
map1Polyline.bindPopup('Lake Pontchartrain Causeway')
