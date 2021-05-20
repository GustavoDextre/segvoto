function getFormValues(fobj) {
    var str = "";
    for (var i = 0; i < fobj.elements.length; i++) {
        switch (fobj.elements[i].type) {
            case "text":
                str += fobj.elements[i].name + "=" + escape(fobj.elements[i].value) + "&";
                break;
            case "password":
                str += fobj.elements[i].name + "=" + escape(fobj.elements[i].value) + "&";
                break;
            case "hidden":
                str += fobj.elements[i].name + "=" + escape(fobj.elements[i].value) + "&";
                break;
            case "textarea":
                str += fobj.elements[i].name + "=" + escape(fobj.elements[i].value) + "&";
                break;
            case "button":
                str += fobj.elements[i].name + "=" + escape(fobj.elements[i].value) + "&";
                break;
            case "image":
                str += fobj.elements[i].name + "=" + escape(fobj.elements[i].value) + "&";
                break;
            case "submit":
                str += fobj.elements[i].name + "=" + escape(fobj.elements[i].value) + "&";
                break;
            case "reset":
                str += fobj.elements[i].name + "=" + escape(fobj.elements[i].value) + "&";
                break;
            case "radio":
                if (fobj.elements[i].checked === true) {
                    str += fobj.elements[i].name + "=" + escape(fobj.elements[i].value) + "&";
                }
                break;
            case "select-one":
                str += fobj.elements[i].name + "=" + fobj.elements[i].options[fobj.elements[i].selectedIndex].value + "&";
                break;
            case "select-multiple":
                for (var i1 = 0; i1 < fobj.elements[i].length; i1++) {
                    if (fobj.elements[i].options[i1].selected === true) {
                        str += fobj.elements[i].name + "[]=" + fobj.elements[i].options[i1].value + "&";
                    }
                }
                break;
            case "checkbox":
                if (fobj.elements[i].checked === true) {
                    str += fobj.elements[i].name + "=" + fobj.elements[i].value + "&";
                }
                break;
        }
    }
    str = str.substr(0, (str.length - 1));
    return str;
}

function backPage() {
    $('#detAll').html('');
    $('#tabSearch').css('display', 'block');
}

function cargar_aportanteC(n_cod_candidato, c_num_doc, c_ap_paterno_razon, c_ap_materno, c_nombre) {
    $('#search').css('display', 'none');
    $.post($('#wURL').val() + 'loadDetail/', {
        txtID: 'resultado-persona',
        txtCC: n_cod_candidato,
        txtND: c_num_doc,
        txtPR: c_ap_paterno_razon,
        txtAM: c_ap_materno,
        txtNO: c_nombre
    },
    function (data) {
        $('#Persona-Resultado').html(data);
    });
}

function cargar_aportanteA(n_cod_candidato, c_num_doc, c_ap_paterno, c_ap_materno, c_nombre) {
    $('#searchCand').css('display', 'none');
    $.post($('#wURL').val() + 'loadDetail/', {
        txtID: 'resultado-candidato',
        txtCC: n_cod_candidato,
        txtND: c_num_doc,
        txtPR: c_ap_paterno,
        txtAM: c_ap_materno,
        txtNO: c_nombre
    },
    function (data) {
        $('#Candidato-Resultado').html(data);
    });
}

// APORTES LIMPIOS - POR ORGANIZACIÓN POLÍTICA

function ajaxDetalle(txtID, ruc, ani, per, pag) {
    $.post($('#wURL').val() + 'loadDetailAll/', {
        txtID: txtID,
        ruc: ruc,
        ani: ani,
        per: per,
        pag: pag
    },
    function (data) {
        $('#detAll').html(data);
    });
}

function verDetalleAportesCampaniaOrg(ruc, anio_presentacion, id_periodo) {
    $('#tabSearch').css('display', 'none');
    ajaxDetalle('aporCampElec', ruc, anio_presentacion, id_periodo, 1);
}

function funcionLecturaPri2() {
    ajaxDetalle('aporCampElec', $('#ruc').val(), $('#anio_presentacion').val(), $('#id_periodo').val(), 1);
}

