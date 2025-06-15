var wms_layers = [];

var format_SEBIKOTANE_0 = new ol.format.GeoJSON();
var features_SEBIKOTANE_0 = format_SEBIKOTANE_0.readFeatures(json_SEBIKOTANE_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SEBIKOTANE_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEBIKOTANE_0.addFeatures(features_SEBIKOTANE_0);
var lyr_SEBIKOTANE_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SEBIKOTANE_0, 
                style: style_SEBIKOTANE_0,
                popuplayertitle: 'SEBIKOTANE',
                interactive: true,
                title: '<img src="styles/legend/SEBIKOTANE_0.png" /> SEBIKOTANE'
            });
var format_ZonedeCultureFilfili_1 = new ol.format.GeoJSON();
var features_ZonedeCultureFilfili_1 = format_ZonedeCultureFilfili_1.readFeatures(json_ZonedeCultureFilfili_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonedeCultureFilfili_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonedeCultureFilfili_1.addFeatures(features_ZonedeCultureFilfili_1);
var lyr_ZonedeCultureFilfili_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonedeCultureFilfili_1, 
                style: style_ZonedeCultureFilfili_1,
                popuplayertitle: 'Zone de Culture Filfili',
                interactive: true,
                title: '<img src="styles/legend/ZonedeCultureFilfili_1.png" /> Zone de Culture Filfili'
            });
var format_Quartier_2 = new ol.format.GeoJSON();
var features_Quartier_2 = format_Quartier_2.readFeatures(json_Quartier_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Quartier_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Quartier_2.addFeatures(features_Quartier_2);
var lyr_Quartier_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Quartier_2, 
                style: style_Quartier_2,
                popuplayertitle: 'Quartier',
                interactive: true,
                title: '<img src="styles/legend/Quartier_2.png" /> Quartier'
            });
var format_Zonedactivitconomique_3 = new ol.format.GeoJSON();
var features_Zonedactivitconomique_3 = format_Zonedactivitconomique_3.readFeatures(json_Zonedactivitconomique_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonedactivitconomique_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonedactivitconomique_3.addFeatures(features_Zonedactivitconomique_3);
var lyr_Zonedactivitconomique_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonedactivitconomique_3, 
                style: style_Zonedactivitconomique_3,
                popuplayertitle: 'Zone d\'activité économique',
                interactive: true,
                title: '<img src="styles/legend/Zonedactivitconomique_3.png" /> Zone d\'activité économique'
            });
var format_Belvdre_4 = new ol.format.GeoJSON();
var features_Belvdre_4 = format_Belvdre_4.readFeatures(json_Belvdre_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Belvdre_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Belvdre_4.addFeatures(features_Belvdre_4);
var lyr_Belvdre_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Belvdre_4, 
                style: style_Belvdre_4,
                popuplayertitle: 'Belvédére',
                interactive: true,
                title: '<img src="styles/legend/Belvdre_4.png" /> Belvédére'
            });
var format_ZonehumidedeSbi_5 = new ol.format.GeoJSON();
var features_ZonehumidedeSbi_5 = format_ZonehumidedeSbi_5.readFeatures(json_ZonehumidedeSbi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonehumidedeSbi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonehumidedeSbi_5.addFeatures(features_ZonehumidedeSbi_5);
var lyr_ZonehumidedeSbi_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonehumidedeSbi_5, 
                style: style_ZonehumidedeSbi_5,
                popuplayertitle: 'Zone humide de Sébi',
                interactive: true,
                title: '<img src="styles/legend/ZonehumidedeSbi_5.png" /> Zone humide de Sébi'
            });
var format_RavineBlvdereZoneindustrielleGuySuppi_6 = new ol.format.GeoJSON();
var features_RavineBlvdereZoneindustrielleGuySuppi_6 = format_RavineBlvdereZoneindustrielleGuySuppi_6.readFeatures(json_RavineBlvdereZoneindustrielleGuySuppi_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RavineBlvdereZoneindustrielleGuySuppi_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RavineBlvdereZoneindustrielleGuySuppi_6.addFeatures(features_RavineBlvdereZoneindustrielleGuySuppi_6);
var lyr_RavineBlvdereZoneindustrielleGuySuppi_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RavineBlvdereZoneindustrielleGuySuppi_6, 
                style: style_RavineBlvdereZoneindustrielleGuySuppi_6,
                popuplayertitle: 'Ravine Bélvédere-Zone industrielle-Guy Suppi',
                interactive: true,
                title: '<img src="styles/legend/RavineBlvdereZoneindustrielleGuySuppi_6.png" /> Ravine Bélvédere-Zone industrielle-Guy Suppi'
            });
