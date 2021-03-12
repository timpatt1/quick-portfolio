var wms_layers = [];

var format_Housing_2013_0 = new ol.format.GeoJSON();
var features_Housing_2013_0 = format_Housing_2013_0.readFeatures(json_Housing_2013_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Housing_2013_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Housing_2013_0.addFeatures(features_Housing_2013_0);
var lyr_Housing_2013_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Housing_2013_0, 
                style: style_Housing_2013_0,
                interactive: true,
    title: 'Housing_2013<br />\
    <img src="styles/legend/Housing_2013_0_0.png" /> 0 - 239<br />\
    <img src="styles/legend/Housing_2013_0_1.png" /> 239 - 399<br />\
    <img src="styles/legend/Housing_2013_0_2.png" /> 399 - 600<br />\
    <img src="styles/legend/Housing_2013_0_3.png" /> 600 - 945<br />\
    <img src="styles/legend/Housing_2013_0_4.png" /> 945 - 1670<br />'
        });
var format_Housing_2015_1 = new ol.format.GeoJSON();
var features_Housing_2015_1 = format_Housing_2015_1.readFeatures(json_Housing_2015_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Housing_2015_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Housing_2015_1.addFeatures(features_Housing_2015_1);
var lyr_Housing_2015_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Housing_2015_1, 
                style: style_Housing_2015_1,
                interactive: true,
    title: 'Housing_2015<br />\
    <img src="styles/legend/Housing_2015_1_0.png" /> 0 - 241<br />\
    <img src="styles/legend/Housing_2015_1_1.png" /> 241 - 377<br />\
    <img src="styles/legend/Housing_2015_1_2.png" /> 377 - 544<br />\
    <img src="styles/legend/Housing_2015_1_3.png" /> 544 - 863<br />\
    <img src="styles/legend/Housing_2015_1_4.png" /> 863 - 1414<br />'
        });
var format_Housing_2017_2 = new ol.format.GeoJSON();
var features_Housing_2017_2 = format_Housing_2017_2.readFeatures(json_Housing_2017_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Housing_2017_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Housing_2017_2.addFeatures(features_Housing_2017_2);
var lyr_Housing_2017_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Housing_2017_2, 
                style: style_Housing_2017_2,
                interactive: true,
    title: 'Housing_2017<br />\
    <img src="styles/legend/Housing_2017_2_0.png" /> 0 - 235<br />\
    <img src="styles/legend/Housing_2017_2_1.png" /> 235 - 376<br />\
    <img src="styles/legend/Housing_2017_2_2.png" /> 376 - 547<br />\
    <img src="styles/legend/Housing_2017_2_3.png" /> 547 - 872<br />\
    <img src="styles/legend/Housing_2017_2_4.png" /> 872 - 1419<br />'
        });
var format_Housing_2019_3 = new ol.format.GeoJSON();
var features_Housing_2019_3 = format_Housing_2019_3.readFeatures(json_Housing_2019_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Housing_2019_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Housing_2019_3.addFeatures(features_Housing_2019_3);
var lyr_Housing_2019_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Housing_2019_3, 
                style: style_Housing_2019_3,
                interactive: true,
    title: 'Housing_2019<br />\
    <img src="styles/legend/Housing_2019_3_0.png" /> 0 - 239<br />\
    <img src="styles/legend/Housing_2019_3_1.png" /> 239 - 399<br />\
    <img src="styles/legend/Housing_2019_3_2.png" /> 399 - 600<br />\
    <img src="styles/legend/Housing_2019_3_3.png" /> 600 - 945<br />\
    <img src="styles/legend/Housing_2019_3_4.png" /> 945 - 1670<br />'
        });

