$(document).ready(initialization);

function initialization()
{
	hideDetails();
	
	// hook onclick
	$('.metro').each(function(index)
	{

	});	
}

function showDetail(metro)
{
	var open = $('#' + metro).hasClass('metro-close');
	closeAllButton();

	if(open)
	{
		slideDetails(function(){$('#detail-' + metro).slideDown();});
		$('#' + metro).toggleClass('metro-close');
		$('#' + metro).toggleClass('metro-open');
	}
	else
	{
		slideDetails();
	}
}

function hideDetails()
{
	// hide detail
	$('.detail').each(function()
	{
		$(this).hide();
	});
}

function slideDetails(callback)
{
	var total = $('.detail:visible').length;
	
	if	(total == 0)
	{
		callback();
	}
	else
	{
		$('.detail:visible').each(function(index)
		{
			if (index == total - 1)
			{
				$(this).slideUp(callback);
			}
			else
			{
				$(this).slideUp();
			}
		});
	}
}

function closeAllButton()
{
	$('.metro-open').each(function()
	{
		$(this).removeClass('metro-open');
		$(this).addClass('metro-close');
	});
}