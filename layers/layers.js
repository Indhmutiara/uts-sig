var wms_layers = [];

var format_WilayahAdministrasi_0 = new ol.format.GeoJSON();
var features_WilayahAdministrasi_0 = format_WilayahAdministrasi_0.readFeatures(json_WilayahAdministrasi_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WilayahAdministrasi_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WilayahAdministrasi_0.addFeatures(features_WilayahAdministrasi_0);
var lyr_WilayahAdministrasi_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WilayahAdministrasi_0, 
                style: style_WilayahAdministrasi_0,
                popuplayertitle: "Wilayah Administrasi",
                interactive: true,
    title: 'Wilayah Administrasi<br />\
    <img src="styles/legend/WilayahAdministrasi_0_0.png" /> ALANG-ALANGLEBAR<br />\
    <img src="styles/legend/WilayahAdministrasi_0_1.png" /> BANYUASIN SATU<br />\
    <img src="styles/legend/WilayahAdministrasi_0_2.png" /> BUKITKECIL<br />\
    <img src="styles/legend/WilayahAdministrasi_0_3.png" /> GANDUS<br />\
    <img src="styles/legend/WilayahAdministrasi_0_4.png" /> ILIRBARAT DUA<br />\
    <img src="styles/legend/WilayahAdministrasi_0_5.png" /> ILIRBARAT SATU<br />\
    <img src="styles/legend/WilayahAdministrasi_0_6.png" /> ILIRTIMUR DUA<br />\
    <img src="styles/legend/WilayahAdministrasi_0_7.png" /> ILIRTIMUR SATU<br />\
    <img src="styles/legend/WilayahAdministrasi_0_8.png" /> INDRALAYA UTARA<br />\
    <img src="styles/legend/WilayahAdministrasi_0_9.png" /> KALIDONI<br />\
    <img src="styles/legend/WilayahAdministrasi_0_10.png" /> KEMUNING<br />\
    <img src="styles/legend/WilayahAdministrasi_0_11.png" /> KERTAPATI<br />\
    <img src="styles/legend/WilayahAdministrasi_0_12.png" /> PEMULUTAN<br />\
    <img src="styles/legend/WilayahAdministrasi_0_13.png" /> PLAJU<br />\
    <img src="styles/legend/WilayahAdministrasi_0_14.png" /> RAMBUTAN<br />\
    <img src="styles/legend/WilayahAdministrasi_0_15.png" /> RANTAUBAYUR<br />\
    <img src="styles/legend/WilayahAdministrasi_0_16.png" /> SAKO<br />\
    <img src="styles/legend/WilayahAdministrasi_0_17.png" /> SEBERANGULU DUA<br />\
    <img src="styles/legend/WilayahAdministrasi_0_18.png" /> SEBERANGULU SATU<br />\
    <img src="styles/legend/WilayahAdministrasi_0_19.png" /> SEMATANGBORANG<br />\
    <img src="styles/legend/WilayahAdministrasi_0_20.png" /> SEMBAWA<br />\
    <img src="styles/legend/WilayahAdministrasi_0_21.png" /> SUKARAMI<br />\
    <img src="styles/legend/WilayahAdministrasi_0_22.png" /> TALANGKELAPA<br />\
    <img src="styles/legend/WilayahAdministrasi_0_23.png" /> <br />'
        });
var format_Pemukiman_1 = new ol.format.GeoJSON();
var features_Pemukiman_1 = format_Pemukiman_1.readFeatures(json_Pemukiman_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemukiman_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemukiman_1.addFeatures(features_Pemukiman_1);
var lyr_Pemukiman_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pemukiman_1, 
                style: style_Pemukiman_1,
                popuplayertitle: "Pemukiman",
                interactive: true,
                title: '<img src="styles/legend/Pemukiman_1.png" /> Pemukiman'
            });
var format_AgriLadang_2 = new ol.format.GeoJSON();
var features_AgriLadang_2 = format_AgriLadang_2.readFeatures(json_AgriLadang_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AgriLadang_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AgriLadang_2.addFeatures(features_AgriLadang_2);
var lyr_AgriLadang_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AgriLadang_2, 
                style: style_AgriLadang_2,
                popuplayertitle: "Agri Ladang",
                interactive: true,
                title: '<img src="styles/legend/AgriLadang_2.png" /> Agri Ladang'
            });
var format_AgriSawah_3 = new ol.format.GeoJSON();
var features_AgriSawah_3 = format_AgriSawah_3.readFeatures(json_AgriSawah_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AgriSawah_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AgriSawah_3.addFeatures(features_AgriSawah_3);
var lyr_AgriSawah_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AgriSawah_3, 
                style: style_AgriSawah_3,
                popuplayertitle: "Agri Sawah",
                interactive: true,
                title: '<img src="styles/legend/AgriSawah_3.png" /> Agri Sawah'
            });
