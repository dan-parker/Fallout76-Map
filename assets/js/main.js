var ol_pa = L.layerGroup();
var ol_vault = L.layerGroup();
var ol_loc = L.layerGroup();
var ol_train = L.layerGroup();
var ol_pwr = L.layerGroup();
var ol_bob = L.layerGroup();
var ol_mag = L.layerGroup();

// the tile layer containing the image generated with `gdal2tiles --leaflet -p raster -w none <img> tiles`
var baselayer = L.tileLayer('./assets/tiles/{z}/{x}/{y}.png', {
  noWrap: true
});

// create the map
var map = L.map('mapid', {
  layers: [baselayer, ol_pa, ol_vault, ol_loc,ol_train,ol_pwr,ol_bob,ol_mag],
  fullscreenControl: true,
  fullscreenControlOptions: {
    position: 'topleft'
  }
});



var img = [
  3189,  // original width of image
  3040   // original height of image
]

// assign map and image dimensions
var rc = new L.RasterCoords(map, img)
// set max zoom Level (might be `x` if gdal2tiles was called with `-z 0-x` option)
//map.setMaxZoom(rc.zoomLevel())
map.setMaxZoom(5)
// all coordinates need to be unprojected using the `unproject` method
// set the view in the lower right edge of the image
//map.setView(rc.unproject([img[0], img[1]]), 2)
map.setView(rc.unproject([805,975]),3)