function funcionLecturaSig2() {
    ajaxDetalle('aporCampElec', $('#ruc').val(), $('#anio_presentacion').val(), $('#id_periodo').val(), parseInt($('#pg').val()) + 1);
}

function funcionLecturaAnt2() {
    ajaxDetalle('aporCampElec', $('#ruc').val(), $('#anio_presentacion').val(), $('#id_periodo').val(), parseInt($('#pg').val()) - 1);
}

function funcionLecturaUlt2() {
    ajaxDetalle('aporCampElec', $('#ruc').val(), $('#anio_presentacion').val(), $('#id_periodo').val(), $('#total').val());
}

function funcionValidaLectura2() {
    ajaxDetalle('aporCampElec', $('#ruc').val(), $('#anio_presentacion').val(), $('#id_periodo').val(), $('#pg').val());
}

function verDetalleAportesSemestralOrg(ruc, anio_presentacion, id_periodo) {
    $('#tabSearch').css('display', 'none');
    ajaxDetalle('aporSemesOrg', ruc, anio_presentacion, id_periodo, 1);
}

function funcionLecturaPri3() {
    ajaxDetalle('aporSemesOrg', $('#ruc').val(), $('#anio_presentacion').val(), $('#id_periodo').val(), 1);
}

function funcionLecturaSig3() {
    ajaxDetalle('aporSemesOrg', $('#ruc').val(), $('#anio_presentacion').val(), $('#id_periodo').val(), parseInt($('#pg').val()) + 1);
}

function funcionLecturaAnt3() {
    ajaxDetalle('aporSemesOrg', $('#ruc').val(), $('#anio_presentacion').val(), $('#id_periodo').val(), parseInt($('#pg').val()) - 1);
}

function funcionLecturaUlt3() {
    ajaxDetalle('aporSemesOrg', $('#ruc').val(), $('#anio_presentacion').val(), $('#id_periodo').val(), $('#total').val());
}

function funcionValidaLectura3() {
    ajaxDetalle('aporSemesOrg', $('#ruc').val(), $('#anio_presentacion').val(), $('#id_periodo').val(), $('#pg').val());
}

// APORTES LIMPIOS - POR PERSONA

function ajaxDetallePersona(txtID, n_cod_tipo_doc, c_num_doc, n_anio_presentacion, n_id_periodo, nombre, app, apm, pag) {
    $.post($('#wURL').val() + 'loadDetailAll/', {
        txtID: txtID,
        n_cod_tipo_doc: n_cod_tipo_doc,
        c_num_doc: c_num_doc,
        n_anio_presentacion: n_anio_presentacion,
        n_id_periodo: n_id_periodo,
        nombre: nombre,
        app: app,
        apm: apm,
        pag: pag
    },
    function (data) {
        $('#detAll').html(data);
    });
}

function verDetalleAportesCampaniaAp(n_cod_tipo_doc, c_num_doc, n_anio_presentacion, n_id_periodo, nombre, app, apm) {
    $('#tabSearch').css('display', 'none');
    ajaxDetallePersona('aporPer', n_cod_tipo_doc, c_num_doc, n_anio_presentacion, n_id_periodo, nombre, app, apm, 1);
}

function verDetalleAportesSemestralAp(n_cod_tipo_doc, c_num_doc, n_anio_presentacion, n_id_periodo, nombre, app, apm) {
    $('#tabSearch').css('display', 'none');
    ajaxDetallePersona('aporSem', n_cod_tipo_doc, c_num_doc, n_anio_presentacion, n_id_periodo, nombre, app, apm, 1);
}

function funcionLecturaPriPeri() {
    ajaxDetallePersona('aporSem', $('#n_cod_tipo_doc').val(), $('#ruc').val(), $('#anio_presentacion').val(), $('#id_periodo').val(), $('nombre').val(), $('#app').val(), $('#apm').val(), 1);
}

function funcionLecturaAntPeri() {
    ajaxDetallePersona('aporSem', $('#n_cod_tipo_doc').val(), $('#ruc').val(), $('#anio_presentacion').val(), $('#id_periodo').val(), $('nombre').val(), $('#app').val(), $('#apm').val(), parseInt($('#pg').val()) - 1);
}

