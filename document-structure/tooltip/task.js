'use strict';

const tooltipClass = '.has-tooltip';
const collection   = Array.from( document.querySelectorAll( tooltipClass ));
const tooltipBlock = '<div class="tooltip" style="left: 0; top: 0"></div>';

collection.forEach( function( item ) {
	item.addEventListener( 'click', ( event ) => {
		let tooltipText         = item.getAttribute('title');
		let removeTooltipBlock  = document.querySelector( '.tooltip' );

		event.preventDefault();
		
		if( removeTooltipBlock ) {
			removeTooltipBlock.parentNode.removeChild( removeTooltipBlock );
		}
		item.insertAdjacentHTML( 'beforeEnd', tooltipBlock );
		
		let currentTooltipBlock = document.querySelector( '.tooltip' );
		let coords = item.getBoundingClientRect();

  		currentTooltipBlock.style.left = coords.left + "px";
  		currentTooltipBlock.style.top  = coords.bottom + "px";
		currentTooltipBlock.innerHTML  = tooltipText;
	    currentTooltipBlock.classList.add( 'tooltip_active' );
	});
});
