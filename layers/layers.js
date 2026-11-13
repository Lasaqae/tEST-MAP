var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_MSelenHoniaramselen_honiara_1 = new ol.format.GeoJSON();
var features_MSelenHoniaramselen_honiara_1 = format_MSelenHoniaramselen_honiara_1.readFeatures(json_MSelenHoniaramselen_honiara_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenHoniaramselen_honiara_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenHoniaramselen_honiara_1.addFeatures(features_MSelenHoniaramselen_honiara_1);
var lyr_MSelenHoniaramselen_honiara_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenHoniaramselen_honiara_1, 
                style: style_MSelenHoniaramselen_honiara_1,
                popuplayertitle: 'M-Selen Honiara — mselen_honiara',
                interactive: true,
                title: '<img src="styles/legend/MSelenHoniaramselen_honiara_1.png" /> M-Selen Honiara — mselen_honiara'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_MSelenHoniaramselen_honiara_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_MSelenHoniaramselen_honiara_1];
lyr_MSelenHoniaramselen_honiara_1.set('fieldAliases', {'fid': 'fid', 'Agent Type': 'Agent Type', 'Agent Busi': 'Agent Busi', 'Physical A': 'Physical A', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenHoniaramselen_honiara_1.set('fieldImages', {'fid': '', 'Agent Type': '', 'Agent Busi': '', 'Physical A': '', 'Latitude': '', 'Longitude': '', });
lyr_MSelenHoniaramselen_honiara_1.set('fieldLabels', {'fid': 'inline label - always visible', 'Agent Type': 'inline label - always visible', 'Agent Busi': 'inline label - always visible', 'Physical A': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenHoniaramselen_honiara_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});