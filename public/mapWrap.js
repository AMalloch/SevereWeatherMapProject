const MapWrap = function(container, zoom, coords, baseLayer){
  this.aerisMap = new aeris.maps.Map(container, {
    zoom: zoom,
    center: coords,
    baseLayer: baseLayer
  });
};
//
// const main = document.getElementById('main');
// var map = new aeris.maps.Map(main, {
//   zoom: 3,
//   center: [39.7,-93.38],
//   baseLayer: new aeris.maps.layers.AerisTile({
//     tileType: 'flat-dk',
//     zIndex: 1
//   })
// });
