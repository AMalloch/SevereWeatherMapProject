// const makeRequest = function(url, url2, url3, callback){
//   const request = new XMLHttpRequest();
//
//   request.open("GET", url);
//
//   request.open("GET", url2);
//
//   request.open("GET", url3);
//
//   request.addEventListener("load", callback);
//
//   request.send();
// };
//
// const requestComplete = function(){
//   if(this.status !== 200) return;
//   const jsonString = this.responseText;
//   const mapInfo = JSON.parse(jsonString);
// }
//
// const url = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.2/leaflet.js";
// const url2 = "https://cdn.aerisjs.com/aeris.js"
// const url3 = "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js"
// makeRequest(url, url2, url3, requestComplete);

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

  const adminButton = document.getElementById('display-admin-button');
  adminButton.addEventListener('click', map.displayAdmin.bind(map));

  const lightningButton = document.getElementById('display-lightning-button');
  lightningButton.addEventListener('click', map.displayLightningStrikes.bind(map));

  const stormCellButton = document.getElementById('display-stormCell-button');
  stormCellButton.addEventListener('click', map.displayStormCells.bind(map));

  const lightningDensityButton = document.getElementById('display-lightningDensity-button');
  lightningDensityButton.addEventListener('click', map.displayLightningDensity.bind(map));

}

window.addEventListener('load', initialize);
