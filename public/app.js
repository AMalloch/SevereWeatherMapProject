const makeRequest = function(url, callback){
  const request = new XMLHttpRequest();

  request.open("GET", url);

  request.addEventListener("load", callback);

  request.send();
};

const requestComplete = function(){
  if(this.status !== 200) return;
  const jsonString = this.responseText;
  const dataInfo = JSON.parse(jsonString);
  const stormCellInfo = dataInfo.response
  populateSelect(stormCellInfo);
}

const populateStormList = function(stormCellInfo){
  const select = document.getElementById("storm-list")
  for (let storm of stormCellInfo.responce){
    const li = document.createElement("li");
    li.innerText = storm.traits;
    select.appendChild(li);
  };
};

const populateSelect = function(stormCellInfo){
  const select = document.getElementById("storm-list");
    debugger;
  stormCellInfo.forEach(function(storm, index){
    const option = document.createElement("option");
    option.innerText = storm.place.name;
    option.value = index;
    select.appendChild(option);
  });
};

const initialize = function(){

  const url = "https://api.aerisapi.com/stormcells/closest?p=55403&limit=5&radius=50mi&client_id="+config.ID+"&client_secret="+config.SECRET;
  makeRequest(url, requestComplete);

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

  const tropicalStormsButton = document.getElementById('display-tropicalStorms-button');
  tropicalStormsButton.addEventListener('click', map.displayTropicalStorms.bind(map));

  // const removeButton = document.getElementById('remove-button');
  // removeButton.addEventListener('click', map.remove.bind(map));

}

window.addEventListener('load', initialize);
