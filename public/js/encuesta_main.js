$(document).ready(function(){$('input[name=text9]').focus(function(){$('input[name=op9]').prop('checked',false);});$('input[name=text10]').focus(function(){$('input[name=op10]').prop('checked',false);});$('input[name=op9]').click(function(){$('input[name=text9]').val('');});$('input[name=op10]').click(function(){$('input[name=text10]').val('');});$('#btnSend').click(function(e){e.preventDefault();var save=true;for(i=1;i<=10;i++){if(!$('input[name=op'+i+']').is(':checked')){if(i===9&&$('input[name=text9]').val()===''){save=false;}
else if(i===10&&$('input[name=text10]').val()===''){save=false;}
else if(i!==9&&i!==10){save=false;}}}
if(save){var form=$('#formulario');var data=form.serialize();var url=form.attr('action');$.get(url,data,function(response){alert(response.message);if(response.hide)
$("#encuesta").hide();},'json');}else{alert("Debe responder todas las preguntas");}});$("#encuesta").show();});