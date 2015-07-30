// JavaScript Document

$(function () {
	$('#datetimepicker1').datetimepicker();
	$('#datetimepicker2').datetimepicker({
	viewMode: 'years'
});
	$('#datetimepicker3').datetimepicker({
		viewMode: 'years',
	   format: 'MM/YYYY'
	});
});