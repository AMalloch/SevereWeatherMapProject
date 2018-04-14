const initialize = function(){

  aeris.config.set({
    apiId: config.ID,
    apiSecret: config.SECRET
  });

  const container = document.getElementById('main');
  const zoom = 3;
  const coords = [39.7,-93.38];
  const baseLayer = new aeris.maps.layers.AerisTile({
    tileType: 'flat-dk',
    zIndex: 1
  })

  const map = new MapWrap(container, zoom, coords, baseLayer);
  
}

window.addEventListener('load', initialize);
