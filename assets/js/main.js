var ol_pa = L.layerGroup();
var ol_vault = L.layerGroup();
var ol_loc = L.layerGroup();
var ol_train = L.layerGroup();
var ol_pwr = L.layerGroup();
var ol_bob = L.layerGroup();
var ol_mag = L.layerGroup();
var ol_map = L.layerGroup();
var ol_tape = L.layerGroup();
var ol_rep = L.layerGroup();
var ol_wb = L.layerGroup();

// the tile layer containing the image generated with `gdal2tiles --leaflet -p raster -w none <img> tiles`
var baselayer = L.tileLayer('./assets/tiles/{z}/{x}/{y}.png', {
  noWrap: true, 
  attribution: 'Map data &copy; Bethesda Softworks LLC, a ZeniMax Media company. Trademarks belong to their respective owners. All Rights Reserved.'
});

// create the map
var map = L.map('mapid', {
  layers: [baselayer, ol_pa, ol_vault, ol_loc,ol_train,ol_pwr,ol_bob,ol_mag,ol_map,ol_tape,ol_rep,ol_wb],
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
var mark_po = 'tshirt'; 	//Power Armor
var mark_va = 'cog';		//Vault
var mark_wr = 'wrench';		//Workbench
var mark_lo = 'building';	//Location
var mark_tr = 'train';		//Train Station
var mark_fc = 'bolt';		//Fusion Core
var mark_bh = 'user-circle';	//Bobblehead
var mark_ma = 'book-open';	//Magazine
var mark_tm = 'map';		//Treasure Map
var mark_tp = 'tape';		//Holo tape
var mark_rp = 'receipt';	//Receipt

//Let's set our icon colors, single place to swap them...
var color_po = 'steelblue'; 	//Power Armor
var color_va = 'yellow';	//Vault
var color_wr = 'green';		//Workbench
var color_lo = '#8D6645';	//Location
var color_tr = 'grey';		//Train Station
var color_fc = 'red';		//Fusion Core
var color_bh = 'LightBlue';	//Bobblehead
var color_ma = 'LightBlue';	//Magazine
var color_tm = 'orange';	//Treasure Map
var color_tp = 'purple';	//Holo tape
var color_rp = 'white';		//Receipt



    L.marker(rc.unproject([931,1914]), {icon: L.AwesomeMarkers.icon({icon: mark_po, prefix: 'fa', markerColor: 'purple', iconColor: color_po, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([1632,1799]), {icon: L.AwesomeMarkers.icon({icon: mark_po, prefix: 'fa', markerColor: 'purple', iconColor: color_po, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([673,414]), {icon: L.AwesomeMarkers.icon({icon: mark_po, prefix: 'fa', markerColor: 'purple', iconColor: color_po, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([918,118]), {icon: L.AwesomeMarkers.icon({icon: mark_po, prefix: 'fa', markerColor: 'purple', iconColor: color_po, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([358,296]), {icon: L.AwesomeMarkers.icon({icon: mark_po, prefix: 'fa', markerColor: 'purple', iconColor: color_po, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([391,2001]), {icon: L.AwesomeMarkers.icon({icon: mark_po, prefix: 'fa', markerColor: 'purple', iconColor: color_po, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([304,1133]), {icon: L.AwesomeMarkers.icon({icon: mark_po, prefix: 'fa', markerColor: 'purple', iconColor: color_po, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([469,853]), {icon: L.AwesomeMarkers.icon({icon: mark_po, prefix: 'fa', markerColor: 'purple', iconColor: color_po, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([1154,945]), {icon: L.AwesomeMarkers.icon({icon: mark_po, prefix: 'fa', markerColor: 'purple', iconColor: color_po, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([1403,1069]), {icon: L.AwesomeMarkers.icon({icon: mark_po, prefix: 'fa', markerColor: 'purple', iconColor: color_po, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([1600,793]), {icon: L.AwesomeMarkers.icon({icon: mark_po, prefix: 'fa', markerColor: 'purple', iconColor: color_po, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([1267,1283]), {icon: L.AwesomeMarkers.icon({icon: mark_po, prefix: 'fa', markerColor: 'purple', iconColor: color_po, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([442,1659]), {icon: L.AwesomeMarkers.icon({icon: mark_po, prefix: 'fa', markerColor: 'purple', iconColor: color_po, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([550,1956]), {icon: L.AwesomeMarkers.icon({icon: mark_po, prefix: 'fa', markerColor: 'purple', iconColor: color_po, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([326,1920]), {icon: L.AwesomeMarkers.icon({icon: mark_po, prefix: 'fa', markerColor: 'purple', iconColor: color_po, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([722,1651]), {icon: L.AwesomeMarkers.icon({icon: mark_po, prefix: 'fa', markerColor: 'purple', iconColor: color_po, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([873,1958]), {icon: L.AwesomeMarkers.icon({icon: mark_po, prefix: 'fa', markerColor: 'purple', iconColor: color_po, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([780,1974]), {icon: L.AwesomeMarkers.icon({icon: mark_po, prefix: 'fa', markerColor: 'purple', iconColor: color_po, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([1326,724]), {icon: L.AwesomeMarkers.icon({icon: mark_po, prefix: 'fa', markerColor: 'purple', iconColor: color_po, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([1377,448]), {icon: L.AwesomeMarkers.icon({icon: mark_po, prefix: 'fa', markerColor: 'purple', iconColor: color_po, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([1565,328]), {icon: L.AwesomeMarkers.icon({icon: mark_po, prefix: 'fa', markerColor: 'purple', iconColor: color_po, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([1758,228]), {icon: L.AwesomeMarkers.icon({icon: mark_po, prefix: 'fa', markerColor: 'purple', iconColor: color_po, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);




    L.marker(rc.unproject([805,985]), {icon: L.AwesomeMarkers.icon({icon: mark_va, prefix: 'fa', markerColor: 'purple', iconColor: color_va, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Vault 76</b>").addTo(ol_vault);


    L.marker(rc.unproject([1140,975]), {icon: L.AwesomeMarkers.icon({icon: mark_wr, prefix: 'fa', markerColor: 'purple', iconColor: color_wr, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Gorge Junkyard</b>").addTo(ol_wb);
    L.marker(rc.unproject([892,1968]), {icon: L.AwesomeMarkers.icon({icon: mark_wr, prefix: 'fa', markerColor: 'purple', iconColor: color_wr, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Wade Airport</b>").addTo(ol_wb);
    L.marker(rc.unproject([433,646]), {icon: L.AwesomeMarkers.icon({icon: mark_wr, prefix: 'fa', markerColor: 'purple', iconColor: color_wr, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Tyler County Dirt Track</b>").addTo(ol_wb);
    L.marker(rc.unproject([1046,356]), {icon: L.AwesomeMarkers.icon({icon: mark_wr, prefix: 'fa', markerColor: 'purple', iconColor: color_wr, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Hemlock Holes</b>").addTo(ol_wb);
    L.marker(rc.unproject([1661,712]), {icon: L.AwesomeMarkers.icon({icon: mark_wr, prefix: 'fa', markerColor: 'purple', iconColor: color_wr, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Grafton Steel Yard</b>").addTo(ol_wb);
    L.marker(rc.unproject([617,1442]), {icon: L.AwesomeMarkers.icon({icon: mark_wr, prefix: 'fa', markerColor: 'purple', iconColor: color_wr, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Sunshine Meadows Industrial Farm</b>").addTo(ol_wb);
    L.marker(rc.unproject([377,1699]), {icon: L.AwesomeMarkers.icon({icon: mark_wr, prefix: 'fa', markerColor: 'purple', iconColor: color_wr, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Billings Homestead</b>").addTo(ol_wb);
    L.marker(rc.unproject([577,1931]), {icon: L.AwesomeMarkers.icon({icon: mark_wr, prefix: 'fa', markerColor: 'purple', iconColor: color_wr, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Poseidon Energy Plant WV-06</b>").addTo(ol_wb);
    L.marker(rc.unproject([1108,1807]), {icon: L.AwesomeMarkers.icon({icon: mark_wr, prefix: 'fa', markerColor: 'purple', iconColor: color_wr, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Lakeside Cabins</b>").addTo(ol_wb);
    L.marker(rc.unproject([638,2063]), {icon: L.AwesomeMarkers.icon({icon: mark_wr, prefix: 'fa', markerColor: 'purple', iconColor: color_wr, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Charleston Landfill</b>").addTo(ol_wb);
    L.marker(rc.unproject([592,2344]), {icon: L.AwesomeMarkers.icon({icon: mark_wr, prefix: 'fa', markerColor: 'purple', iconColor: color_wr, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Mount Blair</b>").addTo(ol_wb);
    L.marker(rc.unproject([2494,556]), {icon: L.AwesomeMarkers.icon({icon: mark_wr, prefix: 'fa', markerColor: 'purple', iconColor: color_wr, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Red Rocket Mega Stop</b>").addTo(ol_wb);
    L.marker(rc.unproject([1828,1143]), {icon: L.AwesomeMarkers.icon({icon: mark_wr, prefix: 'fa', markerColor: 'purple', iconColor: color_wr, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Monongah Power Plant</b>").addTo(ol_wb);
    L.marker(rc.unproject([1805,2380]), {icon: L.AwesomeMarkers.icon({icon: mark_wr, prefix: 'fa', markerColor: 'purple', iconColor: color_wr, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Spruce Knob</b>").addTo(ol_wb);
    L.marker(rc.unproject([1523,2731]), {icon: L.AwesomeMarkers.icon({icon: mark_wr, prefix: 'fa', markerColor: 'purple', iconColor: color_wr, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Federal Disposal Field HZ-21</b>").addTo(ol_wb);
    L.marker(rc.unproject([2892,925]), {icon: L.AwesomeMarkers.icon({icon: mark_wr, prefix: 'fa', markerColor: 'purple', iconColor: color_wr, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Thunder Mountain Power Plant</b>").addTo(ol_wb);
    L.marker(rc.unproject([2424,1415]), {icon: L.AwesomeMarkers.icon({icon: mark_wr, prefix: 'fa', markerColor: 'purple', iconColor: color_wr, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Berkeley Springs</b>").addTo(ol_wb);


    L.marker(rc.unproject([821,1272]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Flatwoods Lookout</b>").addTo(ol_loc);
    L.marker(rc.unproject([1150,2078]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Torrance House</b>").addTo(ol_loc);
    L.marker(rc.unproject([1321,1598]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Tygart Water Treatment</b>").addTo(ol_loc);
    L.marker(rc.unproject([1299,1644]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Poseidon Power Substation PX-02</b>").addTo(ol_loc);
    L.marker(rc.unproject([1256,1750]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Summersville</b>").addTo(ol_loc);
    L.marker(rc.unproject([1060,1239]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Slocum Joe</b>").addTo(ol_loc);
    L.marker(rc.unproject([778,1045]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Moonshiner's Shack</b>").addTo(ol_loc);
    L.marker(rc.unproject([713,1368]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Relay Tower EM-B1-27</b>").addTo(ol_loc);
    L.marker(rc.unproject([795,1500]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Flatwood</b>").addTo(ol_loc);
    L.marker(rc.unproject([699,1505]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Vault-Tec Agricultural Research Center</b>").addTo(ol_loc);
    L.marker(rc.unproject([977,2044]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Summersville Dam</b>").addTo(ol_loc);
    L.marker(rc.unproject([1506,1991]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>The Whitespring Golf Club</b>").addTo(ol_loc);
    L.marker(rc.unproject([1633,1793]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>New Appalachian Central Trainyard</b>").addTo(ol_loc);
    L.marker(rc.unproject([1702,1691]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>98 NAR Regional</b>").addTo(ol_loc);
    L.marker(rc.unproject([1163,1993]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Sugarmaple</b>").addTo(ol_loc);
    L.marker(rc.unproject([1187,1960]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Overlook Cabin</b>").addTo(ol_loc);
    L.marker(rc.unproject([1013,1110]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Landview Lighthouse</b>").addTo(ol_loc);
    L.marker(rc.unproject([655,392]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Aaronholdt Homestead</b>").addTo(ol_loc);
    L.marker(rc.unproject([1035,2142]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Riverside Manor</b>").addTo(ol_loc);
    L.marker(rc.unproject([1406,1403]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Horizon's Rest</b>").addTo(ol_loc);
    L.marker(rc.unproject([925,118]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>The Crosshair</b>").addTo(ol_loc);
    L.marker(rc.unproject([964,1315]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Overseer's Camp</b>").addTo(ol_loc);
    L.marker(rc.unproject([1121,1462]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Sutton</b>").addTo(ol_loc);
    L.marker(rc.unproject([502,468]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Darling Sister's Lab</b>").addTo(ol_loc);
    L.marker(rc.unproject([517,649]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Tyler County Fairgrounds</b>").addTo(ol_loc);
    L.marker(rc.unproject([1268,1258]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Arktos Pharma</b>").addTo(ol_loc);
    L.marker(rc.unproject([1244,1501]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>East Kanawha Lookout</b>").addTo(ol_loc);
    L.marker(rc.unproject([1233,1430]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Helvetia</b>").addTo(ol_loc);
    L.marker(rc.unproject([870,1226]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Wixon Homestead</b>").addTo(ol_loc);
    L.marker(rc.unproject([812,1165]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Gilman Lumber Mill</b>").addTo(ol_loc);
    L.marker(rc.unproject([910,1044]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Isolated Cabin</b>").addTo(ol_loc);
    L.marker(rc.unproject([942,927]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>North Kanawha Lookout</b>").addTo(ol_loc);
    L.marker(rc.unproject([1418,1316]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Greg's Mine Supply</b>").addTo(ol_loc);
    L.marker(rc.unproject([354,278]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>WV Lumber Co.</b>").addTo(ol_loc);
    L.marker(rc.unproject([335,1972]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Kanawha Nuka Cola Plant</b>").addTo(ol_loc);
    L.marker(rc.unproject([1299,238]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Wavy Willard's Water Park</b>").addTo(ol_loc);
    L.marker(rc.unproject([2153,2526]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Monorail Elevator</b>").addTo(ol_loc);
    L.marker(rc.unproject([807,2122]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Charleston Fire Department</b>").addTo(ol_loc);
    L.marker(rc.unproject([787,1970]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Hornwright Industrial Headquarters</b>").addTo(ol_loc);
    L.marker(rc.unproject([805,1977]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Charleston Herald</b>").addTo(ol_loc);
    L.marker(rc.unproject([781,2178]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Hornwright Air Purifier Site #01</b>").addTo(ol_loc);
    L.marker(rc.unproject([975,2208]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Widow's Perch</b>").addTo(ol_loc);
    L.marker(rc.unproject([1110,2429]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Lewisburg</b>").addTo(ol_loc);
    L.marker(rc.unproject([1049,2352]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Hornwright Air Purifier Site #02</b>").addTo(ol_loc);
    L.marker(rc.unproject([1162,2355]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Pleasant Hills Cemetery</b>").addTo(ol_loc);
    L.marker(rc.unproject([1129,1179]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Gauley Mine</b>").addTo(ol_loc);
    L.marker(rc.unproject([2260,2561]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Fort Defiance</b>").addTo(ol_loc);
    L.marker(rc.unproject([2378,2520]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Appalachian Antiques</b>").addTo(ol_loc);
    L.marker(rc.unproject([447,868]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Black Mountain Ordnance Works</b>").addTo(ol_loc);
    L.marker(rc.unproject([349,1160]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Point Pleasant</b>").addTo(ol_loc);
    L.marker(rc.unproject([1395,1071]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Mama Dolce's Food Processing</b>").addTo(ol_loc);
    L.marker(rc.unproject([1583,815]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Grafton Dam</b>").addTo(ol_loc);
    L.marker(rc.unproject([430,1657]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Silva Homestead</b>").addTo(ol_loc);
    L.marker(rc.unproject([310,1919]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Lewis & Sons Farming Supply</b>").addTo(ol_loc);
    L.marker(rc.unproject([1311,722]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Eastern Regional Penitentiary</b>").addTo(ol_loc);
    L.marker(rc.unproject([1364,447]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Clarksburg</b>").addTo(ol_loc);
    L.marker(rc.unproject([1579,331]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Black Bear Lodge</b>").addTo(ol_loc);
    L.marker(rc.unproject([1752,222]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: color_lo, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Crashed Space Station</b>").addTo(ol_loc);



    L.marker(rc.unproject([1108,1545]), {icon: L.AwesomeMarkers.icon({icon: mark_tr, prefix: 'fa', markerColor: 'purple', iconColor: color_tr, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Sutton Station</b>").addTo(ol_loc);
    L.marker(rc.unproject([1096,2469]), {icon: L.AwesomeMarkers.icon({icon: mark_tr, prefix: 'fa', markerColor: 'purple', iconColor: color_tr, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Lewisburg Station</b>").addTo(ol_loc);

    L.marker(rc.unproject([948,2032]), {icon: L.AwesomeMarkers.icon({icon: mark_fc, prefix: 'fa', markerColor: 'purple', iconColor: color_fc, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Fusion Core</b>").addTo(ol_pwr);
    L.marker(rc.unproject([1245,1272]), {icon: L.AwesomeMarkers.icon({icon: mark_fc, prefix: 'fa', markerColor: 'purple', iconColor: color_fc, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Fusion Core</b>").addTo(ol_pwr);
    L.marker(rc.unproject([377,284]), {icon: L.AwesomeMarkers.icon({icon: mark_fc, prefix: 'fa', markerColor: 'purple', iconColor: color_fc, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Fusion Core</b>").addTo(ol_pwr);
    L.marker(rc.unproject([368,1983]), {icon: L.AwesomeMarkers.icon({icon: mark_fc, prefix: 'fa', markerColor: 'purple', iconColor: color_fc, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Fusion Core</b>").addTo(ol_pwr);
    L.marker(rc.unproject([1244,251]), {icon: L.AwesomeMarkers.icon({icon: mark_fc, prefix: 'fa', markerColor: 'purple', iconColor: color_fc, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Fusion Core</b>").addTo(ol_pwr);
    L.marker(rc.unproject([2137,2522]), {icon: L.AwesomeMarkers.icon({icon: mark_fc, prefix: 'fa', markerColor: 'purple', iconColor: color_fc, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Fusion Core</b>").addTo(ol_pwr);

    L.marker(rc.unproject([1442,1418]), {icon: L.AwesomeMarkers.icon({icon: mark_bh, prefix: 'fa', markerColor: 'purple', iconColor: color_bh, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Bobblehead:</b> Small Guns").addTo(ol_bob);
    L.marker(rc.unproject([1434,1308]), {icon: L.AwesomeMarkers.icon({icon: mark_bh, prefix: 'fa', markerColor: 'purple', iconColor: color_bh, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Bobblehead:</b> Big Guns").addTo(ol_bob);
    L.marker(rc.unproject([1268,251]), {icon: L.AwesomeMarkers.icon({icon: mark_bh, prefix: 'fa', markerColor: 'purple', iconColor: color_bh, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Bobblehead:</b> Energy Weapons<br><b>Bobblehead:</b> Melee").addTo(ol_bob);
    L.marker(rc.unproject([719,1471]), {icon: L.AwesomeMarkers.icon({icon: mark_bh, prefix: 'fa', markerColor: 'purple', iconColor: color_bh, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Bobblehead:</b> Intelligence<br><b>Bobblehead:</b> Repair<br><b>Bobblehead:</b> Science").addTo(ol_bob);
    L.marker(rc.unproject([552,1930]), {icon: L.AwesomeMarkers.icon({icon: mark_bh, prefix: 'fa', markerColor: 'purple', iconColor: color_bh, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Bobblehead:</b> Leader").addTo(ol_bob);
    L.marker(rc.unproject([496,634]), {icon: L.AwesomeMarkers.icon({icon: mark_bh, prefix: 'fa', markerColor: 'purple', iconColor: color_bh, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Bobblehead:</b> Agility").addTo(ol_bob);
    L.marker(rc.unproject([496,634]), {icon: L.AwesomeMarkers.icon({icon: mark_bh, prefix: 'fa', markerColor: 'purple', iconColor: color_bh, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Bobblehead:</b> Agility").addTo(ol_bob);
    L.marker(rc.unproject([778,1961]), {icon: L.AwesomeMarkers.icon({icon: mark_bh, prefix: 'fa', markerColor: 'purple', iconColor: color_bh, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Bobblehead:</b> Big Guns").addTo(ol_bob);
    L.marker(rc.unproject([1012,1085]), {icon: L.AwesomeMarkers.icon({icon: mark_bh, prefix: 'fa', markerColor: 'purple', iconColor: color_bh, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Bobblehead:</b>").addTo(ol_bob);
    L.marker(rc.unproject([1022,1105]), {icon: L.AwesomeMarkers.icon({icon: mark_bh, prefix: 'fa', markerColor: 'purple', iconColor: color_bh, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Bobblehead:</b>").addTo(ol_bob);

    L.marker(rc.unproject([2391,2522]), {icon: L.AwesomeMarkers.icon({icon: mark_ma, prefix: 'fa', markerColor: 'purple', iconColor: color_ma, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Magazine:</b> ").addTo(ol_bob);


    L.marker(rc.unproject([302,1163]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: color_tm, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Treasure Map:</b> Forest (Map 1)").addTo(ol_map);
    L.marker(rc.unproject([611,2090]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: color_tm, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Treasure Map:</b> Forest (Map 3)").addTo(ol_map);
    L.marker(rc.unproject([1015,1187]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: color_tm, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Treasure Map:</b> Forest (Map 5)").addTo(ol_map);
    L.marker(rc.unproject([968,2218]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: color_tm, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Treasure Map:</b> Forest (Map 2)").addTo(ol_map);
    L.marker(rc.unproject([1245,1109]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: color_tm, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Treasure Map:</b> Forest (Map 8)").addTo(ol_map);
    L.marker(rc.unproject([1236,1795]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: color_tm, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Treasure Map:</b> Forest (Map 9)").addTo(ol_map);
    L.marker(rc.unproject([1382,1336]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: color_tm, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Treasure Map:</b> Forest (Map 10)").addTo(ol_map);
    L.marker(rc.unproject([667,2649]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: color_tm, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Treasure Map:</b> Ash Heap (Map 1)").addTo(ol_map);
    L.marker(rc.unproject([850,2199]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: color_tm, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Treasure Map:</b> Ash Heap (Map 2)").addTo(ol_map);
    L.marker(rc.unproject([1010,556]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: color_tm, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Treasure Map:</b> Toxic Valley (Map 1)").addTo(ol_map);
    L.marker(rc.unproject([1326,468]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: color_tm, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Treasure Map:</b> Toxic Valley (Map 2)").addTo(ol_map);
    L.marker(rc.unproject([1586,663]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: color_tm, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Treasure Map:</b> Toxic Valley (Map 3)").addTo(ol_map);
    L.marker(rc.unproject([1719,276]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: color_tm, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Treasure Map:</b> Toxic Valley (Map 4)").addTo(ol_map);
    L.marker(rc.unproject([1466,2270]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: color_tm, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Treasure Map:</b> Savage Divide (Map 1)").addTo(ol_map);
    L.marker(rc.unproject([1642,1759]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: color_tm, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Treasure Map:</b> Savage Divide (Map 2)").addTo(ol_map);
    L.marker(rc.unproject([1767,1427]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: color_tm, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Treasure Map:</b> Savage Divide (Map 3)").addTo(ol_map);
    L.marker(rc.unproject([1796,1945]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: color_tm, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Treasure Map:</b> Savage Divide (Map 5)").addTo(ol_map);
    L.marker(rc.unproject([1929,418]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: color_tm, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Treasure Map:</b> Savage Divide (Map 6)").addTo(ol_map);
    L.marker(rc.unproject([1978,2535]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: color_tm, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Treasure Map:</b> Savage Divide (Map 7)").addTo(ol_map);
    L.marker(rc.unproject([1976,1427]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: color_tm, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Treasure Map:</b> Savage Divide (Map 8)").addTo(ol_map);


    L.marker(rc.unproject([1604,817]), {icon: L.AwesomeMarkers.icon({icon: mark_tp, prefix: 'fa', markerColor: 'purple', iconColor: color_tp, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Holotape Game:</b> Grognak & The Ruby Ruins").addTo(ol_tape);
    L.marker(rc.unproject([815,950]), {icon: L.AwesomeMarkers.icon({icon: mark_tp, prefix: 'fa', markerColor: 'purple', iconColor: color_tp, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Holotape Game:</b> Nuka Tapper<br><b>Overseer's Log:</b> Vault 76").addTo(ol_tape);
    L.marker(rc.unproject([973,1308]), {icon: L.AwesomeMarkers.icon({icon: mark_tp, prefix: 'fa', markerColor: 'purple', iconColor: color_tp, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Overseer's Log:</b> C.A.M.P.").addTo(ol_tape);
    L.marker(rc.unproject([786,1466]), {icon: L.AwesomeMarkers.icon({icon: mark_tp, prefix: 'fa', markerColor: 'purple', iconColor: color_tp, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Overseer's Log:</b> Flatwoods").addTo(ol_tape);
    L.marker(rc.unproject([797,2112]), {icon: L.AwesomeMarkers.icon({icon: mark_tp, prefix: 'fa', markerColor: 'purple', iconColor: color_tp, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Overseer's Log:</b> Firehouse").addTo(ol_tape);
    L.marker(rc.unproject([699,1477]), {icon: L.AwesomeMarkers.icon({icon: mark_tp, prefix: 'fa', markerColor: 'purple', iconColor: color_tp, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Overseer's Journal:</b> Entry 1").addTo(ol_tape);
    L.marker(rc.unproject([1131,1460]), {icon: L.AwesomeMarkers.icon({icon: mark_tp, prefix: 'fa', markerColor: 'purple', iconColor: color_tp, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Overseer's Journal:</b> Entry 2").addTo(ol_tape);
    L.marker(rc.unproject([1283,1272]), {icon: L.AwesomeMarkers.icon({icon: mark_tp, prefix: 'fa', markerColor: 'purple', iconColor: color_tp, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Test Log:</b> 9-23-77-A10<br><b>Test Log:</b> 3-12-78-A14").addTo(ol_tape);

    L.marker(rc.unproject([778,1498]), {icon: L.AwesomeMarkers.icon({icon: mark_rp, prefix: 'fa', markerColor: 'purple', iconColor: color_rp, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Recipe:</b> Delbert's Sunshine Oil").addTo(ol_rep);
    L.marker(rc.unproject([514,448]), {icon: L.AwesomeMarkers.icon({icon: mark_rp, prefix: 'fa', markerColor: 'purple', iconColor: color_rp, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Recipe:</b> Delbert's Corn Pone").addTo(ol_rep);
    L.marker(rc.unproject([476,628]), {icon: L.AwesomeMarkers.icon({icon: mark_rp, prefix: 'fa', markerColor: 'purple', iconColor: color_rp, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Recipe:</b> Swamp Tofu Soup").addTo(ol_rep);
    L.marker(rc.unproject([1425,1421]), {icon: L.AwesomeMarkers.icon({icon: mark_rp, prefix: 'fa', markerColor: 'purple', iconColor: color_rp, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Recipe:</b> Silt Bean Puree").addTo(ol_rep);
    L.marker(rc.unproject([1263,1272]), {icon: L.AwesomeMarkers.icon({icon: mark_rp, prefix: 'fa', markerColor: 'purple', iconColor: color_rp, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Plan:</b> Tinker's Workbench<br><b>Recipe:</b> Glowing Fungus Puree").addTo(ol_rep);
    L.marker(rc.unproject([776,1966]), {icon: L.AwesomeMarkers.icon({icon: mark_rp, prefix: 'fa', markerColor: 'purple', iconColor: color_rp, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Recipe:</b> Yao Guai Roast").addTo(ol_rep);
    L.marker(rc.unproject([836,2054]), {icon: L.AwesomeMarkers.icon({icon: mark_rp, prefix: 'fa', markerColor: 'purple', iconColor: color_rp, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Recipe:</b> Bloatfly Loaf").addTo(ol_rep);
    L.marker(rc.unproject([779,2195]), {icon: L.AwesomeMarkers.icon({icon: mark_rp, prefix: 'fa', markerColor: 'purple', iconColor: color_rp, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Recipe:</b> Steeped Ash Rose Tea").addTo(ol_rep);


//Let's do our layer filters
var baseMaps = {
	"Base": baselayer
};
var overlays = {
	"Bobblehead": ol_bob,
	"Fusion Core": ol_pwr,
	"Holotape": ol_tape,
	"Location": ol_loc,
	"Magazine": ol_mag,
	"Power Armor": ol_pa,
	"Recipe/Plan": ol_rep,
	"Train Station": ol_train,
	"Treasure Map": ol_map,
	"Vault": ol_vault,
	"Workshop": ol_wb,
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