var storage = {
    'barChart': {
        description: 'Report: Content Reports > Content Drop-off\nFilter: from 01/12/2015 - 01/01/2016',
        data: [{
            "id": "content_dropoff",
            "data": "count_plays,392356;count_plays_25,304802;count_plays_50,287516;count_plays_75,273269;count_plays_100,252204;play_through_ratio,0.6428;",
            "objectType": "KalturaReportGraph"
        }]
    }, 'barChartCompare': {
        description: 'Report: Content Reports > Content Drop-off comparison of 3 entries\nFilter: from 01/12/2015 - 01/01/2016',
        data: [{
            "key": "Five retention reducers",
            "values": [{"label": "count_plays", "value": 493}, {
                "label": "count_plays_25",
                "value": 423
            }, {"label": "count_plays_50", "value": 419}, {
                "label": "count_plays_75",
                "value": 414
            }, {"label": "count_plays_100", "value": 405}]
        }, {
            "key": "Working with  using  and minimizing the ribbon",
            "values": [{"label": "count_plays", "value": 145}, {
                "label": "count_plays_25",
                "value": 123
            }, {"label": "count_plays_50", "value": 120}, {
                "label": "count_plays_75",
                "value": 114
            }, {"label": "count_plays_100", "value": 102}]
        }, {
            "key": "Adjusting spacing",
            "values": [{"label": "count_plays", "value": 128}, {
                "label": "count_plays_25",
                "value": 102
            }, {"label": "count_plays_50", "value": 90}, {
                "label": "count_plays_75",
                "value": 70
            }, {"label": "count_plays_100", "value": 61}]
        }]
    }

    ,
    'lineChart': {
        description: 'Report: Content Reports > Top Content\nMatrics: "Play","Minutes Viewed","Player impression"\nDimension: "Time"\nFilter: from 01/12/2015 - 01/01/2016',
        data: [{
            "id": "count_plays",
            "data": "20151206,7547;20151207,19798;20151208,20952;20151209,20235;20151210,18483;20151211,15939;20151212,6551;20151213,8141;20151214,20713;20151215,23833;20151216,18796;20151217,16575;20151218,14394;20151219,3292;20151220,3365;20151221,9351;20151222,9292;20151223,6960;20151224,2536;20151225,1432;20151226,2908;20151227,3592;20151228,9357;20151229,10756;20151230,10916;20151231,7376;20160101,4372;",
            "objectType": "KalturaReportGraph"
        }, {
            "id": "sum_time_viewed",
            "data": "20151206,10087.390;20151207,24706.067;20151208,27953.829;20151209,28227.549;20151210,26662.081;20151211,22590.403;20151212,10059.161;20151213,12209.863;20151214,28636.381;20151215,29850.094;20151216,27070.965;20151217,24417.511;20151218,21114.241;20151219,5208.618;20151220,4718.457;20151221,13166.327;20151222,13449.060;20151223,9884.208;20151224,3631.176;20151225,1961.250;20151226,4632.037;20151227,4769.126;20151228,14830.125;20151229,17105.938;20151230,18076.524;20151231,12936.632;20160101,7427.503;",
            "objectType": "KalturaReportGraph"
        }, {
            "id": "count_loads",
            "data": "20151206,8129;20151207,21353;20151208,22802;20151209,22073;20151210,20175;20151211,17311;20151212,7214;20151213,8804;20151214,22439;20151215,26029;20151216,20321;20151217,18214;20151218,15542;20151219,3691;20151220,3678;20151221,10223;20151222,10199;20151223,7494;20151224,2999;20151225,1811;20151226,3279;20151227,3986;20151228,10023;20151229,11486;20151230,11657;20151231,7965;20160101,4853;",
            "objectType": "KalturaReportGraph"
        }]
    },
    'areaChart': {
        description: 'Report: Content Reports > Top Content\nMatrics: "Play","Minutes Viewed","Player impression"\nDimension: "Time"\nFilter: from 01/12/2015 - 01/01/2016',
        data: [{
            "id": "count_plays",
            "data": "20151201,25146;20151202,23720;20151203,19717;20151204,20153;20151205,6158;20151206,7547;20151207,19798;20151208,20952;20151209,20235;20151210,18483;20151211,15939;20151212,6551;20151213,8141;20151214,20713;20151215,23833;20151216,18796;20151217,16575;20151218,14394;20151219,3292;20151220,3365;20151221,9351;20151222,9292;20151223,6960;20151224,2536;20151225,1432;20151226,2908;20151227,3592;20151228,9357;20151229,10756;20151230,10916;20151231,7376;20160101,4372;",
            "objectType": "KalturaReportGraph"
        }, {
            "id": "sum_time_viewed",
            "data": "20151201,30442.449;20151202,29358.450;20151203,26372.773;20151204,25105.553;20151205,8676.671;20151206,10087.390;20151207,24706.067;20151208,27953.829;20151209,28227.549;20151210,26662.081;20151211,22590.403;20151212,10059.161;20151213,12209.863;20151214,28636.381;20151215,29850.094;20151216,27070.965;20151217,24417.511;20151218,21114.241;20151219,5208.618;20151220,4718.457;20151221,13166.327;20151222,13449.060;20151223,9884.208;20151224,3631.176;20151225,1961.250;20151226,4632.037;20151227,4769.126;20151228,14830.125;20151229,17105.938;20151230,18076.524;20151231,12936.632;20160101,7427.503;",
            "objectType": "KalturaReportGraph"
        }, {
            "id": "count_loads",
            "data": "20151201,27497;20151202,25818;20151203,21407;20151204,21866;20151205,6637;20151206,8129;20151207,21353;20151208,22802;20151209,22073;20151210,20175;20151211,17311;20151212,7214;20151213,8804;20151214,22439;20151215,26029;20151216,20321;20151217,18214;20151218,15542;20151219,3691;20151220,3678;20151221,10223;20151222,10199;20151223,7494;20151224,2999;20151225,1811;20151226,3279;20151227,3986;20151228,10023;20151229,11486;20151230,11657;20151231,7965;20160101,4853;",
            "objectType": "KalturaReportGraph"
        }]
    },
    'pieChart': {
        description : 'Report: System Reports > Operating Systems (comparison of 5 operating systems)\nFilter: from 01/12/2015 - 01/01/2016',
data: [
            {
                "id": "count_plays",
                "data": "APPLE_WEB_KIT,41492;BLACKBERRY10,11;BOT,0;CHROME,13653;CHROME11,13;CHROME12,1;CHROME18,16;CHROME19,1;CHROME22,129;CHROME23,8;CHROME25,34;CHROME26,19;CHROME27,2;CHROME28,31;CHROME29,5;CHROME30,421;CHROME31,34;CHROME32,11;CHROME33,146;CHROME34,54;CHROME35,51;CHROME36,19;CHROME37,14;CHROME38,453;CHROME39,80;CHROME40,72;CHROME41,130;CHROME42,113;CHROME43,152;CHROME44,189;CHROME45,292;CHROME46,16495;CHROME_MOBILE,16560;COAST,4;EDGE,1076;EDGE12,2250;EDGE_MOBILE12,168;FIREFOX10,4;FIREFOX12,2;FIREFOX13,3;FIREFOX15,6;FIREFOX16,23;FIREFOX17,0;FIREFOX20,2;FIREFOX22,1;FIREFOX23,0;FIREFOX24,2;FIREFOX26,2;FIREFOX27,1;FIREFOX28,2;FIREFOX29,23;FIREFOX30,4;FIREFOX31,12;FIREFOX32,8;FIREFOX33,8;FIREFOX34,0;FIREFOX35,8;FIREFOX36,28;FIREFOX37,6;FIREFOX38,105;FIREFOX39,50;FIREFOX4,1469;FIREFOX40,61;FIREFOX41,221;FIREFOX42,5082;FIREFOX_MOBILE,92;IE,6;IE10,509;IE11,17572;IE7,170;IE8,31;IE9,296;IEMOBILE10,67;IEMOBILE11,1183;IEMOBILE9,37;MOBILE_SAFARI,27522;MOZILLA,2;OPERA,308;OPERA12,11;OPERA24,2;OPERA29,2;OPERA30,0;OPERA_MINI,0;OPERA_MOBILE,44;SAFARI,5948;SAFARI4,630;SAFARI5,134;SAFARI6,452;SAFARI7,378;SAFARI8,1304;UNKNOWN,11;",
                "objectType": "KalturaReportGraph"
            },
            {
                "id": "sum_time_viewed",
                "data": "APPLE_WEB_KIT,73843.096;BLACKBERRY10,23.028;BOT,0.000;CHROME,30006.693;CHROME11,1.726;CHROME12,0.283;CHROME18,10.350;CHROME19,1.100;CHROME22,192.413;CHROME23,28.095;CHROME25,180.124;CHROME26,20.334;CHROME27,1.017;CHROME28,58.509;CHROME29,14.758;CHROME30,730.560;CHROME31,82.501;CHROME32,8.875;CHROME33,196.829;CHROME34,109.270;CHROME35,121.390;CHROME36,22.971;CHROME37,44.924;CHROME38,762.292;CHROME39,105.490;CHROME40,94.280;CHROME41,311.974;CHROME42,132.328;CHROME43,463.462;CHROME44,455.634;CHROME45,557.236;CHROME46,37153.147;CHROME_MOBILE,30129.095;COAST,4.133;EDGE,2744.363;EDGE12,5018.998;EDGE_MOBILE12,72.525;FIREFOX10,41.266;FIREFOX12,0.825;FIREFOX13,10.983;FIREFOX15,7.633;FIREFOX16,49.135;FIREFOX17,0.000;FIREFOX20,2.233;FIREFOX22,0.000;FIREFOX23,0.000;FIREFOX24,2.517;FIREFOX26,1.779;FIREFOX27,0.317;FIREFOX28,0.000;FIREFOX29,32.074;FIREFOX30,4.292;FIREFOX31,20.615;FIREFOX32,25.092;FIREFOX33,14.095;FIREFOX34,0.000;FIREFOX35,3.979;FIREFOX36,136.642;FIREFOX37,23.284;FIREFOX38,255.076;FIREFOX39,74.179;FIREFOX4,3200.584;FIREFOX40,130.467;FIREFOX41,508.979;FIREFOX42,11131.581;FIREFOX_MOBILE,98.213;IE,2.000;IE10,892.624;IE11,37483.109;IE7,398.897;IE8,52.196;IE9,595.700;IEMOBILE10,13.883;IEMOBILE11,1857.337;IEMOBILE9,1.717;MOBILE_SAFARI,58994.711;MOZILLA,0.725;OPERA,596.981;OPERA12,56.609;OPERA24,7.075;OPERA29,2.017;OPERA30,0.000;OPERA_MINI,0.000;OPERA_MOBILE,148.148;SAFARI,14210.711;SAFARI4,952.727;SAFARI5,284.431;SAFARI6,1539.244;SAFARI7,844.590;SAFARI8,3539.068;UNKNOWN,28.425;",
                "objectType": "KalturaReportGraph"
            },
            {
                "id": "avg_time_viewed",
                "data": "APPLE_WEB_KIT,1.7796948;BLACKBERRY10,2.0934545;BOT,0.0000000;CHROME,2.1978095;CHROME11,0.1327692;CHROME12,0.2830000;CHROME18,0.6468750;CHROME19,1.1000000;CHROME22,1.4915736;CHROME23,3.5118750;CHROME25,5.2977647;CHROME26,1.0702105;CHROME27,0.5085000;CHROME28,1.8873871;CHROME29,2.9516000;CHROME30,1.7352969;CHROME31,2.4265000;CHROME32,0.8068182;CHROME33,1.3481438;CHROME34,2.0235185;CHROME35,2.3801961;CHROME36,1.2090000;CHROME37,3.2088571;CHROME38,1.6827638;CHROME39,1.3186250;CHROME40,1.3094444;CHROME41,2.3998000;CHROME42,1.1710442;CHROME43,3.0490921;CHROME44,2.4107619;CHROME45,1.9083425;CHROME46,2.2523884;CHROME_MOBILE,1.8193898;COAST,1.0332500;EDGE,2.5505232;EDGE12,2.2306658;EDGE_MOBILE12,0.4316964;FIREFOX10,10.3165000;FIREFOX12,0.4125000;FIREFOX13,3.6610000;FIREFOX15,1.2721667;FIREFOX16,2.1363043;FIREFOX17,0.0000000;FIREFOX20,1.1165000;FIREFOX22,0.0000000;FIREFOX23,0.0000000;FIREFOX24,1.2585000;FIREFOX26,0.8895000;FIREFOX27,0.3170000;FIREFOX28,0.0000000;FIREFOX29,1.3945217;FIREFOX30,1.0730000;FIREFOX31,1.7179167;FIREFOX32,3.1365000;FIREFOX33,1.7618750;FIREFOX34,0.0000000;FIREFOX35,0.4973750;FIREFOX36,4.8800714;FIREFOX37,3.8806667;FIREFOX38,2.4292952;FIREFOX39,1.4835800;FIREFOX4,2.1787502;FIREFOX40,2.1388033;FIREFOX41,2.3030724;FIREFOX42,2.1903937;FIREFOX_MOBILE,1.0675326;IE,0.3333333;IE10,1.7536817;IE11,2.1331157;IE7,2.3464529;IE8,1.6837419;IE9,2.0125000;IEMOBILE10,0.2072090;IEMOBILE11,1.5700228;IEMOBILE9,0.0464054;MOBILE_SAFARI,2.1435474;MOZILLA,0.3625000;OPERA,1.9382500;OPERA12,5.1462727;OPERA24,3.5375000;OPERA29,1.0085000;OPERA30,0.0000000;OPERA_MINI,0.0000000;OPERA_MOBILE,3.3670000;SAFARI,2.3891579;SAFARI4,1.5122651;SAFARI5,2.1226194;SAFARI6,3.4054071;SAFARI7,2.2343651;SAFARI8,2.7140092;UNKNOWN,2.5840909;",
                "objectType": "KalturaReportGraph"
            },
            {
                "id": "count_loads",
                "data": "APPLE_WEB_KIT,48261;BLACKBERRY10,16;BOT,1019;CHROME,17682;CHROME11,20;CHROME12,3;CHROME18,21;CHROME19,1;CHROME22,130;CHROME23,8;CHROME25,34;CHROME26,19;CHROME27,7;CHROME28,61;CHROME29,5;CHROME30,474;CHROME31,38;CHROME32,47;CHROME33,176;CHROME34,79;CHROME35,58;CHROME36,20;CHROME37,17;CHROME38,526;CHROME39,86;CHROME40,177;CHROME41,161;CHROME42,116;CHROME43,204;CHROME44,229;CHROME45,321;CHROME46,19584;CHROME_MOBILE,19966;COAST,4;EDGE,1400;EDGE12,2600;EDGE_MOBILE12,181;FIREFOX10,4;FIREFOX12,2;FIREFOX13,3;FIREFOX15,6;FIREFOX16,25;FIREFOX17,3;FIREFOX20,2;FIREFOX22,1;FIREFOX23,6;FIREFOX24,5;FIREFOX26,3;FIREFOX27,1;FIREFOX28,3;FIREFOX29,24;FIREFOX30,5;FIREFOX31,19;FIREFOX32,8;FIREFOX33,9;FIREFOX34,1;FIREFOX35,8;FIREFOX36,38;FIREFOX37,14;FIREFOX38,125;FIREFOX39,55;FIREFOX4,1871;FIREFOX40,73;FIREFOX41,253;FIREFOX42,6346;FIREFOX_MOBILE,223;IE,6;IE10,790;IE11,21583;IE7,169;IE8,57;IE9,460;IEMOBILE10,86;IEMOBILE11,1441;IEMOBILE9,49;MOBILE_SAFARI,37748;MOZILLA,9;OPERA,362;OPERA12,11;OPERA24,2;OPERA29,2;OPERA30,3;OPERA_MINI,1;OPERA_MOBILE,55;SAFARI,7123;SAFARI4,838;SAFARI5,162;SAFARI6,655;SAFARI7,511;SAFARI8,1541;UNKNOWN,27;",
                "objectType": "KalturaReportGraph"
            }

        ]
    }


}


module.exports = {
    get: function (key) {
        switch (key) {
            case '':
            default:
                break;
        }
        return storage[key];
    }

}
