$(document).ready(initialization);

function initialization()
{
	// hide detail
	$('.detail').each(function(index)
	{
		$(this).hide();
	});
	
	// hook onclick
	$('.metro').each(function(index)
	{

	});	
}

function showDetail(metro)
{
	$('#' + metro).toggleClass('metro-close');
	$('#' + metro).toggleClass('metro-open');
	$('#detail-' + metro).toggle('slow');
	
}