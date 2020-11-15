var wms_layers = [];

var format_ne_10m_airports_0 = new ol.format.GeoJSON();
var features_ne_10m_airports_0 = format_ne_10m_airports_0.readFeatures(json_ne_10m_airports_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ne_10m_airports_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ne_10m_airports_0.addFeatures(features_ne_10m_airports_0);
var lyr_ne_10m_airports_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ne_10m_airports_0, 
                style: style_ne_10m_airports_0,
                interactive: true,
    title: 'ne_10m_airports<br />\
    <img src="styles/legend/ne_10m_airports_0_0.png" /> major<br />\
    <img src="styles/legend/ne_10m_airports_0_1.png" /> mid<br />\
    <img src="styles/legend/ne_10m_airports_0_2.png" /> small<br />'
        });

lyr_ne_10m_airports_0.setVisible(true);
var layersList = [lyr_ne_10m_airports_0];
lyr_ne_10m_airports_0.set('fieldAliases', {'scalerank': 'scalerank', 'featurecla': 'featurecla', 'type': 'type', 'name': 'Name', 'abbrev': 'abbrev', 'location': 'location', 'gps_code': 'gps_code', 'iata_code': 'IATA Code', 'wikipedia': 'URL', 'natlscale': 'natlscale', 'Type': 'Type', });
lyr_ne_10m_airports_0.set('fieldImages', {'scalerank': 'Range', 'featurecla': 'TextEdit', 'type': 'Hidden', 'name': 'TextEdit', 'abbrev': 'Hidden', 'location': 'TextEdit', 'gps_code': 'Hidden', 'iata_code': 'TextEdit', 'wikipedia': 'TextEdit', 'natlscale': 'TextEdit', 'Type': 'TextEdit', });
lyr_ne_10m_airports_0.set('fieldLabels', {'scalerank': 'no label', 'featurecla': 'no label', 'name': 'header label', 'location': 'no label', 'iata_code': 'inline label', 'wikipedia': 'inline label', 'natlscale': 'no label', 'Type': 'inline label', });
lyr_ne_10m_airports_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});