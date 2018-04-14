const MapWrap = function(container, zoom, coords, baseLayer){
  this.aerisMap = new aeris.maps.Map(container, {
    zoom: zoom,
    center: coords,
    baseLayer: baseLayer
  });
};

MapWrap.prototype.displayLightningStrikes = function () {
  new aeris.maps.layers.AerisTile({
    tileType: 'lightning-strikes',
    zIndex: 7,
    map: this.aerisMap
  });
};

MapWrap.prototype.displayAdmin = function () {
  new aeris.maps.layers.AerisTile({
    tileType: 'admin',
    zIndex: 11,
    map: this.aerisMap
  });
};

MapWrap.prototype.displayStormCells = function () {
  new aeris.maps.layers.AerisTile({
    tileType: 'stormcells',
    zIndex: 12,
    map: this.aerisMap
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