function funcionLecturaSigPeri() {
    ajaxDetallePersona('aporSem', $('#n_cod_tipo_doc').val(), $('#ruc').val(), $('#anio_presentacion').val(), $('#id_periodo').val(), $('nombre').val(), $('#app').val(), $('#apm').val(), parseInt($('#pg').val()) + 1);
}

function funcionLecturaUltPeri() {
    ajaxDetallePersona('aporSem', $('#n_cod_tipo_doc').val(), $('#ruc').val(), $('#anio_presentacion').val(), $('#id_periodo').val(), $('nombre').val(), $('#app').val(), $('#apm').val(), $('#total').val());
}

function funcionValidaLecturaPeri() {
    ajaxDetallePersona('aporSem', $('#n_cod_tipo_doc').val(), $('#ruc').val(), $('#anio_presentacion').val(), $('#id_periodo').val(), $('nombre').val(), $('#app').val(), $('#apm').val(), $('#pg').val());
}

// APORTES LIMPIOS - CANDIDATO

function ajaxDetalleCandidato(txtID, n_cod_tipo_doc, c_num_doc, n_anio_presentacion, n_id_periodo, pag) {
    $.post($('#wURL').val() + 'loadDetailAll/', {
        txtID: txtID,
        n_cod_tipo_doc: n_cod_tipo_doc,
        c_num_doc: c_num_doc,
        n_anio_presentacion: n_anio_presentacion,
        n_id_periodo: n_id_periodo,
        pag: pag
    },
    function (data) {
        $('#detAll').html(data);
    });
}

function verDetalleAportesCampaniaApCandidato(n_cod_tipo_doc, c_num_doc, n_anio_presentacion, n_id_periodo) {
    $('#tabSearch').css('display', 'none');
    ajaxDetalleCandidato('aporCand', n_cod_tipo_doc, c_num_doc, n_anio_presentacion, n_id_periodo, 1);
}

function funcionLecturaPriCan_() {
    ajaxDetalleCandidato('aporCand', $('#n_cod_tipo_doc').val(), $('#c_num_doc').val(), $('#n_anio_presentacion').val(), $('#n_id_periodo').val(), 1);
}

function funcionLecturaAntCan_() {
    ajaxDetalleCandidato('aporCand', $('#n_cod_tipo_doc').val(), $('#c_num_doc').val(), $('#n_anio_presentacion').val(), $('#n_id_periodo').val(), parseInt($('#pg').val()) - 1);
}

function funcionLecturaSigCan_() {
    ajaxDetalleCandidato('aporCand', $('#n_cod_tipo_doc').val(), $('#c_num_doc').val(), $('#n_anio_presentacion').val(), $('#n_id_periodo').val(), parseInt($('#pg').val()) + 1);
}

function funcionLecturaUltCan_() {
    ajaxDetalleCandidato('aporCand', $('#n_cod_tipo_doc').val(), $('#c_num_doc').val(), $('#n_anio_presentacion').val(), $('#n_id_periodo').val(), $('#total').val());
}

function funcionValidaLecturaCan_() {
    ajaxDetalleCandidato('aporCand', $('#n_cod_tipo_doc').val(), $('#c_num_doc').val(), $('#n_anio_presentacion').val(), $('#n_id_periodo').val(), $('#pg').val());
}

function backPageD() {
    $('#detAllCand').html('');
    $('#detAll').css('display', 'block');
}

function ajaxCandidatoD(txtID, c_num_doc, c_num_doc_cand, n_anio_presentacion, n_id_periodo, periodo, candidato, proceso, partido, tipoactividad, tipoingreso, pag) {
    $.post($('#wURL').val() + 'loadDetailAll/', {
        txtID: txtID,
        c_num_doc: c_num_doc,
        c_num_doc_cand: c_num_doc_cand,
        n_anio_presentacion: n_anio_presentacion,
        n_id_periodo: n_id_periodo,
        periodo: periodo,
        candidato: candidato,
        proceso: proceso,
        partido: partido,
        tipoactividad: tipoactividad,
        tipoingreso: tipoingreso,
        pg: pag
    },
    function (data) {
        $('#detAllCand').html(data);
    });
}