lyr_Housing_2013_0.setVisible(true);lyr_Housing_2015_1.setVisible(true);lyr_Housing_2017_2.setVisible(true);lyr_Housing_2019_3.setVisible(true);
var layersList = [lyr_Housing_2013_0,lyr_Housing_2015_1,lyr_Housing_2017_2,lyr_Housing_2019_3];
lyr_Housing_2013_0.set('fieldAliases', {'GEOID': 'GEOID', 'NAME': 'NAME', 'popE': 'popE', 'popM': 'popM', 'hu_totalE': 'hu_totalE', 'hu_totalM': 'hu_totalM', 'hu_totoccE': 'hu_totoccE', 'hu_totoccM': 'hu_totoccM', 'hu_totownE': 'hu_totownE', 'hu_totownM': 'hu_totownM', 'hu_totrntE': 'hu_totrntE', 'hu_totrntM': 'hu_totrntM', 'hu_marriedE': 'hu_marriedE', 'hu_marriedM': 'hu_marriedM', });
lyr_Housing_2015_1.set('fieldAliases', {'GEOID': 'GEOID', 'NAME': 'NAME', 'hu_totoccE': 'hu_totoccE', 'hu_totoccM': 'hu_totoccM', });
lyr_Housing_2017_2.set('fieldAliases', {'GEOID': 'GEOID', 'NAME': 'NAME', 'hu_totoccE': 'hu_totoccE', 'hu_totoccM': 'hu_totoccM', });
lyr_Housing_2019_3.set('fieldAliases', {'GEOID': 'GEOID', 'NAME': 'NAME', 'popE': 'popE', 'popM': 'popM', 'hu_totalE': 'hu_totalE', 'hu_totalM': 'hu_totalM', 'hu_totoccE': 'hu_totoccE', 'hu_totoccM': 'hu_totoccM', 'hu_totownE': 'hu_totownE', 'hu_totownM': 'hu_totownM', 'hu_totrntE': 'hu_totrntE', 'hu_totrntM': 'hu_totrntM', 'hu_marriedE': 'hu_marriedE', 'hu_marriedM': 'hu_marriedM', });
lyr_Housing_2013_0.set('fieldImages', {'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'popE': 'TextEdit', 'popM': 'TextEdit', 'hu_totalE': 'TextEdit', 'hu_totalM': 'TextEdit', 'hu_totoccE': 'TextEdit', 'hu_totoccM': 'TextEdit', 'hu_totownE': 'TextEdit', 'hu_totownM': 'TextEdit', 'hu_totrntE': 'TextEdit', 'hu_totrntM': 'TextEdit', 'hu_marriedE': 'TextEdit', 'hu_marriedM': 'TextEdit', });
lyr_Housing_2015_1.set('fieldImages', {'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'hu_totoccE': 'TextEdit', 'hu_totoccM': 'TextEdit', });
lyr_Housing_2017_2.set('fieldImages', {'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'hu_totoccE': 'TextEdit', 'hu_totoccM': 'TextEdit', });
lyr_Housing_2019_3.set('fieldImages', {'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'popE': 'TextEdit', 'popM': 'TextEdit', 'hu_totalE': 'TextEdit', 'hu_totalM': 'TextEdit', 'hu_totoccE': 'TextEdit', 'hu_totoccM': 'TextEdit', 'hu_totownE': 'TextEdit', 'hu_totownM': 'TextEdit', 'hu_totrntE': 'TextEdit', 'hu_totrntM': 'TextEdit', 'hu_marriedE': 'TextEdit', 'hu_marriedM': 'TextEdit', });
lyr_Housing_2013_0.set('fieldLabels', {'GEOID': 'no label', 'NAME': 'no label', 'popE': 'no label', 'popM': 'no label', 'hu_totalE': 'no label', 'hu_totalM': 'no label', 'hu_totoccE': 'header label', 'hu_totoccM': 'no label', 'hu_totownE': 'no label', 'hu_totownM': 'no label', 'hu_totrntE': 'no label', 'hu_totrntM': 'no label', 'hu_marriedE': 'no label', 'hu_marriedM': 'no label', });
lyr_Housing_2015_1.set('fieldLabels', {'GEOID': 'no label', 'NAME': 'no label', 'hu_totoccE': 'header label', 'hu_totoccM': 'no label', });
lyr_Housing_2017_2.set('fieldLabels', {'GEOID': 'no label', 'NAME': 'no label', 'hu_totoccE': 'header label', 'hu_totoccM': 'no label', });
lyr_Housing_2019_3.set('fieldLabels', {'GEOID': 'no label', 'NAME': 'no label', 'popE': 'no label', 'popM': 'no label', 'hu_totalE': 'no label', 'hu_totalM': 'no label', 'hu_totoccE': 'header label', 'hu_totoccM': 'no label', 'hu_totownE': 'no label', 'hu_totownM': 'no label', 'hu_totrntE': 'no label', 'hu_totrntM': 'no label', 'hu_marriedE': 'no label', 'hu_marriedM': 'no label', });
lyr_Housing_2019_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});