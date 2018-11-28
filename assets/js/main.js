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
var ol_rift = L.layerGroup();

// the tile layer containing the image generated with `gdal2tiles --leaflet -p raster -w none <img> tiles`
var baselayer = L.tileLayer('./assets/tiles/{z}/{x}/{y}.png', {
  noWrap: true, 
  attribution: 'Map data &copy; Bethesda Softworks LLC, a ZeniMax Media company. Trademarks belong to their respective owners. All Rights Reserved.'
});

// create the map
var map = L.map('mapid', {
  layers: [baselayer, ol_pa, ol_vault, ol_loc,ol_train,ol_pwr,ol_bob,ol_mag,ol_map,ol_tape,ol_rep,ol_wb,ol_rift],
  fullscreenControl: true,
  fullscreenControlOptions: {
    position: 'topleft'
  },
  renderer: L.canvas()
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
var mark_wr = 'wrench';		//Workbench
var mark_lo = 'building';	//Location
var mark_ma = 'book-open';	//Magazine
var mark_tm = 'map';		//Treasure Map
var mark_rp = 'receipt';	//Receipt

var mark_tr = L.icon({ iconUrl: './assets/icon/trainstation.svg', iconSize: [32,28], className:'mark_tr svgmarker'}); 	//Train Station
var mark_wr = L.icon({ iconUrl: './assets/icon/workbench.svg', iconSize: [32,32], className:'mark_wr svgmarker'}); 	//Public Workbench
var mark_va = L.icon({ iconUrl: './assets/icon/vault.svg', iconSize: [32,32], className:'mark_va svgmarker'}); 		//Vault
var mark_va76 = L.icon({ iconUrl: './assets/icon/vault76.svg', iconSize: [32,32], className:'mark_va svgmarker'}); 	//Vault76
var mark_va63 = L.icon({ iconUrl: './assets/icon/vault63.svg', iconSize: [32,32], className:'mark_va svgmarker'}); 	//Vault63
var mark_va94 = L.icon({ iconUrl: './assets/icon/vault94.svg', iconSize: [32,32], className:'mark_va svgmarker'}); 	//Vault94
var mark_va96 = L.icon({ iconUrl: './assets/icon/vault96.svg', iconSize: [32,32], className:'mark_va svgmarker'}); 	//Vault96
var mark_bh = L.icon({ iconUrl: './assets/icon/bhead.svg', iconSize: [32,32], className:'mark_bh svgmarker'}); 		//Bobblehead
var mark_tape = L.icon({ iconUrl: './assets/icon/holotape.svg', iconSize: [32,32], className:'mark_tape svgmarker'}); 	//Holotape
var mark_fcore = L.icon({ iconUrl: './assets/icon/fcore.svg', iconSize: [32,32], className:'mark_fcore svgmarker'}); 	//Fusion Core
var mark_parmor = L.icon({ iconUrl: './assets/icon/parmor.svg', iconSize: [32,32], className:'mark_parmor svgmarker'}); //Power Armor
var mark_rift = L.icon({ iconUrl: './assets/icon/fissure.svg', iconSize: [32,32], className:'mark_rift svgmarker'}); 	//Fissure

var mark_farm = L.icon({ iconUrl: './assets/icon/farm.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 		//Farm/Homestead
var mark_cabin = L.icon({ iconUrl: './assets/icon/cabin.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 		//Farm/Cabin
var mark_lighthouse = L.icon({ iconUrl: './assets/icon/lighthouse.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 	//Lighthouse
var mark_shack = L.icon({ iconUrl: './assets/icon/shack.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 		//Shack/Lab
var mark_radiotower = L.icon({ iconUrl: './assets/icon/radiotower.svg', iconSize: [21,32], className:'mark_lo svgmarker'}); 	//Relay Tower
var mark_lookout = L.icon({ iconUrl: './assets/icon/lookout.svg', iconSize: [20,36], className:'mark_lo svgmarker'}); 		//Lookout
var mark_factory = L.icon({ iconUrl: './assets/icon/factory.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 		//Lumberyard
var mark_fair = L.icon({ iconUrl: './assets/icon/fair.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 		//Fair
var mark_waterplant = L.icon({ iconUrl: './assets/icon/waterplant.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 	//Water Treatment
var mark_substation = L.icon({ iconUrl: './assets/icon/substation.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 	//Substation
var mark_town = L.icon({ iconUrl: './assets/icon/town.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 		//Town
var mark_plane = L.icon({ iconUrl: './assets/icon/plane.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 		//Plane/Airport
var mark_manor = L.icon({ iconUrl: './assets/icon/manor.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 		//Manor
var mark_nuka = L.icon({ iconUrl: './assets/icon/nuka.svg', iconSize: [22,42], className:'mark_lo svgmarker'}); 		//Nuka
var mark_power = L.icon({ iconUrl: './assets/icon/power.svg', iconSize: [25,34], className:'mark_lo svgmarker'}); 		//Power Plant
var mark_railyard = L.icon({ iconUrl: './assets/icon/railyard.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 	//Railyard
var mark_trainyard = L.icon({ iconUrl: './assets/icon/trainyard.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 	//Trainyard
var mark_perch = L.icon({ iconUrl: './assets/icon/perch.svg', iconSize: [38,27], className:'mark_lo svgmarker'}); 		//Perch
var mark_lodge = L.icon({ iconUrl: './assets/icon/firedept.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 		//Fire Dept/Lodge
var mark_med = L.icon({ iconUrl: './assets/icon/med.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 			//Medical
var mark_capital = L.icon({ iconUrl: './assets/icon/capital.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 		//Capital
var mark_teapot = L.icon({ iconUrl: './assets/icon/teapot.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 		//Teapot
var mark_cream = L.icon({ iconUrl: './assets/icon/cream.svg', iconSize: [19,32], className:'mark_lo svgmarker'}); 		//Cream
var mark_bridge = L.icon({ iconUrl: './assets/icon/bridge.svg', iconSize: [32,26], className:'mark_lo svgmarker'}); 		//Bridge
var mark_camp = L.icon({ iconUrl: './assets/icon/camp.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 		//Camp
var mark_agcenter = L.icon({ iconUrl: './assets/icon/agcenter.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 	//Agricultural Center
var mark_tree = L.icon({ iconUrl: './assets/icon/tree.svg', iconSize: [26,32], className:'mark_lo svgmarker'}); 		//Island
var mark_disposal = L.icon({ iconUrl: './assets/icon/disposal.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 	//Ordinance/Disposal
var mark_houses = L.icon({ iconUrl: './assets/icon/houses.svg', iconSize: [32,30], className:'mark_lo svgmarker'}); 		//Houses
var mark_city = L.icon({ iconUrl: './assets/icon/city.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 		//City
var mark_pub = L.icon({ iconUrl: './assets/icon/pub.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 			//Pub
var mark_dam = L.icon({ iconUrl: './assets/icon/dam.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 			//Dam
var mark_mine = L.icon({ iconUrl: './assets/icon/mine.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 		//Mine
var mark_arktos = L.icon({ iconUrl: './assets/icon/arktos.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 		//Arktos
var mark_golf = L.icon({ iconUrl: './assets/icon/golf.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 		//Golf
var mark_snow = L.icon({ iconUrl: './assets/icon/snow.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 		//Snow
var mark_base = L.icon({ iconUrl: './assets/icon/base.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 		//Military base
var mark_hotdog = L.icon({ iconUrl: './assets/icon/hotdog.svg', iconSize: [35,21], className:'mark_lo svgmarker'}); 		//Hotdog
var mark_dock = L.icon({ iconUrl: './assets/icon/dock.svg', iconSize: [32,28], className:'mark_lo svgmarker'}); 		//Dock
var mark_cemetery = L.icon({ iconUrl: './assets/icon/cemetery.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 	//Cemetery
var mark_scraper = L.icon({ iconUrl: './assets/icon/scraper.svg', iconSize: [20,32], className:'mark_lo svgmarker'}); 		//SkyScraper
var mark_mansion = L.icon({ iconUrl: './assets/icon/mansion.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 		//Sugarmaple
var mark_raider = L.icon({ iconUrl: './assets/icon/raider.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 		//Raider
var mark_prison = L.icon({ iconUrl: './assets/icon/prison.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 		//Prison
var mark_pond = L.icon({ iconUrl: './assets/icon/pond.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 		//Pond
var mark_statue = L.icon({ iconUrl: './assets/icon/statue.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 		//Statue
var mark_spacestation = L.icon({ iconUrl: './assets/icon/spacestation.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); //Spacestation
var mark_fort = L.icon({ iconUrl: './assets/icon/fort.svg', iconSize: [32,22], className:'mark_lo svgmarker'}); 		//Fort
var mark_quarry = L.icon({ iconUrl: './assets/icon/quarry.svg', iconSize: [32,30], className:'mark_lo svgmarker'}); 		//Quarry
var mark_bunker = L.icon({ iconUrl: './assets/icon/bunker.svg', iconSize: [32,19], className:'mark_lo svgmarker'}); 		//Bunker
var mark_rocket = L.icon({ iconUrl: './assets/icon/rocket.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 		//Rocket
var mark_headquarters = L.icon({ iconUrl: './assets/icon/headquarters.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); //Headquarters
var mark_palace = L.icon({ iconUrl: './assets/icon/palace.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 		//Palace
var mark_pumpkin = L.icon({ iconUrl: './assets/icon/pumpkin.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 		//Pumpkin
var mark_observatory = L.icon({ iconUrl: './assets/icon/observatory.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 	//Observatory
var mark_top = L.icon({ iconUrl: './assets/icon/top.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 			//Top of the World
var mark_rocks = L.icon({ iconUrl: './assets/icon/rocks.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 		//Rocks
var mark_resort = L.icon({ iconUrl: './assets/icon/resort.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 		//Resort
var mark_dish = L.icon({ iconUrl: './assets/icon/dish.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 		//Dish
var mark_monorail = L.icon({ iconUrl: './assets/icon/monorail.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 	//Monorail
var mark_church = L.icon({ iconUrl: './assets/icon/church.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 		//Church
var mark_antiques = L.icon({ iconUrl: './assets/icon/antiques.svg', iconSize: [32,32], className:'mark_lo svgmarker'}); 	//Antiques

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
var color_ri = 'HotPink';	//Fissure


    L.marker(rc.unproject([931,1914]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([1632,1799]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([673,414]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([918,118]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([358,296]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([391,2001]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([304,1133]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([469,853]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([1154,945]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([1403,1069]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([1600,793]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([1267,1283]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([442,1659]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([550,1956]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([326,1920]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([679,1687]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([873,1958]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([780,1974]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([1326,724]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([1377,448]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([1565,328]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([1702,225]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);
    L.marker(rc.unproject([2283,341]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip("<b>Power Armor</b>").addTo(ol_pa);




    L.marker(rc.unproject([805,963]), {icon: mark_va76, title: 'Vault 76', riseOnHover: true}).bindTooltip("<b>Vault 76</b>").addTo(ol_vault);
    L.marker(rc.unproject([2574,667]), {icon: mark_va94, title: 'Vault 94', riseOnHover: true}).bindTooltip("<b>Vault 94</b>").addTo(ol_vault);
    L.marker(rc.unproject([1759,2774]), {icon: mark_va96, title: 'Vault 96', riseOnHover: true}).bindTooltip("<b>Vault 96</b>").addTo(ol_vault);
    L.marker(rc.unproject([870,2673]), {icon: mark_va63, title: 'Vault 63', riseOnHover: true}).bindTooltip("<b>Vault 63</b>").addTo(ol_vault);

    L.marker(rc.unproject([1140,975]), {icon: mark_wr}).bindTooltip("<b>Gorge Junkyard</b>").addTo(ol_wb);
    L.marker(rc.unproject([920,1895]), {icon: mark_wr}).bindTooltip("<b>Wade Airport</b>").addTo(ol_wb);
    L.marker(rc.unproject([433,646]), {icon: mark_wr}).bindTooltip("<b>Tyler County Dirt Track</b>").addTo(ol_wb);
    L.marker(rc.unproject([1110,327]), {icon: mark_wr}).bindTooltip("<b>Hemlock Holes Maintenance</b>").addTo(ol_wb);
    L.marker(rc.unproject([1661,712]), {icon: mark_wr}).bindTooltip("<b>Grafton Steel Yard</b>").addTo(ol_wb);
    L.marker(rc.unproject([574,1432]), {icon: mark_wr}).bindTooltip("<b>Sunshine Meadows Industrial Farm</b>").addTo(ol_wb);
    L.marker(rc.unproject([377,1699]), {icon: mark_wr}).bindTooltip("<b>Billings Homestead</b>").addTo(ol_wb);
    L.marker(rc.unproject([643,1943]), {icon: mark_wr}).bindTooltip("<b>Poseidon Energy Plant Yard</b>").addTo(ol_wb);
    L.marker(rc.unproject([1108,1807]), {icon: mark_wr}).bindTooltip("<b>Lakeside Cabins</b>").addTo(ol_wb);
    L.marker(rc.unproject([638,2063]), {icon: mark_wr}).bindTooltip("<b>Charleston Landfill</b>").addTo(ol_wb);
    L.marker(rc.unproject([592,2344]), {icon: mark_wr}).bindTooltip("<b>Mount Blair</b>").addTo(ol_wb);
    L.marker(rc.unproject([2494,556]), {icon: mark_wr}).bindTooltip("<b>Red Rocket Mega Stop</b>").addTo(ol_wb);
    L.marker(rc.unproject([1828,1143]), {icon: mark_wr}).bindTooltip("<b>Monongah Power Plant Yard</b>").addTo(ol_wb);
    L.marker(rc.unproject([1805,2380]), {icon: mark_wr}).bindTooltip("<b>Spruce Knob</b>").addTo(ol_wb);
    L.marker(rc.unproject([1523,2731]), {icon: mark_wr}).bindTooltip("<b>Federal Disposal Field HZ-21</b>").addTo(ol_wb);
    L.marker(rc.unproject([2863,976]), {icon: mark_wr}).bindTooltip("<b>Thunder Mountain Power Plant Yard</b>").addTo(ol_wb);
    L.marker(rc.unproject([2373,1466]), {icon: mark_wr}).bindTooltip("<b>Berkeley Springs West</b>").addTo(ol_wb);
    L.marker(rc.unproject([2302,353]), {icon: mark_wr}).bindTooltip("<b>Converted Munitions Factory</b>").addTo(ol_wb);
    L.marker(rc.unproject([2860,1797]), {icon: mark_wr}).bindTooltip("<b>Dabney Homestead</b>").addTo(ol_wb);
    L.marker(rc.unproject([2609,1107]), {icon: mark_wr}).bindTooltip("<b>Dolly Sods Campground</b>").addTo(ol_wb);
    L.marker(rc.unproject([2800,2285]), {icon: mark_wr}).bindTooltip("<b>Abandoned Bog Town</b>").addTo(ol_wb);
    L.marker(rc.unproject([204,2552]), {icon: mark_wr}).bindTooltip("<b>Beckley Mine Exhibit</b>").addTo(ol_wb);


//The Forest
    L.marker(rc.unproject([778,1035]), {icon: mark_shack, title: "Moonshiner's Shack", riseOnHover: true}).bindTooltip("<b>Moonshiner's Shack</b>").addTo(ol_loc);
    L.marker(rc.unproject([942,927]), {icon: mark_lookout, title: 'North Kanawha Lookout', riseOnHover: true}).bindTooltip("<b>North Kanawha Lookout</b>").addTo(ol_loc);
    L.marker(rc.unproject([1026,833]), {icon: mark_cabin, title: 'Twin Pine Cabins', riseOnHover: true}).bindTooltip("<b>Twin Pine Cabins</b>").addTo(ol_loc);
    L.marker(rc.unproject([812,1140]), {icon: mark_factory, title: 'Gilman Lumber Mill', riseOnHover: true}).bindTooltip("<b>Gilman Lumber Mill</b>").addTo(ol_loc);
    L.marker(rc.unproject([910,1044]), {icon: mark_cabin, title: 'Isolated Cabin', riseOnHover: true}).bindTooltip("<b>Isolated Cabin</b>").addTo(ol_loc);
    L.marker(rc.unproject([1013,1110]), {icon: mark_lighthouse, title: 'Landview Lighthouse', riseOnHover: true}).bindTooltip("<b>Landview Lighthouse</b>").addTo(ol_loc);
    L.marker(rc.unproject([617,1249]), {icon: mark_cabin, title: 'Alpine River Cabins', riseOnHover: true}).bindTooltip("<b>Alpine River Cabins</b>").addTo(ol_loc);
    L.marker(rc.unproject([870,1226]), {icon: mark_farm, title: 'Wixon Homestead', riseOnHover: true}).bindTooltip("<b>Wixon Homestead</b>").addTo(ol_loc);
    L.marker(rc.unproject([811,1290]), {icon: mark_lookout, title: 'Flatwoods Lookout', riseOnHover: true}).bindTooltip("<b>Flatwoods Lookout</b>").addTo(ol_loc);
    L.marker(rc.unproject([964,1315]), {icon: mark_camp, title: "Overseer's Camp", riseOnHover: true}).bindTooltip("<b>Overseer's Camp</b>").addTo(ol_loc);
    L.marker(rc.unproject([713,1368]), {icon: mark_radiotower, title: 'Relay Tower EM-B1-27', riseOnHover: true}).bindTooltip("<b>Relay Tower EM-B1-27</b>").addTo(ol_loc);
    L.marker(rc.unproject([854,1426]), {icon: mark_lodge, title: 'Green Country Lodge', riseOnHover: true}).bindTooltip("<b>Green Country Lodge</b>").addTo(ol_loc);
    L.marker(rc.unproject([795,1500]), {icon: mark_town, title: 'Flatwood', riseOnHover: true}).bindTooltip("<b>Flatwood</b>").addTo(ol_loc);
    L.marker(rc.unproject([724,1490]), {icon: mark_agcenter, title: 'Vault-Tec Agricultural Research Center', riseOnHover: true}).bindTooltip("<b>Vault-Tec Agricultural Research Center</b>").addTo(ol_loc);
//
    L.marker(rc.unproject([354,278]), {icon: mark_factory, title: "WV Lumber Co.", riseOnHover: true}).bindTooltip("<b>WV Lumber Co.</b>").addTo(ol_loc);
    L.marker(rc.unproject([502,468]), {icon: mark_shack, title: "Darling Sister's Lab", riseOnHover: true}).bindTooltip("<b>Darling Sister's Lab</b>").addTo(ol_loc);
    L.marker(rc.unproject([546,400]), {icon: mark_shack, title: "Groves Family Cabin", riseOnHover: true}).bindTooltip("<b>Groves Family Cabin</b>").addTo(ol_loc);
    L.marker(rc.unproject([655,392]), {icon: mark_farm, title: 'Aaronholdt Homestead', riseOnHover: true}).bindTooltip("<b>Aaronholdt Homestead</b>").addTo(ol_loc);
    L.marker(rc.unproject([510,629]), {icon: mark_fair, title: 'Tyler County Fairgrounds', riseOnHover: true}).bindTooltip("<b>Tyler County Fairgrounds</b>").addTo(ol_loc);
    L.marker(rc.unproject([315,709]), {icon: mark_tree, title: 'Deathclaw Island', riseOnHover: true}).bindTooltip("<b>Deathclaw Island</b>").addTo(ol_loc);
    L.marker(rc.unproject([452,751]), {icon: mark_radiotower, title: 'Transmission Station 1AT-U03', riseOnHover: true}).bindTooltip("<b>Transmission Station 1AT-U03</b>").addTo(ol_loc);
    L.marker(rc.unproject([710,778]), {icon: mark_farm, title: 'Anchor Farm', riseOnHover: true}).bindTooltip("<b>Anchor Farm</b>").addTo(ol_loc);
    L.marker(rc.unproject([447,868]), {icon: mark_disposal, title: 'Black Mountain Ordnance Works', riseOnHover: true}).bindTooltip("<b>Black Mountain Ordnance Works</b>").addTo(ol_loc);
    L.marker(rc.unproject([349,1160]), {icon: mark_town, title: 'Point Pleasant', riseOnHover: true}).bindTooltip("<b>Point Pleasant</b>").addTo(ol_loc);
    L.marker(rc.unproject([451,1062]), {icon: mark_cabin, title: 'Marigold Pavilion', riseOnHover: true}).bindTooltip("<b>Marigold Pavilion</b>").addTo(ol_loc);
    L.marker(rc.unproject([485,1264]), {icon: mark_camp, title: "Hunter's Ridge", riseOnHover: true}).bindTooltip("<b>Hunter's Ridge</b>").addTo(ol_loc);
//
    L.marker(rc.unproject([1156,861]), {icon: mark_houses, title: "Wilson Brother's Auto Repair", riseOnHover: true}).bindTooltip("<b>Wilson Brother's Auto Repair</b>").addTo(ol_loc);
    L.marker(rc.unproject([1531,1009]), {icon: mark_city, title: "Morgantown", riseOnHover: true}).bindTooltip("<b>Morgantown</b>").addTo(ol_loc);
    L.marker(rc.unproject([1310,1014]), {icon: mark_trainyard, title: "Morgantown Trainyard", riseOnHover: true}).bindTooltip("<b>Morgantown Trainyard</b>").addTo(ol_loc);
    L.marker(rc.unproject([1416,905]), {icon: mark_plane, title: "Morgantown Airport", riseOnHover: true}).bindTooltip("<b>Morgantown Airport</b>").addTo(ol_loc);
    L.marker(rc.unproject([1576,976]), {icon: mark_lodge, title: "Morgantown High School", riseOnHover: true}).bindTooltip("<b>Morgantown High School</b>").addTo(ol_loc);
    L.marker(rc.unproject([1374,1016]), {icon: mark_pub, title: "Portside Pub", riseOnHover: true}).bindTooltip("<b>Portside Pub</b>").addTo(ol_loc);
    L.marker(rc.unproject([1420,1052]), {icon: mark_factory, title: "Mama Dolce's Food Processing", riseOnHover: true}).bindTooltip("<b>Mama Dolce's Food Processing</b>").addTo(ol_loc);
    L.marker(rc.unproject([1484,1061]), {icon: mark_va, title: "Vault-Tec University", riseOnHover: true}).bindTooltip("<b>Vault-Tec University</b>").addTo(ol_loc);
    L.marker(rc.unproject([1583,815]), {icon: mark_dam, title: "Grafton Dam", riseOnHover: true}).bindTooltip("<b>Grafton Dam</b>").addTo(ol_loc);
    L.marker(rc.unproject([1060,1239]), {icon: mark_houses, title: "Slocum Joe", riseOnHover: true}).bindTooltip("<b>Slocum Joe</b>").addTo(ol_loc);
    L.marker(rc.unproject([1129,1179]), {icon: mark_mine, title: "Gauley Mine", riseOnHover: true}).bindTooltip("<b>Gauley Mine</b>").addTo(ol_loc);
    L.marker(rc.unproject([1268,1258]), {icon: mark_arktos, title: "Arktos Pharma", riseOnHover: true}).bindTooltip("<b>Arktos Pharma</b>").addTo(ol_loc);
    L.marker(rc.unproject([1418,1316]), {icon: mark_factory, title: "Greg's Mine Supply", riseOnHover: true}).bindTooltip("<b>Greg's Mine Supply</b>").addTo(ol_loc);
    L.marker(rc.unproject([1626,1205]), {icon: mark_golf, title: "Bolton Greens", riseOnHover: true}).bindTooltip("<b>Bolton Greens</b>").addTo(ol_loc);
    L.marker(rc.unproject([900,1531]), {icon: mark_bridge, title: "New River Gorge Bridge - East", riseOnHover: true}).bindTooltip("<b>New River Gorge Bridge - East</b>").addTo(ol_loc);
    L.marker(rc.unproject([968,1561]), {icon: mark_cabin, title: "New River Gorge Resort", riseOnHover: true}).bindTooltip("<b>New River Gorge Resort</b>").addTo(ol_loc);
    L.marker(rc.unproject([1121,1452]), {icon: mark_town, title: "Sutton", riseOnHover: true}).bindTooltip("<b>Sutton</b>").addTo(ol_loc);
    L.marker(rc.unproject([1244,1501]), {icon: mark_lookout, title: "East Kanawha Lookout", riseOnHover: true}).bindTooltip("<b>East Kanawha Lookout</b>").addTo(ol_loc);
    L.marker(rc.unproject([1233,1430]), {icon: mark_town, title: "Helvetia", riseOnHover: true}).bindTooltip("<b>Helvetia</b>").addTo(ol_loc);
    L.marker(rc.unproject([1406,1403]), {icon: mark_plane, title: "Horizon's Rest", riseOnHover: true}).bindTooltip("<b>Horizon's Rest</b>").addTo(ol_loc);
    L.marker(rc.unproject([1506,1397]), {icon: mark_radiotower, title: "Relay Tower HN-B1-12", riseOnHover: true}).bindTooltip("<b>Relay Tower HN-B1-12</b>").addTo(ol_loc);
    L.marker(rc.unproject([1524,1508]), {icon: mark_snow, title: "White Powder Winter Sports", riseOnHover: true}).bindTooltip("<b>White Powder Winter Sports</b>").addTo(ol_loc);
    L.marker(rc.unproject([1321,1580]), {icon: mark_waterplant, title: 'Tygart Water Treatment', riseOnHover: true}).bindTooltip("<b>Tygart Water Treatment</b>").addTo(ol_loc);
    L.marker(rc.unproject([1288,1634]), {icon: mark_substation, title: 'Poseidon Power Substation PX-02', riseOnHover: true}).bindTooltip("<b>Poseidon Power Substation PX-02</b>").addTo(ol_loc);
    L.marker(rc.unproject([1036,1703]), {icon: mark_base, title: 'Camp McClintock', riseOnHover: true}).bindTooltip("<b>Camp McClintock</b>").addTo(ol_loc);
//
    L.marker(rc.unproject([498,1468]), {icon: mark_hotdog, title: 'Hillfolk Hotdogs', riseOnHover: true}).bindTooltip("<b>Hillfolk Hotdogs</b>").addTo(ol_loc);
    L.marker(rc.unproject([523,1490]), {icon: mark_substation, title: 'Poseidon Power Substation PX-01', riseOnHover: true}).bindTooltip("<b>Poseidon Power Substation PX-01</b>").addTo(ol_loc);
    L.marker(rc.unproject([220,1872]), {icon: mark_dock, title: 'Ohio River Adventures', riseOnHover: true}).bindTooltip("<b>Ohio River Adventures</b>").addTo(ol_loc);
    L.marker(rc.unproject([314,1791]), {icon: mark_cemetery, title: 'Kanawha County Cemetery', riseOnHover: true}).bindTooltip("<b>Kanawha County Cemetery</b>").addTo(ol_loc);
    L.marker(rc.unproject([430,1657]), {icon: mark_farm, title: 'Silva Homestead', riseOnHover: true}).bindTooltip("<b>Silva Homestead</b>").addTo(ol_loc);
    L.marker(rc.unproject([617,1667]), {icon: mark_tree, title: 'Orwell Orchards', riseOnHover: true}).bindTooltip("<b>Orwell Orchards</b>").addTo(ol_loc);
    L.marker(rc.unproject([670,1698]), {icon: mark_bridge, title: 'New River Gorge Bridge - West', riseOnHover: true}).bindTooltip("<b>New River Gorge Bridge - West</b>").addTo(ol_loc);
    L.marker(rc.unproject([670,1730]), {icon: mark_cream, title: 'Cow Spots Creamery', riseOnHover: true}).bindTooltip("<b>Cow Spots Creamery</b>").addTo(ol_loc);
    L.marker(rc.unproject([310,1919]), {icon: mark_shack, title: 'Lewis & Sons Farming Supply', riseOnHover: true}).bindTooltip("<b>Lewis & Sons Farming Supply</b>").addTo(ol_loc);
    L.marker(rc.unproject([407,2009]), {icon: mark_nuka, title: 'Kanawha Nuka Cola Plant', riseOnHover: true}).bindTooltip("<b>Kanawha Nuka Cola Plant</b>").addTo(ol_loc);
    L.marker(rc.unproject([445,1847]), {icon: mark_cabin, title: 'Camp Adams', riseOnHover: true}).bindTooltip("<b>Camp Adams</b>").addTo(ol_loc);
    L.marker(rc.unproject([484,1847]), {icon: mark_lookout, title: 'Camp Adams Lookout', riseOnHover: true}).bindTooltip("<b>Camp Adams Lookout</b>").addTo(ol_loc);
    L.marker(rc.unproject([616,1845]), {icon: mark_teapot, title: 'The Giant Teapot', riseOnHover: true}).bindTooltip("<b>The Giant Teapot</b>").addTo(ol_loc);
    L.marker(rc.unproject([615,1917]), {icon: mark_power, title: 'Poseidon Energy Plant WV-06', riseOnHover: true}).bindTooltip("<b>Poseidon Energy Plant WV-06</b>").addTo(ol_loc);
//
    L.marker(rc.unproject([796,2027]), {icon: mark_city, title: 'Charleston', riseOnHover: true}).bindTooltip("<b>Charleston</b>").addTo(ol_loc);
    L.marker(rc.unproject([722,1968]), {icon: mark_railyard, title: 'Charleston Railyard', riseOnHover: true}).bindTooltip("<b>Charleston Railyard</b>").addTo(ol_loc);
    L.marker(rc.unproject([736,2022]), {icon: mark_med, title: 'AVR Medical Center', riseOnHover: true}).bindTooltip("<b>AVR Medical Center</b>").addTo(ol_loc);
    L.marker(rc.unproject([787,1970]), {icon: mark_scraper, title: 'Hornwright Industrial Headquarters', riseOnHover: true}).bindTooltip("<b>Hornwright Industrial Headquarters</b>").addTo(ol_loc);
    L.marker(rc.unproject([805,1977]), {icon: mark_scraper, title: 'Charleston Herald', riseOnHover: true}).bindTooltip("<b>Charleston Herald</b>").addTo(ol_loc);
    L.marker(rc.unproject([807,2110]), {icon: mark_lodge, title: 'Charleston Fire Department', riseOnHover: true}).bindTooltip("<b>Charleston Fire Department</b>").addTo(ol_loc);
    L.marker(rc.unproject([895,2048]), {icon: mark_capital, title: 'Charleston Capitol Building', riseOnHover: true}).bindTooltip("<b>Charleston Capitol Building</b>").addTo(ol_loc);
    L.marker(rc.unproject([977,2044]), {icon: mark_factory, title: 'Summersville Dam', riseOnHover: true}).bindTooltip("<b>Summersville Dam</b>").addTo(ol_loc);
    L.marker(rc.unproject([1035,1929]), {icon: mark_dock, title: 'Summersville Docks', riseOnHover: true}).bindTooltip("<b>Summersville Docks</b>").addTo(ol_loc);
    L.marker(rc.unproject([1127,1908]), {icon: mark_city, title: 'New Gad', riseOnHover: true}).bindTooltip("<b>New Gad</b>").addTo(ol_loc);
    L.marker(rc.unproject([1236,1760]), {icon: mark_town, title: 'Summersville', riseOnHover: true}).bindTooltip("<b>Summersville</b>").addTo(ol_loc);
    L.marker(rc.unproject([1106,2037]), {icon: mark_manor, title: 'Burdette Manor', riseOnHover: true}).bindTooltip("<b>Burdette Manor</b>").addTo(ol_loc);
    L.marker(rc.unproject([1163,1993]), {icon: mark_mansion, title: 'Sugarmaple', riseOnHover: true}).bindTooltip("<b>Sugarmaple</b>").addTo(ol_loc);
    L.marker(rc.unproject([1187,1960]), {icon: mark_cabin, title: 'Overlook Cabin', riseOnHover: true}).bindTooltip("<b>Overlook Cabin</b>").addTo(ol_loc);
    L.marker(rc.unproject([1045,2127]), {icon: mark_manor, title: 'Riverside Manor', riseOnHover: true}).bindTooltip("<b>Riverside Manor</b>").addTo(ol_loc);
    L.marker(rc.unproject([1155,2068]), {icon: mark_manor, title: 'Torrance House', riseOnHover: true}).bindTooltip("<b>Torrance House</b>").addTo(ol_loc);
    L.marker(rc.unproject([1208,2018]), {icon: mark_manor, title: 'Hornwright Summer Villa', riseOnHover: true}).bindTooltip("<b>Hornwright Summer Villa</b>").addTo(ol_loc);
//Toxic Valley
    L.marker(rc.unproject([925,118]), {icon: mark_raider, title: 'The Crosshair', riseOnHover: true}).bindTooltip("<b>The Crosshair</b>").addTo(ol_loc);
    L.marker(rc.unproject([880,329]), {icon: mark_manor, title: 'Clancy Manor', riseOnHover: true}).bindTooltip("<b>Clancy Manor</b>").addTo(ol_loc);
    L.marker(rc.unproject([878,491]), {icon: mark_farm, title: 'Cobbleton Farm', riseOnHover: true}).bindTooltip("<b>Cobbleton Farm</b>").addTo(ol_loc);
    L.marker(rc.unproject([820,580]), {icon: mark_cream, title: "Lady Janet's Soft Serve", riseOnHover: true}).bindTooltip("<b>Lady Janet's Soft Serve</b>").addTo(ol_loc);
    L.marker(rc.unproject([1046,356]), {icon: mark_golf, title: "Hemlock Holes", riseOnHover: true}).bindTooltip("<b>Hemlock Holes</b>").addTo(ol_loc);
    L.marker(rc.unproject([1004,585]), {icon: mark_farm, title: 'Becker Farm', riseOnHover: true}).bindTooltip("<b>Becker Farm</b>").addTo(ol_loc);
    L.marker(rc.unproject([1166,585]), {icon: mark_town, title: 'Grafton', riseOnHover: true}).bindTooltip("<b>Grafton</b>").addTo(ol_loc);
    L.marker(rc.unproject([1311,722]), {icon: mark_prison, title: 'Eastern Regional Penitentiary', riseOnHover: true}).bindTooltip("<b>Eastern Regional Penitentiary</b>").addTo(ol_loc);
    L.marker(rc.unproject([1324,570]), {icon: mark_farm, title: 'Smith Farm', riseOnHover: true}).bindTooltip("<b>Smith Farm</b>").addTo(ol_loc);
    L.marker(rc.unproject([1228,411]), {icon: mark_farm, title: 'Woods Estate', riseOnHover: true}).bindTooltip("<b>Woods Estate</b>").addTo(ol_loc);
    L.marker(rc.unproject([1340,266]), {icon: mark_fair, title: "Wavy Willard's Water Park", riseOnHover: true}).bindTooltip("<b>Wavy Willard's Water Park</b>").addTo(ol_loc);
    L.marker(rc.unproject([1421,293]), {icon: mark_hotdog, title: 'Willard Corporate Housing', riseOnHover: true}).bindTooltip("<b>Willard Corporate Housing</b>").addTo(ol_loc);
    L.marker(rc.unproject([1368,447]), {icon: mark_town, title: 'Clarksburg', riseOnHover: true}).bindTooltip("<b>Clarksburg</b>").addTo(ol_loc);
    L.marker(rc.unproject([1420,454]), {icon: mark_lodge, title: 'Clarksburg Shooting Club', riseOnHover: true}).bindTooltip("<b>Clarksburg Shooting Club</b>").addTo(ol_loc);
    L.marker(rc.unproject([1433,389]), {icon: mark_pond, title: 'Toxic Dried Lakebed', riseOnHover: true}).bindTooltip("<b>Toxic Dried Lakebed</b>").addTo(ol_loc);
    L.marker(rc.unproject([1458,354]), {icon: mark_cabin, title: 'Kiddie Corner Cabins', riseOnHover: true}).bindTooltip("<b>Kiddie Corner Cabins</b>").addTo(ol_loc);
    L.marker(rc.unproject([1564,342]), {icon: mark_houses, title: 'Black Bear Lodge', riseOnHover: true}).bindTooltip("<b>Black Bear Lodge</b>").addTo(ol_loc);
    L.marker(rc.unproject([1580,413]), {icon: mark_farm, title: 'Graninger Farm', riseOnHover: true}).bindTooltip("<b>Graninger Farm</b>").addTo(ol_loc);
    L.marker(rc.unproject([1500,648]), {icon: mark_lookout, title: 'Pioneer Scout Lookout', riseOnHover: true}).bindTooltip("<b>Pioneer Scout Lookout</b>").addTo(ol_loc);
    L.marker(rc.unproject([1556,662]), {icon: mark_cabin, title: 'Pioneer Scout Camp', riseOnHover: true}).bindTooltip("<b>Pioneer Scout Camp</b>").addTo(ol_loc);
    L.marker(rc.unproject([1654,691]), {icon: mark_factory, title: 'Grafton Steel', riseOnHover: true}).bindTooltip("<b>Grafton Steel</b>").addTo(ol_loc);
    L.marker(rc.unproject([1742,660]), {icon: mark_substation, title: 'Poseidon Power Substation PX-03', riseOnHover: true}).bindTooltip("<b>Poseidon Power Substation PX-03</b>").addTo(ol_loc);
    L.marker(rc.unproject([1771,568]), {icon: mark_statue, title: 'Colonel Kelly Monument', riseOnHover: true}).bindTooltip("<b>Colonel Kelly Monument</b>").addTo(ol_loc);
    L.marker(rc.unproject([1788,435]), {icon: mark_waterplant, title: 'Philippi Battlefield Cemetery', riseOnHover: true}).bindTooltip("<b>Philippi Battlefield Cemetery</b>").addTo(ol_loc);
    L.marker(rc.unproject([1695,236]), {icon: mark_spacestation, title: 'Crashed Space Station', riseOnHover: true}).bindTooltip("<b>Crashed Space Station</b>").addTo(ol_loc);
    L.marker(rc.unproject([1865,213]), {icon: mark_raider, title: 'Knife Edge', riseOnHover: true}).bindTooltip("<b>Knife Edge</b>").addTo(ol_loc);
    L.marker(rc.unproject([1953,268]), {icon: mark_fort, title: "Prickett's Fort", riseOnHover: true}).bindTooltip("<b>Prickett's Fort</b>").addTo(ol_loc);
//Ash Heap
    L.marker(rc.unproject([285,2191]), {icon: mark_fair, title: "Camden Park", riseOnHover: true}).bindTooltip("<b>Camden Park</b>").addTo(ol_loc);
    L.marker(rc.unproject([413,2230]), {icon: mark_quarry, title: "Brim Quarry", riseOnHover: true}).bindTooltip("<b>Brim Quarry</b>").addTo(ol_loc);
    L.marker(rc.unproject([385,2312]), {icon: mark_factory, title: "Hornwright Testing Site #04", riseOnHover: true}).bindTooltip("<b>Hornwright Testing Site #04</b>").addTo(ol_loc);
    L.marker(rc.unproject([594,2153]), {icon: mark_radiotower, title: "Relay Tower HG-B7-09", riseOnHover: true}).bindTooltip("<b>Relay Tower HG-B7-09</b>").addTo(ol_loc);
    L.marker(rc.unproject([655,2212]), {icon: mark_quarry, title: "Abandoned Mine Shaft 5", riseOnHover: true}).bindTooltip("<b>Abandoned Mine Shaft 5</b>").addTo(ol_loc);
    L.marker(rc.unproject([710,2212]), {icon: mark_quarry, title: "Belching Betty", riseOnHover: true}).bindTooltip("<b>Belching Betty</b>").addTo(ol_loc);
    L.marker(rc.unproject([741,2158]), {icon: mark_houses, title: "The Rusty Pick", riseOnHover: true}).bindTooltip("<b>The Rusty Pick</b>").addTo(ol_loc);
    L.marker(rc.unproject([754,2278]), {icon: mark_quarry, title: "Abandoned Mine Site Kittery", riseOnHover: true}).bindTooltip("<b>Abandoned Mine Site Kittery</b>").addTo(ol_loc);
    L.marker(rc.unproject([232,2516]), {icon: mark_town, title: "Beckley", riseOnHover: true}).bindTooltip("<b>Beckley</b>").addTo(ol_loc);
    L.marker(rc.unproject([193,2470]), {icon: mark_houses, title: "Sal's Grinders", riseOnHover: true}).bindTooltip("<b>Sal's Grinders</b>").addTo(ol_loc);
    L.marker(rc.unproject([204,2396]), {icon: mark_bunker, title: "Hornwright Air Purifier Site #04", riseOnHover: true}).bindTooltip("<b>Hornwright Air Purifier Site #04</b>").addTo(ol_loc);
    L.marker(rc.unproject([238,2597]), {icon: mark_hotdog, title: "Nicholson's End", riseOnHover: true}).bindTooltip("<b>Nicholson's End</b>").addTo(ol_loc);
    L.marker(rc.unproject([336,2414]), {icon: mark_quarry, title: "Abandoned Mine Shaft 4", riseOnHover: true}).bindTooltip("<b>Abandoned Mine Shaft 4</b>").addTo(ol_loc);
    L.marker(rc.unproject([556,2440]), {icon: mark_quarry, title: "Abandoned Mine Shaft Elaine", riseOnHover: true}).bindTooltip("<b>Abandoned Mine Shaft Elaine</b>").addTo(ol_loc);
    L.marker(rc.unproject([613,2481]), {icon: mark_trainyard, title: "Mount Blair Trainyard", riseOnHover: true}).bindTooltip("<b>Mount Blair Trainyard</b>").addTo(ol_loc);
    L.marker(rc.unproject([683,2412]), {icon: mark_quarry, title: "Abandoned Mine Shaft 6", riseOnHover: true}).bindTooltip("<b>Abandoned Mine Shaft 6</b>").addTo(ol_loc);
    L.marker(rc.unproject([835,2449]), {icon: mark_hotdog, title: "Rollins Work Camp", riseOnHover: true}).bindTooltip("<b>Rollins Work Camp</b>").addTo(ol_loc);
//
    L.marker(rc.unproject([781,2178]), {icon: mark_bunker, title: "Hornwright Air Purifier Site #01", riseOnHover: true}).bindTooltip("<b>Hornwright Air Purifier Site #01</b>").addTo(ol_loc);
    L.marker(rc.unproject([929,2342]), {icon: mark_quarry, title: "The Burning Mine", riseOnHover: true}).bindTooltip("<b>The Burning Mine</b>").addTo(ol_loc);
    L.marker(rc.unproject([985,2220]), {icon: mark_perch, title: "Widow's Perch", riseOnHover: true}).bindTooltip("<b>Widow's Perch</b>").addTo(ol_loc);
    L.marker(rc.unproject([1106,2142]), {icon: mark_raider, title: "Bleeding Kate's Grindhouse", riseOnHover: true}).bindTooltip("<b>Bleeding Kate's Grindhouse</b>").addTo(ol_loc);
    L.marker(rc.unproject([1200,2231]), {icon: mark_radiotower, title: "Relay Tower DP-B5-21", riseOnHover: true}).bindTooltip("<b>Relay Tower DP-B5-21</b>").addTo(ol_loc);
    L.marker(rc.unproject([1234,2271]), {icon: mark_mine, title: "Uncanny Caverns", riseOnHover: true}).bindTooltip("<b>Uncanny Caverns</b>").addTo(ol_loc);
    L.marker(rc.unproject([1325,2216]), {icon: mark_statue, title: "Miners Monument", riseOnHover: true}).bindTooltip("<b>Miners Monument</b>").addTo(ol_loc);
    L.marker(rc.unproject([1349,2390]), {icon: mark_perch, title: "Bastion Park", riseOnHover: true}).bindTooltip("<b>Bastion Park</b>").addTo(ol_loc);
    L.marker(rc.unproject([1019,2519]), {icon: mark_quarry, title: "Abandoned Mine Shaft 3", riseOnHover: true}).bindTooltip("<b>Abandoned Mine Shaft 3</b>").addTo(ol_loc);
    L.marker(rc.unproject([1049,2352]), {icon: mark_bunker, title: "Hornwright Air Purifier Site #02", riseOnHover: true}).bindTooltip("<b>Hornwright Air Purifier Site #02</b>").addTo(ol_loc);
    L.marker(rc.unproject([1162,2355]), {icon: mark_cemetery, title: "Pleasant Hills Cemetery", riseOnHover: true}).bindTooltip("<b>Pleasant Hills Cemetery</b>").addTo(ol_loc);
    L.marker(rc.unproject([1110,2429]), {icon: mark_town, title: "Lewisburg", riseOnHover: true}).bindTooltip("<b>Lewisburg</b>").addTo(ol_loc);
    L.marker(rc.unproject([1070,2480]), {icon: mark_fair, title: "Lake Reynolds", riseOnHover: true}).bindTooltip("<b>Lake Reynolds</b>").addTo(ol_loc);
    L.marker(rc.unproject([1227,2484]), {icon: mark_quarry, title: "Big Bend Tunnel West", riseOnHover: true}).bindTooltip("<b>Big Bend Tunnel West</b>").addTo(ol_loc);
    L.marker(rc.unproject([1227,2525]), {icon: mark_substation, title: "Monongah Power Substation MZ-03", riseOnHover: true}).bindTooltip("<b>Monongah Power Substation MZ-03</b>").addTo(ol_loc);
    L.marker(rc.unproject([402,2705]), {icon: mark_factory, title: "Hornwright Testing Site #02", riseOnHover: true}).bindTooltip("<b>Hornwright Testing Site #02</b>").addTo(ol_loc);
    L.marker(rc.unproject([455,2583]), {icon: mark_town, title: "Welch", riseOnHover: true}).bindTooltip("<b>Welch</b>").addTo(ol_loc);
    L.marker(rc.unproject([542,2669]), {icon: mark_factory, title: "Abandoned Mine Shaft 1", riseOnHover: true}).bindTooltip("<b>Abandoned Mine Shaft 1</b>").addTo(ol_loc);
    L.marker(rc.unproject([663,2666]), {icon: mark_quarry, title: "AMS Testing Site", riseOnHover: true}).bindTooltip("<b>AMS Testing Site</b>").addTo(ol_loc);
    L.marker(rc.unproject([653,2568]), {icon: mark_bunker, title: "Hornwright Air Purifier Site #03", riseOnHover: true}).bindTooltip("<b>Hornwright Air Purifier Site #03</b>").addTo(ol_loc);
    L.marker(rc.unproject([737,2567]), {icon: mark_rocket, title: "Red Rocket Filling Station", riseOnHover: true}).bindTooltip("<b>Red Rocket Filling Station</b>").addTo(ol_loc);
    L.marker(rc.unproject([854,2606]), {icon: mark_quarry, title: "Abandoned Mine Shaft 2", riseOnHover: true}).bindTooltip("<b>Abandoned Mine Shaft 2</b>").addTo(ol_loc);
    L.marker(rc.unproject([817,2696]), {icon: mark_factory, title: "Hornwright Testing Site #03", riseOnHover: true}).bindTooltip("<b>Hornwright Testing Site #03</b>").addTo(ol_loc);
    L.marker(rc.unproject([744,2819]), {icon: mark_camp, title: "Striker Row", riseOnHover: true}).bindTooltip("<b>Striker Row</b>").addTo(ol_loc);
    L.marker(rc.unproject([964,2593]), {icon: mark_scraper, title: "Unfinished Mansion", riseOnHover: true}).bindTooltip("<b>Unfinished Mansion</b>").addTo(ol_loc);
    L.marker(rc.unproject([1012,2711]), {icon: mark_scraper, title: "Garrahan Estate", riseOnHover: true}).bindTooltip("<b>Garrahan Estate</b>").addTo(ol_loc);
    L.marker(rc.unproject([1134,2680]), {icon: mark_scraper, title: "Hornwright Estate", riseOnHover: true}).bindTooltip("<b>Hornwright Estate</b>").addTo(ol_loc);
    L.marker(rc.unproject([1018,2759]), {icon: mark_headquarters, title: "Garrahan Mining Headquarters", riseOnHover: true}).bindTooltip("<b>Garrahan Mining Headquarters</b>").addTo(ol_loc);
//Savage Divide
    L.marker(rc.unproject([1958,448]), {icon: mark_palace, title: "Palace of the Winding Path", riseOnHover: true}).bindTooltip("<b>Palace of the Winding Path</b>").addTo(ol_loc);
    L.marker(rc.unproject([2466,368]), {icon: mark_cabin, title: "Bailey Family Cabin", riseOnHover: true}).bindTooltip("<b>Bailey Family Cabin</b>").addTo(ol_loc);
    L.marker(rc.unproject([1826,669]), {icon: mark_base, title: "Site Bravo", riseOnHover: true}).bindTooltip("<b>Site Bravo</b>").addTo(ol_loc);
    L.marker(rc.unproject([2013,642]), {icon: mark_substation, title: "Monongah Power Substation MZ-01", riseOnHover: true}).bindTooltip("<b>Monongah Power Substation MZ-01</b>").addTo(ol_loc);
    L.marker(rc.unproject([2134,704]), {icon: mark_snow, title: "Sunnytop Ski Lanes", riseOnHover: true}).bindTooltip("<b>Sunnytop Ski Lanes</b>").addTo(ol_loc);
    L.marker(rc.unproject([2222,596]), {icon: mark_snow, title: "Sunnytop Ski Lanes Base Lodge", riseOnHover: true}).bindTooltip("<b>Sunnytop Ski Lanes Base Lodge</b>").addTo(ol_loc);
    L.marker(rc.unproject([2297,577]), {icon: mark_lookout, title: "North Mountain Lookout", riseOnHover: true}).bindTooltip("<b>North Mountain Lookout</b>").addTo(ol_loc);
    L.marker(rc.unproject([2331,848]), {icon: mark_mine, title: "Hopewell Cave", riseOnHover: true}).bindTooltip("<b>Hopewell Cave</b>").addTo(ol_loc);
    L.marker(rc.unproject([2423,712]), {icon: mark_pumpkin, title: "Pumpkin House", riseOnHover: true}).bindTooltip("<b>Pumpkin House</b>").addTo(ol_loc);
    L.marker(rc.unproject([1721,929]), {icon: mark_manor, title: "Ingram Mansion", riseOnHover: true}).bindTooltip("<b>Ingram Mansion</b>").addTo(ol_loc);
    L.marker(rc.unproject([1822,905]), {icon: mark_perch, title: "Monongah Overlook", riseOnHover: true}).bindTooltip("<b>Monongah Overlook</b>").addTo(ol_loc);
    L.marker(rc.unproject([1939,840]), {icon: mark_mine, title: "Monongah Mine", riseOnHover: true}).bindTooltip("<b>Monongah Mine</b>").addTo(ol_loc);
    L.marker(rc.unproject([1780,1134]), {icon: mark_power, title: "Monongah Power Plant", riseOnHover: true}).bindTooltip("<b>Monongah Power Plant</b>").addTo(ol_loc);
    L.marker(rc.unproject([1936,1033]), {icon: mark_town, title: "Monongah", riseOnHover: true}).bindTooltip("<b>Monongah</b>").addTo(ol_loc);
    L.marker(rc.unproject([2098,1100]), {icon: mark_observatory, title: "Observatory", riseOnHover: true}).bindTooltip("<b>Observatory</b>").addTo(ol_loc);
    L.marker(rc.unproject([2165,910]), {icon: mark_hotdog, title: "Ammo Dump", riseOnHover: true}).bindTooltip("<b>Ammo Dump</b>").addTo(ol_loc);
    L.marker(rc.unproject([2241,966]), {icon: mark_hotdog, title: "Sons of Dane Compound", riseOnHover: true}).bindTooltip("<b>Sons of Dane Compound</b>").addTo(ol_loc);
    L.marker(rc.unproject([2275,1037]), {icon: mark_radiotower, title: "Relay Tower LW-B1-22", riseOnHover: true}).bindTooltip("<b>Relay Tower LW-B1-22</b>").addTo(ol_loc);
    L.marker(rc.unproject([2334,978]), {icon: mark_camp, title: "Sylvie & Sons Logging Camp", riseOnHover: true}).bindTooltip("<b>Sylvie & Sons Logging Camp</b>").addTo(ol_loc);
//
    L.marker(rc.unproject([1903,1238]), {icon: mark_cabin, title: "Seneca Rocks Visitor Center", riseOnHover: true}).bindTooltip("<b>Seneca Rocks Visitor Center</b>").addTo(ol_loc);
    L.marker(rc.unproject([2007,1257]), {icon: mark_rocks, title: "Seneca Rocks", riseOnHover: true}).bindTooltip("<b>Seneca Rocks</b>").addTo(ol_loc);
    L.marker(rc.unproject([2057,1358]), {icon: mark_raider, title: "The Sludge Hole", riseOnHover: true}).bindTooltip("<b>The Sludge Hole</b>").addTo(ol_loc);
    L.marker(rc.unproject([2141,1263]), {icon: mark_raider, title: "Seneca Gang Camp", riseOnHover: true}).bindTooltip("<b>Seneca Gang Camp</b>").addTo(ol_loc);
    L.marker(rc.unproject([2135,1328]), {icon: mark_mine, title: "Wendigo Cave", riseOnHover: true}).bindTooltip("<b>Wendigo Cave</b>").addTo(ol_loc);
    L.marker(rc.unproject([2243,1316]), {icon: mark_cabin, title: "Autumn Acre Cabin", riseOnHover: true}).bindTooltip("<b>Autumn Acre Cabin</b>").addTo(ol_loc);
    L.marker(rc.unproject([2351,1363]), {icon: mark_shack, title: "Toxic Larry's Meat 'N Go", riseOnHover: true}).bindTooltip("<b>Toxic Larry's Meat 'N Go</b>").addTo(ol_loc);
    L.marker(rc.unproject([1821,1377]), {icon: mark_raider, title: "Skullbone Vantage", riseOnHover: true}).bindTooltip("<b>Skullbone Vantage</b>").addTo(ol_loc);
    L.marker(rc.unproject([1867,1456]), {icon: mark_raider, title: "Pleasant Valley Cabins", riseOnHover: true}).bindTooltip("<b>Pleasant Valley Cabins</b>").addTo(ol_loc);
    L.marker(rc.unproject([1816,1526]), {icon: mark_top, title: "Top of the World", riseOnHover: true}).bindTooltip("<b>Top of the World</b>").addTo(ol_loc);
    L.marker(rc.unproject([1868,1531]), {icon: mark_snow, title: "Pleasant Valley Ski Resort", riseOnHover: true}).bindTooltip("<b>Pleasant Valley Ski Resort</b>").addTo(ol_loc);
    L.marker(rc.unproject([1806,1598]), {icon: mark_raider, title: "South Cutthroat Camp", riseOnHover: true}).bindTooltip("<b>South Cutthroat Camp</b>").addTo(ol_loc);
    L.marker(rc.unproject([2024,1457]), {icon: mark_raider, title: "North Cutthroat Camp", riseOnHover: true}).bindTooltip("<b>North Cutthroat Camp</b>").addTo(ol_loc);
    L.marker(rc.unproject([2053,1513]), {icon: mark_lookout, title: "Central Mountain Lookout", riseOnHover: true}).bindTooltip("<b>Central Mountain Lookout</b>").addTo(ol_loc);
    L.marker(rc.unproject([2147,1494]), {icon: mark_hotdog, title: "Yellow Sandy's Still", riseOnHover: true}).bindTooltip("<b>Yellow Sandy's Still</b>").addTo(ol_loc);
    L.marker(rc.unproject([1524,1707]), {icon: mark_perch, title: "Cliffwatch", riseOnHover: true}).bindTooltip("<b>Cliffwatch</b>").addTo(ol_loc);
    L.marker(rc.unproject([1624,1878]), {icon: mark_disposal, title: "Safe 'N Clean Disposal", riseOnHover: true}).bindTooltip("<b>Safe 'N Clean Disposal</b>").addTo(ol_loc);
    L.marker(rc.unproject([1633,1793]), {icon: mark_trainyard, title: "New Appalachian Central Trainyard", riseOnHover: true}).bindTooltip("<b>New Appalachian Central Trainyard</b>").addTo(ol_loc);
    L.marker(rc.unproject([1702,1691]), {icon: mark_trainyard, title: "98 NAR Regional", riseOnHover: true}).bindTooltip("<b>98 NAR Regional</b>").addTo(ol_loc);
    L.marker(rc.unproject([1866,1707]), {icon: mark_farm, title: "Beckwith Farm", riseOnHover: true}).bindTooltip("<b>Beckwith Farm</b>").addTo(ol_loc);
    L.marker(rc.unproject([1947,1759]), {icon: mark_shack, title: "Big Fred's BBQ Shack", riseOnHover: true}).bindTooltip("<b>Big Fred's BBQ Shack</b>").addTo(ol_loc);
    L.marker(rc.unproject([2081,1726]), {icon: mark_base, title: "Site Alpha", riseOnHover: true}).bindTooltip("<b>Site Alpha</b>").addTo(ol_loc);
    L.marker(rc.unproject([1357,2015]), {icon: mark_lookout, title: "Whitespring Lookout", riseOnHover: true}).bindTooltip("<b>Whitespring Lookout</b>").addTo(ol_loc);
    L.marker(rc.unproject([1427,1985]), {icon: mark_golf, title: "Whitespring Golf Club", riseOnHover: true}).bindTooltip("<b>Whitespring Golf Club</b>").addTo(ol_loc);
    L.marker(rc.unproject([1598,1989]), {icon: mark_resort, title: "Whitespring Resort", riseOnHover: true}).bindTooltip("<b>Whitespring Resort</b>").addTo(ol_loc);
    L.marker(rc.unproject([1598,2035]), {icon: mark_lodge, title: "Whitespring Service Entrance", riseOnHover: true}).bindTooltip("<b>Whitespring Service Entrance</b>").addTo(ol_loc);
    L.marker(rc.unproject([1571,2086]), {icon: mark_bunker, title: "Whitespring Bunker", riseOnHover: true}).bindTooltip("<b>Whitespring Bunker</b>").addTo(ol_loc);
//
    L.marker(rc.unproject([1693,2055]), {icon: mark_substation, title: "Monongah Power Substation MZ-02", riseOnHover: true}).bindTooltip("<b>Monongah Power Substation MZ-02</b>").addTo(ol_loc);
    L.marker(rc.unproject([1704,1956]), {icon: mark_mine, title: "Blackwater Mine", riseOnHover: true}).bindTooltip("<b>Blackwater Mine</b>").addTo(ol_loc);
    L.marker(rc.unproject([1848,1906]), {icon: mark_cabin, title: "Middle Mountain Cabins", riseOnHover: true}).bindTooltip("<b>Middle Mountain Cabins</b>").addTo(ol_loc);
    L.marker(rc.unproject([1924,2007]), {icon: mark_disposal, title: "Emmett Mountain Disposal Site", riseOnHover: true}).bindTooltip("<b>Emmett Mountain Disposal Site</b>").addTo(ol_loc);
    L.marker(rc.unproject([2051,2099]), {icon: mark_raider, title: "Ripper Alley", riseOnHover: true}).bindTooltip("<b>Ripper Alley</b>").addTo(ol_loc);
    L.marker(rc.unproject([2147,1904]), {icon: mark_dish, title: "National Isolated Radio Array", riseOnHover: true}).bindTooltip("<b>National Isolated Radio Array</b>").addTo(ol_loc);
    L.marker(rc.unproject([2367,1745]), {icon: mark_dish, title: "Sugar Grove", riseOnHover: true}).bindTooltip("<b>Sugar Grove</b>").addTo(ol_loc);
    L.marker(rc.unproject([2281,1966]), {icon: mark_dish, title: "National Radio Astronomy Research Center", riseOnHover: true}).bindTooltip("<b>National Radio Astronomy Research Center</b>").addTo(ol_loc);
    L.marker(rc.unproject([2151,2057]), {icon: mark_scraper, title: "West Tek Research Center", riseOnHover: true}).bindTooltip("<b>West Tek Research Center</b>").addTo(ol_loc);
    L.marker(rc.unproject([2231,2044]), {icon: mark_base, title: "US-13C Bivouac", riseOnHover: true}).bindTooltip("<b>US-13C Bivouac</b>").addTo(ol_loc);
    L.marker(rc.unproject([2346,2057]), {icon: mark_lookout, title: "East Mountain Lookout", riseOnHover: true}).bindTooltip("<b>East Mountain Lookout</b>").addTo(ol_loc);
    L.marker(rc.unproject([1600,2325]), {icon: mark_shack, title: "Mountainside Bed & Breakfast", riseOnHover: true}).bindTooltip("<b>Mountainside Bed & Breakfast</b>").addTo(ol_loc);
    L.marker(rc.unproject([1675,2127]), {icon: mark_perch, title: "The Vantage", riseOnHover: true}).bindTooltip("<b>The Vantage</b>").addTo(ol_loc);
    L.marker(rc.unproject([1807,2090]), {icon: mark_pond, title: "Solomon's Pond", riseOnHover: true}).bindTooltip("<b>Solomon's Pond</b>").addTo(ol_loc);
    L.marker(rc.unproject([1869,2174]), {icon: mark_pond, title: "Twin Lakes", riseOnHover: true}).bindTooltip("<b>Twin Lakes</b>").addTo(ol_loc);
    L.marker(rc.unproject([1923,2116]), {icon: mark_cabin, title: "Investigator's Cabin", riseOnHover: true}).bindTooltip("<b>Investigator's Cabin</b>").addTo(ol_loc);
    L.marker(rc.unproject([1968,2279]), {icon: mark_town, title: "Huntersville", riseOnHover: true}).bindTooltip("<b>Huntersville</b>").addTo(ol_loc);
    L.marker(rc.unproject([2109,2258]), {icon: mark_rocks, title: "Devil's Backbone", riseOnHover: true}).bindTooltip("<b>Devil's Backbone</b>").addTo(ol_loc);
    L.marker(rc.unproject([2121,2336]), {icon: mark_raider, title: "The Freak Show", riseOnHover: true}).bindTooltip("<b>The Freak Show</b>").addTo(ol_loc);
    L.marker(rc.unproject([1548,2432]), {icon: mark_base, title: "Site Charlie", riseOnHover: true}).bindTooltip("<b>Site Charlie</b>").addTo(ol_loc);
    L.marker(rc.unproject([1550,2462]), {icon: mark_waterplant, title: "R&G Processing Services", riseOnHover: true}).bindTooltip("<b>R&G Processing Services</b>").addTo(ol_loc);
    L.marker(rc.unproject([1720,2545]), {icon: mark_pond, title: "Spruce Knob Channels", riseOnHover: true}).bindTooltip("<b>Spruce Knob Channels</b>").addTo(ol_loc);
    L.marker(rc.unproject([1768,2494]), {icon: mark_pond, title: "Spruce Knob Lake", riseOnHover: true}).bindTooltip("<b>Spruce Knob Lake</b>").addTo(ol_loc);
    L.marker(rc.unproject([1809,2437]), {icon: mark_tree, title: "Spruce Knob Campground", riseOnHover: true}).bindTooltip("<b>Spruce Knob Campground</b>").addTo(ol_loc);
    L.marker(rc.unproject([2153,2526]), {icon: mark_monorail, title: "Monorail Elevator", riseOnHover: true}).bindTooltip("<b>Monorail Elevator</b>").addTo(ol_loc);
    L.marker(rc.unproject([2147,2606]), {icon: mark_mine, title: "Lucky Hole Mine", riseOnHover: true}).bindTooltip("<b>Lucky Hole Mine</b>").addTo(ol_loc);
    L.marker(rc.unproject([1340,2822]), {icon: mark_hotdog, title: "Dent & Sons Construction", riseOnHover: true}).bindTooltip("<b>Dent & Sons Construction</b>").addTo(ol_loc);
    L.marker(rc.unproject([1429,2651]), {icon: mark_perch, title: "Scenic Overlook", riseOnHover: true}).bindTooltip("<b>Scenic Overlook</b>").addTo(ol_loc);
    L.marker(rc.unproject([1886,2743]), {icon: mark_pond, title: "Lake Eloise", riseOnHover: true}).bindTooltip("<b>Lake Eloise</b>").addTo(ol_loc);
    L.marker(rc.unproject([2081,2764]), {icon: mark_radiotower, title: "Relay Tower EL-B1-02", riseOnHover: true}).bindTooltip("<b>Relay Tower EL-B1-02</b>").addTo(ol_loc);
    L.marker(rc.unproject([2058,2896]), {icon: mark_cabin, title: "Johnson's Acre", riseOnHover: true}).bindTooltip("<b>Johnson's Acre</b>").addTo(ol_loc);
//The Mire
    L.marker(rc.unproject([2668,562]), {icon: mark_houses, title: "Freddy Fear's House of Scares", riseOnHover: true}).bindTooltip("<b>Freddy Fear's House of Scares</b>").addTo(ol_loc);
    L.marker(rc.unproject([2611,691]), {icon: mark_lookout, title: "East Ridge Lookout", riseOnHover: true}).bindTooltip("<b>East Ridge Lookout</b>").addTo(ol_loc);
    L.marker(rc.unproject([2634,722]), {icon: mark_bunker, title: "Abandoned Bunker", riseOnHover: true}).bindTooltip("<b>Abandoned Bunker</b>").addTo(ol_loc);
    L.marker(rc.unproject([2662,741]), {icon: mark_shack, title: "Hunter's Shack", riseOnHover: true}).bindTooltip("<b>Hunter's Shack</b>").addTo(ol_loc);
    L.marker(rc.unproject([2710,736]), {icon: mark_shack, title: "Southhampton Estate", riseOnHover: true}).bindTooltip("<b>Southhampton Estate</b>").addTo(ol_loc);
    L.marker(rc.unproject([2725,695]), {icon: mark_pond, title: "Highland Marsh", riseOnHover: true}).bindTooltip("<b>Highland Marsh</b>").addTo(ol_loc);
    L.marker(rc.unproject([2822,659]), {icon: mark_bunker, title: "Abbie's Bunker", riseOnHover: true}).bindTooltip("<b>Abbie's Bunker</b>").addTo(ol_loc);
    L.marker(rc.unproject([2904,610]), {icon: mark_pond, title: "Gnarled Shallows", riseOnHover: true}).bindTooltip("<b>Gnarled Shallow</b>").addTo(ol_loc);
    L.marker(rc.unproject([2646,842]), {icon: mark_pond, title: "Gulper Lagoon", riseOnHover: true}).bindTooltip("<b>Gulper Lagoon</b>").addTo(ol_loc);
    L.marker(rc.unproject([2695,917]), {icon: mark_bunker, title: "Ella Ames' Bunker", riseOnHover: true}).bindTooltip("<b>Ella Ames' Bunker</b>").addTo(ol_loc);
    L.marker(rc.unproject([2748,878]), {icon: mark_houses, title: "Excelsior Model Home", riseOnHover: true}).bindTooltip("<b>Excelsior Model Home</b>").addTo(ol_loc);
    L.marker(rc.unproject([2484,1133]), {icon: mark_town, title: "Mosstown", riseOnHover: true}).bindTooltip("<b>Mosstown</b>").addTo(ol_loc);
    L.marker(rc.unproject([2572,992]), {icon: mark_lookout, title: "Dolly Sods Lookout", riseOnHover: true}).bindTooltip("<b>Dolly Sods Lookout</b>").addTo(ol_loc);
    L.marker(rc.unproject([2610,1022]), {icon: mark_tree, title: "Dolly Sods Wilderness", riseOnHover: true}).bindTooltip("<b>Dolly Sods Wilderness</b>").addTo(ol_loc);
    L.marker(rc.unproject([2534,1228]), {icon: mark_plane, title: "Crashed Plane", riseOnHover: true}).bindTooltip("<b>Crashed Plane</b>").addTo(ol_loc);
    L.marker(rc.unproject([2648,1155]), {icon: mark_bunker, title: "Carson Family Bunker", riseOnHover: true}).bindTooltip("<b>Carson Family Bunker</b>").addTo(ol_loc);
    L.marker(rc.unproject([2818,1042]), {icon: mark_dam, title: "Crevasse Dam", riseOnHover: true}).bindTooltip("<b>Crevasse Dam</b>").addTo(ol_loc);
    L.marker(rc.unproject([2892,925]), {icon: mark_power, title: "Thunder Mountain Power Plant", riseOnHover: true}).bindTooltip("<b>Thunder Mountain Power Plant</b>").addTo(ol_loc);
    L.marker(rc.unproject([2769,1190]), {icon: mark_waterplant, title: "Dyer Chemical", riseOnHover: true}).bindTooltip("<b>Dyer Chemical</b>").addTo(ol_loc);
    L.marker(rc.unproject([2846,1222]), {icon: mark_bunker, title: "Raleigh Clay's Bunker", riseOnHover: true}).bindTooltip("<b>Raleigh Clay's Bunker</b>").addTo(ol_loc);
    L.marker(rc.unproject([2965,1150]), {icon: mark_factory, title: "Braxson's Quality Medical Supplies", riseOnHover: true}).bindTooltip("<b>Braxson's Quality Medical Supplies</b>").addTo(ol_loc);
    L.marker(rc.unproject([2449,1429]), {icon: mark_town, title: "Berkeley Springs", riseOnHover: true}).bindTooltip("<b>Berkeley Springs</b>").addTo(ol_loc);
    L.marker(rc.unproject([2571,1371]), {icon: mark_town, title: "Big Maw", riseOnHover: true}).bindTooltip("<b>Big Maw</b>").addTo(ol_loc);
    L.marker(rc.unproject([2663,1334]), {icon: mark_town, title: "Treehouse Village", riseOnHover: true}).bindTooltip("<b>Treehouse Village</b>").addTo(ol_loc);
    L.marker(rc.unproject([2784,1353]), {icon: mark_church, title: "Haven Church", riseOnHover: true}).bindTooltip("<b>Haven Church</b>").addTo(ol_loc);
//
    L.marker(rc.unproject([2376,1584]), {icon: mark_mine, title: "Hawke's Refuge", riseOnHover: true}).bindTooltip("<b>Hawke's Refuge</b>").addTo(ol_loc);
    L.marker(rc.unproject([2503,1630]), {icon: mark_cabin, title: "Sunday Brothers' Cabin", riseOnHover: true}).bindTooltip("<b>Sunday Brothers' Cabin</b>").addTo(ol_loc);
    L.marker(rc.unproject([2548,1536]), {icon: mark_substation, title: "Thunder Mountain Substation TM-01", riseOnHover: true}).bindTooltip("<b>Thunder Mountain Substation TM-01</b>").addTo(ol_loc);
    L.marker(rc.unproject([2659,1613]), {icon: mark_town, title: "Harpers Ferry", riseOnHover: true}).bindTooltip("<b>Harpers Ferry</b>").addTo(ol_loc);
    L.marker(rc.unproject([2753,1442]), {icon: mark_houses, title: "Southern Belle Motel", riseOnHover: true}).bindTooltip("<b>Southern Belle Motel</b>").addTo(ol_loc);
    L.marker(rc.unproject([2841,1426]), {icon: mark_mine, title: "Abandoned Waste Dump", riseOnHover: true}).bindTooltip("<b>Abandoned Waste Dump</b>").addTo(ol_loc);
    L.marker(rc.unproject([2900,1536]), {icon: mark_town, title: "Tanagra Town", riseOnHover: true}).bindTooltip("<b>Tanagra Town</b>").addTo(ol_loc);
    L.marker(rc.unproject([2884,1633]), {icon: mark_bunker, title: "Ransacked Bunker", riseOnHover: true}).bindTooltip("<b>Ransacked Bunker</b>").addTo(ol_loc);
    L.marker(rc.unproject([2682,1751]), {icon: mark_rocket, title: "Big B's Rest Stop", riseOnHover: true}).bindTooltip("<b>Big B's Rest Stop</b>").addTo(ol_loc);
    L.marker(rc.unproject([2924,1729]), {icon: mark_headquarters, title: "Valley Galleria", riseOnHover: true}).bindTooltip("<b>Valley Galleria</b>").addTo(ol_loc);
    L.marker(rc.unproject([2693,1806]), {icon: mark_shack, title: "Treetops", riseOnHover: true}).bindTooltip("<b>Treetops</b>").addTo(ol_loc);
    L.marker(rc.unproject([2649,1914]), {icon: mark_headquarters, title: "Camp Venture", riseOnHover: true}).bindTooltip("<b>Camp Venture</b>").addTo(ol_loc);
    L.marker(rc.unproject([2875,1914]), {icon: mark_radiotower, title: "KMAX Transmission", riseOnHover: true}).bindTooltip("<b>KMAX Transmission</b>").addTo(ol_loc);
//Cranberry Bog
    L.marker(rc.unproject([2435,2081]), {icon: mark_quarry, title: "Kerwood Mine", riseOnHover: true}).bindTooltip("<b>Kerwood Mine</b>").addTo(ol_loc);
    L.marker(rc.unproject([2524,2058]), {icon: mark_base, title: "Firebase Major", riseOnHover: true}).bindTooltip("<b>Firebase Major</b>").addTo(ol_loc);
    L.marker(rc.unproject([2700,2027]), {icon: mark_base, title: "Firebase LT", riseOnHover: true}).bindTooltip("<b>Firebase LT</b>").addTo(ol_loc);
    L.marker(rc.unproject([2733,2132]), {icon: mark_farm, title: "Mac's Farm", riseOnHover: true}).bindTooltip("<b>Mac's Farm</b>").addTo(ol_loc);
    L.marker(rc.unproject([2791,2063]), {icon: mark_houses, title: "The General's Steakhouse", riseOnHover: true}).bindTooltip("<b>The General's Steakhouse</b>").addTo(ol_loc);
    L.marker(rc.unproject([2945,2104]), {icon: mark_scraper, title: "Robco Research Center", riseOnHover: true}).bindTooltip("<b>Robco Research Center</b>").addTo(ol_loc);
    L.marker(rc.unproject([2299,2346]), {icon: mark_base, title: "The Thorn", riseOnHover: true}).bindTooltip("<b>The Thorn</b>").addTo(ol_loc);
    L.marker(rc.unproject([2345,2219]), {icon: mark_base, title: "Forward Station Alpha", riseOnHover: true}).bindTooltip("<b>Forward Station Alpha</b>").addTo(ol_loc);
    L.marker(rc.unproject([2397,2316]), {icon: mark_farm, title: "Superior Sunset Farm", riseOnHover: true}).bindTooltip("<b>Superior Sunset Farm</b>").addTo(ol_loc);
    L.marker(rc.unproject([2568,2290]), {icon: mark_lodge, title: "Ranger District Office", riseOnHover: true}).bindTooltip("<b>Ranger District Office</b>").addTo(ol_loc);
    L.marker(rc.unproject([2613,2243]), {icon: mark_lookout, title: "Ranger Lookout", riseOnHover: true}).bindTooltip("<b>Ranger Lookout</b>").addTo(ol_loc);
    L.marker(rc.unproject([2657,2177]), {icon: mark_tree, title: "Creekside Sundew Grove", riseOnHover: true}).bindTooltip("<b>Creekside Sundew Grove</b>").addTo(ol_loc);
    L.marker(rc.unproject([2714,2214]), {icon: mark_shack, title: "Bootlegger's Shack", riseOnHover: true}).bindTooltip("<b>Bootlegger's Shack</b>").addTo(ol_loc);
    L.marker(rc.unproject([2527,2397]), {icon: mark_bunker, title: "Drop Site G3", riseOnHover: true}).bindTooltip("<b>Drop Site G3</b>").addTo(ol_loc);
    L.marker(rc.unproject([2627,2430]), {icon: mark_mine, title: "Quarry X3", riseOnHover: true}).bindTooltip("<b>Quarry X3</b>").addTo(ol_loc);
    L.marker(rc.unproject([2860,2317]), {icon: mark_monorail, title: "Pylon V-13", riseOnHover: true}).bindTooltip("<b>Pylon V-13</b>").addTo(ol_loc);
    L.marker(rc.unproject([2928,2291]), {icon: mark_quarry, title: "Old Mold Quarry", riseOnHover: true}).bindTooltip("<b>Old Mold Quarry</b>").addTo(ol_loc);
    L.marker(rc.unproject([2887,2370]), {icon: mark_bunker, title: "Drop Site C2", riseOnHover: true}).bindTooltip("<b>Drop Site C2</b>").addTo(ol_loc);
//
    L.marker(rc.unproject([2260,2561]), {icon: mark_prison, title: "Fort Defiance", riseOnHover: true}).bindTooltip("<b>Fort Defiance</b>").addTo(ol_loc);
    L.marker(rc.unproject([2378,2520]), {icon: mark_antiques, title: "Appalachian Antiques", riseOnHover: true}).bindTooltip("<b>Appalachian Antiques</b>").addTo(ol_loc);
    L.marker(rc.unproject([2555,2456]), {icon: mark_substation, title: "Thunder Mountain Substation TM-02", riseOnHover: true}).bindTooltip("<b>Thunder Mountain Substation TM-02</b>").addTo(ol_loc);
    L.marker(rc.unproject([2769,2439]), {icon: mark_tree, title: "Veiled Sundew Grove", riseOnHover: true}).bindTooltip("<b>Veiled Sundew Grove</b>").addTo(ol_loc);
    L.marker(rc.unproject([2878,2486]), {icon: mark_pond, title: "Cranberry Glade", riseOnHover: true}).bindTooltip("<b>Cranberry Glade</b>").addTo(ol_loc);
    L.marker(rc.unproject([2322,2688]), {icon: mark_quarry, title: "Big Bend Tunnel East", riseOnHover: true}).bindTooltip("<b>Big Bend Tunnel East</b>").addTo(ol_loc);
    L.marker(rc.unproject([2442,2701]), {icon: mark_railyard, title: "NAR Repair Yard", riseOnHover: true}).bindTooltip("<b>NAR Repair Yard</b>").addTo(ol_loc);
    L.marker(rc.unproject([2549,2595]), {icon: mark_city, title: "Watoga", riseOnHover: true}).bindTooltip("<b>Watoga</b>").addTo(ol_loc);
    L.marker(rc.unproject([2492,2578]), {icon: mark_scraper, title: "Watoga Civic Center", riseOnHover: true}).bindTooltip("<b>Watoga Civic Center</b>").addTo(ol_loc);
    L.marker(rc.unproject([2496,2635]), {icon: mark_scraper, title: "Watoga Transit Hub", riseOnHover: true}).bindTooltip("<b>Watoga Transit Hub</b>").addTo(ol_loc);
    L.marker(rc.unproject([2495,2607]), {icon: mark_med, title: "Watoga Emergency Services", riseOnHover: true}).bindTooltip("<b>Watoga Emergency Services</b>").addTo(ol_loc);
    L.marker(rc.unproject([2547,2634]), {icon: mark_scraper, title: "Watoga Municipal Center", riseOnHover: true}).bindTooltip("<b>Watoga Municipal Center</b>").addTo(ol_loc);
    L.marker(rc.unproject([2611,2634]), {icon: mark_scraper, title: "AMS Corporate Headquarters", riseOnHover: true}).bindTooltip("<b>AMS Corporate Headquarters</b>").addTo(ol_loc);
    L.marker(rc.unproject([2611,2595]), {icon: mark_scraper, title: "Watoga Shopping Plaza", riseOnHover: true}).bindTooltip("<b>Watoga Shopping Plaza</b>").addTo(ol_loc);
    L.marker(rc.unproject([2529,2669]), {icon: mark_scraper, title: "Watoga Estates", riseOnHover: true}).bindTooltip("<b>Watoga Estates</b>").addTo(ol_loc);
    L.marker(rc.unproject([2611,2669]), {icon: mark_scraper, title: "Watoga High School", riseOnHover: true}).bindTooltip("<b>Watoga High School</b>").addTo(ol_loc);
    L.marker(rc.unproject([2751,2636]), {icon: mark_trainyard, title: "Flooded Trainyard", riseOnHover: true}).bindTooltip("<b>Flooded Trainyard</b>").addTo(ol_loc);
    L.marker(rc.unproject([2302,2860]), {icon: mark_base, title: "Firebase Hancock", riseOnHover: true}).bindTooltip("<b>Firebase Hancock</b>").addTo(ol_loc);
    L.marker(rc.unproject([2376,2786]), {icon: mark_shack, title: "Lost Home", riseOnHover: true}).bindTooltip("<b>Lost Home</b>").addTo(ol_loc);
    L.marker(rc.unproject([2391,2856]), {icon: mark_tree, title: "Sparse Sundew Grove", riseOnHover: true}).bindTooltip("<b>Sparse Sundew Grove</b>").addTo(ol_loc);
    L.marker(rc.unproject([2630,2803]), {icon: mark_farm, title: "Sunrise Farm", riseOnHover: true}).bindTooltip("<b>Sunrise Farm</b>").addTo(ol_loc);
    L.marker(rc.unproject([2391,2856]), {icon: mark_base, title: "Survey Camp Alpha", riseOnHover: true}).bindTooltip("<b>Survey Camp Alpha</b>").addTo(ol_loc);
    L.marker(rc.unproject([2842,2839]), {icon: mark_tree, title: "Overgrown Sundew Grove", riseOnHover: true}).bindTooltip("<b>Overgrown Sundew Grove</b>").addTo(ol_loc);
    L.marker(rc.unproject([2867,2739]), {icon: mark_bunker, title: "Drop Site V9", riseOnHover: true}).bindTooltip("<b>Drop Site V9</b>").addTo(ol_loc);
    L.marker(rc.unproject([2949,2764]), {icon: mark_quarry, title: "Glassed Cavern", riseOnHover: true}).bindTooltip("<b>Glassed Cavern</b>").addTo(ol_loc);
    L.marker(rc.unproject([2945,2826]), {icon: mark_base, title: "Forward Station Delta", riseOnHover: true}).bindTooltip("<b>Forward Station Delta</b>").addTo(ol_loc);





//Train Stations
    L.marker(rc.unproject([725,1901]), {icon: mark_tr}).bindTooltip("<b>Charleston Station</b>").addTo(ol_train);
    L.marker(rc.unproject([1337,950]), {icon: mark_tr}).bindTooltip("<b>Morgantown Station</b>").addTo(ol_train);
    L.marker(rc.unproject([1108,1545]), {icon: mark_tr}).bindTooltip("<b>Sutton Station</b>").addTo(ol_train);
    L.marker(rc.unproject([1096,2450]), {icon: mark_tr}).bindTooltip("<b>Lewisburg Station</b>").addTo(ol_train);
    L.marker(rc.unproject([1103,630]), {icon: mark_tr}).bindTooltip("<b>Grafton Station</b>").addTo(ol_train);
    L.marker(rc.unproject([482,2547]), {icon: mark_tr}).bindTooltip("<b>Welch Station</b>").addTo(ol_train);
    L.marker(rc.unproject([2043,718]), {icon: mark_tr}).bindTooltip("<b>Sunnytop Station</b>").addTo(ol_train);
    L.marker(rc.unproject([1865,1570]), {icon: mark_tr}).bindTooltip("<b>Pleasant Valley Station</b>").addTo(ol_train);
    L.marker(rc.unproject([1657,1945]), {icon: mark_tr}).bindTooltip("<b>Whitespring Station</b>").addTo(ol_train);
    L.marker(rc.unproject([1575,2577]), {icon: mark_tr}).bindTooltip("<b>R&G Station</b>").addTo(ol_train);
    L.marker(rc.unproject([2583,2693]), {icon: mark_tr}).bindTooltip("<b>Watoga Station</b>").addTo(ol_train);

//Fusion Core
    L.marker(rc.unproject([948,2032]), {icon: mark_fcore, title: "Fusion Core", riseOnHover: true}).bindTooltip("<b>Fusion Core</b>").addTo(ol_pwr);
    L.marker(rc.unproject([1245,1272]), {icon: mark_fcore, title: "Fusion Core", riseOnHover: true}).bindTooltip("<b>Fusion Core</b>").addTo(ol_pwr);
    L.marker(rc.unproject([377,284]), {icon: mark_fcore, title: "Fusion Core", riseOnHover: true}).bindTooltip("<b>Fusion Core</b>").addTo(ol_pwr);
    L.marker(rc.unproject([368,1983]), {icon: mark_fcore, title: "Fusion Core", riseOnHover: true}).bindTooltip("<b>Fusion Core</b>").addTo(ol_pwr);
    L.marker(rc.unproject([1244,251]), {icon: mark_fcore, title: "Fusion Core", riseOnHover: true}).bindTooltip("<b>Fusion Core</b>").addTo(ol_pwr);
    L.marker(rc.unproject([2137,2522]), {icon: mark_fcore, title: "Fusion Core", riseOnHover: true}).bindTooltip("<b>Fusion Core</b>").addTo(ol_pwr);

//Bobbleheads
    L.marker(rc.unproject([1442,1418]), {icon: mark_bh}).bindTooltip("<b>Bobblehead:</b> ").addTo(ol_bob);
    L.marker(rc.unproject([1434,1308]), {icon: mark_bh}).bindTooltip("<b>Bobblehead:</b> ").addTo(ol_bob);
    L.marker(rc.unproject([1268,251]), {icon: mark_bh}).bindTooltip("<b>Bobblehead:</b> ").addTo(ol_bob);
    L.marker(rc.unproject([719,1471]), {icon: mark_bh}).bindTooltip("<b>Bobblehead:</b> ").addTo(ol_bob);
    L.marker(rc.unproject([552,1930]), {icon: mark_bh}).bindTooltip("<b>Bobblehead:</b> ").addTo(ol_bob);
    L.marker(rc.unproject([496,634]), {icon: mark_bh}).bindTooltip("<b>Bobblehead:</b> ").addTo(ol_bob);
    L.marker(rc.unproject([496,634]), {icon: mark_bh}).bindTooltip("<b>Bobblehead:</b> ").addTo(ol_bob);
    L.marker(rc.unproject([778,1961]), {icon: mark_bh}).bindTooltip("<b>Bobblehead:</b> ").addTo(ol_bob);
    L.marker(rc.unproject([1012,1085]), {icon: mark_bh}).bindTooltip("<b>Bobblehead:</b>").addTo(ol_bob);
    L.marker(rc.unproject([1022,1105]), {icon: mark_bh}).bindTooltip("<b>Bobblehead:</b>").addTo(ol_bob);

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
    L.marker(rc.unproject([1686,245]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: color_tm, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Treasure Map:</b> Toxic Valley (Map 4)").addTo(ol_map);
    L.marker(rc.unproject([1723,292]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: color_tm, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Treasure:</b> Toxic Valley (Map 4)").addTo(ol_map);
    L.marker(rc.unproject([1466,2270]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: color_tm, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Treasure Map:</b> Savage Divide (Map 1)").addTo(ol_map);
    L.marker(rc.unproject([1642,1759]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: color_tm, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Treasure Map:</b> Savage Divide (Map 2)").addTo(ol_map);
    L.marker(rc.unproject([1767,1427]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: color_tm, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Treasure Map:</b> Savage Divide (Map 3)").addTo(ol_map);
    L.marker(rc.unproject([1796,1945]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: color_tm, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Treasure Map:</b> Savage Divide (Map 5)").addTo(ol_map);
    L.marker(rc.unproject([1929,418]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: color_tm, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Treasure Map:</b> Savage Divide (Map 6)").addTo(ol_map);
    L.marker(rc.unproject([1978,2535]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: color_tm, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Treasure Map:</b> Savage Divide (Map 7)").addTo(ol_map);
    L.marker(rc.unproject([1976,1427]), {icon: L.AwesomeMarkers.icon({icon: mark_tm, prefix: 'fa', markerColor: 'purple', iconColor: color_tm, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Treasure Map:</b> Savage Divide (Map 8)").addTo(ol_map);


    L.marker(rc.unproject([1604,817]), {icon: mark_tape, title: "Grognak & The Ruby Ruins", riseOnHover: true}).bindTooltip("<b>Holotape Game:</b> Grognak & The Ruby Ruins").addTo(ol_tape);
    L.marker(rc.unproject([815,950]), {icon: mark_tape, title: "Nuka Tapper, Overseer's Log - Vault 76", riseOnHover: true}).bindTooltip("<b>Holotape Game:</b> Nuka Tapper<br><b>Overseer's Log:</b> Vault 76").addTo(ol_tape);
    L.marker(rc.unproject([973,1308]), {icon: mark_tape, title: "Overseer's Log - C.A.M.P.", riseOnHover: true}).bindTooltip("<b>Overseer's Log:</b> C.A.M.P.").addTo(ol_tape);
    L.marker(rc.unproject([786,1466]), {icon: mark_tape, title: "Overseer's Log - Flatwoods", riseOnHover: true}).bindTooltip("<b>Overseer's Log:</b> Flatwoods").addTo(ol_tape);
    L.marker(rc.unproject([797,2112]), {icon: mark_tape, title: "Overseer's Log - Firehouse", riseOnHover: true}).bindTooltip("<b>Overseer's Log:</b> Firehouse").addTo(ol_tape);
    L.marker(rc.unproject([699,1477]), {icon: mark_tape, title: "Overseer's Journal - Entry 1", riseOnHover: true}).bindTooltip("<b>Overseer's Journal:</b> Entry 1").addTo(ol_tape);
    L.marker(rc.unproject([1131,1460]), {icon: mark_tape, title: "Overseer's Journal - Entry 2", riseOnHover: true}).bindTooltip("<b>Overseer's Journal:</b> Entry 2").addTo(ol_tape);
    L.marker(rc.unproject([1283,1272]), {icon: mark_tape, title: "Test Log - 9-23-77-A10, Test Log - 3-12-78-A14", riseOnHover: true }).bindTooltip("<b>Test Log:</b> 9-23-77-A10<br><b>Test Log:</b> 3-12-78-A14").addTo(ol_tape);

    L.marker(rc.unproject([778,1498]), {icon: L.AwesomeMarkers.icon({icon: mark_rp, prefix: 'fa', markerColor: 'purple', iconColor: color_rp, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Recipe:</b> Delbert's Sunshine Oil").addTo(ol_rep);
    L.marker(rc.unproject([514,448]), {icon: L.AwesomeMarkers.icon({icon: mark_rp, prefix: 'fa', markerColor: 'purple', iconColor: color_rp, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Recipe:</b> Delbert's Corn Pone").addTo(ol_rep);
    L.marker(rc.unproject([476,628]), {icon: L.AwesomeMarkers.icon({icon: mark_rp, prefix: 'fa', markerColor: 'purple', iconColor: color_rp, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Recipe:</b> Swamp Tofu Soup").addTo(ol_rep);
    L.marker(rc.unproject([1425,1421]), {icon: L.AwesomeMarkers.icon({icon: mark_rp, prefix: 'fa', markerColor: 'purple', iconColor: color_rp, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Recipe:</b> Silt Bean Puree").addTo(ol_rep);
    L.marker(rc.unproject([1263,1272]), {icon: L.AwesomeMarkers.icon({icon: mark_rp, prefix: 'fa', markerColor: 'purple', iconColor: color_rp, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Plan:</b> Tinker's Workbench<br><b>Recipe:</b> Glowing Fungus Puree").addTo(ol_rep);
    L.marker(rc.unproject([776,1966]), {icon: L.AwesomeMarkers.icon({icon: mark_rp, prefix: 'fa', markerColor: 'purple', iconColor: color_rp, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Recipe:</b> Yao Guai Roast").addTo(ol_rep);
    L.marker(rc.unproject([836,2054]), {icon: L.AwesomeMarkers.icon({icon: mark_rp, prefix: 'fa', markerColor: 'purple', iconColor: color_rp, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Recipe:</b> Bloatfly Loaf").addTo(ol_rep);
    L.marker(rc.unproject([779,2195]), {icon: L.AwesomeMarkers.icon({icon: mark_rp, prefix: 'fa', markerColor: 'purple', iconColor: color_rp, extraClasses: 'fa-2x'}) }).bindTooltip("<b>Recipe:</b> Steeped Ash Rose Tea").addTo(ol_rep);


//Rift
    L.marker(rc.unproject([2318,742]), {icon: mark_rift, title: "Fissure", riseOnHover: true}).bindTooltip("<b>Fissure</b>").addTo(ol_rift);
    L.marker(rc.unproject([2615,355]), {icon: mark_rift, title: "Fissure", riseOnHover: true}).bindTooltip("<b>Fissure</b>").addTo(ol_rift);
    L.marker(rc.unproject([2438,1112]), {icon: mark_rift, title: "Fissure", riseOnHover: true}).bindTooltip("<b>Fissure</b>").addTo(ol_rift);
    L.marker(rc.unproject([2603,2107]), {icon: mark_rift, title: "Fissure", riseOnHover: true}).bindTooltip("<b>Fissure</b>").addTo(ol_rift);
    L.marker(rc.unproject([2891,2804]), {icon: mark_rift, title: "Fissure", riseOnHover: true}).bindTooltip("<b>Fissure</b>").addTo(ol_rift);
    L.marker(rc.unproject([2764,2767]), {icon: mark_rift, title: "Fissure", riseOnHover: true}).bindTooltip("<b>Fissure</b>").addTo(ol_rift);
    L.marker(rc.unproject([1953,2701]), {icon: mark_rift, title: "Fissure", riseOnHover: true}).bindTooltip("<b>Fissure</b>").addTo(ol_rift);
    L.marker(rc.unproject([1260,2122]), {icon: mark_rift, title: "Fissure", riseOnHover: true}).bindTooltip("<b>Fissure</b>").addTo(ol_rift);
    L.marker(rc.unproject([699,2774]), {icon: mark_rift, title: "Fissure", riseOnHover: true}).bindTooltip("<b>Fissure</b>").addTo(ol_rift);




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
	"Fissure": ol_rift,
};

L.control.layers(null, overlays).addTo(map);


var searchlayers = L.layerGroup([
	ol_vault,
	ol_loc,
	ol_wb,
	ol_train,
	ol_tape
]);

	var controlSearch = new L.Control.Search({
		position:'topright',		
		layer: searchlayers,
		initial: false,
		zoom: 12,
		marker: false
	});

	map.addControl( controlSearch );

// set markers on click events in the map
map.on('click', function (event) {
  // any position in leaflet needs to be projected to obtain the image coordinates
  var coords = rc.project(event.latlng)
  var marker = L.marker(rc.unproject(coords))
    .addTo(map)
  marker.bindPopup('[' + Math.floor(coords.x) + ',' + Math.floor(coords.y) + ']')
    .openPopup()
})