var format_Sungai_4 = new ol.format.GeoJSON();
var features_Sungai_4 = format_Sungai_4.readFeatures(json_Sungai_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_4.addFeatures(features_Sungai_4);
var lyr_Sungai_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sungai_4, 
                style: style_Sungai_4,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/Sungai_4.png" /> Sungai'
            });
var format_Jalan_5 = new ol.format.GeoJSON();
var features_Jalan_5 = format_Jalan_5.readFeatures(json_Jalan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_5.addFeatures(features_Jalan_5);
var lyr_Jalan_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_5, 
                style: style_Jalan_5,
                popuplayertitle: "Jalan",
                interactive: true,
                title: '<img src="styles/legend/Jalan_5.png" /> Jalan'
            });
var format_Dermaga_6 = new ol.format.GeoJSON();
var features_Dermaga_6 = format_Dermaga_6.readFeatures(json_Dermaga_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dermaga_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dermaga_6.addFeatures(features_Dermaga_6);
var lyr_Dermaga_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dermaga_6, 
                style: style_Dermaga_6,
                popuplayertitle: "Dermaga",
                interactive: true,
                title: '<img src="styles/legend/Dermaga_6.png" /> Dermaga'
            });
var format_Jembatan_7 = new ol.format.GeoJSON();
var features_Jembatan_7 = format_Jembatan_7.readFeatures(json_Jembatan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jembatan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jembatan_7.addFeatures(features_Jembatan_7);
var lyr_Jembatan_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jembatan_7, 
                style: style_Jembatan_7,
                popuplayertitle: "Jembatan",
                interactive: true,
                title: '<img src="styles/legend/Jembatan_7.png" /> Jembatan'
            });
var format_GarduListrik_8 = new ol.format.GeoJSON();
var features_GarduListrik_8 = format_GarduListrik_8.readFeatures(json_GarduListrik_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GarduListrik_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GarduListrik_8.addFeatures(features_GarduListrik_8);
var lyr_GarduListrik_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GarduListrik_8, 
                style: style_GarduListrik_8,
                popuplayertitle: "Gardu Listrik",
                interactive: true,
                title: '<img src="styles/legend/GarduListrik_8.png" /> Gardu Listrik'
            });
var format_SaranaIbadah_9 = new ol.format.GeoJSON();
var features_SaranaIbadah_9 = format_SaranaIbadah_9.readFeatures(json_SaranaIbadah_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SaranaIbadah_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SaranaIbadah_9.addFeatures(features_SaranaIbadah_9);
var lyr_SaranaIbadah_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SaranaIbadah_9, 
                style: style_SaranaIbadah_9,
                popuplayertitle: "Sarana Ibadah",
                interactive: true,
                title: '<img src="styles/legend/SaranaIbadah_9.png" /> Sarana Ibadah'
            });
var format_Pelabuhan_10 = new ol.format.GeoJSON();
var features_Pelabuhan_10 = format_Pelabuhan_10.readFeatures(json_Pelabuhan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pelabuhan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pelabuhan_10.addFeatures(features_Pelabuhan_10);
var lyr_Pelabuhan_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pelabuhan_10, 
                style: style_Pelabuhan_10,
                popuplayertitle: "Pelabuhan",
                interactive: true,
                title: '<img src="styles/legend/Pelabuhan_10.png" /> Pelabuhan'
            });

