const initialize = function(){

  aeris.config.set({
    apiId: config.ID,
    apiSecret: config.SECRET
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

// // mymodule.js
// module.exports = {
//    hello: function() {
//       return "Hello";
//    }
// }
// // server.js
// const myModule = require('./mymodule');
// let val = myModule.hello(); // val is "Hello"
