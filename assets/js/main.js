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

// the tile layer containing the image generated with `gdal2tiles --leaflet -p raster -w none <img> tiles`
var baselayer = L.tileLayer('./assets/tiles/{z}/{x}/{y}.png', {
  noWrap: true, 
  attribution: 'Map data &copy; Bethesda Softworks LLC, a ZeniMax Media company. Trademarks belong to their respective owners. All Rights Reserved.'
});

// create the map
var map = L.map('mapid', {
  layers: [baselayer, ol_pa, ol_vault, ol_loc,ol_train,ol_pwr,ol_bob,ol_mag,ol_map,ol_tape,ol_rep],
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
var mark_tm = 'map';		//Treasure Map
var mark_tp = 'tape';		//Holo tape
var mark_rp = 'receipt';	//Receipt

    L.marker(rc.unproject([931,1914]), {icon: L.AwesomeMarkers.icon({icon: mark_po, prefix: 'fa', markerColor: 'purple', iconColor: 'blue', extraClasses: 'fa-2x'}) }).bindTooltip("Power Armor").addTo(ol_pa);
    L.marker(rc.unproject([1632,1799]), {icon: L.AwesomeMarkers.icon({icon: mark_po, prefix: 'fa', markerColor: 'purple', iconColor: 'blue', extraClasses: 'fa-2x'}) }).bindTooltip("Power Armor").addTo(ol_pa);
    L.marker(rc.unproject([673,414]), {icon: L.AwesomeMarkers.icon({icon: mark_po, prefix: 'fa', markerColor: 'purple', iconColor: 'blue', extraClasses: 'fa-2x'}) }).bindTooltip("Power Armor").addTo(ol_pa);
    L.marker(rc.unproject([918,118]), {icon: L.AwesomeMarkers.icon({icon: mark_po, prefix: 'fa', markerColor: 'purple', iconColor: 'blue', extraClasses: 'fa-2x'}) }).bindTooltip("Power Armor").addTo(ol_pa);
    L.marker(rc.unproject([358,296]), {icon: L.AwesomeMarkers.icon({icon: mark_po, prefix: 'fa', markerColor: 'purple', iconColor: 'blue', extraClasses: 'fa-2x'}) }).bindTooltip("Power Armor").addTo(ol_pa);
    L.marker(rc.unproject([391,2001]), {icon: L.AwesomeMarkers.icon({icon: mark_po, prefix: 'fa', markerColor: 'purple', iconColor: 'blue', extraClasses: 'fa-2x'}) }).bindTooltip("Power Armor").addTo(ol_pa);



    L.marker(rc.unproject([805,985]), {icon: L.AwesomeMarkers.icon({icon: mark_va, prefix: 'fa', markerColor: 'purple', iconColor: 'yellow', extraClasses: 'fa-2x'}) }).bindTooltip("Vault 76").addTo(ol_vault);


    L.marker(rc.unproject([1140,975]), {icon: L.AwesomeMarkers.icon({icon: mark_wr, prefix: 'fa', markerColor: 'purple', iconColor: 'green', extraClasses: 'fa-2x'}) }).bindTooltip("Gorge Junkyard").addTo(map);
    L.marker(rc.unproject([892,1968]), {icon: L.AwesomeMarkers.icon({icon: mark_wr, prefix: 'fa', markerColor: 'purple', iconColor: 'green', extraClasses: 'fa-2x'}) }).bindTooltip("Wade Airport").addTo(map);
    L.marker(rc.unproject([433,646]), {icon: L.AwesomeMarkers.icon({icon: mark_wr, prefix: 'fa', markerColor: 'purple', iconColor: 'green', extraClasses: 'fa-2x'}) }).bindTooltip("Tyler County Dirt Track").addTo(map);
    L.marker(rc.unproject([1046,356]), {icon: L.AwesomeMarkers.icon({icon: mark_wr, prefix: 'fa', markerColor: 'purple', iconColor: 'green', extraClasses: 'fa-2x'}) }).bindTooltip("Hemlock Holes").addTo(map);
    L.marker(rc.unproject([1661,712]), {icon: L.AwesomeMarkers.icon({icon: mark_wr, prefix: 'fa', markerColor: 'purple', iconColor: 'green', extraClasses: 'fa-2x'}) }).bindTooltip("Grafton Steel Yard").addTo(map);
    L.marker(rc.unproject([617,1442]), {icon: L.AwesomeMarkers.icon({icon: mark_wr, prefix: 'fa', markerColor: 'purple', iconColor: 'green', extraClasses: 'fa-2x'}) }).bindTooltip("Sunshine Meadows Industrial Farm").addTo(map);
    L.marker(rc.unproject([377,1699]), {icon: L.AwesomeMarkers.icon({icon: mark_wr, prefix: 'fa', markerColor: 'purple', iconColor: 'green', extraClasses: 'fa-2x'}) }).bindTooltip("Billings Homestead").addTo(map);
    L.marker(rc.unproject([577,1931]), {icon: L.AwesomeMarkers.icon({icon: mark_wr, prefix: 'fa', markerColor: 'purple', iconColor: 'green', extraClasses: 'fa-2x'}) }).bindTooltip("Poseidon Energy Plant WV-06").addTo(map);
    L.marker(rc.unproject([1108,1807]), {icon: L.AwesomeMarkers.icon({icon: mark_wr, prefix: 'fa', markerColor: 'purple', iconColor: 'green', extraClasses: 'fa-2x'}) }).bindTooltip("Lakeside Cabins").addTo(map);
    L.marker(rc.unproject([638,2063]), {icon: L.AwesomeMarkers.icon({icon: mark_wr, prefix: 'fa', markerColor: 'purple', iconColor: 'green', extraClasses: 'fa-2x'}) }).bindTooltip("Charleston Landfill").addTo(map);
    L.marker(rc.unproject([592,2344]), {icon: L.AwesomeMarkers.icon({icon: mark_wr, prefix: 'fa', markerColor: 'purple', iconColor: 'green', extraClasses: 'fa-2x'}) }).bindTooltip("Mount Blair").addTo(map);
    L.marker(rc.unproject([2494,556]), {icon: L.AwesomeMarkers.icon({icon: mark_wr, prefix: 'fa', markerColor: 'purple', iconColor: 'green', extraClasses: 'fa-2x'}) }).bindTooltip("Red Rocket Mega Stop").addTo(map);
    L.marker(rc.unproject([1828,1143]), {icon: L.AwesomeMarkers.icon({icon: mark_wr, prefix: 'fa', markerColor: 'purple', iconColor: 'green', extraClasses: 'fa-2x'}) }).bindTooltip("Monongah Power Plant").addTo(map);
    L.marker(rc.unproject([1805,2380]), {icon: L.AwesomeMarkers.icon({icon: mark_wr, prefix: 'fa', markerColor: 'purple', iconColor: 'green', extraClasses: 'fa-2x'}) }).bindTooltip("Spruce Knob").addTo(map);
    L.marker(rc.unproject([1523,2731]), {icon: L.AwesomeMarkers.icon({icon: mark_wr, prefix: 'fa', markerColor: 'purple', iconColor: 'green', extraClasses: 'fa-2x'}) }).bindTooltip("Federal Disposal Field HZ-21").addTo(map);
    L.marker(rc.unproject([2892,925]), {icon: L.AwesomeMarkers.icon({icon: mark_wr, prefix: 'fa', markerColor: 'purple', iconColor: 'green', extraClasses: 'fa-2x'}) }).bindTooltip("Thunder Mountain Power Plant").addTo(map);
    L.marker(rc.unproject([2424,1415]), {icon: L.AwesomeMarkers.icon({icon: mark_wr, prefix: 'fa', markerColor: 'purple', iconColor: 'green', extraClasses: 'fa-2x'}) }).bindTooltip("Berkeley Springs").addTo(map);


    L.marker(rc.unproject([821,1272]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: '#8D6645', extraClasses: 'fa-2x'}) }).bindTooltip("Flatwoods Lookout").addTo(ol_loc);
    L.marker(rc.unproject([1150,2078]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: '#8D6645', extraClasses: 'fa-2x'}) }).bindTooltip("Torrance House").addTo(ol_loc);
    L.marker(rc.unproject([1321,1598]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: '#8D6645', extraClasses: 'fa-2x'}) }).bindTooltip("Tygart Water Treatment").addTo(ol_loc);
    L.marker(rc.unproject([1299,1644]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: '#8D6645', extraClasses: 'fa-2x'}) }).bindTooltip("Poseidon Power Substation PX-02").addTo(ol_loc);
    L.marker(rc.unproject([1256,1750]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: '#8D6645', extraClasses: 'fa-2x'}) }).bindTooltip("Summersville").addTo(ol_loc);
    L.marker(rc.unproject([1060,1239]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: '#8D6645', extraClasses: 'fa-2x'}) }).bindTooltip("Slocum Joe").addTo(ol_loc);
    L.marker(rc.unproject([778,1045]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: '#8D6645', extraClasses: 'fa-2x'}) }).bindTooltip("Moonshiner's Shack").addTo(ol_loc);
    L.marker(rc.unproject([713,1368]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: '#8D6645', extraClasses: 'fa-2x'}) }).bindTooltip("Relay Tower EM-B1-27").addTo(ol_loc);
    L.marker(rc.unproject([795,1500]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: '#8D6645', extraClasses: 'fa-2x'}) }).bindTooltip("Flatwood").addTo(ol_loc);
    L.marker(rc.unproject([699,1505]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: '#8D6645', extraClasses: 'fa-2x'}) }).bindTooltip("Vault-Tec Agricultural Research Center").addTo(ol_loc);
    L.marker(rc.unproject([977,2044]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: '#8D6645', extraClasses: 'fa-2x'}) }).bindTooltip("Summersville Dam").addTo(ol_loc);
    L.marker(rc.unproject([1506,1991]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: '#8D6645', extraClasses: 'fa-2x'}) }).bindTooltip("The Whitespring Golf Club").addTo(ol_loc);
    L.marker(rc.unproject([1633,1793]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: '#8D6645', extraClasses: 'fa-2x'}) }).bindTooltip("New Appalachian Central Trainyard").addTo(ol_loc);
    L.marker(rc.unproject([1702,1691]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: '#8D6645', extraClasses: 'fa-2x'}) }).bindTooltip("98 NAR Regional").addTo(ol_loc);
    L.marker(rc.unproject([1163,1993]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: '#8D6645', extraClasses: 'fa-2x'}) }).bindTooltip("Sugarmaple").addTo(ol_loc);
    L.marker(rc.unproject([1187,1960]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: '#8D6645', extraClasses: 'fa-2x'}) }).bindTooltip("Overlook Cabin").addTo(ol_loc);
    L.marker(rc.unproject([1013,1110]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: '#8D6645', extraClasses: 'fa-2x'}) }).bindTooltip("Landview Lighthouse").addTo(ol_loc);
    L.marker(rc.unproject([655,392]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: '#8D6645', extraClasses: 'fa-2x'}) }).bindTooltip("Aaronholdt Homestead").addTo(ol_loc);
    L.marker(rc.unproject([1035,2142]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: '#8D6645', extraClasses: 'fa-2x'}) }).bindTooltip("Riverside Manor").addTo(ol_loc);
    L.marker(rc.unproject([1406,1403]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: '#8D6645', extraClasses: 'fa-2x'}) }).bindTooltip("Horizon's Rest").addTo(ol_loc);
    L.marker(rc.unproject([925,118]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: '#8D6645', extraClasses: 'fa-2x'}) }).bindTooltip("The Crosshair").addTo(ol_loc);
    L.marker(rc.unproject([964,1315]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: '#8D6645', extraClasses: 'fa-2x'}) }).bindTooltip("Overseer's Camp").addTo(ol_loc);
    L.marker(rc.unproject([1121,1462]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: '#8D6645', extraClasses: 'fa-2x'}) }).bindTooltip("Sutton").addTo(ol_loc);
    L.marker(rc.unproject([502,468]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: '#8D6645', extraClasses: 'fa-2x'}) }).bindTooltip("Darling Sister's Lab").addTo(ol_loc);
    L.marker(rc.unproject([517,649]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: '#8D6645', extraClasses: 'fa-2x'}) }).bindTooltip("Tyler County Fairgrounds").addTo(ol_loc);
    L.marker(rc.unproject([1268,1258]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: '#8D6645', extraClasses: 'fa-2x'}) }).bindTooltip("Arktos Pharma").addTo(ol_loc);
    L.marker(rc.unproject([1244,1501]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: '#8D6645', extraClasses: 'fa-2x'}) }).bindTooltip("East Kanawha Lookout").addTo(ol_loc);
    L.marker(rc.unproject([1233,1430]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: '#8D6645', extraClasses: 'fa-2x'}) }).bindTooltip("Helvetia").addTo(ol_loc);
    L.marker(rc.unproject([870,1226]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: '#8D6645', extraClasses: 'fa-2x'}) }).bindTooltip("Wixon Homestead").addTo(ol_loc);
    L.marker(rc.unproject([812,1165]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: '#8D6645', extraClasses: 'fa-2x'}) }).bindTooltip("Gilman Lumber Mill").addTo(ol_loc);
    L.marker(rc.unproject([910,1044]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: '#8D6645', extraClasses: 'fa-2x'}) }).bindTooltip("Isolated Cabin").addTo(ol_loc);
    L.marker(rc.unproject([942,927]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: '#8D6645', extraClasses: 'fa-2x'}) }).bindTooltip("North Kanawha Lookout").addTo(ol_loc);
    L.marker(rc.unproject([1418,1316]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: '#8D6645', extraClasses: 'fa-2x'}) }).bindTooltip("Greg's Mine Supply").addTo(ol_loc);
    L.marker(rc.unproject([354,278]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: '#8D6645', extraClasses: 'fa-2x'}) }).bindTooltip("WV Lumber Co.").addTo(ol_loc);
    L.marker(rc.unproject([335,1972]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: '#8D6645', extraClasses: 'fa-2x'}) }).bindTooltip("Kanawha Nuka Cola Plant").addTo(ol_loc);
    L.marker(rc.unproject([1299,238]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: '#8D6645', extraClasses: 'fa-2x'}) }).bindTooltip("Wavy Willard's Water Park").addTo(ol_loc);
    L.marker(rc.unproject([2153,2526]), {icon: L.AwesomeMarkers.icon({icon: mark_lo, prefix: 'fa', markerColor: 'purple', iconColor: '#8D6645', extraClasses: 'fa-2x'}) }).bindTooltip("Monorail Elevator").addTo(ol_loc);



    L.marker(rc.unproject([1108,1545]), {icon: L.AwesomeMarkers.icon({icon: mark_tr, prefix: 'fa', markerColor: 'purple', iconColor: 'grey', extraClasses: 'fa-2x'}) }).bindTooltip("Sutton Station").addTo(ol_loc);


    L.marker(rc.unproject([948,2032]), {icon: L.AwesomeMarkers.icon({icon: mark_fc, prefix: 'fa', markerColor: 'purple', iconColor: 'red', extraClasses: 'fa-2x'}) }).bindTooltip("Fusion Core").addTo(ol_pwr);
    L.marker(rc.unproject([1245,1272]), {icon: L.AwesomeMarkers.icon({icon: mark_fc, prefix: 'fa', markerColor: 'purple', iconColor: 'red', extraClasses: 'fa-2x'}) }).bindTooltip("Fusion Core").addTo(ol_pwr);
    L.marker(rc.unproject([377,284]), {icon: L.AwesomeMarkers.icon({icon: mark_fc, prefix: 'fa', markerColor: 'purple', iconColor: 'red', extraClasses: 'fa-2x'}) }).bindTooltip("Fusion Core").addTo(ol_pwr);
    L.marker(rc.unproject([368,1983]), {icon: L.AwesomeMarkers.icon({icon: mark_fc, prefix: 'fa', markerColor: 'purple', iconColor: 'red', extraClasses: 'fa-2x'}) }).bindTooltip("Fusion Core").addTo(ol_pwr);
    L.marker(rc.unproject([1244,251]), {icon: L.AwesomeMarkers.icon({icon: mark_fc, prefix: 'fa', markerColor: 'purple', iconColor: 'red', extraClasses: 'fa-2x'}) }).bindTooltip("Fusion Core").addTo(ol_pwr);
    L.marker(rc.unproject([2137,2522]), {icon: L.AwesomeMarkers.icon({icon: mark_fc, prefix: 'fa', markerColor: 'purple', iconColor: 'red', extraClasses: 'fa-2x'}) }).bindTooltip("Fusion Core").addTo(ol_pwr);

    L.marker(rc.unproject([1442,1418]), {icon: L.AwesomeMarkers.icon({icon: mark_bh, prefix: 'fa', markerColor: 'purple', iconColor: 'LightBlue', extraClasses: 'fa-2x'}) }).bindTooltip("Bobblehead: Small Guns").addTo(ol_bob);
    L.marker(rc.unproject([1434,1308]), {icon: L.AwesomeMarkers.icon({icon: mark_bh, prefix: 'fa', markerColor: 'purple', iconColor: 'LightBlue', extraClasses: 'fa-2x'}) }).bindTooltip("Bobblehead: Big Guns").addTo(ol_bob);
    L.marker(rc.unproject([1268,251]), {icon: L.AwesomeMarkers.icon({icon: mark_bh, prefix: 'fa', markerColor: 'purple', iconColor: 'LightBlue', extraClasses: 'fa-2x'}) }).bindTooltip("Bobblehead: Energy Weapons<br>Bobblehead: Melee").addTo(ol_bob);
    L.marker(rc.unproject([719,1471]), {icon: L.AwesomeMarkers.icon({icon: mark_bh, prefix: 'fa', markerColor: 'purple', iconColor: 'LightBlue', extraClasses: 'fa-2x'}) }).bindTooltip("Bobblehead: Intelligence<br>Bobblehead: Repair<br>Bobblehead: Science").addTo(ol_bob);
    L.marker(rc.unproject([552,1930]), {icon: L.AwesomeMarkers.icon({icon: mark_bh, prefix: 'fa', markerColor: 'purple', iconColor: 'LightBlue', extraClasses: 'fa-2x'}) }).bindTooltip("Bobblehead: Leader").addTo(ol_bob);
    L.marker(rc.unproject([496,634]), {icon: L.AwesomeMarkers.icon({icon: mark_bh, prefix: 'fa', markerColor: 'purple', iconColor: 'LightBlue', extraClasses: 'fa-2x'}) }).bindTooltip("Bobblehead: Agility").addTo(ol_bob);
    L.marker(rc.unproject([496,634]), {icon: L.AwesomeMarkers.icon({icon: mark_bh, prefix: 'fa', markerColor: 'purple', iconColor: 'LightBlue', extraClasses: 'fa-2x'}) }).bindTooltip("Bobblehead: Agility").addTo(ol_bob);

    L.marker(rc.unproject([302,1163]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: 'orange', extraClasses: 'fa-2x'}) }).bindTooltip("Treasure Map - Forest (Map 1)").addTo(ol_map);
    L.marker(rc.unproject([611,2090]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: 'orange', extraClasses: 'fa-2x'}) }).bindTooltip("Treasure Map - Forest (Map 3)").addTo(ol_map);
    L.marker(rc.unproject([1015,1187]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: 'orange', extraClasses: 'fa-2x'}) }).bindTooltip("Treasure Map - Forest (Map 5)").addTo(ol_map);
    L.marker(rc.unproject([945,2217]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: 'orange', extraClasses: 'fa-2x'}) }).bindTooltip("Treasure Map - Forest (Map 7)").addTo(ol_map);
    L.marker(rc.unproject([1245,1109]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: 'orange', extraClasses: 'fa-2x'}) }).bindTooltip("Treasure Map - Forest (Map 8)").addTo(ol_map);
    L.marker(rc.unproject([1236,1795]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: 'orange', extraClasses: 'fa-2x'}) }).bindTooltip("Treasure Map - Forest (Map 9)").addTo(ol_map);
    L.marker(rc.unproject([1382,1336]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: 'orange', extraClasses: 'fa-2x'}) }).bindTooltip("Treasure Map - Forest (Map 10)").addTo(ol_map);
    L.marker(rc.unproject([667,2649]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: 'orange', extraClasses: 'fa-2x'}) }).bindTooltip("Treasure Map - Ash Heap (Map 1)").addTo(ol_map);
    L.marker(rc.unproject([850,2199]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: 'orange', extraClasses: 'fa-2x'}) }).bindTooltip("Treasure Map - Ash Heap (Map 2)").addTo(ol_map);
    L.marker(rc.unproject([1010,556]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: 'orange', extraClasses: 'fa-2x'}) }).bindTooltip("Treasure Map - Toxic Valley (Map 1)").addTo(ol_map);
    L.marker(rc.unproject([1326,468]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: 'orange', extraClasses: 'fa-2x'}) }).bindTooltip("Treasure Map - Toxic Valley (Map 2)").addTo(ol_map);
    L.marker(rc.unproject([1586,663]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: 'orange', extraClasses: 'fa-2x'}) }).bindTooltip("Treasure Map - Toxic Valley (Map 3)").addTo(ol_map);
    L.marker(rc.unproject([1719,276]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: 'orange', extraClasses: 'fa-2x'}) }).bindTooltip("Treasure Map - Toxic Valley (Map 4)").addTo(ol_map);
    L.marker(rc.unproject([1466,2270]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: 'orange', extraClasses: 'fa-2x'}) }).bindTooltip("Treasure Map - Savage Divide (Map 1)").addTo(ol_map);
    L.marker(rc.unproject([1642,1759]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: 'orange', extraClasses: 'fa-2x'}) }).bindTooltip("Treasure Map - Savage Divide (Map 2)").addTo(ol_map);
    L.marker(rc.unproject([1767,1427]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: 'orange', extraClasses: 'fa-2x'}) }).bindTooltip("Treasure Map - Savage Divide (Map 3)").addTo(ol_map);
    L.marker(rc.unproject([1796,1945]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: 'orange', extraClasses: 'fa-2x'}) }).bindTooltip("Treasure Map - Savage Divide (Map 5)").addTo(ol_map);
    L.marker(rc.unproject([1929,418]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: 'orange', extraClasses: 'fa-2x'}) }).bindTooltip("Treasure Map - Savage Divide (Map 6)").addTo(ol_map);
    L.marker(rc.unproject([1978,2535]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: 'orange', extraClasses: 'fa-2x'}) }).bindTooltip("Treasure Map - Savage Divide (Map 7)").addTo(ol_map);
    L.marker(rc.unproject([1976,1427]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: 'orange', extraClasses: 'fa-2x'}) }).bindTooltip("Treasure Map - Savage Divide (Map 8)").addTo(ol_map);


    L.marker(rc.unproject([788,950]), {icon: L.AwesomeMarkers.icon({icon: mark_tp, prefix: 'fa', markerColor: 'purple', iconColor: 'purple', extraClasses: 'fa-2x'}) }).bindTooltip("Nuka Tapper").addTo(ol_tape);
    L.marker(rc.unproject([815,950]), {icon: L.AwesomeMarkers.icon({icon: mark_tp, prefix: 'fa', markerColor: 'purple', iconColor: 'purple', extraClasses: 'fa-2x'}) }).bindTooltip("Overseer's Log - Vault 76").addTo(ol_tape);
    L.marker(rc.unproject([973,1308]), {icon: L.AwesomeMarkers.icon({icon: mark_tp, prefix: 'fa', markerColor: 'purple', iconColor: 'purple', extraClasses: 'fa-2x'}) }).bindTooltip("Overseer's Log - C.A.M.P.").addTo(ol_tape);
    L.marker(rc.unproject([786,1466]), {icon: L.AwesomeMarkers.icon({icon: mark_tp, prefix: 'fa', markerColor: 'purple', iconColor: 'purple', extraClasses: 'fa-2x'}) }).bindTooltip("Overseer's Log - Flatwoods").addTo(ol_tape);
    L.marker(rc.unproject([699,1477]), {icon: L.AwesomeMarkers.icon({icon: mark_tp, prefix: 'fa', markerColor: 'purple', iconColor: 'purple', extraClasses: 'fa-2x'}) }).bindTooltip("Overseer's Journal - Entry 1").addTo(ol_tape);
    L.marker(rc.unproject([1131,1460]), {icon: L.AwesomeMarkers.icon({icon: mark_tp, prefix: 'fa', markerColor: 'purple', iconColor: 'purple', extraClasses: 'fa-2x'}) }).bindTooltip("Overseer's Journal - Entry 2").addTo(ol_tape);
    L.marker(rc.unproject([1283,1272]), {icon: L.AwesomeMarkers.icon({icon: mark_tp, prefix: 'fa', markerColor: 'purple', iconColor: 'purple', extraClasses: 'fa-2x'}) }).bindTooltip("Test Log 9-23-77-A10<br>Test Log 3-12-78-A14").addTo(ol_tape);

    L.marker(rc.unproject([778,1498]), {icon: L.AwesomeMarkers.icon({icon: mark_rp, prefix: 'fa', markerColor: 'purple', iconColor: 'white', extraClasses: 'fa-2x'}) }).bindTooltip("Recipe: Delbert's Sunshine Oil").addTo(ol_rep);
    L.marker(rc.unproject([514,448]), {icon: L.AwesomeMarkers.icon({icon: mark_rp, prefix: 'fa', markerColor: 'purple', iconColor: 'white', extraClasses: 'fa-2x'}) }).bindTooltip("Recipe: Delbert's Corn Pone").addTo(ol_rep);
    L.marker(rc.unproject([476,628]), {icon: L.AwesomeMarkers.icon({icon: mark_rp, prefix: 'fa', markerColor: 'purple', iconColor: 'white', extraClasses: 'fa-2x'}) }).bindTooltip("Recipe: Swamp Tofu Soup").addTo(ol_rep);
    L.marker(rc.unproject([1425,1421]), {icon: L.AwesomeMarkers.icon({icon: mark_rp, prefix: 'fa', markerColor: 'purple', iconColor: 'white', extraClasses: 'fa-2x'}) }).bindTooltip("Recipe: Silt Bean Puree").addTo(ol_rep);
    L.marker(rc.unproject([1263,1272]), {icon: L.AwesomeMarkers.icon({icon: mark_rp, prefix: 'fa', markerColor: 'purple', iconColor: 'white', extraClasses: 'fa-2x'}) }).bindTooltip("Plan: Tinker's Workbench<br>Recipe: Glowing Fungus Puree").addTo(ol_rep);


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
	"Holotape": ol_tape,
	"Recipe": ol_rep,
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