var format_RavineGuySuppiZoneindustrielle1Page_7 = new ol.format.GeoJSON();
var features_RavineGuySuppiZoneindustrielle1Page_7 = format_RavineGuySuppiZoneindustrielle1Page_7.readFeatures(json_RavineGuySuppiZoneindustrielle1Page_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RavineGuySuppiZoneindustrielle1Page_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RavineGuySuppiZoneindustrielle1Page_7.addFeatures(features_RavineGuySuppiZoneindustrielle1Page_7);
var lyr_RavineGuySuppiZoneindustrielle1Page_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RavineGuySuppiZoneindustrielle1Page_7, 
                style: style_RavineGuySuppiZoneindustrielle1Page_7,
                popuplayertitle: 'Ravine Guy Suppi-Zone industrielle 1-Péage',
                interactive: true,
                title: '<img src="styles/legend/RavineGuySuppiZoneindustrielle1Page_7.png" /> Ravine Guy Suppi-Zone industrielle 1-Péage'
            });
var format_RavineSENACZoneHumide_8 = new ol.format.GeoJSON();
var features_RavineSENACZoneHumide_8 = format_RavineSENACZoneHumide_8.readFeatures(json_RavineSENACZoneHumide_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RavineSENACZoneHumide_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RavineSENACZoneHumide_8.addFeatures(features_RavineSENACZoneHumide_8);
var lyr_RavineSENACZoneHumide_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RavineSENACZoneHumide_8, 
                style: style_RavineSENACZoneHumide_8,
                popuplayertitle: 'Ravine SENAC-Zone Humide',
                interactive: true,
                title: '<img src="styles/legend/RavineSENACZoneHumide_8.png" /> Ravine SENAC-Zone Humide'
            });
var format_RavineTangorThiokhoKipKip_9 = new ol.format.GeoJSON();
var features_RavineTangorThiokhoKipKip_9 = format_RavineTangorThiokhoKipKip_9.readFeatures(json_RavineTangorThiokhoKipKip_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RavineTangorThiokhoKipKip_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RavineTangorThiokhoKipKip_9.addFeatures(features_RavineTangorThiokhoKipKip_9);
var lyr_RavineTangorThiokhoKipKip_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RavineTangorThiokhoKipKip_9, 
                style: style_RavineTangorThiokhoKipKip_9,
                popuplayertitle: 'Ravine Tangor-Thiokho-Kip Kip',
                interactive: true,
                title: '<img src="styles/legend/RavineTangorThiokhoKipKip_9.png" /> Ravine Tangor-Thiokho-Kip Kip'
            });
var format_RavineBlvdereZonehumide_10 = new ol.format.GeoJSON();
var features_RavineBlvdereZonehumide_10 = format_RavineBlvdereZonehumide_10.readFeatures(json_RavineBlvdereZonehumide_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RavineBlvdereZonehumide_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RavineBlvdereZonehumide_10.addFeatures(features_RavineBlvdereZonehumide_10);
var lyr_RavineBlvdereZonehumide_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RavineBlvdereZonehumide_10, 
                style: style_RavineBlvdereZonehumide_10,
                popuplayertitle: 'Ravine Bélvédere-Zone humide',
                interactive: true,
                title: '<img src="styles/legend/RavineBlvdereZonehumide_10.png" /> Ravine Bélvédere-Zone humide'
            });
var format_RavineYbaSENAC_11 = new ol.format.GeoJSON();
var features_RavineYbaSENAC_11 = format_RavineYbaSENAC_11.readFeatures(json_RavineYbaSENAC_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RavineYbaSENAC_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RavineYbaSENAC_11.addFeatures(features_RavineYbaSENAC_11);
var lyr_RavineYbaSENAC_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RavineYbaSENAC_11, 
                style: style_RavineYbaSENAC_11,
                popuplayertitle: 'Ravine Yéba-SENAC',
                interactive: true,
                title: '<img src="styles/legend/RavineYbaSENAC_11.png" /> Ravine Yéba-SENAC'
            });
