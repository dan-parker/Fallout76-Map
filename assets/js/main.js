
var ol_pa = L.layerGroup();
var ol_vault = L.layerGroup();
var ol_loc = L.layerGroup();
var ol_loc2 = L.layerGroup();
var ol_train = L.layerGroup();
var ol_pwr = L.layerGroup();
var ol_map = L.layerGroup();
var ol_tape = L.layerGroup();
var ol_wb = L.layerGroup();
var ol_rift = L.layerGroup();

var ol_locv = L.layerGroup();

// the tile layer containing the image generated with `gdal2tiles --leaflet -p raster -w none <img> tiles`
var baselayer = L.tileLayer('./assets/tiles/{z}/{x}/{y}.png', {
  noWrap: true, 
  attribution: 'Map data &copy; Bethesda Softworks LLC, a ZeniMax Media company. Trademarks belong to their respective owners. All Rights Reserved.'
});

// create the map
var map = L.map('mapid', {
  layers: [baselayer, ol_vault,ol_loc,ol_train,ol_wb,ol_rift],
  fullscreenControl: true,
  fullscreenControlOptions: {
    position: 'topleft'
  },
  preferCanvas: true,
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

var mark_tr = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'trainstation', glyphColor: '', glyphSize: '24px', glyphAnchor: [0,0], className:'mark_vendor'}); //Train Station
var mark_wr =  L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'workbench', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_wr'}); 	//Public Workbench
var mark_va76 = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'vault76', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_va'}); 	//Vault76
var mark_va63 = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'vault63', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_va'}); 	//Vault63
var mark_va51 = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'vault', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_va'}); 	//Vault51
var mark_va94 = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'vault94', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_va'}); 	//Vault94
var mark_va96 = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'vault96', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_va'}); 	//Vault96
var mark_va = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'vault', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_va'}); 		//Vault
var mark_map = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'map', glyphColor: '', glyphSize: '24px', glyphAnchor: [0,0], className:'mark_tm'}); 		//Treasure Map
var mark_tape = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'holotape', glyphColor: '', glyphSize: '32px', glyphAnchor: [0,0], className:'mark_tape'}); 	//Holotape
var mark_fcore = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'fcore', glyphColor: '', glyphSize: '34px', glyphAnchor: [0,0], className:'mark_fcore'}); 	//Fusion Core
var mark_parmor = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'parmor', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_parmor'}); //Power Armor
var mark_rift = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'fissure', glyphColor: '', glyphSize: '26px', glyphAnchor: [0,0], className:'mark_rift'}); 	//Fissure

var mark_farm = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'farm', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo'}); 		//Farm/Homestead
var mark_cabin = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'cabin', glyphColor: '', glyphSize: '24px', glyphAnchor: [0,0], className:'mark_lo'});  		//Farm/Cabin
var mark_lighthouse = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'lighthouse', glyphColor: '',glyphSize: '32px', glyphAnchor: [0,0], className:'mark_lo'}); 	//Lighthouse
var mark_shack = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'shack', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo'}); 		//Shack/Lab
var mark_radiotower = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'radiotower', glyphColor: '', glyphSize: '32px', glyphAnchor: [0,0], className:'mark_lo'}); 	//Relay Tower
var mark_lookout = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'lookout', glyphColor: '', glyphSize: '30px', glyphAnchor: [0,0], className:'mark_lo'}); 		//Lookout
var mark_factory = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'factory', glyphColor: '', glyphSize: '26px', glyphAnchor: [0,0], className:'mark_lo'}); 		//Lumberyard
var mark_fair = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'fair', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo'}); 		//Fair
var mark_vendorfair = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'fair', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_vendor'}); 	//Fair-Vendor
var mark_waterplant = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'waterplant', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo'}); 	//Water Treatment
var mark_substation = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'substation', glyphColor: '', glyphSize: '24px', glyphAnchor: [0,0], className:'mark_lo'}); 	//Substation
var mark_ruintown = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'ruintown', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo'}); 	//Town-Ruined
var mark_town = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'town', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo'}); 		//Town
var mark_vendortown = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'town', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_vendor'}); 	//Town-Vendor
var mark_plane = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'plane', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo'}); 		//Plane/Airport
var mark_vendorplane = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'plane', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_vendor'}); 	//Plane/Airport-Vendor
var mark_manor = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'manor', glyphColor: '', glyphSize: '26px', glyphAnchor: [0,0], className:'mark_lo'}); 		//Manor
var mark_nuka =  L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'nuka', glyphColor: '', glyphSize: '30px', glyphAnchor: [0,0], className:'mark_lo'}); 		//Nuka
var mark_power = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'power', glyphColor: '', glyphSize: '34px', glyphAnchor: [0,0], className:'mark_lo'}); 		//Power Plant
var mark_railyard = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'railyard', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo'}); 	//Railyard
var mark_trainyard = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'trainyard', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo'}); 	//Trainyard
var mark_perch = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'perch', glyphColor: '', glyphSize: '24px', glyphAnchor: [0,0], className:'mark_lo'}); 		//Perch
var mark_lodge = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'firedept', glyphColor: '', glyphSize: '26px', glyphAnchor: [0,0], className:'mark_lo'}); 		//Fire Dept/Lodge
var mark_vendorlodge = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'firedept', glyphColor: '', glyphSize: '26px', glyphAnchor: [0,0], className:'mark_vendor'}); 	//Fire Dept/Lodge-Vendor
var mark_med = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'med', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo'}); 			//Medical
var mark_capital = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'capital', glyphColor: '', glyphSize: '30px', glyphAnchor: [0,0], className:'mark_lo'}); 		//Capital
var mark_teapot = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'teapot', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo'}); 		//Teapot
var mark_cream = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'cream', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo'}); 		//Cream
var mark_bridge = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'bridge', glyphColor: '', glyphSize: '24px', glyphAnchor: [0,0], className:'mark_lo'}); 		//Bridge
var mark_camp = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'camp', glyphColor: '', glyphSize: '22px', glyphAnchor: [0,0], className:'mark_lo'}); 		//Camp
var mark_agcenter = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'agcenter', glyphColor: '', glyphSize: '24px', glyphAnchor: [0,0], className:'mark_lo'}); 	//Agricultural Center
var mark_tree = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'tree', glyphColor: '', glyphSize: '24px', glyphAnchor: [0,0], className:'mark_lo'}); 		//Island
var mark_disposal = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'disposal', glyphColor: '', glyphSize: '26px', glyphAnchor: [0,0], className:'mark_lo'}); 	//Ordinance/Disposal
var mark_houses = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'houses', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo'}); 		//Houses
var mark_city = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'city', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo'}); 		//City
var mark_pub = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'pub', glyphColor: '', glyphSize: '26px', glyphAnchor: [0,0], className:'mark_lo'});			//Pub
var mark_dam = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'dam', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo'}); 			//Dam
var mark_mine = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'mine', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo'}); 		//Mine
var mark_arktos = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'arktos', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo'}); 		//Arktos
var mark_golf = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'golf', glyphColor: '', glyphSize: '24px', glyphAnchor: [0,0], className:'mark_lo'}); 		//Golf
var mark_snow = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'snow', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo'}); 		//Snow
var mark_vendorsnow = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'snow', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_vendor'}); 	//Snow-Vendor
var mark_base = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'base', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo'}); 		//Military base
var mark_hotdog = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'hotdog', glyphColor: '', glyphSize: '22px', glyphAnchor: [0,0], className:'mark_lo'}); 		//Hotdog
var mark_dock = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'dock', glyphColor: '', glyphSize: '26px', glyphAnchor: [0,0], className:'mark_lo'});  		//Dock
var mark_cemetery = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'cemetery', glyphColor: '', glyphSize: '24px', glyphAnchor: [0,0], className:'mark_lo'}); 	//Cemetery
var mark_scraper = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'scraper', glyphColor: '', glyphSize: '30px', glyphAnchor: [0,0], className:'mark_lo'}); 		//SkyScraper
var mark_vendorscraper = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'scraper', glyphColor: '', glyphSize: '30px', glyphAnchor: [0,0], className:'mark_vendor'}); //SkyScraper-Vendor
var mark_mansion = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'mansion', glyphColor: '', glyphSize: '26px', glyphAnchor: [0,0], className:'mark_lo'}); 		//Sugarmaple
var mark_raider = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'raider', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo'}); 		//Raider
var mark_prison =  L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'prison', glyphColor: '', glyphSize: '26px', glyphAnchor: [0,0], className:'mark_lo'}); 		//Prison
var mark_pond = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'pond', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo'}); 		//Pond
var mark_statue = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'statue', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo'}); 		//Statue
var mark_spacestation = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'spacestation', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo'}); //Spacestation
var mark_fort = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'fort', glyphColor: '', glyphSize: '26px', glyphAnchor: [0,0], className:'mark_lo'}); 		//Fort
var mark_quarry = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'quarry', glyphColor: '', glyphSize: '26px', glyphAnchor: [0,0], className:'mark_lo'}); 		//Quarry
var mark_bunker = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'bunker', glyphColor: '', glyphSize: '18px', glyphAnchor: [0,0], className:'mark_lo'}); 		//Bunker
var mark_vendorbunker = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'bunker', glyphColor: '', glyphSize: '18px', glyphAnchor: [0,0], className:'mark_vendor'}); 	//Bunker-Vendor
var mark_rocket = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'rocket', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo'}); 		//Rocket
var mark_headquarters = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'headquarters', glyphColor: '', glyphSize: '24px', glyphAnchor: [0,0], className:'mark_lo'}); //Headquarters
var mark_palace = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'palace', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo'}); 		//Palace
var mark_pumpkin = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'pumpkin', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo'}); 		//Pumpkin
var mark_observatory = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'observatory', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo'}); 	//Observatory
var mark_top = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'top', glyphColor: '', glyphSize: '40px', glyphAnchor: [0,0], className:'mark_lo'}); 			//Top of the World
var mark_rocks = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'rocks', glyphColor: '', glyphSize: '20px', glyphAnchor: [0,0], className:'mark_lo'}); 		//Rocks
var mark_resort = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'resort', glyphColor: '', glyphSize: '26px', glyphAnchor: [0,0], className:'mark_vendor'}); 	//Resort
var mark_dish =  L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'dish', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo'}); 		//Dish
var mark_monorail = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'monorail', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo'}); 	//Monorail
var mark_church = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'church', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo'}); 		//Church
var mark_antiques = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'antiques', glyphColor: '', glyphSize: '26px', glyphAnchor: [0,0], className:'mark_lo'}); 	//Antiques
var mark_sewer = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'sewer', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo'}); 		//Sewer