//Let's set our icon types, single place to swap them...
var mark_po = 'tshirt'; //Power Armor
var mark_va = 'cog';		//Vault
var mark_wr = 'wrench';		//Workbench
var mark_lo = 'building';	//Location
var mark_tr = 'train';		//Train Station
var mark_fc = 'bolt';		//Fusion Core
var mark_bh = 'user-circle';	//Bobblehead
var mark_ma = 'book-open';	//Magazine

    L.marker(rc.unproject([931,1914]), {icon: L.AwesomeMarkers.icon({icon: mark_po, prefix: 'fa', markerColor: 'purple', iconColor: 'blue', extraClasses: 'fa-2x'}) }).bindTooltip("Power Armor").addTo(ol_pa);
    L.marker(rc.unproject([1632,1799]), {icon: L.AwesomeMarkers.icon({icon: mark_po, prefix: 'fa', markerColor: 'purple', iconColor: 'blue', extraClasses: 'fa-2x'}) }).bindTooltip("Power Armor").addTo(ol_pa);
    L.marker(rc.unproject([673,414]), {icon: L.AwesomeMarkers.icon({icon: mark_po, prefix: 'fa', markerColor: 'purple', iconColor: 'blue', extraClasses: 'fa-2x'}) }).bindTooltip("Power Armor").addTo(ol_pa);


    L.marker(rc.unproject([805,985]), {icon: L.AwesomeMarkers.icon({icon: mark_va, prefix: 'fa', markerColor: 'purple', iconColor: 'yellow', extraClasses: 'fa-2x'}) }).bindTooltip("Vault 76").addTo(ol_vault);


    L.marker(rc.unproject([1140,975]), {icon: L.AwesomeMarkers.icon({icon: mark_wr, prefix: 'fa', markerColor: 'purple', iconColor: 'green', extraClasses: 'fa-2x'}) }).bindTooltip("Gorge Junkyard").addTo(map);
    L.marker(rc.unproject([892,1968]), {icon: L.AwesomeMarkers.icon({icon: mark_wr, prefix: 'fa', markerColor: 'purple', iconColor: 'green', extraClasses: 'fa-2x'}) }).bindTooltip("Wade Airport").addTo(map);


    L.marker(rc.unproject([821,1272]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: 'brown', extraClasses: 'fa-2x'}) }).bindTooltip("Flatwoods Lookout").addTo(ol_loc);
    L.marker(rc.unproject([1150,2078]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: 'brown', extraClasses: 'fa-2x'}) }).bindTooltip("Torrance House").addTo(ol_loc);
    L.marker(rc.unproject([1321,1598]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: 'brown', extraClasses: 'fa-2x'}) }).bindTooltip("Tygart Water Treatment").addTo(ol_loc);
    L.marker(rc.unproject([1299,1644]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: 'brown', extraClasses: 'fa-2x'}) }).bindTooltip("Poseidon Power Substation PX-02").addTo(ol_loc);
    L.marker(rc.unproject([1256,1750]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: 'brown', extraClasses: 'fa-2x'}) }).bindTooltip("Summersville").addTo(ol_loc);
    L.marker(rc.unproject([1060,1239]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: 'brown', extraClasses: 'fa-2x'}) }).bindTooltip("Slocum Joe").addTo(ol_loc);
    L.marker(rc.unproject([778,1045]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: 'brown', extraClasses: 'fa-2x'}) }).bindTooltip("Moonshiner's Shack").addTo(ol_loc);
    L.marker(rc.unproject([713,1368]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: 'brown', extraClasses: 'fa-2x'}) }).bindTooltip("Relay Tower EM-B1-27").addTo(ol_loc);
    L.marker(rc.unproject([795,1500]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: 'brown', extraClasses: 'fa-2x'}) }).bindTooltip("Flatwood").addTo(ol_loc);
    L.marker(rc.unproject([699,1505]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: 'brown', extraClasses: 'fa-2x'}) }).bindTooltip("Vault-Tec Agricultural Research Center").addTo(ol_loc);
    L.marker(rc.unproject([977,2044]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: 'brown', extraClasses: 'fa-2x'}) }).bindTooltip("Summersville Dam").addTo(ol_loc);
    L.marker(rc.unproject([1506,1991]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: 'brown', extraClasses: 'fa-2x'}) }).bindTooltip("The Whitespring Golf Club").addTo(ol_loc);
    L.marker(rc.unproject([1633,1793]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: 'brown', extraClasses: 'fa-2x'}) }).bindTooltip("New Appalachian Central Trainyard").addTo(ol_loc);
    L.marker(rc.unproject([1702,1691]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: 'brown', extraClasses: 'fa-2x'}) }).bindTooltip("98 NAR Regional").addTo(ol_loc);
    L.marker(rc.unproject([1163,1993]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: 'brown', extraClasses: 'fa-2x'}) }).bindTooltip("Sugarmaple").addTo(ol_loc);
    L.marker(rc.unproject([1187,1960]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: 'brown', extraClasses: 'fa-2x'}) }).bindTooltip("Overlook Cabin").addTo(ol_loc);
    L.marker(rc.unproject([1013,1110]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: 'brown', extraClasses: 'fa-2x'}) }).bindTooltip("Landview Lighthouse").addTo(ol_loc);
    L.marker(rc.unproject([655,392]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: 'brown', extraClasses: 'fa-2x'}) }).bindTooltip("Aaronholdt Homestead").addTo(ol_loc);
    L.marker(rc.unproject([1035,2142]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: 'brown', extraClasses: 'fa-2x'}) }).bindTooltip("Riverside Manor").addTo(ol_loc);
    L.marker(rc.unproject([1406,1403]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: 'brown', extraClasses: 'fa-2x'}) }).bindTooltip("Horizon's Rest").addTo(ol_loc);


    L.marker(rc.unproject([1108,1545]), {icon: L.AwesomeMarkers.icon({icon: mark_tr, prefix: 'fa', markerColor: 'purple', iconColor: 'grey', extraClasses: 'fa-2x'}) }).bindTooltip("Sutton Station").addTo(ol_loc);


    L.marker(rc.unproject([948,2032]), {icon: L.AwesomeMarkers.icon({icon: mark_fc, prefix: 'fa', markerColor: 'purple', iconColor: 'red', extraClasses: 'fa-2x'}) }).bindTooltip("Fusion Core").addTo(ol_pwr);


    L.marker(rc.unproject([1442,1418]), {icon: L.AwesomeMarkers.icon({icon: mark_bh, prefix: 'fa', markerColor: 'purple', iconColor: 'green', extraClasses: 'fa-2x'}) }).bindTooltip("Bobblehead").addTo(ol_bob);



//Let's do our layer filters
var baseMaps = {
	"Base": baselayer
};
var overlays = {
	"Power Armor": ol_pa,
	"Vault": ol_vault,
	"Location": ol_loc,
	"Train Station": ol_train,
	"Fusion Core": ol_pwr,
	"Bobblehead": ol_bob,
	"Magazine": ol_mag,
};

L.control.layers(null, overlays).addTo(map);




// set markers on click events in the map
map.on('click', function (event) {
  // any position in leaflet needs to be projected to obtain the image coordinates
  var coords = rc.project(event.latlng)
  var marker = L.marker(rc.unproject(coords))
    .addTo(map)
  marker.bindPopup('[' + Math.floor(coords.x) + ',' + Math.floor(coords.y) + ']')
    .openPopup()
})