var format_Autoroutepage_12 = new ol.format.GeoJSON();
var features_Autoroutepage_12 = format_Autoroutepage_12.readFeatures(json_Autoroutepage_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Autoroutepage_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Autoroutepage_12.addFeatures(features_Autoroutepage_12);
var lyr_Autoroutepage_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Autoroutepage_12, 
                style: style_Autoroutepage_12,
                popuplayertitle: 'Autoroute à péage',
                interactive: true,
                title: '<img src="styles/legend/Autoroutepage_12.png" /> Autoroute à péage'
            });
var format_NvxtraceTER_13 = new ol.format.GeoJSON();
var features_NvxtraceTER_13 = format_NvxtraceTER_13.readFeatures(json_NvxtraceTER_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NvxtraceTER_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NvxtraceTER_13.addFeatures(features_NvxtraceTER_13);
var lyr_NvxtraceTER_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NvxtraceTER_13, 
                style: style_NvxtraceTER_13,
                popuplayertitle: 'Nvx tracée TER',
                interactive: true,
                title: '<img src="styles/legend/NvxtraceTER_13.png" /> Nvx tracée TER'
            });
var format_ROUTESEBI_14 = new ol.format.GeoJSON();
var features_ROUTESEBI_14 = format_ROUTESEBI_14.readFeatures(json_ROUTESEBI_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROUTESEBI_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROUTESEBI_14.addFeatures(features_ROUTESEBI_14);
var lyr_ROUTESEBI_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROUTESEBI_14, 
                style: style_ROUTESEBI_14,
                popuplayertitle: 'ROUTE SEBI',
                interactive: true,
                title: '<img src="styles/legend/ROUTESEBI_14.png" /> ROUTE SEBI'
            });
var format_USINES_15 = new ol.format.GeoJSON();
var features_USINES_15 = format_USINES_15.readFeatures(json_USINES_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_USINES_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USINES_15.addFeatures(features_USINES_15);
var lyr_USINES_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_USINES_15, 
                style: style_USINES_15,
                popuplayertitle: 'USINES',
                interactive: true,
                title: '<img src="styles/legend/USINES_15.png" /> USINES'
            });
var format_Pont_16 = new ol.format.GeoJSON();
var features_Pont_16 = format_Pont_16.readFeatures(json_Pont_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pont_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pont_16.addFeatures(features_Pont_16);
var lyr_Pont_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pont_16, 
                style: style_Pont_16,
                popuplayertitle: 'Pont',
                interactive: true,
                title: '<img src="styles/legend/Pont_16.png" /> Pont'
            });