function verDetalleAportesCampaniaApCandidatoD(c_num_doc, c_num_doc_cand, n_anio_presentacion, n_id_periodo, periodo, candidato, proceso, partido, tipoactividad, tipoingreso) {
    $('#detAll').css('display', 'none');
    ajaxCandidatoD('aporCandD', c_num_doc, c_num_doc_cand, n_anio_presentacion, n_id_periodo, periodo, candidato, proceso, partido, tipoactividad, tipoingreso, 1);
}

function funcionLecturaPriCanD_() {
    ajaxCandidatoD('aporCandD', $('#n_cod_tipo_doc').val(), $('#c_num_doc').val(), $('#n_anio_presentacion').val(), $('#n_id_periodo').val(), $('#periodo').val(), $('#candidato').val(), $('#proceso').val(), $('#partido').val(), $('#tipoactividad').val(), $('#tipoingreso').val(), 1);
}

function funcionLecturaAntCanD_() {
    ajaxCandidatoD('aporCandD', $('#n_cod_tipo_doc').val(), $('#c_num_doc').val(), $('#n_anio_presentacion').val(), $('#n_id_periodo').val(), $('#periodo').val(), $('#candidato').val(), $('#proceso').val(), $('#partido').val(), $('#tipoactividad').val(), $('#tipoingreso').val(), parseInt($('#pg').val()) - 1);
}

function funcionLecturaSigCanD_() {
    ajaxCandidatoD('aporCandD', $('#n_cod_tipo_doc').val(), $('#c_num_doc').val(), $('#n_anio_presentacion').val(), $('#n_id_periodo').val(), $('#periodo').val(), $('#candidato').val(), $('#proceso').val(), $('#partido').val(), $('#tipoactividad').val(), $('#tipoingreso').val(), parseInt($('#pg').val()) + 1);
}

function funcionLecturaUltCanD_() {
    ajaxCandidatoD('aporCandD', $('#n_cod_tipo_doc').val(), $('#c_num_doc').val(), $('#n_anio_presentacion').val(), $('#n_id_periodo').val(), $('#periodo').val(), $('#candidato').val(), $('#proceso').val(), $('#partido').val(), $('#tipoactividad').val(), $('#tipoingreso').val(), $('#total').val());
}

function funcionValidaLecturaCanD_() {
    ajaxCandidatoD('aporCandD', $('#n_cod_tipo_doc').val(), $('#c_num_doc').val(), $('#n_anio_presentacion').val(), $('#n_id_periodo').val(), $('#periodo').val(), $('#candidato').val(), $('#proceso').val(), $('#partido').val(), $('#tipoactividad').val(), $('#tipoingreso').val(), $('#pg').val());
}

// Verificación de Firmas
function funcionAjax(destino, pagina, form) {
    if (form !== '')
        var dataf = getFormValues(form);
    $.ajax({
        type: 'POST',
        url: pagina,
        cache: false,
        data: dataf,
        success: function (data) {
            $('#' + destino).html(data);
        }
    });
}

function funcionValidaLectura() {
    funcionAjax('div_ajax_partido', $('#formularioPartido').attr('action'), document.formularioPartido);
}

function funcionLecturaPri() {
    document.getElementById('pg').value = 1;
    funcionAjax('div_ajax_partido', $('#formularioPartido').attr('action'), document.formularioPartido);
}

function funcionLecturaAnt() {
    document.getElementById('pg').value = parseInt(document.getElementById("pg").value) - 1;
    funcionAjax('div_ajax_partido', $('#formularioPartido').attr('action'), document.formularioPartido);
}

function funcionLecturaSig() {
    document.getElementById('pg').value = parseInt(document.getElementById('pg').value) + 1;
    funcionAjax('div_ajax_partido', $('#formularioPartido').attr('action'), document.formularioPartido);
}

function funcionLecturaUlt() {
    document.getElementById('pg').value = document.getElementById('total').value;
    funcionAjax('div_ajax_partido', $('#formularioPartido').attr('action'), document.formularioPartido);
}