const initialize = function(){

  aeris.config.set({
    apiId:
    apiSecret:
  });

  const main = document.getElementById('main');
  var map = new aeris.maps.Map(main, {
    zoom: 3,
    center: [39.7,-93.38],
    baseLayer: new aeris.maps.layers.AerisTile({
      tileType: 'flat-dk',
      zIndex: 1
    })
  });
}

window.addEventListener('load', initialize);
