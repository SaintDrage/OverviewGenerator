$('#newfilter').colorpicker().on('changeColor', function(ev) {
	$('#newinput')[0].style.color = ev.color.toHex();
});

var myTitle = $('#newinput')[0].value;
$('#newfilter').colorpicker().on('show', function(ev) {
	myTitle = $('#newinput')[0].value;
});

$('#newfilter').colorpicker().on('hide', function(ev) {
	$('#newinput')[0].value = myTitle;
});