//Let's create our Tooltip Template
function tooltipTemplate(title,bobblehead=0,magazine=0,capstash=0,recipe='') {
	var result = '<div class="tooltip">';
 	result += '<div class="tooltitle">'+title+'</div>';
 	if (bobblehead) result += '<div>Bobblehead: x' + bobblehead + '</div>';
 	if (magazine) result += '<div>Magazine: x' + magazine + '</div>';
 	if (capstash) result += '<div>Cap Stash: x' + capstash + '</div>';
 	if (recipe) result += '<div>Recipe/Plan: x' + recipe + '</div>';
	result += '</div>';
 	return result;
}
function tooltipMapTemplate(title,img='',text='') {
	var result = '<div class="tooltip">';
 	result += '<div class="tooltitle">'+title+'</div>';
 	if (img) result += '<div><img src="assets/img/treasure/' + img + '"/></div>';
 	if (text) result += '<div>' + text + '</div>';
	result += '</div>';
 	return result;
}

    L.marker(rc.unproject([931,1914]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip(tooltipMapTemplate("Wade Airport","","East of runway in a hangar")).addTo(ol_pa);
    L.marker(rc.unproject([1617,1791]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip(tooltipMapTemplate("New Appalachian Central Trainyard","","Inside main building")).addTo(ol_pa);
    L.marker(rc.unproject([673,414]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip(tooltipMapTemplate("Aaronholdt Homestead","","Requires Lockpick1 or key (near awning on north side of field)<br>Shed next to granary silo, south of main buildings.")).addTo(ol_pa);
    L.marker(rc.unproject([918,118]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip(tooltipMapTemplate("The Crosshair","","Under rock overhang by tower")).addTo(ol_pa);
    L.marker(rc.unproject([358,296]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip(tooltipMapTemplate("WV Lumber Co.","","Large green shed closest to train tracks")).addTo(ol_pa);
    L.marker(rc.unproject([391,2001]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip(tooltipMapTemplate("Kanawha Nuka Cola Plant","","Loading Dock inside Plant")).addTo(ol_pa);
    L.marker(rc.unproject([304,1133]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip(tooltipMapTemplate("Point Pleasant","","Use the truck outside Bernardo's to access the roof, keep right")).addTo(ol_pa);
    L.marker(rc.unproject([469,853]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip("<b>Black Mountain Ordnance Works</b>").addTo(ol_pa);
    L.marker(rc.unproject([1154,945]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip(tooltipMapTemplate("Gorge Junkyard","","Requires Lockpick3<br>North side, inside green truck trailer")).addTo(ol_pa);
    L.marker(rc.unproject([1300,1024]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip(tooltipMapTemplate("Morgantown Trainyard","","East side under crane in a Gov't traincar")).addTo(ol_pa);
    L.marker(rc.unproject([1403,1069]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip(tooltipMapTemplate("Mama Dolce's Food Processing","","Two-story warehouse west of the factory with booby traps")).addTo(ol_pa);
    L.marker(rc.unproject([1600,793]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip(tooltipMapTemplate("Grafton Dam","","Metal storage shed by parking lot")).addTo(ol_pa);
    L.marker(rc.unproject([1267,1283]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip(tooltipMapTemplate("Arktos Pharma","","Behind security gate locked terminal")).addTo(ol_pa);
    L.marker(rc.unproject([442,1659]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip(tooltipMapTemplate("Silva Homestead","","Inside silo barn")).addTo(ol_pa);
    L.marker(rc.unproject([550,1956]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip(tooltipMapTemplate("Poseidon Energy Plant WV-06","","In basement")).addTo(ol_pa);
    L.marker(rc.unproject([326,1920]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip(tooltipMapTemplate("Lewis & Sons Farming Supply","","Left of the stairs by tractor barn")).addTo(ol_pa);
    L.marker(rc.unproject([679,1687]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip(tooltipMapTemplate("New River Gorge Bridge - West","","Requires Key (Found at Camden Park rollercoaster)<br>Under bridge")).addTo(ol_pa);
    L.marker(rc.unproject([873,1958]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip(tooltipMapTemplate("Wade Airport","","Inside booby trapped, locked blue trailer")).addTo(ol_pa);
    L.marker(rc.unproject([780,1974]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip(tooltipMapTemplate("Hornwright Industrial Headquarters","","Bottom of basement stairs next to vending machines")).addTo(ol_pa);
    L.marker(rc.unproject([1326,724]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip(tooltipMapTemplate("Eastern Regional Penitentiary","","Center of main yard in yellow building")).addTo(ol_pa);
    L.marker(rc.unproject([1377,448]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip(tooltipMapTemplate("Clarksburg","","3rd floor of red brick building, enter via roof and fire escape")).addTo(ol_pa);
    L.marker(rc.unproject([1565,328]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip(tooltipMapTemplate("Black Bear Lodge","","Inside red barn")).addTo(ol_pa);
    L.marker(rc.unproject([1702,225]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip(tooltipMapTemplate("Crashed Space Station","","Small shed on edge of crater")).addTo(ol_pa);
    L.marker(rc.unproject([2283,341]), {icon: mark_parmor, title: 'Power Armorm', riseOnHover: true}).bindTooltip(tooltipMapTemplate("Converted Munitions Factory","","Top floor, northern end store room")).addTo(ol_pa);
    L.marker(rc.unproject([751,2148]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip(tooltipMapTemplate("The Rusty Pick","","In basement behind security gate")).addTo(ol_pa);
    L.marker(rc.unproject([216,2507]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip(tooltipMapTemplate("Beckley","","Southside of central wall, next to APC")).addTo(ol_pa);
    L.marker(rc.unproject([545,2430]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip(tooltipMapTemplate("Abandoned Mine Shaft Elaine","","Outside of locker room building")).addTo(ol_pa);
    L.marker(rc.unproject([590,2489]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip(tooltipMapTemplate("Mount Blair Trainyard","","Next to Tinker's Workbench")).addTo(ol_pa);
    L.marker(rc.unproject([610,2346]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip(tooltipMapTemplate("Mount Blair","","Inside large double garage warehouse")).addTo(ol_pa);
    L.marker(rc.unproject([836,2436]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip(tooltipMapTemplate("Rollins Work Camp","","Alongside orange and white trailer")).addTo(ol_pa);
    L.marker(rc.unproject([947,2343]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip(tooltipMapTemplate("The Burning Mine","","Garage outside of mine")).addTo(ol_pa);
    L.marker(rc.unproject([1246,2486]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip(tooltipMapTemplate("Big Bend Tunnel West","","Derailed traincar between this and Lewisburg station<br>Inside the warehouse")).addTo(ol_pa);
    L.marker(rc.unproject([664,2682]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip(tooltipMapTemplate("AMS Testing Site","","Inside curved roof warehouse")).addTo(ol_pa);
    L.marker(rc.unproject([751,2570]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip(tooltipMapTemplate("Red Rocket Filling Station","","behind Red Rocket")).addTo(ol_pa);
    L.marker(rc.unproject([758,2822]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip(tooltipMapTemplate("Striker Row","","southeast of RV and flag")).addTo(ol_pa);
    L.marker(rc.unproject([1032,2762]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip(tooltipMapTemplate("Garrahan Mining Headquarters","","In Testing Control, in basement")).addTo(ol_pa);
    L.marker(rc.unproject([724,2214]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip(tooltipMapTemplate("Belching Betty","","Outside entrance in concrete hut")).addTo(ol_pa);
    L.marker(rc.unproject([1845,669]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip(tooltipMapTemplate("Site Bravo","","In storage area")).addTo(ol_pa);
    L.marker(rc.unproject([2159,1264]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip(tooltipMapTemplate("Seneca Gang Camp","","Near cooking station")).addTo(ol_pa);
    L.marker(rc.unproject([1550,1699]), {icon: mark_parmor, title: 'Power Armor', riseOnHover: true}).bindTooltip(tooltipMapTemplate("Cliffwatch","","Railcar")).addTo(ol_pa);


//Vaults
    L.marker(rc.unproject([805,963]), {icon: mark_va76, title: 'Vault 76', riseOnHover: true}).bindTooltip("<b>Vault 76</b>").addTo(ol_vault);
    L.marker(rc.unproject([2574,667]), {icon: mark_va94, title: 'Vault 94', riseOnHover: true}).bindTooltip("<b>Vault 94</b>").addTo(ol_vault);
    L.marker(rc.unproject([1759,2774]), {icon: mark_va96, title: 'Vault 96', riseOnHover: true}).bindTooltip("<b>Vault 96</b>").addTo(ol_vault);
    L.marker(rc.unproject([870,2673]), {icon: mark_va63, title: 'Vault 63', riseOnHover: true}).bindTooltip("<b>Vault 63</b>").addTo(ol_vault);
    L.marker(rc.unproject([690,190]), {icon: mark_va51, title: 'Vault 51', riseOnHover: true}).bindTooltip(tooltipMapTemplate("Vault 51","","Added in Patch 7")).addTo(ol_vault);

//Public Workshops
    L.marker(rc.unproject([1140,975]), {icon: mark_wr, title: "Gorge Junkyard", riseOnHover: true}).bindTooltip(tooltipTemplate("Gorge Junkyard")).addTo(ol_wb);
    L.marker(rc.unproject([920,1895]), {icon: mark_wr, title: "Wade Airport", riseOnHover: true}).bindTooltip(tooltipTemplate('Wade Airport',0,0,1,0)).addTo(ol_wb);
    L.marker(rc.unproject([433,646]), {icon: mark_wr, title: "Tyler County Dirt Track", riseOnHover: true}).bindTooltip(tooltipTemplate("Tyler County Dirt Track")).addTo(ol_wb);
    L.marker(rc.unproject([1130,330]), {icon: mark_wr, title: "Hemlock Holes Maintenance", riseOnHover: true}).bindTooltip(tooltipTemplate("Hemlock Holes Maintenance")).addTo(ol_wb);
    L.marker(rc.unproject([1665,740]), {icon: mark_wr, title: "Grafton Steel Yard", riseOnHover: true}).bindTooltip(tooltipTemplate("Grafton Steel Yard")).addTo(ol_wb);
    L.marker(rc.unproject([574,1432]), {icon: mark_wr, title: "Sunshine Meadows Industrial Farm", riseOnHover: true}).bindTooltip(tooltipTemplate("Sunshine Meadows Industrial Farm")).addTo(ol_wb);
    L.marker(rc.unproject([377,1699]), {icon: mark_wr, title: "Billings Homestead", riseOnHover: true}).bindTooltip(tooltipTemplate("Billings Homestead")).addTo(ol_wb);
    L.marker(rc.unproject([643,1943]), {icon: mark_wr, title: "Poseidon Energy Plant Yard", riseOnHover: true}).bindTooltip(tooltipTemplate("Poseidon Energy Plant Yard")).addTo(ol_wb);
    L.marker(rc.unproject([1108,1807]), {icon: mark_wr, title: "Lakeside Cabins", riseOnHover: true}).bindTooltip(tooltipTemplate("Lakeside Cabins")).addTo(ol_wb);
    L.marker(rc.unproject([638,2063]), {icon: mark_wr, title: "Charleston Landfill", riseOnHover: true}).bindTooltip(tooltipTemplate("Charleston Landfill")).addTo(ol_wb);
    L.marker(rc.unproject([592,2344]), {icon: mark_wr, title: "Mount Blair", riseOnHover: true}).bindTooltip(tooltipTemplate("Mount Blair",2,2)).addTo(ol_wb);
    L.marker(rc.unproject([2494,556]), {icon: mark_wr, title: "Red Rocket Mega Stop", riseOnHover: true}).bindTooltip(tooltipTemplate("Red Rocket Mega Stop")).addTo(ol_wb);
    L.marker(rc.unproject([1828,1143]), {icon: mark_wr, title: "Monongah Power Plant Yard", riseOnHover: true}).bindTooltip(tooltipTemplate("Monongah Power Plant Yard")).addTo(ol_wb);
    L.marker(rc.unproject([1805,2380]), {icon: mark_wr, title: "Spruce Knob", riseOnHover: true}).bindTooltip(tooltipTemplate("Spruce Knob")).addTo(ol_wb);
    L.marker(rc.unproject([1523,2731]), {icon: mark_wr, title: "Federal Disposal Field HZ-21", riseOnHover: true}).bindTooltip(tooltipTemplate("Federal Disposal Field HZ-21")).addTo(ol_wb);
    L.marker(rc.unproject([2875,970]), {icon: mark_wr, title: "Thunder Mountain Power Plant Yard", riseOnHover: true}).bindTooltip(tooltipTemplate("Thunder Mountain Power Plant Yard")).addTo(ol_wb);
    L.marker(rc.unproject([2400,1460]), {icon: mark_wr, title: "Berkeley Springs West", riseOnHover: true}).bindTooltip(tooltipTemplate("Berkeley Springs West")).addTo(ol_wb);
    L.marker(rc.unproject([2302,353]), {icon: mark_wr, title: "Converted Munitions Factory", riseOnHover: true}).bindTooltip(tooltipTemplate("Converted Munitions Factory")).addTo(ol_wb);
    L.marker(rc.unproject([2860,1797]), {icon: mark_wr, title: "Dabney Homestead", riseOnHover: true}).bindTooltip(tooltipTemplate("Dabney Homestead")).addTo(ol_wb);
    L.marker(rc.unproject([2630,1100]), {icon: mark_wr, title: "Dolly Sods Campground", riseOnHover: true}).bindTooltip(tooltipTemplate("Dolly Sods Campground")).addTo(ol_wb);
    L.marker(rc.unproject([2821,2290]), {icon: mark_wr, title: "Abandoned Bog Town", riseOnHover: true}).bindTooltip(tooltipTemplate("Abandoned Bog Town")).addTo(ol_wb);
    L.marker(rc.unproject([204,2552]), {icon: mark_wr, title: "Beckley Mine Exhibit", riseOnHover: true}).bindTooltip(tooltipTemplate("Beckley Mine Exhibit",0,0,1)).addTo(ol_wb);

//The Forest
    L.marker(rc.unproject([778,1035]), {icon: mark_shack, title: "Moonshiner's Shack", riseOnHover: true}).bindTooltip(tooltipTemplate("Moonshiner's Shack")).addTo(ol_loc);
    L.marker(rc.unproject([942,927]), {icon: mark_lookout, title: 'North Kanawha Lookout', riseOnHover: true}).bindTooltip(tooltipTemplate("North Kanawha Lookout")).addTo(ol_loc);
    L.marker(rc.unproject([1026,833]), {icon: mark_cabin, title: 'Twin Pine Cabins', riseOnHover: true}).bindTooltip(tooltipTemplate("Twin Pine Cabins")).addTo(ol_loc);
    L.marker(rc.unproject([812,1140]), {icon: mark_factory, title: 'Gilman Lumber Mill', riseOnHover: true}).bindTooltip(tooltipTemplate("Gilman Lumber Mill")).addTo(ol_loc);
    L.marker(rc.unproject([920,1140]), {icon: mark_cabin, title: 'Isolated Cabin', riseOnHover: true}).bindTooltip(tooltipTemplate("Isolated Cabin")).addTo(ol_loc);
    L.marker(rc.unproject([1013,1110]), {icon: mark_lighthouse, title: 'Landview Lighthouse', riseOnHover: true}).bindTooltip(tooltipTemplate("Landview Lighthouse",2,2)).addTo(ol_loc);
    L.marker(rc.unproject([617,1249]), {icon: mark_cabin, title: 'Alpine River Cabins', riseOnHover: true}).bindTooltip(tooltipTemplate("Alpine River Cabins",2,2)).addTo(ol_loc);
    L.marker(rc.unproject([860,1215]), {icon: mark_farm, title: 'Wixon Homestead', riseOnHover: true}).bindTooltip(tooltipTemplate("Wixon Homestead",1,1)).addTo(ol_loc);
    L.marker(rc.unproject([811,1290]), {icon: mark_lookout, title: 'Flatwoods Lookout', riseOnHover: true}).bindTooltip(tooltipTemplate("Flatwoods Lookout",0,0,0,1)).addTo(ol_loc);
    L.marker(rc.unproject([964,1315]), {icon: mark_camp, title: "Overseer's Camp", riseOnHover: true}).bindTooltip(tooltipTemplate("Overseer's Camp")).addTo(ol_loc);
    L.marker(rc.unproject([713,1368]), {icon: mark_radiotower, title: 'Relay Tower EM-B1-27', riseOnHover: true}).bindTooltip(tooltipTemplate("Relay Tower EM-B1-27",1,1)).addTo(ol_loc);
    L.marker(rc.unproject([854,1426]), {icon: mark_lodge, title: 'Green Country Lodge', riseOnHover: true}).bindTooltip(tooltipTemplate("Green Country Lodge")).addTo(ol_loc);
    L.marker(rc.unproject([795,1500]), {icon: mark_vendortown, title: 'Flatwoods (Responders)', riseOnHover: true}).bindTooltip(tooltipTemplate('<span class="icon-responders"></span> Flatwoods (Responders)',0,0,0,1)).addTo(ol_loc);
    L.marker(rc.unproject([724,1490]), {icon: mark_agcenter, title: 'Vault-Tec Agricultural Research Center', riseOnHover: true}).bindTooltip(tooltipTemplate("Vault-Tec Agricultural Research Center",4,4,5)).addTo(ol_loc);
//
    L.marker(rc.unproject([354,278]), {icon: mark_factory, title: "WV Lumber Co.", riseOnHover: true}).bindTooltip(tooltipTemplate("WV Lumber Co.",2,2)).addTo(ol_loc);
    L.marker(rc.unproject([502,468]), {icon: mark_shack, title: "Darling Sister's Lab", riseOnHover: true}).bindTooltip(tooltipTemplate("Darling Sister's Lab",1,1)).addTo(ol_loc);
    L.marker(rc.unproject([560,400]), {icon: mark_cabin, title: "Groves Family Cabin", riseOnHover: true}).bindTooltip(tooltipTemplate("Groves Family Cabin",1,1)).addTo(ol_loc);
    L.marker(rc.unproject([655,392]), {icon: mark_farm, title: 'Aaronholdt Homestead', riseOnHover: true}).bindTooltip(tooltipTemplate("Aaronholdt Homestead",3,2)).addTo(ol_loc);
    L.marker(rc.unproject([510,629]), {icon: mark_fair, title: 'Tyler County Fairgrounds', riseOnHover: true}).bindTooltip("<b>Tyler County Fairgrounds</b><br>Bobblehead x3<br>Magazine x3<br>Cap Stash x1<br>Recipe/Plan").addTo(ol_loc);
    L.marker(rc.unproject([315,709]), {icon: mark_tree, title: 'Deathclaw Island', riseOnHover: true}).bindTooltip("<b>Deathclaw Island</b><br>Bobblehead x1<br>Magazine x1<br>Cap Stash x1").addTo(ol_loc);
    L.marker(rc.unproject([452,751]), {icon: mark_radiotower, title: 'Transmission Station 1AT-U03', riseOnHover: true}).bindTooltip("<b>Transmission Station 1AT-U03</b><br>Magazine x1").addTo(ol_loc);
    L.marker(rc.unproject([710,778]), {icon: mark_farm, title: 'Anchor Farm', riseOnHover: true}).bindTooltip("<b>Anchor Farm</b>").addTo(ol_loc);
    L.marker(rc.unproject([447,868]), {icon: mark_disposal, title: 'Black Mountain Ordnance Works', riseOnHover: true}).bindTooltip("<b>Black Mountain Ordnance Works</b><br>Recipe/Plan").addTo(ol_loc);
    L.marker(rc.unproject([310,1100]), {icon: mark_town, title: 'Point Pleasant', riseOnHover: true}).bindTooltip("<b>Point Pleasant</b><br>Cap Stash x1<br>Recipe/Plan").addTo(ol_loc);
    L.marker(rc.unproject([460,1062]), {icon: mark_cabin, title: 'Marigold Pavilion', riseOnHover: true}).bindTooltip("<b>Marigold Pavilion</b><br>Bobblehead x1<br>Magazine x1").addTo(ol_loc);
    L.marker(rc.unproject([485,1264]), {icon: mark_camp, title: "Hunter's Ridge", riseOnHover: true}).bindTooltip("<b>Hunter's Ridge</b><br>Bobblehead x1<br>Magazine x1").addTo(ol_loc);
//
    L.marker(rc.unproject([1156,861]), {icon: mark_houses, title: "Wilson Brother's Auto Repair", riseOnHover: true}).bindTooltip("<b>Wilson Brother's Auto Repair</b>").addTo(ol_loc);
    L.marker(rc.unproject([1531,1009]), {icon: mark_city, title: "Morgantown", riseOnHover: true}).bindTooltip("<b>Morgantown</b><br>Cap Stash x9").addTo(ol_loc);
    L.marker(rc.unproject([1570,1000]), {icon: mark_houses, title: "Fraternity Row", riseOnHover: true}).bindTooltip(tooltipMapTemplate("Fraternity Row")).addTo(ol_loc);
    L.marker(rc.unproject([1330,980]), {icon: mark_trainyard, title: "Morgantown Trainyard", riseOnHover: true}).bindTooltip("<b>Morgantown Trainyard</b><br>Bobblehead x1<br>Magazine x2<br>Cap Stash x6").addTo(ol_loc);
    L.marker(rc.unproject([1416,905]), {icon: mark_vendorplane, title: "Morgantown Airport (Responders)", riseOnHover: true}).bindTooltip(tooltipMapTemplate('<span class="icon-responders"></span> Morgantown Airport (Responders)',"","Bobblehead x1<br>Magazine x2<br>Recipe/Plan")).addTo(ol_loc);
    L.marker(rc.unproject([1560,960]), {icon: mark_lodge, title: "Morgantown High School", riseOnHover: true}).bindTooltip("<b>Morgantown High School</b><br>Bobblehead x3<br>Magazine x3<br>Cap Stash x1").addTo(ol_loc);


    L.marker(rc.unproject([1500,1090]), {icon: mark_lodge, title: "Big Al's Tattoo Parlor", riseOnHover: true}).bindTooltip(tooltipMapTemplate("Big Al's Tattoo Parlor")).addTo(ol_loc);

    L.marker(rc.unproject([1374,1016]), {icon: mark_pub, title: "Portside Pub", riseOnHover: true}).bindTooltip("<b>Portside Pub</b><br>Bobblehead x1<br>Magazine x1").addTo(ol_loc);
    L.marker(rc.unproject([1420,1052]), {icon: mark_factory, title: "Mama Dolce's Food Processing", riseOnHover: true}).bindTooltip("<b>Mama Dolce's Food Processing</b><br>Bobblehead x4<br>Magazine x4<br>Cap Stash x1<br>Recipe/Plan").addTo(ol_loc);
    L.marker(rc.unproject([1484,1061]), {icon: mark_va, title: "Vault-Tec University", riseOnHover: true}).bindTooltip("<b>Vault-Tec University</b><br>Bobblehead x3<br>Magazine x3<br>Cap Stash x2<br>Recipe/Plan").addTo(ol_loc);
    L.marker(rc.unproject([1600,790]), {icon: mark_dam, title: "Grafton Dam", riseOnHover: true}).bindTooltip("<b>Grafton Dam</b><br>Bobblehead x1<br>Magazine x1<br>Recipe/Plan").addTo(ol_loc);
    L.marker(rc.unproject([1070,1239]), {icon: mark_houses, title: "Slocum Joe", riseOnHover: true}).bindTooltip("<b>Slocum Joe</b>").addTo(ol_loc);
    L.marker(rc.unproject([1129,1179]), {icon: mark_mine, title: "Gauley Mine", riseOnHover: true}).bindTooltip("<b>Gauley Mine</b><br>Bobblehead x3<br>Magazine x2").addTo(ol_loc);
    L.marker(rc.unproject([1268,1258]), {icon: mark_arktos, title: "Arktos Pharma", riseOnHover: true}).bindTooltip("<b>Arktos Pharma</b><br>Bobblehead x1<br>Magazine x2<br>Recipe/Plan").addTo(ol_loc);
    L.marker(rc.unproject([1390,1290]), {icon: mark_lodge, title: "Greg's Mine Supply", riseOnHover: true}).bindTooltip("<b>Greg's Mine Supply</b><br>Bobblehead x1<br>Magazine x1<br>Recipe/Plan").addTo(ol_loc);
    L.marker(rc.unproject([1626,1205]), {icon: mark_golf, title: "Bolton Greens", riseOnHover: true}).bindTooltip("<b>Bolton Greens</b><br>Bobblehead x5<br>Magazine x3<br>Recipe/Plan").addTo(ol_loc);
    L.marker(rc.unproject([900,1531]), {icon: mark_bridge, title: "New River Gorge Bridge - East", riseOnHover: true}).bindTooltip("<b>New River Gorge Bridge - East</b><br>Cap Stash x1").addTo(ol_loc);
    L.marker(rc.unproject([968,1561]), {icon: mark_cabin, title: "New River Gorge Resort", riseOnHover: true}).bindTooltip("<b>New River Gorge Resort</b><br>Bobblehead x1<br>Cap Stash x1<br>Recipe/Plan").addTo(ol_loc);
    L.marker(rc.unproject([1121,1452]), {icon: mark_town, title: "Sutton", riseOnHover: true}).bindTooltip("<b>Sutton</b><br>Bobblehead x2<br>Magazine x2").addTo(ol_loc);
    L.marker(rc.unproject([1244,1501]), {icon: mark_lookout, title: "East Kanawha Lookout", riseOnHover: true}).bindTooltip("<b>East Kanawha Lookout</b><br>Cap Stash x1").addTo(ol_loc);
    L.marker(rc.unproject([1233,1430]), {icon: mark_town, title: "Helvetia", riseOnHover: true}).bindTooltip("<b>Helvetia</b><br>Recipe/Plan").addTo(ol_loc);
    L.marker(rc.unproject([1406,1403]), {icon: mark_plane, title: "Horizon's Rest", riseOnHover: true}).bindTooltip("<b>Horizon's Rest</b><br>Bobblehead x2<br>Magazine x3<br>Recipe/Plan").addTo(ol_loc);
    L.marker(rc.unproject([1506,1397]), {icon: mark_radiotower, title: "Relay Tower HN-B1-12", riseOnHover: true}).bindTooltip("<b>Relay Tower HN-B1-12</b><br>Bobblehead x1<br>Magazine x1").addTo(ol_loc);
    L.marker(rc.unproject([1524,1508]), {icon: mark_snow, title: "White Powder Winter Sports", riseOnHover: true}).bindTooltip("<b>White Powder Winter Sports</b><br>Cap Stash x1<br>Recipe/Plan").addTo(ol_loc);
    L.marker(rc.unproject([1321,1580]), {icon: mark_waterplant, title: 'Tygart Water Treatment', riseOnHover: true}).bindTooltip("<b>Tygart Water Treatment</b><br>Bobblehead x1<br>Magazine x1<br>Cap Stash x1<br>Recipe/Plan").addTo(ol_loc);
    L.marker(rc.unproject([1288,1634]), {icon: mark_substation, title: 'Poseidon Power Substation PX-02', riseOnHover: true}).bindTooltip("<b>Poseidon Power Substation PX-02</b>").addTo(ol_loc);
    L.marker(rc.unproject([1036,1703]), {icon: mark_base, title: 'Camp McClintock', riseOnHover: true}).bindTooltip("<b>Camp McClintock</b><br>Magazine x1").addTo(ol_loc);
//
    L.marker(rc.unproject([498,1468]), {icon: mark_hotdog, title: 'Hillfolk Hotdogs', riseOnHover: true}).bindTooltip("<b>Hillfolk Hotdogs</b><br>Recipe/Plan").addTo(ol_loc);
    L.marker(rc.unproject([535,1490]), {icon: mark_substation, title: 'Poseidon Power Substation PX-01', riseOnHover: true}).bindTooltip("<b>Poseidon Power Substation PX-01</b>").addTo(ol_loc);
    L.marker(rc.unproject([220,1872]), {icon: mark_dock, title: 'Ohio River Adventures', riseOnHover: true}).bindTooltip("<b>Ohio River Adventures</b><br>Bobblehead x1<br>Magazine x1").addTo(ol_loc);
    L.marker(rc.unproject([314,1791]), {icon: mark_cemetery, title: 'Kanawha County Cemetery', riseOnHover: true}).bindTooltip("<b>Kanawha County Cemetery</b><br>Magazine x1").addTo(ol_loc);
    L.marker(rc.unproject([430,1657]), {icon: mark_farm, title: 'Silva Homestead', riseOnHover: true}).bindTooltip("<b>Silva Homestead</b><br>Bobblehead x1<br>Magazine x1").addTo(ol_loc);
    L.marker(rc.unproject([617,1667]), {icon: mark_tree, title: 'Orwell Orchards', riseOnHover: true}).bindTooltip("<b>Orwell Orchards</b>").addTo(ol_loc);
    L.marker(rc.unproject([670,1698]), {icon: mark_bridge, title: 'New River Gorge Bridge - West', riseOnHover: true}).bindTooltip("<b>New River Gorge Bridge - West</b>").addTo(ol_loc);
    L.marker(rc.unproject([670,1730]), {icon: mark_cream, title: 'Cow Spots Creamery', riseOnHover: true}).bindTooltip("<b>Cow Spots Creamery</b>").addTo(ol_loc);
    L.marker(rc.unproject([310,1919]), {icon: mark_shack, title: 'Lewis & Sons Farming Supply', riseOnHover: true}).bindTooltip("<b>Lewis & Sons Farming Supply</b><br>Bobblehead x3<br>Magazine x3").addTo(ol_loc);
    L.marker(rc.unproject([407,2009]), {icon: mark_nuka, title: 'Kanawha Nuka Cola Plant', riseOnHover: true}).bindTooltip("<b>Kanawha Nuka Cola Plant</b><br>Bobblehead x3<br>Magazine x3<br>Cap Stash x5").addTo(ol_loc);
    L.marker(rc.unproject([445,1847]), {icon: mark_cabin, title: 'Camp Adams', riseOnHover: true}).bindTooltip("<b>Camp Adams</b><br>Magazine x1").addTo(ol_loc);
    L.marker(rc.unproject([484,1847]), {icon: mark_lookout, title: 'Camp Adams Lookout', riseOnHover: true}).bindTooltip("<b>Camp Adams Lookout</b>").addTo(ol_loc);
    L.marker(rc.unproject([616,1845]), {icon: mark_teapot, title: 'The Giant Teapot', riseOnHover: true}).bindTooltip("<b>The Giant Teapot</b><br>Bobblehead x2<br>Magazine x2").addTo(ol_loc);
    L.marker(rc.unproject([615,1917]), {icon: mark_power, title: 'Poseidon Energy Plant WV-06', riseOnHover: true}).bindTooltip("<b>Poseidon Energy Plant WV-06</b><br>Bobblehead x5<br>Magazine x8<br>Cap Stash x21").addTo(ol_loc);
//
    L.marker(rc.unproject([796,2027]), {icon: mark_city, title: 'Charleston', riseOnHover: true}).bindTooltip("<b>Charleston</b>").addTo(ol_loc);
    L.marker(rc.unproject([722,1968]), {icon: mark_railyard, title: 'Charleston Railyard', riseOnHover: true}).bindTooltip("<b>Charleston Railyard</b><br>Bobblehead x1<br>Magazine x1").addTo(ol_loc);
    L.marker(rc.unproject([736,2022]), {icon: mark_med, title: 'AVR Medical Center', riseOnHover: true}).bindTooltip("<b>AVR Medical Center</b><br>Bobblehead x4<br>Magazine x3<br>Cap Stash x1<br>Recipe/Plan").addTo(ol_loc);
    L.marker(rc.unproject([787,1970]), {icon: mark_scraper, title: 'Hornwright Industrial Headquarters', riseOnHover: true}).bindTooltip("<b>Hornwright Industrial Headquarters</b><br>Bobblehead x3<br>Magazine x3<br>Cap Stash x1").addTo(ol_loc);
    L.marker(rc.unproject([805,1977]), {icon: mark_scraper, title: 'Charleston Herald', riseOnHover: true}).bindTooltip("<b>Charleston Herald</b><br>Recipe/Plan").addTo(ol_loc);
    L.marker(rc.unproject([807,2110]), {icon: mark_vendorlodge, title: 'Charleston Fire Department (Responders)', riseOnHover: true}).bindTooltip(tooltipMapTemplate('<span class="icon-responders"></span> Charleston Fire Department (Responders)',"",'')).addTo(ol_loc);
    L.marker(rc.unproject([895,2048]), {icon: mark_capital, title: 'Charleston Capitol Building', riseOnHover: true}).bindTooltip("<b>Charleston Capitol Building</b><br>Bobblehead x1<br>Magazine x1<br>Recipe/Plan").addTo(ol_loc);
    L.marker(rc.unproject([977,2044]), {icon: mark_factory, title: 'Summersville Dam', riseOnHover: true}).bindTooltip("<b>Summersville Dam</b><br>Recipe/Plan").addTo(ol_loc);
    L.marker(rc.unproject([1035,1929]), {icon: mark_dock, title: 'Summersville Docks', riseOnHover: true}).bindTooltip("<b>Summersville Docks</b><br>Bobblehead x3<br>Magazine x3<br>Recipe/Plan").addTo(ol_loc);
    L.marker(rc.unproject([1127,1908]), {icon: mark_city, title: 'New Gad', riseOnHover: true}).bindTooltip("<b>New Gad</b>").addTo(ol_loc);
    L.marker(rc.unproject([1236,1760]), {icon: mark_town, title: 'Summersville', riseOnHover: true}).bindTooltip("<b>Summersville</b>").addTo(ol_loc);
    L.marker(rc.unproject([1106,2037]), {icon: mark_manor, title: 'Burdette Manor', riseOnHover: true}).bindTooltip("<b>Burdette Manor</b><br>Bobblehead x2<br>Magazine x2<br>Cap Stash x1<br>Recipe/Plan").addTo(ol_loc);
    L.marker(rc.unproject([1163,1993]), {icon: mark_mansion, title: 'Sugarmaple', riseOnHover: true}).bindTooltip("<b>Sugarmaple</b><br>Cap Stash x1").addTo(ol_loc);
    L.marker(rc.unproject([1187,1960]), {icon: mark_cabin, title: 'Overlook Cabin', riseOnHover: true}).bindTooltip("<b>Overlook Cabin</b><br>Bobblehead x2<br>Magazine x2<br>Cap Stash x3<br>Recipe/Plan").addTo(ol_loc);
    L.marker(rc.unproject([1045,2127]), {icon: mark_manor, title: 'Riverside Manor', riseOnHover: true}).bindTooltip(tooltipTemplate('<span class="icon-mysteries"></span> Riverside Manor',2,4,7)).addTo(ol_loc);
    L.marker(rc.unproject([1155,2068]), {icon: mark_manor, title: 'Torrance House', riseOnHover: true}).bindTooltip("<b>Torrance House</b><br>Bobblehead x2<br>Magazine x2").addTo(ol_loc);
    L.marker(rc.unproject([1208,2018]), {icon: mark_manor, title: 'Hornwright Summer Villa', riseOnHover: true}).bindTooltip("<b>Hornwright Summer Villa</b><br>Bobblehead x1<br>Magazine x2<br>Cap Stash x1<br>Recipe/Plan").addTo(ol_loc);
//Toxic Valley
    L.marker(rc.unproject([925,118]), {icon: mark_raider, title: 'The Crosshair', riseOnHover: true}).bindTooltip("<b>The Crosshair</b><br>Bobblehead x2<br>Magazine x1").addTo(ol_loc);
    L.marker(rc.unproject([900,335]), {icon: mark_manor, title: 'Clancy Manor', riseOnHover: true}).bindTooltip("<b>Clancy Manor</b><br>Bobblehead x1<br>Magazine x1").addTo(ol_loc);
    L.marker(rc.unproject([878,491]), {icon: mark_farm, title: 'Cobbleton Farm', riseOnHover: true}).bindTooltip("<b>Cobbleton Farm</b><br>Bobblehead x1<br>Magazine x1").addTo(ol_loc);
    L.marker(rc.unproject([820,550]), {icon: mark_cream, title: "Lady Janet's Soft Serve", riseOnHover: true}).bindTooltip("<b>Lady Janet's Soft Serve</b><br>Bobblehead x1<br>Magazine x1").addTo(ol_loc);
    L.marker(rc.unproject([1080,330]), {icon: mark_golf, title: "Hemlock Holes", riseOnHover: true}).bindTooltip("<b>Hemlock Holes</b>").addTo(ol_loc);
    L.marker(rc.unproject([1022,571]), {icon: mark_farm, title: 'Becker Farm', riseOnHover: true}).bindTooltip("<b>Becker Farm</b><br>Bobblehead x2<br>Magazine x1<br>Recipe/Plan").addTo(ol_loc);
    L.marker(rc.unproject([1166,585]), {icon: mark_vendortown, title: 'Grafton (Responders)', riseOnHover: true}).bindTooltip(tooltipMapTemplate('<span class="icon-responders"></span> Grafton (Responders)',"","Cap Stash x2")).addTo(ol_loc);
    L.marker(rc.unproject([1311,722]), {icon: mark_prison, title: 'Eastern Regional Penitentiary', riseOnHover: true}).bindTooltip("<b>Eastern Regional Penitentiary</b><br>Bobblehead x4<br>Magazine x7<br>Cap Stash x19").addTo(ol_loc);
    L.marker(rc.unproject([1324,550]), {icon: mark_farm, title: 'Smith Farm', riseOnHover: true}).bindTooltip("<b>Smith Farm</b>").addTo(ol_loc);
    L.marker(rc.unproject([1250,410]), {icon: mark_farm, title: 'Woods Estate', riseOnHover: true}).bindTooltip("<b>Woods Estate</b>").addTo(ol_loc);
    L.marker(rc.unproject([1340,266]), {icon: mark_fair, title: "Wavy Willard's Water Park", riseOnHover: true}).bindTooltip("<b>Wavy Willard's Water Park</b><br>Bobblehead x4<br>Magazine x2").addTo(ol_loc);
    L.marker(rc.unproject([1421,293]), {icon: mark_hotdog, title: 'Willard Corporate Housing', riseOnHover: true}).bindTooltip("<b>Willard Corporate Housing</b><br>Bobblehead x1<br>Recipe/Plan").addTo(ol_loc);
    L.marker(rc.unproject([1368,447]), {icon: mark_town, title: 'Clarksburg', riseOnHover: true}).bindTooltip("<b>Clarksburg</b><br>Cap Stash x2<br>Recipe/Plan").addTo(ol_loc);
    L.marker(rc.unproject([1420,454]), {icon: mark_lodge, title: 'Clarksburg Shooting Club', riseOnHover: true}).bindTooltip("<b>Clarksburg Shooting Club</b><br>Recipe/Plan").addTo(ol_loc);
    L.marker(rc.unproject([1433,389]), {icon: mark_pond, title: 'Toxic Dried Lakebed', riseOnHover: true}).bindTooltip("<b>Toxic Dried Lakebed</b>").addTo(ol_loc);
    L.marker(rc.unproject([1458,354]), {icon: mark_cabin, title: 'Kiddie Corner Cabins', riseOnHover: true}).bindTooltip("<b>Kiddie Corner Cabins</b><br>Bobblehead x1<br>Magazine x2<br>Recipe/Plan").addTo(ol_loc);
    L.marker(rc.unproject([1564,342]), {icon: mark_houses, title: 'Black Bear Lodge', riseOnHover: true}).bindTooltip("<b>Black Bear Lodge</b><br>Bobblehead x1<br>Magazine x1").addTo(ol_loc);
    L.marker(rc.unproject([1580,413]), {icon: mark_farm, title: 'Graninger Farm', riseOnHover: true}).bindTooltip("<b>Graninger Farm</b>").addTo(ol_loc);
    L.marker(rc.unproject([1530,640]), {icon: mark_lookout, title: 'Pioneer Scout Lookout', riseOnHover: true}).bindTooltip("<b>Pioneer Scout Lookout</b><br>Recipe/Plan").addTo(ol_loc);
    L.marker(rc.unproject([1570,650]), {icon: mark_cabin, title: 'Pioneer Scout Camp', riseOnHover: true}).bindTooltip("<b>Pioneer Scout Camp</b><br>Bobblehead x2<br>Magazine x2").addTo(ol_loc);
    L.marker(rc.unproject([1670,690]), {icon: mark_factory, title: 'Grafton Steel', riseOnHover: true}).bindTooltip("<b>Grafton Steel</b><br>Recipe/Plan").addTo(ol_loc);
    L.marker(rc.unproject([1780,650]), {icon: mark_substation, title: 'Poseidon Power Substation PX-03', riseOnHover: true}).bindTooltip("<b>Poseidon Power Substation PX-03</b>").addTo(ol_loc);
    L.marker(rc.unproject([1771,568]), {icon: mark_statue, title: 'Colonel Kelly Monument', riseOnHover: true}).bindTooltip("<b>Colonel Kelly Monument</b>").addTo(ol_loc);
    L.marker(rc.unproject([1820,415]), {icon: mark_cemetery, title: 'Philippi Battlefield Cemetery', riseOnHover: true}).bindTooltip("<b>Philippi Battlefield Cemetery</b><br>Bobblehead x1<br>Magazine x1").addTo(ol_loc);
    L.marker(rc.unproject([1695,236]), {icon: mark_spacestation, title: 'Crashed Space Station', riseOnHover: true}).bindTooltip("<b>Crashed Space Station</b>").addTo(ol_loc);
    L.marker(rc.unproject([1865,213]), {icon: mark_raider, title: 'Knife Edge', riseOnHover: true}).bindTooltip("<b>Knife Edge</b><br>Magazine x1<br>Recipe/Plan").addTo(ol_loc);
    L.marker(rc.unproject([1953,268]), {icon: mark_fort, title: "Prickett's Fort", riseOnHover: true}).bindTooltip("<b>Prickett's Fort</b>").addTo(ol_loc);
//Ash Heap
    L.marker(rc.unproject([285,2191]), {icon: mark_vendorfair, title: "Camden Park (Responder)", riseOnHover: true}).bindTooltip(tooltipMapTemplate('<span class="icon-responders"></span> Camden Park (Responders)',"","Bobblehead x4<br>Magazine x3<br>Cap Stash x1<br>Recipe/Plan")).addTo(ol_loc);
    L.marker(rc.unproject([413,2230]), {icon: mark_quarry, title: "Brim Quarry", riseOnHover: true}).bindTooltip("<b>Brim Quarry</b>").addTo(ol_loc);
    L.marker(rc.unproject([385,2312]), {icon: mark_factory, title: "Hornwright Testing Site #04", riseOnHover: true}).bindTooltip("<b>Hornwright Testing Site #04</b>").addTo(ol_loc);
    L.marker(rc.unproject([594,2153]), {icon: mark_radiotower, title: "Relay Tower HG-B7-09", riseOnHover: true}).bindTooltip("<b>Relay Tower HG-B7-09</b><br>Bobblehead x1<br>Magazine x1").addTo(ol_loc);
    L.marker(rc.unproject([655,2212]), {icon: mark_quarry, title: "Abandoned Mine Shaft 5", riseOnHover: true}).bindTooltip("<b>Abandoned Mine Shaft 5</b>").addTo(ol_loc);
    L.marker(rc.unproject([710,2212]), {icon: mark_quarry, title: "Belching Betty", riseOnHover: true}).bindTooltip("<b>Belching Betty</b><br>Bobblehead x4<br>Magazine x4").addTo(ol_loc);
    L.marker(rc.unproject([741,2158]), {icon: mark_houses, title: "The Rusty Pick", riseOnHover: true}).bindTooltip("<b>The Rusty Pick</b><br>Bobblehead x2<br>Magazine x2").addTo(ol_loc);
    L.marker(rc.unproject([754,2278]), {icon: mark_quarry, title: "Abandoned Mine Site Kittery", riseOnHover: true}).bindTooltip("<b>Abandoned Mine Site Kittery</b>").addTo(ol_loc);
    L.marker(rc.unproject([232,2516]), {icon: mark_town, title: "Beckley", riseOnHover: true}).bindTooltip("<b>Beckley</b><br>Bobblehead x2<br>Magazine x2").addTo(ol_loc);
    L.marker(rc.unproject([193,2470]), {icon: mark_houses, title: "Sal's Grinders", riseOnHover: true}).bindTooltip("<b>Sal's Grinders</b><br>Bobblehead x2<br>Magazine x1").addTo(ol_loc);
    L.marker(rc.unproject([204,2396]), {icon: mark_bunker, title: "Hornwright Air Purifier Site #04", riseOnHover: true}).bindTooltip("<b>Hornwright Air Purifier Site #04</b>").addTo(ol_loc);
    L.marker(rc.unproject([238,2597]), {icon: mark_hotdog, title: "Nicholson's End", riseOnHover: true}).bindTooltip("<b>Nicholson's End</b><br>Magazine x1").addTo(ol_loc);
    L.marker(rc.unproject([336,2414]), {icon: mark_quarry, title: "Abandoned Mine Shaft 4", riseOnHover: true}).bindTooltip("<b>Abandoned Mine Shaft 4</b>").addTo(ol_loc);
    L.marker(rc.unproject([556,2440]), {icon: mark_quarry, title: "Abandoned Mine Shaft Elaine", riseOnHover: true}).bindTooltip("<b>Abandoned Mine Shaft Elaine</b>").addTo(ol_loc);
    L.marker(rc.unproject([613,2481]), {icon: mark_trainyard, title: "Mount Blair Trainyard", riseOnHover: true}).bindTooltip("<b>Mount Blair Trainyard</b><br>Bobblehead x4<br>Magazine x3<br>Cap Stash x2").addTo(ol_loc);
    L.marker(rc.unproject([683,2412]), {icon: mark_quarry, title: "Abandoned Mine Shaft 6", riseOnHover: true}).bindTooltip("<b>Abandoned Mine Shaft 6</b>").addTo(ol_loc);
    L.marker(rc.unproject([835,2449]), {icon: mark_hotdog, title: "Rollins Work Camp", riseOnHover: true}).bindTooltip("<b>Rollins Work Camp</b><br>Bobblehead x1<br>Magazine x1").addTo(ol_loc);
//
    L.marker(rc.unproject([781,2178]), {icon: mark_bunker, title: "Hornwright Air Purifier Site #01", riseOnHover: true}).bindTooltip("<b>Hornwright Air Purifier Site #01</b>").addTo(ol_loc);
    L.marker(rc.unproject([929,2342]), {icon: mark_quarry, title: "The Burning Mine", riseOnHover: true}).bindTooltip("<b>The Burning Mine</b><br>Bobblehead x4<br>Magazine x4").addTo(ol_loc);
    L.marker(rc.unproject([985,2220]), {icon: mark_perch, title: "Widow's Perch", riseOnHover: true}).bindTooltip("<b>Widow's Perch</b><br>Bobblehead x1<br>Magazine x1").addTo(ol_loc);
    L.marker(rc.unproject([960,2275]), {icon: mark_cabin, title: "Pylon Ambush Site", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Pylon Ambush Site',"","Added in Patch 8")).addTo(ol_loc);
    L.marker(rc.unproject([1106,2142]), {icon: mark_raider, title: "Bleeding Kate's Grindhouse", riseOnHover: true}).bindTooltip("<b>Bleeding Kate's Grindhouse</b>").addTo(ol_loc);
    L.marker(rc.unproject([1200,2231]), {icon: mark_radiotower, title: "Relay Tower DP-B5-21", riseOnHover: true}).bindTooltip("<b>Relay Tower DP-B5-21</b><br>Recipe/Plan").addTo(ol_loc);
    L.marker(rc.unproject([1234,2271]), {icon: mark_mine, title: "Uncanny Caverns", riseOnHover: true}).bindTooltip("<b>Uncanny Caverns</b><br>Bobblehead x4<br>Magazine x4<br>Recipe/Plan").addTo(ol_loc);
    L.marker(rc.unproject([1325,2216]), {icon: mark_statue, title: "Miners Monument", riseOnHover: true}).bindTooltip("<b>Miners Monument</b>").addTo(ol_loc);
    L.marker(rc.unproject([1349,2390]), {icon: mark_perch, title: "Bastion Park", riseOnHover: true}).bindTooltip("<b>Bastion Park</b><br>Bobblehead x2<br>Magazine x2").addTo(ol_loc);
    L.marker(rc.unproject([1019,2519]), {icon: mark_quarry, title: "Abandoned Mine Shaft 3", riseOnHover: true}).bindTooltip("<b>Abandoned Mine Shaft 3</b>").addTo(ol_loc);
    L.marker(rc.unproject([1049,2352]), {icon: mark_bunker, title: "Hornwright Air Purifier Site #02", riseOnHover: true}).bindTooltip("<b>Hornwright Air Purifier Site #02</b>").addTo(ol_loc);
    L.marker(rc.unproject([1162,2355]), {icon: mark_cemetery, title: "Pleasant Hills Cemetery", riseOnHover: true}).bindTooltip("<b>Pleasant Hills Cemetery</b><br>Magazine x1<br>Cap Stash x1").addTo(ol_loc);
    L.marker(rc.unproject([1110,2429]), {icon: mark_town, title: "Lewisburg", riseOnHover: true}).bindTooltip("<b>Lewisburg</b><br>Bobblehead x2<br>Magazine x2").addTo(ol_loc);
    L.marker(rc.unproject([1070,2480]), {icon: mark_fair, title: "Lake Reynolds", riseOnHover: true}).bindTooltip("<b>Lake Reynolds</b>").addTo(ol_loc);
    L.marker(rc.unproject([1227,2484]), {icon: mark_quarry, title: "Big Bend Tunnel West", riseOnHover: true}).bindTooltip("<b>Big Bend Tunnel West</b><br>Bobblehead x1<br>Magazine x1<br>Cap Stash x1").addTo(ol_loc);
    L.marker(rc.unproject([1227,2525]), {icon: mark_substation, title: "Monongah Power Substation MZ-03", riseOnHover: true}).bindTooltip("<b>Monongah Power Substation MZ-03</b>").addTo(ol_loc);
    L.marker(rc.unproject([402,2705]), {icon: mark_factory, title: "Hornwright Testing Site #02", riseOnHover: true}).bindTooltip("<b>Hornwright Testing Site #02</b>").addTo(ol_loc);
    L.marker(rc.unproject([455,2583]), {icon: mark_town, title: "Welch", riseOnHover: true}).bindTooltip("<b>Welch</b><br>Recipe/Plan").addTo(ol_loc);
    L.marker(rc.unproject([542,2669]), {icon: mark_factory, title: "Abandoned Mine Shaft 1", riseOnHover: true}).bindTooltip("<b>Abandoned Mine Shaft 1</b>").addTo(ol_loc);
    L.marker(rc.unproject([663,2666]), {icon: mark_quarry, title: "AMS Testing Site", riseOnHover: true}).bindTooltip("<b>AMS Testing Site</b><br>Bobblehead x1<br>Magazine x1").addTo(ol_loc);
    L.marker(rc.unproject([653,2568]), {icon: mark_bunker, title: "Hornwright Air Purifier Site #03", riseOnHover: true}).bindTooltip("<b>Hornwright Air Purifier Site #03</b>").addTo(ol_loc);
    L.marker(rc.unproject([737,2567]), {icon: mark_rocket, title: "Red Rocket Filling Station", riseOnHover: true}).bindTooltip("<b>Red Rocket Filling Station</b><br>Bobblehead x1<br>Magazine x1<br>Cap Stash x1").addTo(ol_loc);
    L.marker(rc.unproject([854,2606]), {icon: mark_quarry, title: "Abandoned Mine Shaft 2", riseOnHover: true}).bindTooltip("<b>Abandoned Mine Shaft 2</b>").addTo(ol_loc);
    L.marker(rc.unproject([817,2696]), {icon: mark_factory, title: "Hornwright Testing Site #03", riseOnHover: true}).bindTooltip("<b>Hornwright Testing Site #03</b><br>Bobblehead x1").addTo(ol_loc);
    L.marker(rc.unproject([744,2819]), {icon: mark_camp, title: "Striker Row", riseOnHover: true}).bindTooltip("<b>Striker Row</b><br>Bobblehead x2<br>Magazine x2").addTo(ol_loc);
    L.marker(rc.unproject([964,2593]), {icon: mark_scraper, title: "Unfinished Mansion", riseOnHover: true}).bindTooltip("<b>Unfinished Mansion</b>").addTo(ol_loc);
    L.marker(rc.unproject([1012,2711]), {icon: mark_scraper, title: "Garrahan Estate", riseOnHover: true}).bindTooltip("<b>Garrahan Estate</b><br>Recipe/Plan").addTo(ol_loc);
    L.marker(rc.unproject([1134,2680]), {icon: mark_scraper, title: "Hornwright Estate", riseOnHover: true}).bindTooltip("<b>Hornwright Estate</b><br>Cap Stash x1<br>Recipe/Plan").addTo(ol_loc);
    L.marker(rc.unproject([1018,2759]), {icon: mark_headquarters, title: "Garrahan Mining Headquarters", riseOnHover: true}).bindTooltip("<b>Garrahan Mining Headquarters</b><br>Bobblehead x1<br>Magazine x1").addTo(ol_loc);
//Savage Divide
    L.marker(rc.unproject([1958,448]), {icon: mark_palace, title: "Palace of the Winding Path", riseOnHover: true}).bindTooltip("<b>Palace of the Winding Path</b>").addTo(ol_loc);
    L.marker(rc.unproject([2466,368]), {icon: mark_cabin, title: "Bailey Family Cabin", riseOnHover: true}).bindTooltip("<b>Bailey Family Cabin</b>").addTo(ol_loc);
    L.marker(rc.unproject([1855,660]), {icon: mark_base, title: "Site Bravo", riseOnHover: true}).bindTooltip("<b>Site Bravo</b>").addTo(ol_loc);
    L.marker(rc.unproject([2050,645]), {icon: mark_substation, title: "Monongah Power Substation MZ-01", riseOnHover: true}).bindTooltip("<b>Monongah Power Substation MZ-01</b>").addTo(ol_loc);
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
    L.marker(rc.unproject([2355,978]), {icon: mark_camp, title: "Sylvie & Sons Logging Camp", riseOnHover: true}).bindTooltip("<b>Sylvie & Sons Logging Camp</b>").addTo(ol_loc);
//
    L.marker(rc.unproject([1930,1230]), {icon: mark_cabin, title: "Seneca Rocks Visitor Center", riseOnHover: true}).bindTooltip("<b>Seneca Rocks Visitor Center</b>").addTo(ol_loc);
    L.marker(rc.unproject([2007,1257]), {icon: mark_rocks, title: "Seneca Rocks", riseOnHover: true}).bindTooltip("<b>Seneca Rocks</b>").addTo(ol_loc);
    L.marker(rc.unproject([2090,1340]), {icon: mark_raider, title: "The Sludge Hole", riseOnHover: true}).bindTooltip("<b>The Sludge Hole</b>").addTo(ol_loc);
    L.marker(rc.unproject([2150,1263]), {icon: mark_raider, title: "Seneca Gang Camp", riseOnHover: true}).bindTooltip("<b>Seneca Gang Camp</b>").addTo(ol_loc);
    L.marker(rc.unproject([2150,1328]), {icon: mark_mine, title: "Wendigo Cave", riseOnHover: true}).bindTooltip("<b>Wendigo Cave</b>").addTo(ol_loc);
    L.marker(rc.unproject([2243,1316]), {icon: mark_cabin, title: "Autumn Acre Cabin", riseOnHover: true}).bindTooltip("<b>Autumn Acre Cabin</b>").addTo(ol_loc);
    L.marker(rc.unproject([2351,1363]), {icon: mark_shack, title: "Toxic Larry's Meat 'N Go", riseOnHover: true}).bindTooltip("<b>Toxic Larry's Meat 'N Go</b>").addTo(ol_loc);
    L.marker(rc.unproject([1821,1377]), {icon: mark_raider, title: "Skullbone Vantage", riseOnHover: true}).bindTooltip("<b>Skullbone Vantage</b>").addTo(ol_loc);
    L.marker(rc.unproject([1867,1456]), {icon: mark_raider, title: "Pleasant Valley Cabins", riseOnHover: true}).bindTooltip("<b>Pleasant Valley Cabins</b>").addTo(ol_loc);
    L.marker(rc.unproject([1816,1526]), {icon: mark_top, title: "Top of the World", riseOnHover: true}).bindTooltip("<b>Top of the World</b>").addTo(ol_loc);
    L.marker(rc.unproject([1868,1531]), {icon: mark_vendorsnow, title: "Pleasant Valley Ski Resort (Raiders)", riseOnHover: true}).bindTooltip(tooltipMapTemplate('<span class="icon-raider"></span> Pleasant Valley Ski Resort (Raiders)',"","")).addTo(ol_loc);
    L.marker(rc.unproject([1840,1575]), {icon: mark_raider, title: "South Cutthroat Camp", riseOnHover: true}).bindTooltip("<b>South Cutthroat Camp</b>").addTo(ol_loc);
    L.marker(rc.unproject([2045,1450]), {icon: mark_raider, title: "North Cutthroat Camp", riseOnHover: true}).bindTooltip("<b>North Cutthroat Camp</b>").addTo(ol_loc);
    L.marker(rc.unproject([2080,1500]), {icon: mark_lookout, title: "Central Mountain Lookout", riseOnHover: true}).bindTooltip("<b>Central Mountain Lookout</b>").addTo(ol_loc);
    L.marker(rc.unproject([2170,1490]), {icon: mark_hotdog, title: "Yellow Sandy's Still", riseOnHover: true}).bindTooltip("<b>Yellow Sandy's Still</b>").addTo(ol_loc);
    L.marker(rc.unproject([1524,1707]), {icon: mark_perch, title: "Cliffwatch", riseOnHover: true}).bindTooltip("<b>Cliffwatch</b>").addTo(ol_loc);
    L.marker(rc.unproject([1635,1865]), {icon: mark_disposal, title: "Safe 'N Clean Disposal", riseOnHover: true}).bindTooltip("<b>Safe 'N Clean Disposal</b>").addTo(ol_loc);
    L.marker(rc.unproject([1633,1793]), {icon: mark_trainyard, title: "New Appalachian Central Trainyard", riseOnHover: true}).bindTooltip("<b>New Appalachian Central Trainyard</b>").addTo(ol_loc);
    L.marker(rc.unproject([1702,1691]), {icon: mark_trainyard, title: "98 NAR Regional", riseOnHover: true}).bindTooltip("<b>98 NAR Regional</b>").addTo(ol_loc);
    L.marker(rc.unproject([1866,1707]), {icon: mark_farm, title: "Beckwith Farm", riseOnHover: true}).bindTooltip("<b>Beckwith Farm</b>").addTo(ol_loc);
    L.marker(rc.unproject([1947,1759]), {icon: mark_shack, title: "Big Fred's BBQ Shack", riseOnHover: true}).bindTooltip("<b>Big Fred's BBQ Shack</b>").addTo(ol_loc);
    L.marker(rc.unproject([2081,1726]), {icon: mark_base, title: "Site Alpha", riseOnHover: true}).bindTooltip("<b>Site Alpha</b>").addTo(ol_loc);
    L.marker(rc.unproject([1357,2015]), {icon: mark_lookout, title: "Whitespring Lookout", riseOnHover: true}).bindTooltip("<b>Whitespring Lookout</b>").addTo(ol_loc);
    L.marker(rc.unproject([1455,1988]), {icon: mark_golf, title: "Whitespring Golf Club", riseOnHover: true}).bindTooltip("<b>Whitespring Golf Club</b>").addTo(ol_loc);
    L.marker(rc.unproject([1590,2000]), {icon: mark_resort, title: "Whitespring Resort", riseOnHover: true}).bindTooltip(tooltipMapTemplate('<span class="icon-resort"></span> Whitespring Resort',"","")).addTo(ol_loc);
    L.marker(rc.unproject([1598,2035]), {icon: mark_lodge, title: "Whitespring Service Entrance", riseOnHover: true}).bindTooltip("<b>Whitespring Service Entrance</b>").addTo(ol_loc);
    L.marker(rc.unproject([1571,2086]), {icon: mark_vendorbunker, title: "Whitespring Bunker (Enclave)", riseOnHover: true}).bindTooltip(tooltipMapTemplate('<span class="icon-enclave"></span> Whitespring Bunker (Enclave)',"","")).addTo(ol_loc);
//
    L.marker(rc.unproject([1698,2010]), {icon: mark_substation, title: "Monongah Power Substation MZ-02", riseOnHover: true}).bindTooltip("<b>Monongah Power Substation MZ-02</b>").addTo(ol_loc);
    L.marker(rc.unproject([1740,1956]), {icon: mark_quarry, title: "Blackwater Mine", riseOnHover: true}).bindTooltip("<b>Blackwater Mine</b>").addTo(ol_loc);
    L.marker(rc.unproject([1848,1906]), {icon: mark_cabin, title: "Middle Mountain Cabins", riseOnHover: true}).bindTooltip("<b>Middle Mountain Cabins</b>").addTo(ol_loc);
    L.marker(rc.unproject([1924,2007]), {icon: mark_disposal, title: "Emmett Mountain Disposal Site", riseOnHover: true}).bindTooltip("<b>Emmett Mountain Disposal Site</b>").addTo(ol_loc);
    L.marker(rc.unproject([2051,2099]), {icon: mark_raider, title: "Ripper Alley", riseOnHover: true}).bindTooltip("<b>Ripper Alley</b>").addTo(ol_loc);
    L.marker(rc.unproject([2147,1904]), {icon: mark_dish, title: "National Isolated Radio Array", riseOnHover: true}).bindTooltip("<b>National Isolated Radio Array</b>").addTo(ol_loc);
    L.marker(rc.unproject([2367,1745]), {icon: mark_dish, title: "Sugar Grove", riseOnHover: true}).bindTooltip("<b>Sugar Grove</b>").addTo(ol_loc);
    L.marker(rc.unproject([2340,1946]), {icon: mark_dish, title: "National Radio Astronomy Research Center", riseOnHover: true}).bindTooltip("<b>National Radio Astronomy Research Center</b>").addTo(ol_loc);
    L.marker(rc.unproject([2151,2057]), {icon: mark_scraper, title: "West Tek Research Center", riseOnHover: true}).bindTooltip("<b>West Tek Research Center</b>").addTo(ol_loc);
    L.marker(rc.unproject([2231,2044]), {icon: mark_base, title: "US-13C Bivouac", riseOnHover: true}).bindTooltip("<b>US-13C Bivouac</b>").addTo(ol_loc);
    L.marker(rc.unproject([2346,2057]), {icon: mark_lookout, title: "East Mountain Lookout", riseOnHover: true}).bindTooltip("<b>East Mountain Lookout</b>").addTo(ol_loc);
    L.marker(rc.unproject([1600,2325]), {icon: mark_shack, title: "Mountainside Bed & Breakfast", riseOnHover: true}).bindTooltip("<b>Mountainside Bed & Breakfast</b>").addTo(ol_loc);
    L.marker(rc.unproject([1705,2110]), {icon: mark_perch, title: "The Vantage", riseOnHover: true}).bindTooltip("<b>The Vantage</b>").addTo(ol_loc);
    L.marker(rc.unproject([1820,2085]), {icon: mark_pond, title: "Solomon's Pond", riseOnHover: true}).bindTooltip("<b>Solomon's Pond</b>").addTo(ol_loc);
    L.marker(rc.unproject([1880,2185]), {icon: mark_pond, title: "Twin Lakes", riseOnHover: true}).bindTooltip("<b>Twin Lakes</b>").addTo(ol_loc);
    L.marker(rc.unproject([1940,2110]), {icon: mark_cabin, title: "Investigator's Cabin", riseOnHover: true}).bindTooltip("<b>Investigator's Cabin</b>").addTo(ol_loc);
    L.marker(rc.unproject([1968,2279]), {icon: mark_town, title: "Huntersville", riseOnHover: true}).bindTooltip("<b>Huntersville</b>").addTo(ol_loc);
    L.marker(rc.unproject([2109,2258]), {icon: mark_rocks, title: "Devil's Backbone", riseOnHover: true}).bindTooltip("<b>Devil's Backbone</b>").addTo(ol_loc);
    L.marker(rc.unproject([2121,2336]), {icon: mark_raider, title: "The Freak Show", riseOnHover: true}).bindTooltip("<b>The Freak Show</b>").addTo(ol_loc);
    L.marker(rc.unproject([1548,2432]), {icon: mark_base, title: "Site Charlie", riseOnHover: true}).bindTooltip("<b>Site Charlie</b>").addTo(ol_loc);
    L.marker(rc.unproject([1550,2462]), {icon: mark_waterplant, title: "R&G Processing Services", riseOnHover: true}).bindTooltip("<b>R&G Processing Services</b>").addTo(ol_loc);
    L.marker(rc.unproject([1720,2545]), {icon: mark_pond, title: "Spruce Knob Channels", riseOnHover: true}).bindTooltip("<b>Spruce Knob Channels</b>").addTo(ol_loc);
    L.marker(rc.unproject([1910,2490]), {icon: mark_lookout, title: "South Mountain Lookout", riseOnHover: true}).bindTooltip("<b>South Mountain Lookout</b>").addTo(ol_loc);
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
    L.marker(rc.unproject([2672,741]), {icon: mark_shack, title: "Hunter's Shack", riseOnHover: true}).bindTooltip("<b>Hunter's Shack</b>").addTo(ol_loc);
    L.marker(rc.unproject([2730,746]), {icon: mark_shack, title: "Southhampton Estate", riseOnHover: true}).bindTooltip("<b>Southhampton Estate</b>").addTo(ol_loc);
    L.marker(rc.unproject([2755,695]), {icon: mark_pond, title: "Highland Marsh", riseOnHover: true}).bindTooltip("<b>Highland Marsh</b>").addTo(ol_loc);
    L.marker(rc.unproject([2822,659]), {icon: mark_bunker, title: "Abbie's Bunker", riseOnHover: true}).bindTooltip("<b>Abbie's Bunker</b>").addTo(ol_loc);
    L.marker(rc.unproject([2904,610]), {icon: mark_pond, title: "Gnarled Shallows", riseOnHover: true}).bindTooltip("<b>Gnarled Shallow</b>").addTo(ol_loc);
    L.marker(rc.unproject([2656,842]), {icon: mark_pond, title: "Gulper Lagoon", riseOnHover: true}).bindTooltip("<b>Gulper Lagoon</b>").addTo(ol_loc);
    L.marker(rc.unproject([2715,910]), {icon: mark_bunker, title: "Ella Ames' Bunker", riseOnHover: true}).bindTooltip("<b>Ella Ames' Bunker</b>").addTo(ol_loc);
    L.marker(rc.unproject([2748,878]), {icon: mark_houses, title: "Excelsior Model Home", riseOnHover: true}).bindTooltip("<b>Excelsior Model Home</b>").addTo(ol_loc);
    L.marker(rc.unproject([2484,1133]), {icon: mark_town, title: "Mosstown", riseOnHover: true}).bindTooltip("<b>Mosstown</b>").addTo(ol_loc);
    L.marker(rc.unproject([2610,992]), {icon: mark_lookout, title: "Dolly Sods Lookout", riseOnHover: true}).bindTooltip("<b>Dolly Sods Lookout</b>").addTo(ol_loc);
    L.marker(rc.unproject([2640,1022]), {icon: mark_tree, title: "Dolly Sods Wilderness", riseOnHover: true}).bindTooltip("<b>Dolly Sods Wilderness</b>").addTo(ol_loc);
    L.marker(rc.unproject([2534,1228]), {icon: mark_plane, title: "Crashed Plane", riseOnHover: true}).bindTooltip("<b>Crashed Plane</b>").addTo(ol_loc);
    L.marker(rc.unproject([2670,1155]), {icon: mark_bunker, title: "Carson Family Bunker", riseOnHover: true}).bindTooltip("<b>Carson Family Bunker</b>").addTo(ol_loc);
    L.marker(rc.unproject([2830,1070]), {icon: mark_dam, title: "Crevasse Dam", riseOnHover: true}).bindTooltip("<b>Crevasse Dam</b>").addTo(ol_loc);
    L.marker(rc.unproject([2892,925]), {icon: mark_power, title: "Thunder Mountain Power Plant", riseOnHover: true}).bindTooltip("<b>Thunder Mountain Power Plant</b>").addTo(ol_loc);
    L.marker(rc.unproject([2769,1190]), {icon: mark_waterplant, title: "Dyer Chemical", riseOnHover: true}).bindTooltip("<b>Dyer Chemical</b>").addTo(ol_loc);
    L.marker(rc.unproject([2846,1222]), {icon: mark_bunker, title: "Raleigh Clay's Bunker", riseOnHover: true}).bindTooltip("<b>Raleigh Clay's Bunker</b>").addTo(ol_loc);
    L.marker(rc.unproject([2965,1150]), {icon: mark_factory, title: "Braxson's Quality Medical Supplies", riseOnHover: true}).bindTooltip("<b>Braxson's Quality Medical Supplies</b>").addTo(ol_loc);
    L.marker(rc.unproject([2449,1429]), {icon: mark_town, title: "Berkeley Springs", riseOnHover: true}).bindTooltip("<b>Berkeley Springs</b>").addTo(ol_loc);
    L.marker(rc.unproject([2571,1360]), {icon: mark_pond, title: "Big Maw", riseOnHover: true}).bindTooltip("<b>Big Maw</b>").addTo(ol_loc);
    L.marker(rc.unproject([2690,1300]), {icon: mark_town, title: "Treehouse Village", riseOnHover: true}).bindTooltip("<b>Treehouse Village</b>").addTo(ol_loc);
    L.marker(rc.unproject([2784,1330]), {icon: mark_church, title: "Haven Church", riseOnHover: true}).bindTooltip("<b>Haven Church</b>").addTo(ol_loc);
//
    L.marker(rc.unproject([2376,1584]), {icon: mark_mine, title: "Hawke's Refuge", riseOnHover: true}).bindTooltip("<b>Hawke's Refuge</b>").addTo(ol_loc);
    L.marker(rc.unproject([2503,1630]), {icon: mark_cabin, title: "Sunday Brothers' Cabin", riseOnHover: true}).bindTooltip("<b>Sunday Brothers' Cabin</b>").addTo(ol_loc);
    L.marker(rc.unproject([2570,1536]), {icon: mark_substation, title: "Thunder Mountain Substation TM-01", riseOnHover: true}).bindTooltip("<b>Thunder Mountain Substation TM-01</b>").addTo(ol_loc);
    L.marker(rc.unproject([2675,1610]), {icon: mark_vendortown, title: "Harpers Ferry (Free State)", riseOnHover: true}).bindTooltip(tooltipMapTemplate('<span class="icon-freestate"></span> Harpers Ferry (Free State)',"","")).addTo(ol_loc);
    L.marker(rc.unproject([2640,1620]), {icon: mark_sewer, title: "The Burrows North", riseOnHover: true}).bindTooltip(tooltipMapTemplate('The Burrows North',"","")).addTo(ol_loc);
    L.marker(rc.unproject([2650,1655]), {icon: mark_sewer, title: "The Burrows South", riseOnHover: true}).bindTooltip(tooltipMapTemplate('The Burrows South',"","")).addTo(ol_loc);
    L.marker(rc.unproject([2753,1432]), {icon: mark_houses, title: "Southern Belle Motel", riseOnHover: true}).bindTooltip("<b>Southern Belle Motel</b>").addTo(ol_loc);
    L.marker(rc.unproject([2841,1435]), {icon: mark_mine, title: "Abandoned Waste Dump", riseOnHover: true}).bindTooltip("<b>Abandoned Waste Dump</b>").addTo(ol_loc);
    L.marker(rc.unproject([2900,1536]), {icon: mark_ruintown, title: "Tanagra Town", riseOnHover: true}).bindTooltip("<b>Tanagra Town</b>").addTo(ol_loc);
    L.marker(rc.unproject([2845,1550]), {icon: mark_farm, title: "Delano Grange", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Delano Grange',"","Added in Patch 8.5")).addTo(ol_loc);
    L.marker(rc.unproject([2910,1623]), {icon: mark_bunker, title: "Ransacked Bunker", riseOnHover: true}).bindTooltip("<b>Ransacked Bunker</b>").addTo(ol_loc);
    L.marker(rc.unproject([2682,1751]), {icon: mark_rocket, title: "Big B's Rest Stop", riseOnHover: true}).bindTooltip("<b>Big B's Rest Stop</b>").addTo(ol_loc);
    L.marker(rc.unproject([2924,1729]), {icon: mark_headquarters, title: "Valley Galleria", riseOnHover: true}).bindTooltip("<b>Valley Galleria</b>").addTo(ol_loc);
    L.marker(rc.unproject([2693,1806]), {icon: mark_shack, title: "Treetops", riseOnHover: true}).bindTooltip("<b>Treetops</b>").addTo(ol_loc);
    L.marker(rc.unproject([2670,1906]), {icon: mark_headquarters, title: "Camp Venture", riseOnHover: true}).bindTooltip("<b>Camp Venture</b>").addTo(ol_loc);
    L.marker(rc.unproject([2875,1914]), {icon: mark_radiotower, title: "KMAX Trannsmission", riseOnHover: true}).bindTooltip("<b>KMAX Transmission</b>").addTo(ol_loc);
//Cranberry Bog
    L.marker(rc.unproject([2435,2081]), {icon: mark_quarry, title: "Kerwood Mine", riseOnHover: true}).bindTooltip("<b>Kerwood Mine</b>").addTo(ol_loc);
    L.marker(rc.unproject([2524,2058]), {icon: mark_base, title: "Firebase Major", riseOnHover: true}).bindTooltip("<b>Firebase Major</b>").addTo(ol_loc);
    L.marker(rc.unproject([2700,2014]), {icon: mark_base, title: "Firebase LT", riseOnHover: true}).bindTooltip("<b>Firebase LT</b>").addTo(ol_loc);
    L.marker(rc.unproject([2750,2132]), {icon: mark_farm, title: "Mac's Farm", riseOnHover: true}).bindTooltip("<b>Mac's Farm</b>").addTo(ol_loc);
    L.marker(rc.unproject([2822,2058]), {icon: mark_houses, title: "The General's Steakhouse", riseOnHover: true}).bindTooltip("<b>The General's Steakhouse</b>").addTo(ol_loc);
    L.marker(rc.unproject([2945,2104]), {icon: mark_scraper, title: "Robco Research Center", riseOnHover: true}).bindTooltip("<b>Robco Research Center</b>").addTo(ol_loc);
    L.marker(rc.unproject([2299,2346]), {icon: mark_base, title: "The Thorn", riseOnHover: true}).bindTooltip("<b>The Thorn</b>").addTo(ol_loc);
    L.marker(rc.unproject([2345,2219]), {icon: mark_base, title: "Forward Station Alpha", riseOnHover: true}).bindTooltip("<b>Forward Station Alpha</b>").addTo(ol_loc);
    L.marker(rc.unproject([2396,2343]), {icon: mark_farm, title: "Superior Sunset Farm", riseOnHover: true}).bindTooltip("<b>Superior Sunset Farm</b>").addTo(ol_loc);
    L.marker(rc.unproject([2597,2267]), {icon: mark_lodge, title: "Ranger District Office", riseOnHover: true}).bindTooltip("<b>Ranger District Office</b>").addTo(ol_loc);
    L.marker(rc.unproject([2613,2243]), {icon: mark_lookout, title: "Ranger Lookout", riseOnHover: true}).bindTooltip("<b>Ranger Lookout</b>").addTo(ol_loc);
    L.marker(rc.unproject([2657,2177]), {icon: mark_tree, title: "Creekside Sundew Grove", riseOnHover: true}).bindTooltip("<b>Creekside Sundew Grove</b>").addTo(ol_loc);
    L.marker(rc.unproject([2714,2214]), {icon: mark_shack, title: "Bootlegger's Shack", riseOnHover: true}).bindTooltip("<b>Bootlegger's Shack</b>").addTo(ol_loc);
    L.marker(rc.unproject([2527,2397]), {icon: mark_bunker, title: "Drop Site G3", riseOnHover: true}).bindTooltip("<b>Drop Site G3</b>").addTo(ol_loc);
    L.marker(rc.unproject([2660,2410]), {icon: mark_quarry, title: "Quarry X3", riseOnHover: true}).bindTooltip("<b>Quarry X3</b>").addTo(ol_loc);
    L.marker(rc.unproject([2888,2293]), {icon: mark_monorail, title: "Pylon V-13", riseOnHover: true}).bindTooltip("<b>Pylon V-13</b>").addTo(ol_loc);
    L.marker(rc.unproject([2932,2312]), {icon: mark_quarry, title: "Old Mold Quarry", riseOnHover: true}).bindTooltip("<b>Old Mold Quarry</b>").addTo(ol_loc);
    L.marker(rc.unproject([2887,2370]), {icon: mark_bunker, title: "Drop Site C2", riseOnHover: true}).bindTooltip("<b>Drop Site C2</b>").addTo(ol_loc);
//
    L.marker(rc.unproject([2282,2547]), {icon: mark_prison, title: "Fort Defiance", riseOnHover: true}).bindTooltip("<b>Fort Defiance</b>").addTo(ol_loc);
    L.marker(rc.unproject([2387,2531]), {icon: mark_antiques, title: "Appalachian Antiques", riseOnHover: true}).bindTooltip("<b>Appalachian Antiques</b>").addTo(ol_loc);
    L.marker(rc.unproject([2555,2456]), {icon: mark_substation, title: "Thunder Mountain Substation TM-02", riseOnHover: true}).bindTooltip("<b>Thunder Mountain Substation TM-02</b>").addTo(ol_loc);
    L.marker(rc.unproject([2750,2470]), {icon: mark_tree, title: "Veiled Sundew Grove", riseOnHover: true}).bindTooltip("<b>Veiled Sundew Grove</b>").addTo(ol_loc);
    L.marker(rc.unproject([2878,2486]), {icon: mark_pond, title: "Cranberry Glade", riseOnHover: true}).bindTooltip("<b>Cranberry Glade</b>").addTo(ol_loc);
    L.marker(rc.unproject([2322,2688]), {icon: mark_quarry, title: "Big Bend Tunnel East", riseOnHover: true}).bindTooltip("<b>Big Bend Tunnel East</b>").addTo(ol_loc);
    L.marker(rc.unproject([2460,2710]), {icon: mark_railyard, title: "NAR Repair Yard", riseOnHover: true}).bindTooltip("<b>NAR Repair Yard</b>").addTo(ol_loc);
    L.marker(rc.unproject([2565,2608]), {icon: mark_city, title: "Watoga", riseOnHover: true}).bindTooltip("<b>Watoga</b>").addTo(ol_loc);
    L.marker(rc.unproject([2520,2592]), {icon: mark_scraper, title: "Watoga Civic Center", riseOnHover: true}).bindTooltip("<b>Watoga Civic Center</b>").addTo(ol_loc);
    L.marker(rc.unproject([2510,2625]), {icon: mark_scraper, title: "Watoga Transit Hub", riseOnHover: true}).bindTooltip("<b>Watoga Transit Hub</b>").addTo(ol_loc);
    L.marker(rc.unproject([2534,2622]), {icon: mark_med, title: "Watoga Emergency Services", riseOnHover: true}).bindTooltip("<b>Watoga Emergency Services</b>").addTo(ol_loc);
    L.marker(rc.unproject([2557,2624]), {icon: mark_scraper, title: "Watoga Municipal Center", riseOnHover: true}).bindTooltip("<b>Watoga Municipal Center</b>").addTo(ol_loc);
    L.marker(rc.unproject([2595,2613]), {icon: mark_scraper, title: "AMS Corporate Headquarters", riseOnHover: true}).bindTooltip("<b>AMS Corporate Headquarters</b>").addTo(ol_loc);
    L.marker(rc.unproject([2620,2605]), {icon: mark_vendorscraper, title: "Watoga Shopping Plaza (Brotherhood of Steel)", riseOnHover: true}).bindTooltip(tooltipMapTemplate('<span class="icon-bos"></span> Watoga Shopping Plaza (Brotherhood of Steel)',"","")).addTo(ol_loc);
    L.marker(rc.unproject([2529,2651]), {icon: mark_scraper, title: "Watoga Estates", riseOnHover: true}).bindTooltip("<b>Watoga Estates</b>").addTo(ol_loc);
    L.marker(rc.unproject([2630,2660]), {icon: mark_scraper, title: "Watoga High School", riseOnHover: true}).bindTooltip("<b>Watoga High School</b>").addTo(ol_loc);
    L.marker(rc.unproject([2773,2640]), {icon: mark_trainyard, title: "Flooded Trainyard", riseOnHover: true}).bindTooltip("<b>Flooded Trainyard</b>").addTo(ol_loc);
    L.marker(rc.unproject([2302,2860]), {icon: mark_base, title: "Firebase Hancock", riseOnHover: true}).bindTooltip("<b>Firebase Hancock</b>").addTo(ol_loc);
    L.marker(rc.unproject([2376,2786]), {icon: mark_shack, title: "Lost Home", riseOnHover: true}).bindTooltip("<b>Lost Home</b>").addTo(ol_loc);
    L.marker(rc.unproject([2391,2856]), {icon: mark_tree, title: "Sparse Sundew Grove", riseOnHover: true}).bindTooltip("<b>Sparse Sundew Grove</b>").addTo(ol_loc);
    L.marker(rc.unproject([2630,2780]), {icon: mark_farm, title: "Sunrise Farm", riseOnHover: true}).bindTooltip("<b>Sunrise Farm</b>").addTo(ol_loc);
    L.marker(rc.unproject([2391,2856]), {icon: mark_tree, title: "Sparse Sundew Grove", riseOnHover: true}).bindTooltip("<b>Sparse Sundew Grove</b>").addTo(ol_loc);
    L.marker(rc.unproject([2842,2839]), {icon: mark_tree, title: "Overgrown Sundew Grove", riseOnHover: true}).bindTooltip("<b>Overgrown Sundew Grove</b>").addTo(ol_loc);
    L.marker(rc.unproject([2888,2739]), {icon: mark_bunker, title: "Drop Site V9", riseOnHover: true}).bindTooltip("<b>Drop Site V9</b>").addTo(ol_loc);
    L.marker(rc.unproject([2949,2764]), {icon: mark_quarry, title: "Glassed Cavern", riseOnHover: true}).bindTooltip("<b>Glassed Cavern</b>").addTo(ol_loc);
    L.marker(rc.unproject([2960,2826]), {icon: mark_base, title: "Forward Station Delta", riseOnHover: true}).bindTooltip("<b>Forward Station Delta</b>").addTo(ol_loc);

//Train Stations
    L.marker(rc.unproject([725,1901]), {icon: mark_tr, title: "Charleston Station (Responders)", riseOnHover: true}).bindTooltip(tooltipMapTemplate('<span class="icon-responders"></span> Charleston Station (Responders)',"",'')).addTo(ol_train);
    L.marker(rc.unproject([1345,910]), {icon: mark_tr, title: "Morgantown Station (Responders)", riseOnHover: true}).bindTooltip(tooltipMapTemplate('<span class="icon-responders"></span> Morgantown Station (Responders)',"",'')).addTo(ol_train);
    L.marker(rc.unproject([1120,1545]), {icon: mark_tr, title: "Sutton Station (Raiders)", riseOnHover: true}).bindTooltip(tooltipMapTemplate('<span class="icon-raider"></span> Sutton Station (Raiders)',"","Cap Stash x1")).addTo(ol_train);
    L.marker(rc.unproject([1096,2450]), {icon: mark_tr, title: "Lewisburg Station (Responders)", riseOnHover: true}).bindTooltip(tooltipMapTemplate('<span class="icon-responders"></span> Lewisburg Station (Responders)',"",'')).addTo(ol_train);
    L.marker(rc.unproject([1130,630]), {icon: mark_tr, title: "Grafton Station (Responders)", riseOnHover: true}).bindTooltip(tooltipMapTemplate('<span class="icon-responders"></span> Grafton Station (Responders)',"",'')).addTo(ol_train);
    L.marker(rc.unproject([482,2547]), {icon: mark_tr, title: "Welch Station (Responders)", riseOnHover: true}).bindTooltip(tooltipMapTemplate('<span class="icon-responders"></span> Welch Station (Responders)',"",'')).addTo(ol_train);
    L.marker(rc.unproject([2070,718]), {icon: mark_tr, title: "Sunnytop Station (Raiders)", riseOnHover: true}).bindTooltip(tooltipMapTemplate('<span class="icon-raider"></span> Sunnytop Station (Raiders)',"",'')).addTo(ol_train);
    L.marker(rc.unproject([1890,1555]), {icon: mark_tr, title: "Pleasant Valley Station (Raiders)", riseOnHover: true}).bindTooltip(tooltipMapTemplate('<span class="icon-raider"></span> Pleasant Valley Station (Raiders)',"",'')).addTo(ol_train);
    L.marker(rc.unproject([1680,1958]), {icon: mark_tr, title: "Whitespring Station (Whitespring)", riseOnHover: true}).bindTooltip(tooltipMapTemplate('<span class="icon-resort"></span> Whitespring Station (Whitespring)',"","")).addTo(ol_train);
    L.marker(rc.unproject([1575,2577]), {icon: mark_tr, title: "R&G Station (Raiders)", riseOnHover: true}).bindTooltip(tooltipMapTemplate('<span class="icon-raider"></span> R&G Station (Raiders)',"",'')).addTo(ol_train);
    L.marker(rc.unproject([2583,2693]), {icon: mark_tr, title: "Watoga Station (Unique)", riseOnHover: true}).bindTooltip(tooltipMapTemplate('<span class="icon-city"></span> Watoga Station (Unique)',"","")).addTo(ol_train);

//Fusion Core
    L.marker(rc.unproject([948,2032]), {icon: mark_fcore, title: "Fusion Core", riseOnHover: true}).bindTooltip("<b>Fusion Core</b>").addTo(ol_pwr);
    L.marker(rc.unproject([1245,1272]), {icon: mark_fcore, title: "Fusion Core", riseOnHover: true}).bindTooltip("<b>Fusion Core</b>").addTo(ol_pwr);
    L.marker(rc.unproject([377,284]), {icon: mark_fcore, title: "Fusion Core", riseOnHover: true}).bindTooltip("<b>Fusion Core</b>").addTo(ol_pwr);
    L.marker(rc.unproject([368,1983]), {icon: mark_fcore, title: "Fusion Core", riseOnHover: true}).bindTooltip("<b>Fusion Core</b>").addTo(ol_pwr);
    L.marker(rc.unproject([1244,251]), {icon: mark_fcore, title: "Fusion Core", riseOnHover: true}).bindTooltip("<b>Fusion Core</b>").addTo(ol_pwr);
    L.marker(rc.unproject([2137,2522]), {icon: mark_fcore, title: "Fusion Core", riseOnHover: true}).bindTooltip("<b>Fusion Core</b>").addTo(ol_pwr);

//Treasure
    L.marker(rc.unproject([291,1179]), {icon: mark_map, riseOnHover: true}).bindTooltip(tooltipMapTemplate("Forest (Map 1)","forest-1.jpg")).addTo(ol_map);
    L.marker(rc.unproject([433,1916]), {icon: mark_map, riseOnHover: true}).bindTooltip(tooltipMapTemplate("Forest (Map 2)","forest-2.jpg")).addTo(ol_map);
    L.marker(rc.unproject([576,2086]), {icon: mark_map, riseOnHover: true}).bindTooltip(tooltipMapTemplate("Forest (Map 3)","forest-3.jpg")).addTo(ol_map);
    L.marker(rc.unproject([718,787]), {icon: mark_map, riseOnHover: true}).bindTooltip(tooltipMapTemplate("Forest (Map 4)","forest-4.jpg")).addTo(ol_map);
    L.marker(rc.unproject([675,1978]), {icon: mark_map, riseOnHover: true}).bindTooltip(tooltipMapTemplate("Forest (Map 5)","forest-5.jpg")).addTo(ol_map);
    L.marker(rc.unproject([964,1287]), {icon: mark_map, riseOnHover: true}).bindTooltip(tooltipMapTemplate("Forest (Map 6)","forest-6.jpg")).addTo(ol_map);
    L.marker(rc.unproject([997,2209]), {icon: mark_map, riseOnHover: true}).bindTooltip(tooltipMapTemplate("Forest (Map 7)","forest-7.jpg")).addTo(ol_map);
    L.marker(rc.unproject([1257,1116]), {icon: mark_map, riseOnHover: true}).bindTooltip(tooltipMapTemplate("Forest (Map 8)","forest-8.jpg")).addTo(ol_map);
    L.marker(rc.unproject([1254,1808]), {icon: mark_map, riseOnHover: true}).bindTooltip(tooltipMapTemplate("Forest (Map 9)","forest-9.jpg")).addTo(ol_map);
    L.marker(rc.unproject([1351,1336]), {icon: mark_map, riseOnHover: true}).bindTooltip(tooltipMapTemplate("Forest (Map 10)","forest-10.jpg")).addTo(ol_map);
    L.marker(rc.unproject([997,576]), {icon: mark_map, riseOnHover: true}).bindTooltip(tooltipMapTemplate("Toxic Valley (Map 1)","toxic-1.jpg")).addTo(ol_map);
    L.marker(rc.unproject([1329,477]), {icon: mark_map, riseOnHover: true}).bindTooltip(tooltipMapTemplate("Toxic Valley (Map 2)","toxic-2.jpg")).addTo(ol_map);
    L.marker(rc.unproject([1586,681]), {icon: mark_map, riseOnHover: true}).bindTooltip(tooltipMapTemplate("Toxic Valley (Map 3)","toxic-3.jpg")).addTo(ol_map);
    L.marker(rc.unproject([1723,292]), {icon: mark_map, riseOnHover: true}).bindTooltip(tooltipMapTemplate("Toxic Valley (Map 4)","toxic-4.jpg")).addTo(ol_map);
    L.marker(rc.unproject([667,2649]), {icon: mark_map, riseOnHover: true}).bindTooltip(tooltipMapTemplate("Ash Heap (Map 1)","ash-1.jpg")).addTo(ol_map);
    L.marker(rc.unproject([829,2203]), {icon: mark_map, riseOnHover: true}).bindTooltip(tooltipMapTemplate("Ash Heap (Map 7)","ash-2.jpg")).addTo(ol_map);
    L.marker(rc.unproject([1473,2745]), {icon: mark_map, riseOnHover: true}).bindTooltip(tooltipMapTemplate("Savage Divide (Map 1)","divide-1.jpg")).addTo(ol_map);
    L.marker(rc.unproject([1653,1756]), {icon: mark_map, riseOnHover: true}).bindTooltip(tooltipMapTemplate("Savage Divide (Map 2)","divide-2.jpg")).addTo(ol_map);
    L.marker(rc.unproject([1767,1427]), {icon: mark_map, riseOnHover: true}).bindTooltip(tooltipMapTemplate("Savage Divide (Map 3)","divide-3.jpg")).addTo(ol_map);
    L.marker(rc.unproject([1795,2065]), {icon: mark_map, riseOnHover: true}).bindTooltip(tooltipMapTemplate("Savage Divide (Map 4)","divide-4.jpg")).addTo(ol_map);
    L.marker(rc.unproject([1763,1953]), {icon: mark_map, riseOnHover: true}).bindTooltip(tooltipMapTemplate("Savage Divide (Map 5)","divide-5.jpg")).addTo(ol_map);
    L.marker(rc.unproject([1934,387]), {icon: mark_map, riseOnHover: true}).bindTooltip(tooltipMapTemplate("Savage Divide (Map 6)","divide-6.jpg")).addTo(ol_map);
    L.marker(rc.unproject([1978,2535]), {icon: mark_map, riseOnHover: true}).bindTooltip(tooltipMapTemplate("Savage Divide (Map 7)","divide-7.jpg")).addTo(ol_map);
    L.marker(rc.unproject([2014,1404]), {icon: mark_map, riseOnHover: true}).bindTooltip(tooltipMapTemplate("Savage Divide (Map 8)","divide-8.jpg")).addTo(ol_map);
    L.marker(rc.unproject([2233,1327]), {icon: mark_map, riseOnHover: true}).bindTooltip(tooltipMapTemplate("Savage Divide (Map 9)","divide-9.jpg")).addTo(ol_map);
    L.marker(rc.unproject([2602,370]), {icon: mark_map, riseOnHover: true}).bindTooltip(tooltipMapTemplate("Savage Divide (Map 10)","divide-10.jpg")).addTo(ol_map);
    L.marker(rc.unproject([2533,836]), {icon: mark_map, riseOnHover: true}).bindTooltip(tooltipMapTemplate("The Mire (Map 1)","mire-1.jpg")).addTo(ol_map);
    L.marker(rc.unproject([2547,1823]), {icon: mark_map, riseOnHover: true}).bindTooltip(tooltipMapTemplate("The Mire (Map 2)","mire-2.jpg")).addTo(ol_map);
    L.marker(rc.unproject([2660,1508]), {icon: mark_map, riseOnHover: true}).bindTooltip(tooltipMapTemplate("The Mire (Map 3)","mire-3.jpg")).addTo(ol_map);
    L.marker(rc.unproject([2781,1068]), {icon: mark_map, riseOnHover: true}).bindTooltip(tooltipMapTemplate("The Mire (Map 4)","mire-4.jpg")).addTo(ol_map);
    L.marker(rc.unproject([2814,889]), {icon: mark_map, riseOnHover: true}).bindTooltip(tooltipMapTemplate("The Mire (Map 5)","mire-5.jpg")).addTo(ol_map);
    L.marker(rc.unproject([2464,2543]), {icon: mark_map, riseOnHover: true}).bindTooltip(tooltipMapTemplate("Cranberry Bog (Map 1)","bog-1.jpg")).addTo(ol_map);
    L.marker(rc.unproject([2642,2247]), {icon: mark_map, riseOnHover: true}).bindTooltip(tooltipMapTemplate("Cranberry Bog (Map 2)","bog-2.jpg")).addTo(ol_map);
    L.marker(rc.unproject([2776,2867]), {icon: mark_map, riseOnHover: true}).bindTooltip(tooltipMapTemplate("Cranberry Bog (Map 3)","bog-3.jpg")).addTo(ol_map);
    L.marker(rc.unproject([2889,2261]), {icon: mark_map, riseOnHover: true}).bindTooltip(tooltipMapTemplate("Cranberry Bog (Map 4)","bog-4.jpg")).addTo(ol_map);

//Holotapes
    L.marker(rc.unproject([1604,817]), {icon: mark_tape, title: "Grognak & The Ruby Ruins", riseOnHover: true}).bindTooltip("<b>Holotape Game:</b> Grognak & The Ruby Ruins").addTo(ol_tape);
    L.marker(rc.unproject([815,950]), {icon: mark_tape, title: "Nuka Tapper", riseOnHover: true}).bindTooltip("<b>Holotape Game:</b> Nuka Tapper").addTo(ol_tape);

    L.marker(rc.unproject([699,1477]), {icon: mark_tape, title: "Overseer's Journal - Entry 1", riseOnHover: true}).bindTooltip("<b>Overseer's Journal:</b> Entry 1").addTo(ol_tape);
    L.marker(rc.unproject([1131,1460]), {icon: mark_tape, title: "Overseer's Journal - Entry 2", riseOnHover: true}).bindTooltip("<b>Overseer's Journal:</b> Entry 2").addTo(ol_tape);
    L.marker(rc.unproject([1589,965]), {icon: mark_tape, title: "Overseer's Journal - Entry 3", riseOnHover: true}).bindTooltip("<b>Overseer's Journal:</b> Entry 3").addTo(ol_tape);
    L.marker(rc.unproject([1502,1056]), {icon: mark_tape, title: "Overseer's Journal - Entry 4", riseOnHover: true}).bindTooltip("<b>Overseer's Journal:</b> Entry 4").addTo(ol_tape);
    L.marker(rc.unproject([473,2585]), {icon: mark_tape, title: "Overseer's Journal - Entry 5", riseOnHover: true}).bindTooltip("<b>Overseer's Journal:</b> Entry 5").addTo(ol_tape);
    L.marker(rc.unproject([613,2342]), {icon: mark_tape, title: "Overseer's Journal - Entry 6", riseOnHover: true}).bindTooltip("<b>Overseer's Journal:</b> Entry 6").addTo(ol_tape);
    L.marker(rc.unproject([782,947]), {icon: mark_tape, title: "Overseer's Log - Vault 76", riseOnHover: true}).bindTooltip("<b>Overseer's Log:</b> Vault 76").addTo(ol_tape);
    L.marker(rc.unproject([973,1308]), {icon: mark_tape, title: "Overseer's Log - C.A.M.P.", riseOnHover: true}).bindTooltip("<b>Overseer's Log:</b> C.A.M.P.").addTo(ol_tape);
    L.marker(rc.unproject([786,1466]), {icon: mark_tape, title: "Overseer's Log - Flatwoods", riseOnHover: true}).bindTooltip("<b>Overseer's Log:</b> Flatwoods").addTo(ol_tape);
    L.marker(rc.unproject([1430,911]), {icon: mark_tape, title: "Overseer's Log - Morgantown", riseOnHover: true}).bindTooltip("<b>Overseer's Log:</b> Morgantown").addTo(ol_tape);
    L.marker(rc.unproject([797,2112]), {icon: mark_tape, title: "Overseer's Log - Firehouse", riseOnHover: true}).bindTooltip("<b>Overseer's Log:</b> Firehouse").addTo(ol_tape);
    L.marker(rc.unproject([1783,1538]), {icon: mark_tape, title: "Overseer's Journal - Top of the World", riseOnHover: true}).bindTooltip("<b>Overseer's Journal:</b> Top of the World").addTo(ol_tape);
    L.marker(rc.unproject([2847,662]), {icon: mark_tape, title: "Overseer's Journal - Free States", riseOnHover: true}).bindTooltip("<b>Overseer's Journal:</b> Free States").addTo(ol_tape);
    L.marker(rc.unproject([2645,1915]), {icon: mark_tape, title: "Overseer's Journal - Camp Venture", riseOnHover: true}).bindTooltip("<b>Overseer's Journal:</b> Camp Venture").addTo(ol_tape);
    L.marker(rc.unproject([2297,2573]), {icon: mark_tape, title: "Overseer's Log - Allegheny", riseOnHover: true}).bindTooltip("<b>Overseer's Log:</b> Allegheny").addTo(ol_tape);
    L.marker(rc.unproject([1011,1713]), {icon: mark_tape, title: "Overseer's Log - Camp McClintock", riseOnHover: true}).bindTooltip("<b>Overseer's Log:</b> Camp McClintock").addTo(ol_tape);
    L.marker(rc.unproject([940,2045]), {icon: mark_tape, title: "Overseer's Journal - Charleston", riseOnHover: true}).bindTooltip("<b>Overseer's Journal:</b> Charleston").addTo(ol_tape);
    L.marker(rc.unproject([2257,2544]), {icon: mark_tape, title: "Overseer's Journal - Fort Defiance", riseOnHover: true}).bindTooltip("<b>Overseer's Journal:</b> Fort Defiance").addTo(ol_tape);
    L.marker(rc.unproject([1193,593]), {icon: mark_tape, title: "Overseer's Journal - Grafton", riseOnHover: true}).bindTooltip("<b>Overseer's Journal:</b> Grafton").addTo(ol_tape);
    L.marker(rc.unproject([2095,1715]), {icon: mark_tape, title: "Overseer's Journal - Site Alpha", riseOnHover: true}).bindTooltip("<b>Overseer's Journal:</b> Site Alpha").addTo(ol_tape);
    L.marker(rc.unproject([1843,666]), {icon: mark_tape, title: "Overseer's Journal - Site Bravo", riseOnHover: true}).bindTooltip("<b>Overseer's Journal:</b> Site Bravo").addTo(ol_tape);
    L.marker(rc.unproject([15643,2428]), {icon: mark_tape, title: "Overseer's Journal - Site Charlie", riseOnHover: true}).bindTooltip("<b>Overseer's Journal:</b> Site Charlie").addTo(ol_tape);
    L.marker(rc.unproject([1622,2326]), {icon: mark_tape, title: "Overseer's Journal - Mountainside", riseOnHover: true}).bindTooltip("<b>Overseer's Journal:</b> Mountainside").addTo(ol_tape);

    L.marker(rc.unproject([1283,1272]), {icon: mark_tape, title: "Test Log - 9-23-77-A10, Test Log - 3-12-78-A14", riseOnHover: true }).bindTooltip("<b>Test Log:</b> 9-23-77-A10<br><b>Test Log:</b> 3-12-78-A14").addTo(ol_tape);

//Rift
    L.marker(rc.unproject([2318,742]), {icon: mark_rift, title: "Fissure", riseOnHover: true}).bindTooltip("<b>Fissure</b>").addTo(ol_rift);
    L.marker(rc.unproject([2615,355]), {icon: mark_rift, title: "Fissure", riseOnHover: true}).bindTooltip("<b>Fissure</b>").addTo(ol_rift);
    L.marker(rc.unproject([2438,1112]), {icon: mark_rift, title: "Fissure", riseOnHover: true}).bindTooltip("<b>Fissure</b>").addTo(ol_rift);
    L.marker(rc.unproject([2603,2107]), {icon: mark_rift, title: "Fissure", riseOnHover: true}).bindTooltip("<b>Fissure</b>").addTo(ol_rift);
    L.marker(rc.unproject([2920,2800]), {icon: mark_rift, title: "Fissure Prime", riseOnHover: true}).bindTooltip("<b>Fissure Prime</b>").addTo(ol_rift);
    L.marker(rc.unproject([2764,2756]), {icon: mark_rift, title: "Fissure", riseOnHover: true}).bindTooltip("<b>Fissure</b>").addTo(ol_rift);
    L.marker(rc.unproject([1953,2701]), {icon: mark_rift, title: "Fissure", riseOnHover: true}).bindTooltip("<b>Fissure</b>").addTo(ol_rift);
    L.marker(rc.unproject([1260,2122]), {icon: mark_rift, title: "Fissure", riseOnHover: true}).bindTooltip("<b>Fissure</b>").addTo(ol_rift);
    L.marker(rc.unproject([699,2774]), {icon: mark_rift, title: "Fissure", riseOnHover: true}).bindTooltip("<b>Fissure</b>").addTo(ol_rift);



//Secondary Location
var mark_plane2 = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'plane', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo2'}); 		//Plane/Airport
var mark_boat2 = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'boat', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo2'}); 		//Boat
var mark_shack2 = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'shack', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo2'}); 		//Shack
var mark_altar2 = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'altar', glyphColor: '', glyphSize: '26px', glyphAnchor: [0,0], className:'mark_lo2'}); 		//Altar/Totem
var mark_honey2 = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'honey', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo2'}); 		//Hive
var mark_cabin2 = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'cabin', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo2'}); 		//Cabin
var mark_cave2 = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'mine', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo2'}); 		//Mine/Cave
var mark_camp2 = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'camp', glyphColor: '', glyphSize: '22px', glyphAnchor: [0,0], className:'mark_lo2'}); 		//Camp
var mark_lookout2 = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'lookout', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo2'}); 	//Lookout
var mark_car2 = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'car', glyphColor: '', glyphSize: '26px', glyphAnchor: [0,0], className:'mark_lo2'}); 		//Car
var mark_pond2 = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'pond', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo2'}); 		//Pond
var mark_death2 = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'death', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo2'}); 		//Corpse
var mark_bridge2 = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'bridge', glyphColor: '', glyphSize: '24px', glyphAnchor: [0,0], className:'mark_lo2'}); 		//Corpse
var mark_park2 = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'fair', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo2'}); 		//Corpse
var mark_factory2 = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'factory', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo2'}); 	//Corpse
var mark_farm2 = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'farm', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo2'}); 	//Corpse
var mark_radiotower2 = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'radiotower', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo2'}); 	//Corpse
var mark_dock2 = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'dock', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo2'}); 	//Corpse
var mark_table2 = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'table', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo2'}); 	//Corpse
var mark_mine2 = L.icon.glyph({ iconAnchor: [15,20], iconUrl: null, prefix: 'icon', glyph: 'mine', glyphColor: '', glyphSize: '28px', glyphAnchor: [0,0], className:'mark_lo2'}); 	//Corpse


//The Forest
    L.marker(rc.unproject([853,688]), {icon: mark_plane2, title: "Biplane Crash", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Biplane Crash',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([884,713]), {icon: mark_boat2, title: "Upturned Boat", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Upturned Boat',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([916,713]), {icon: mark_boat2, title: "Split Boat", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Split Boat',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([853,740]), {icon: mark_shack2, title: "Tin Roof Shack", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Tin Roof Shack',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([815,850]), {icon: mark_altar2, title: "Burned Branch Altar", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Burned Branch Altar',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([920,860]), {icon: mark_honey2, title: "North Kanawha Hive", riseOnHover: true}).bindTooltip(tooltipMapTemplate('North Kanawha Hive',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([840,900]), {icon: mark_cabin2, title: "Settler's Cabin", riseOnHover: true}).bindTooltip(tooltipMapTemplate("Settler's Cabin","","")).addTo(ol_loc2);
    L.marker(rc.unproject([860,940]), {icon: mark_altar2, title: "Cultist Totem", riseOnHover: true}).bindTooltip(tooltipMapTemplate("Cultist Totem","","")).addTo(ol_loc2);
    L.marker(rc.unproject([1015,940]), {icon: mark_plane2, title: "Biplane Crash", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Biplane Crash',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([670,980]), {icon: mark_cave2, title: "Archer Cave", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Archer Cave',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([735,960]), {icon: mark_altar2, title: "Cultist Totem", riseOnHover: true}).bindTooltip(tooltipMapTemplate("Cultist Totem","","")).addTo(ol_loc2);
    L.marker(rc.unproject([705,1000]), {icon: mark_camp2, title: "Grass Camp", riseOnHover: true}).bindTooltip(tooltipMapTemplate("Grass Camp","","")).addTo(ol_loc2);
    L.marker(rc.unproject([870,1040]), {icon: mark_lookout2, title: "Banjo Tower", riseOnHover: true}).bindTooltip(tooltipMapTemplate("Banjo Tower","","")).addTo(ol_loc2);
    L.marker(rc.unproject([900,1010]), {icon: mark_cave2, title: "Kanawha Alcove", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Kanawha Alcove',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([970,1015]), {icon: mark_camp2, title: "Weapon Worker's Camp", riseOnHover: true}).bindTooltip(tooltipMapTemplate("Weapon Worker's Camp","","")).addTo(ol_loc2);
    L.marker(rc.unproject([575,1110]), {icon: mark_car2, title: "Terminal Log Collision", riseOnHover: true}).bindTooltip(tooltipMapTemplate("Terminal Log Collision","","")).addTo(ol_loc2);
    L.marker(rc.unproject([667,1079]), {icon: mark_plane2, title: "Vertibird Crash", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Virtibird Crash',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([895,1065]), {icon: mark_shack2, title: "Hillside Shed", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Hillside Shed',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([650,1170]), {icon: mark_camp2, title: "Prehistoric Bones Camp", riseOnHover: true}).bindTooltip(tooltipMapTemplate("Prehistoric Bones Camp","","")).addTo(ol_loc2);
    L.marker(rc.unproject([870,1140]), {icon: mark_pond2, title: "Wixon Pond", riseOnHover: true}).bindTooltip(tooltipMapTemplate("Wixon Pond","","")).addTo(ol_loc2);
    L.marker(rc.unproject([860,1170]), {icon: mark_honey2, title: "Wixon Pond Hive", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Wixon Pond Hive',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([575,1255]), {icon: mark_honey2, title: "Alpine River Hive", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Alpine River Hive',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([800,1215]), {icon: mark_death2, title: "Corpse Pile", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Corpse Pile',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([960,1220]), {icon: mark_shack2, title: "Dog Kennel", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Dog Kennel',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([740,1320]), {icon: mark_cabin2, title: "Gray Cottage", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Gray Cottage',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([890,1310]), {icon: mark_camp2, title: "River Camp", riseOnHover: true}).bindTooltip(tooltipMapTemplate('River Camp',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([950,1290]), {icon: mark_bridge2, title: "Covered Bridge", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Covered Bridge',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([600,1370]), {icon: mark_death2, title: "Throne Dual", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Throne Dual',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([660,1490]), {icon: mark_car2, title: "Delivery Van", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Delivery Van',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([660,1515]), {icon: mark_boat2, title: "Beached Boat", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Beached Boat',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([790,1425]), {icon: mark_bridge2, title: "Under Bridge Camp", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Under Bridge Camp',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([965,1410]), {icon: mark_park2, title: "New River Gorge Resort Adventure Park", riseOnHover: true}).bindTooltip(tooltipMapTemplate('New River Gorge Resort Adventure Park',"","")).addTo(ol_loc2);

    L.marker(rc.unproject([415,220]), {icon: mark_factory2, title: "Wrecked Warehouse", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Wrecked Warehouse',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([500,220]), {icon: mark_farm2, title: "Abandoned Farm", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Abandoned Farm',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([530,200]), {icon: mark_camp2, title: "Golfer's Camp", riseOnHover: true}).bindTooltip(tooltipMapTemplate("Golfer's Camp","","")).addTo(ol_loc2);
    L.marker(rc.unproject([550,280]), {icon: mark_camp2, title: "Outcrop Camp", riseOnHover: true}).bindTooltip(tooltipMapTemplate("Outcrop Camp","","")).addTo(ol_loc2);
    L.marker(rc.unproject([730,230]), {icon: mark_shack2, title: "Bird Watchers", riseOnHover: true}).bindTooltip(tooltipMapTemplate("Bird Watchers","","")).addTo(ol_loc2);
    L.marker(rc.unproject([490,310]), {icon: mark_car2, title: "R81 Collision", riseOnHover: true}).bindTooltip(tooltipMapTemplate('R81 Collision',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([460,380]), {icon: mark_pond2, title: "Safe Pond", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Safe Pond',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([730,410]), {icon: mark_honey2, title: "Aaronholdt Hive", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Aaronholdt Hive',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([540,480]), {icon: mark_car2, title: "Nuka Crash", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Nuka Crash',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([650,490]), {icon: mark_pond2, title: "Ridgetop Lake", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Ridgetop Lake',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([430,540]), {icon: mark_farm2, title: "Two Barn Farm", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Two Barn Farm',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([450,600]), {icon: mark_camp2, title: "Raft Camp", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Raft Camp',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([400,650]), {icon: mark_farm2, title: "Tinker Barn", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Tinker Barn',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([670,630]), {icon: mark_table2, title: "Party Table", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Party Table',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([765,630]), {icon: mark_car2, title: "Scarecrow Truck", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Scarecrow Truck',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([630,690]), {icon: mark_shack2, title: "Safecracker Shack", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Safecracker Shack',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([630,770]), {icon: mark_car2, title: "Jackknifed Truck", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Jackknifed Truck',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([600,800]), {icon: mark_radiotower2, title: "Decommissioned Radio Tower", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Decommissioned Radio Tower',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([720,850]), {icon: mark_pond2, title: "Tire Pond", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Tire Pond',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([380,830]), {icon: mark_dock2, title: "Radioactive Dock", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Radioactive Dock',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([400,930]), {icon: mark_boat2, title: "Junk Boat", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Junk Boat',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([590,940]), {icon: mark_camp2, title: "Billboard Camp", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Billboard Camp',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([680,930]), {icon: mark_camp2, title: "Tarp Tent", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Tarp Tent',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([430,1140]), {icon: mark_altar2, title: "Old Tree Altars", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Old Tree Altars',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([370,1190]), {icon: mark_honey2, title: "Point Pleasant Hive", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Point Pleasant Hive',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([515,1200]), {icon: mark_table2, title: "Teddy Bear Picnic", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Teddy Bear Picnic',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([380,1260]), {icon: mark_dock2, title: "Shack Dock", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Shack Dock',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([470,1340]), {icon: mark_car2, title: "Truckslide", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Truckslide',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([570,1340]), {icon: mark_car2, title: "Pylon Crash", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Pylon Crash',"","")).addTo(ol_loc2);

    L.marker(rc.unproject([1060,740]), {icon: mark_honey2, title: "Grafton Rail Hive", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Grafton Rail Hive',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([1440,780]), {icon: mark_car2, title: "R92 Crash", riseOnHover: true}).bindTooltip(tooltipMapTemplate('R92 Crash',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([1470,830]), {icon: mark_camp2, title: "Responder Tent", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Responder Tent',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([1240,970]), {icon: mark_honey2, title: "Morgantown Hive", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Morgantown Hive',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([1130,1040]), {icon: mark_car2, title: "Gravel Bus", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Gravel Bus',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([1630,1090]), {icon: mark_farm2, title: "Trophy Farm", riseOnHover: true}).bindTooltip(tooltipMapTemplate('"Trophy Farm',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([1240,1120]), {icon: mark_mine2, title: "Gauley Mine Exit", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Gauley Mine Exit',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([1190,1170]), {icon: mark_camp2, title: "Green Tent", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Green Tent',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([1380,1200]), {icon: mark_camp2, title: "Forest and Rock Camp", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Forest and Rock Camp',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([1070,1290]), {icon: mark_cabin2, title: "Salmon House", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Salmon House',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([1170,1340]), {icon: mark_shack2, title: "Outhouse", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Outhouse',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([1220,1360]), {icon: mark_table2, title: "Helvetia Picnic Area", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Helvetia Picnic Area',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([1190,1380]), {icon: mark_car2, title: "Stranded Truck", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Stranded Truck',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([1200,1440]), {icon: mark_camp2, title: "Helvetia Hill Tent", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Helvetia Hill Tent',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([1490,1260]), {icon: mark_radiotower2, title: "Bolton Comms Tower", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Bolton Comms Tower',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([1610,1310]), {icon: mark_lookout2, title: "Bolton Greens Lookout", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Bolton Greens Lookout',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([1700,1340]), {icon: mark_camp2, title: "Pylon Camp", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Pylon Camp',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([1610,1370]), {icon: mark_car2, title: "Pulowski Transport", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Pulowski Transport',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([1660,1410]), {icon: mark_cave2, title: "Yao Guai Cave", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Yao Guai Cave',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([870,1580]), {icon: mark_honey2, title: "Under Bridge Hive", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Under Bridge Hive',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([810,1650]), {icon: mark_boat2, title: "Broken Boat", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Broken Boat',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([860,1620]), {icon: mark_camp2, title: "Copper Tent", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Copper Tent',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([930,1640]), {icon: mark_death2, title: "Soap Skeleton", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Soap Skeleton',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([950,1710]), {icon: mark_honey2, title: "Camp McClintock Hive", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Camp McClintock Hive',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([1060,1560]), {icon: mark_camp2, title: "Truck Camp", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Truck Camp',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([1095,1670]), {icon: mark_shack2, title: "TV Room", riseOnHover: true}).bindTooltip(tooltipMapTemplate('TV Room',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([1060,1800]), {icon: mark_shack2, title: "Hoops Shack", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Hoops Shack',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([1120,1590]), {icon: mark_shack2, title: "Red Shed", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Red Shed',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([1180,1540]), {icon: mark_camp2, title: "Truck Trailer Camp", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Truck Trailer Camp',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([1320,1500]), {icon: mark_camp2, title: "Canoe Camp", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Canoe Camp',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([1400,1570]), {icon: mark_car2, title: "Scrap Truck", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Scrap Truck',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([1500,1560]), {icon: mark_car2, title: "Dip Truck", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Dip Truck',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([1450,1680]), {icon: mark_table2, title: "Violinist Picnic", riseOnHover: true}).bindTooltip(tooltipMapTemplate('Violinist Picnic',"","")).addTo(ol_loc2);
    L.marker(rc.unproject([1520,1650]), {icon: mark_car2, title: "Man's Best Friend", riseOnHover: true}).bindTooltip(tooltipMapTemplate("Man's Best Friend","","")).addTo(ol_loc2);



//Let's do our layer filters
var baseMaps = {
	"Base": baselayer
};
var overlays = {
	"Fusion Core": ol_pwr,
	"Holotape": ol_tape,
	"Location": ol_loc,
	"Secondary Location": ol_loc2,
	"Power Armor": ol_pa,
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
	ol_train
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