lyr_SEBIKOTANE_0.setVisible(true);lyr_ZonedeCultureFilfili_1.setVisible(true);lyr_Quartier_2.setVisible(true);lyr_Zonedactivitconomique_3.setVisible(true);lyr_Belvdre_4.setVisible(true);lyr_ZonehumidedeSbi_5.setVisible(true);lyr_RavineBlvdereZoneindustrielleGuySuppi_6.setVisible(true);lyr_RavineGuySuppiZoneindustrielle1Page_7.setVisible(true);lyr_RavineSENACZoneHumide_8.setVisible(true);lyr_RavineTangorThiokhoKipKip_9.setVisible(true);lyr_RavineBlvdereZonehumide_10.setVisible(true);lyr_RavineYbaSENAC_11.setVisible(true);lyr_Autoroutepage_12.setVisible(true);lyr_NvxtraceTER_13.setVisible(true);lyr_ROUTESEBI_14.setVisible(true);lyr_USINES_15.setVisible(true);lyr_Pont_16.setVisible(true);
var layersList = [lyr_SEBIKOTANE_0,lyr_ZonedeCultureFilfili_1,lyr_Quartier_2,lyr_Zonedactivitconomique_3,lyr_Belvdre_4,lyr_ZonehumidedeSbi_5,lyr_RavineBlvdereZoneindustrielleGuySuppi_6,lyr_RavineGuySuppiZoneindustrielle1Page_7,lyr_RavineSENACZoneHumide_8,lyr_RavineTangorThiokhoKipKip_9,lyr_RavineBlvdereZonehumide_10,lyr_RavineYbaSENAC_11,lyr_Autoroutepage_12,lyr_NvxtraceTER_13,lyr_ROUTESEBI_14,lyr_USINES_15,lyr_Pont_16];
lyr_SEBIKOTANE_0.set('fieldAliases', {'REG': 'REG', 'DEPT': 'DEPT', 'CAV': 'CAV', 'CCRCA': 'CCRCA', 'COD_REG': 'COD_REG', 'COD_DEPT': 'COD_DEPT', 'COD_CAV': 'COD_CAV', 'COD_CCRCA': 'COD_CCRCA', 'COD_ENTITE': 'COD_ENTITE', 'SUPERFICIE': 'SUPERFICIE', 'SUP_HA': 'SUP_HA', 'CCRCA_1': 'CCRCA_1', 'Milieu': 'Milieu', 'Masculin': 'Masculin', 'Feminin': 'Feminin', 'TOTAL': 'TOTAL', });
lyr_ZonedeCultureFilfili_1.set('fieldAliases', {'id': 'id', });
lyr_Quartier_2.set('fieldAliases', {'id': 'id', 'QUARTIER': 'QUARTIER', });
lyr_Zonedactivitconomique_3.set('fieldAliases', {'id': 'id', });
lyr_Belvdre_4.set('fieldAliases', {'id': 'id', 'Bélvédé': 'Bélvédé', });
lyr_ZonehumidedeSbi_5.set('fieldAliases', {'id': 'id', 'zh': 'zh', });
lyr_RavineBlvdereZoneindustrielleGuySuppi_6.set('fieldAliases', {'id': 'id', });
lyr_RavineGuySuppiZoneindustrielle1Page_7.set('fieldAliases', {'id': 'id', });
lyr_RavineSENACZoneHumide_8.set('fieldAliases', {'id': 'id', });
lyr_RavineTangorThiokhoKipKip_9.set('fieldAliases', {'id': 'id', });
lyr_RavineBlvdereZonehumide_10.set('fieldAliases', {'id': 'id', });
lyr_RavineYbaSENAC_11.set('fieldAliases', {'id': 'id', });
lyr_Autoroutepage_12.set('fieldAliases', {'id': 'id', });
lyr_NvxtraceTER_13.set('fieldAliases', {'id': 'id', });
lyr_ROUTESEBI_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH': 'LENGTH', 'ROUTES_': 'ROUTES_', 'ROUTES_ID': 'ROUTES_ID', 'CODE': 'CODE', 'FONCTION': 'FONCTION', 'DISTANCE': 'DISTANCE', 'Shape_Leng': 'Shape_Leng', 'NATURE_ROU': 'NATURE_ROU', });
lyr_USINES_15.set('fieldAliases', {'id': 'id', 'ENTREPRISE': 'ENTREPRISE', });
lyr_Pont_16.set('fieldAliases', {'id': 'id', 'nom': 'nom', });
lyr_SEBIKOTANE_0.set('fieldImages', {'REG': 'TextEdit', 'DEPT': 'TextEdit', 'CAV': 'TextEdit', 'CCRCA': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_DEPT': 'TextEdit', 'COD_CAV': 'TextEdit', 'COD_CCRCA': 'TextEdit', 'COD_ENTITE': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'SUP_HA': 'TextEdit', 'CCRCA_1': 'TextEdit', 'Milieu': 'TextEdit', 'Masculin': 'TextEdit', 'Feminin': 'TextEdit', 'TOTAL': 'TextEdit', });
lyr_ZonedeCultureFilfili_1.set('fieldImages', {'id': 'TextEdit', });
lyr_Quartier_2.set('fieldImages', {'id': 'TextEdit', 'QUARTIER': 'TextEdit', });
lyr_Zonedactivitconomique_3.set('fieldImages', {'id': 'TextEdit', });
lyr_Belvdre_4.set('fieldImages', {'id': 'TextEdit', 'Bélvédé': 'TextEdit', });
lyr_ZonehumidedeSbi_5.set('fieldImages', {'id': 'TextEdit', 'zh': 'TextEdit', });
lyr_RavineBlvdereZoneindustrielleGuySuppi_6.set('fieldImages', {'id': 'TextEdit', });
lyr_RavineGuySuppiZoneindustrielle1Page_7.set('fieldImages', {'id': 'TextEdit', });
lyr_RavineSENACZoneHumide_8.set('fieldImages', {'id': 'TextEdit', });
lyr_RavineTangorThiokhoKipKip_9.set('fieldImages', {'id': 'TextEdit', });
lyr_RavineBlvdereZonehumide_10.set('fieldImages', {'id': 'TextEdit', });
lyr_RavineYbaSENAC_11.set('fieldImages', {'id': 'TextEdit', });
lyr_Autoroutepage_12.set('fieldImages', {'id': 'TextEdit', });
lyr_NvxtraceTER_13.set('fieldImages', {'id': 'TextEdit', });
lyr_ROUTESEBI_14.set('fieldImages', {'OBJECTID': 'Range', 'FNODE_': 'TextEdit', 'TNODE_': 'TextEdit', 'LPOLY_': 'TextEdit', 'RPOLY_': 'TextEdit', 'LENGTH': 'TextEdit', 'ROUTES_': 'TextEdit', 'ROUTES_ID': 'TextEdit', 'CODE': 'TextEdit', 'FONCTION': 'TextEdit', 'DISTANCE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'NATURE_ROU': 'TextEdit', });
lyr_USINES_15.set('fieldImages', {'id': 'TextEdit', 'ENTREPRISE': 'TextEdit', });
lyr_Pont_16.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', });
lyr_SEBIKOTANE_0.set('fieldLabels', {'REG': 'no label', 'DEPT': 'no label', 'CAV': 'no label', 'CCRCA': 'no label', 'COD_REG': 'no label', 'COD_DEPT': 'no label', 'COD_CAV': 'no label', 'COD_CCRCA': 'no label', 'COD_ENTITE': 'no label', 'SUPERFICIE': 'no label', 'SUP_HA': 'no label', 'CCRCA_1': 'no label', 'Milieu': 'no label', 'Masculin': 'no label', 'Feminin': 'no label', 'TOTAL': 'no label', });
lyr_ZonedeCultureFilfili_1.set('fieldLabels', {'id': 'no label', });
lyr_Quartier_2.set('fieldLabels', {'id': 'no label', 'QUARTIER': 'no label', });
lyr_Zonedactivitconomique_3.set('fieldLabels', {'id': 'no label', });
lyr_Belvdre_4.set('fieldLabels', {'id': 'no label', 'Bélvédé': 'no label', });
lyr_ZonehumidedeSbi_5.set('fieldLabels', {'id': 'no label', 'zh': 'no label', });
lyr_RavineBlvdereZoneindustrielleGuySuppi_6.set('fieldLabels', {'id': 'no label', });
lyr_RavineGuySuppiZoneindustrielle1Page_7.set('fieldLabels', {'id': 'no label', });
lyr_RavineSENACZoneHumide_8.set('fieldLabels', {'id': 'no label', });
lyr_RavineTangorThiokhoKipKip_9.set('fieldLabels', {'id': 'no label', });
lyr_RavineBlvdereZonehumide_10.set('fieldLabels', {'id': 'no label', });
lyr_RavineYbaSENAC_11.set('fieldLabels', {'id': 'no label', });
lyr_Autoroutepage_12.set('fieldLabels', {'id': 'no label', });
lyr_NvxtraceTER_13.set('fieldLabels', {'id': 'no label', });
lyr_ROUTESEBI_14.set('fieldLabels', {'OBJECTID': 'no label', 'FNODE_': 'no label', 'TNODE_': 'no label', 'LPOLY_': 'no label', 'RPOLY_': 'no label', 'LENGTH': 'no label', 'ROUTES_': 'no label', 'ROUTES_ID': 'no label', 'CODE': 'no label', 'FONCTION': 'no label', 'DISTANCE': 'no label', 'Shape_Leng': 'no label', 'NATURE_ROU': 'no label', });
lyr_USINES_15.set('fieldLabels', {'id': 'no label', 'ENTREPRISE': 'no label', });
lyr_Pont_16.set('fieldLabels', {'id': 'no label', 'nom': 'no label', });
lyr_Pont_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});