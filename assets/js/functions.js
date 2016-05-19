$(function(){

  $().addClass("loaded");

  $('#following').click(function(){
    if($('.followers').is(":visible")) {
      $('.followers').toggle();
      $('.following').toggle();
    }

    else if($('.groups').is(":visible")) {
      $('.groups').toggle();
      $('.following').toggle();
    }

    else {
      $('.following').toggle();
    }

  });

  $('#followers').click(function(){
    if($('.following').is(":visible")) {
      $('.following').toggle();
      $('.followers').toggle();
    }

    else if($('.groups').is(":visible")) {
      $('.groups').toggle();
      $('.followers').toggle();
    }

    else {
      $('.followers').toggle();
    }
  });

  $('#groups').click(function(){
    if($('.followers').is(":visible")) {
      $('.followers').toggle();
      $('.groups').toggle();
    }

    else if($('.following').is(":visible")) {
      $('.following').toggle();
      $('.groups').toggle();
    }

    else {
      $('.groups').toggle();
    }
  });

});

;( function( $, window, document, undefined )
{
	$( '.inputfile' ).each( function()
	{
		var $input	 = $( this ),
			$label	 = $input.next( 'label' ),
			labelVal = $label.html();

		$input.on( 'change', function( e )
		{
			var fileName = '';

			if( this.files && this.files.length > 1 )
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			else if( e.target.value )
				fileName = e.target.value.split( '\\' ).pop();

      var extension = fileName.substring(fileName.indexOf('.') + 1);

      if( !(fileName.indexOf("selected") != -1)) {
        if( fileName.length > 15 ) {
          fileName = $.trim(fileName).substring(0, 7).trim(this) + "(...)." + extension;
        }
      }


			if( fileName )
				$label.find( 'p' ).html( fileName );
			else
				$label.html( labelVal );
		});

		// Firefox bug fix
		$input
		.on( 'focus', function(){ $input.addClass( 'has-focus' ); })
		.on( 'blur', function(){ $input.removeClass( 'has-focus' ); });

	});
})( jQuery, window, document );