lyr_WilayahAdministrasi_0.setVisible(true);lyr_Pemukiman_1.setVisible(true);lyr_AgriLadang_2.setVisible(true);lyr_AgriSawah_3.setVisible(true);lyr_Sungai_4.setVisible(true);lyr_Jalan_5.setVisible(true);lyr_Dermaga_6.setVisible(true);lyr_Jembatan_7.setVisible(true);lyr_GarduListrik_8.setVisible(true);lyr_SaranaIbadah_9.setVisible(true);lyr_Pelabuhan_10.setVisible(true);
var layersList = [lyr_WilayahAdministrasi_0,lyr_Pemukiman_1,lyr_AgriLadang_2,lyr_AgriSawah_3,lyr_Sungai_4,lyr_Jalan_5,lyr_Dermaga_6,lyr_Jembatan_7,lyr_GarduListrik_8,lyr_SaranaIbadah_9,lyr_Pelabuhan_10];
lyr_WilayahAdministrasi_0.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Pemukiman_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AgriLadang_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JNSLDG': 'JNSLDG', 'TNMLDG': 'TNMLDG', 'TIPLDG': 'TIPLDG', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AgriSawah_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSWH': 'JNSSWH', 'FCODE': 'FCODE', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'TNMSWH': 'TNMSWH', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Sungai_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Jalan_5.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Dermaga_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'PMLDRM': 'PMLDRM', 'OPRDRM': 'OPRDRM', 'LGTDRM': 'LGTDRM', 'LBRDRM': 'LBRDRM', 'LUAS': 'LUAS', 'KDLDRM': 'KDLDRM', 'KSTDRM': 'KSTDRM', 'STRDRM': 'STRDRM', 'REMARK': 'REMARK', 'FGSDRM': 'FGSDRM', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_Jembatan_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPJMB': 'TIPJMB', 'FGSJMB': 'FGSJMB', 'TONJMB': 'TONJMB', 'TGGJMB': 'TGGJMB', 'LBRJMB': 'LBRJMB', 'MATJMB': 'MATJMB', 'STRJMB': 'STRJMB', 'DEKJMB': 'DEKJMB', 'BTSJMB': 'BTSJMB', 'AYUJMB': 'AYUJMB', 'JBTJMB': 'JBTJMB', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_GarduListrik_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JGLGRL': 'JGLGRL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_SaranaIbadah_9.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FGSIBD': 'FGSIBD', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_Pelabuhan_10.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'ADMPEL': 'ADMPEL', 'JNSPEL': 'JNSPEL', 'FGSPEL': 'FGSPEL', 'PJAPEL': 'PJAPEL', 'LAMPEL': 'LAMPEL', 'STUPEL': 'STUPEL', 'KONKON': 'KONKON', 'LUAS': 'LUAS', 'KMXPEL': 'KMXPEL', 'KMNPEL': 'KMNPEL', 'STPPEL': 'STPPEL', 'SRPPEL': 'SRPPEL', 'ALJPEL': 'ALJPEL', 'REMARK': 'REMARK', 'KLSPEL': 'KLSPEL', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KODPEL': 'KODPEL', });
lyr_WilayahAdministrasi_0.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Pemukiman_1.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_AgriLadang_2.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'AQDATE': '', 'PUDATE': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JNSLDG': '', 'TNMLDG': '', 'TIPLDG': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_AgriSawah_3.set('fieldImages', {'NAMOBJ': '', 'JNSSWH': '', 'FCODE': '', 'AQDATE': '', 'PUDATE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'TNMSWH': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Sungai_4.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_Jalan_5.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_Dermaga_6.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'PMLDRM': '', 'OPRDRM': '', 'LGTDRM': '', 'LBRDRM': '', 'LUAS': '', 'KDLDRM': '', 'KSTDRM': '', 'STRDRM': '', 'REMARK': '', 'FGSDRM': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_Jembatan_7.set('fieldImages', {'NAMOBJ': '', 'TIPJMB': '', 'FGSJMB': '', 'TONJMB': '', 'TGGJMB': '', 'LBRJMB': '', 'MATJMB': '', 'STRJMB': '', 'DEKJMB': '', 'BTSJMB': '', 'AYUJMB': '', 'JBTJMB': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_GarduListrik_8.set('fieldImages', {'NAMOBJ': '', 'JGLGRL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_SaranaIbadah_9.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'FGSIBD': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_Pelabuhan_10.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'ADMPEL': '', 'JNSPEL': '', 'FGSPEL': '', 'PJAPEL': '', 'LAMPEL': '', 'STUPEL': '', 'KONKON': '', 'LUAS': '', 'KMXPEL': '', 'KMNPEL': '', 'STPPEL': '', 'SRPPEL': '', 'ALJPEL': '', 'REMARK': '', 'KLSPEL': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KODPEL': '', });
lyr_WilayahAdministrasi_0.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'inline label - visible with data', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Pemukiman_1.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_AgriLadang_2.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'FCODE': 'no label', 'REMARK': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JNSLDG': 'no label', 'TNMLDG': 'no label', 'TIPLDG': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_AgriSawah_3.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'JNSSWH': 'no label', 'FCODE': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'TNMSWH': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Sungai_4.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Jalan_5.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Dermaga_6.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'FCODE': 'no label', 'PMLDRM': 'no label', 'OPRDRM': 'no label', 'LGTDRM': 'no label', 'LBRDRM': 'no label', 'LUAS': 'no label', 'KDLDRM': 'no label', 'KSTDRM': 'no label', 'STRDRM': 'no label', 'REMARK': 'no label', 'FGSDRM': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_Jembatan_7.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'TIPJMB': 'no label', 'FGSJMB': 'no label', 'TONJMB': 'no label', 'TGGJMB': 'no label', 'LBRJMB': 'no label', 'MATJMB': 'no label', 'STRJMB': 'no label', 'DEKJMB': 'no label', 'BTSJMB': 'no label', 'AYUJMB': 'no label', 'JBTJMB': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_GarduListrik_8.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'JGLGRL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_SaranaIbadah_9.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'LUAS': 'no label', 'FGSIBD': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_Pelabuhan_10.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'FCODE': 'no label', 'ADMPEL': 'no label', 'JNSPEL': 'no label', 'FGSPEL': 'no label', 'PJAPEL': 'no label', 'LAMPEL': 'no label', 'STUPEL': 'no label', 'KONKON': 'no label', 'LUAS': 'no label', 'KMXPEL': 'no label', 'KMNPEL': 'no label', 'STPPEL': 'no label', 'SRPPEL': 'no label', 'ALJPEL': 'no label', 'REMARK': 'no label', 'KLSPEL': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KODPEL': 'no label', });
lyr_Pelabuhan_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});