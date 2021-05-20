$(document).ready(function () {
    $('#map-tarifas').vectorMap({
        map: 'tarifas',
        backgroundColor: '#FFF',
        zoomButtons: false,
        zoomOnScroll: false,
        series: {
            regions: [{
                    values: {"tum": "1", "piu": "2", "lam": "3", "caj": "4", "ama": "5", "lor": "6", "lib": "7", "sma": "8", "anc": "9", "huc": "10", "uca": "11", "lim": "12", "cal": "13", "pas": "14", "jun": "15", "ica": "16", "hua": "17", "aya": "18", "apu": "19", "cus": "20", "mdd": "21", "are": "22", "pun": "23", "ltt": "24", "moq": "25", "tac": "26", "fl1": 27, "fl2": 28},
                    scale: ['#AFCAE8', '#D4E2F1', '#AFCAE8', '#98B3D2', '#AFCAE8', '#D4E2F1', '#D4E2F1', '#98B3D2', '#AFCAE8', '#D4E2F1', '#98B3D2', '#98B3D2', '#D4E2F1', '#D4E2F1', '#D4E2F1', '#D4E2F1', '#AFCAE8', '#98B3D2', '#AFCAE8', '#D4E2F1', '#AFCAE8', '#AFCAE8', '#98B3D2', '#D4E2F1', '#AFCAE8', '#DCECF9', '#D4E2F1', '#D4E2F1'],
                    normalizeFunction: 'polynomial'
                }]

        },
        regionStyle: {
            initial: {
                fill: "#f4f3f0",
                stroke: "#FFF",
                "stroke-width": 2,
                "stroke-opacity": "1",
                "fill-opacity": "0.8"
            },
            hover: {
                cursor: 'pointer',
                "fill-opacity": "1"
            }
        },
        labels: {
            regions: {
                offsets: function (code) {
                    return {
                        'caj': [0, 20],
                        'aya': [-10, 10]
                    }[code];
                }
            }
        },
        onRegionClick: function (event, code) {
            var cod;
            switch (code) {
                case 'ama':
                    cod = 'amazonas';
                    break;
                case 'anc':
                    cod = 'ancash';
                    break;
                case 'apu':
                    cod = 'apurimac';
                    break;
                case 'are':
                    cod = 'arequipa';
                    break;
                case 'aya':
                    cod = 'ayacucho';
                    break;
                case 'caj':
                    cod = 'cajamarca';
                    break;
                case 'cal':
                    cod = 'callao';
                    break;
                case 'cus':
                    cod = 'cusco';
                    break;
                case 'hua':
                    cod = 'huancavelica';
                    break;
                case 'huc':
                    cod = 'huanuco';
                    break;
                case 'ica':
                    cod = 'ica';
                    break;
                case 'jun':
                    cod = 'junin';
                    break;
                case 'lib':
                    cod = 'la-libertad';
                    break;
                case 'lam':
                    cod = 'lambayeque';
                    break;
                case 'lim':
                    cod = 'lima';
                    break;
                case 'fl1':
                    cod = 'Lima-metropolitana';
                    break;
                case 'fl2':
                    cod = 'lima-provincias';
                    break;
                case 'lor':
                    cod = 'loreto';
                    break;
                case 'mdd':
                    cod = 'madre-de-dios';
                    break;
                case 'moq':
                    cod = 'moquegua';
                    break;
                case 'pas':
                    cod = 'pasco';
                    break;
                case 'piu':
                    cod = 'piura';
                    break;
                case 'pun':
                    cod = 'puno';
                    break;
                case 'sma':
                    cod = 'san-martin';
                    break;
                case 'tac':
                    cod = 'tacna';
                    break;
                case 'tum':
                    cod = 'tumbes';
                    break;
                case 'uca':
                    cod = 'ucayali';
                    break;
                case 'ltt':
                    cod = 'lago';
                    break;
            }
            if (cod !== 'lima' && cod !== 'lago') {
                var URL = 'http://' + $(location).attr('host') + '/financiamiento-organizaciones-politicas/ERM2018/tarifas-publicitarias/' + cod + '/';
                $(location).attr('href', URL);
            } else {
                return false;
            }
        }
    });
});