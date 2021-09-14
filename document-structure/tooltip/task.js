'use strict';

const tooltipClass = '.has-tooltip';
const collection   = Array.from( document.querySelectorAll( tooltipClass ));
const tooltipBlock = '<div class="tooltip" style="left: 0; top: 0"></div>';

collection.forEach( function( item ) {
	item.addEventListener( 'click', ( event ) => {
		event.preventDefault();

		let tooltipText         = item.getAttribute('title');
		let removeTooltipBlock  = document.querySelector( '.tooltip' );
		let isActive = ( removeTooltipBlock && removeTooltipBlock.classList.contains( 'tooltip_active' ) ) 
			? true : false;
		let isTheSame = ( removeTooltipBlock && removeTooltipBlock.innerText === tooltipText ) 
			? true : false;
		
		if( isTheSame ) {
			if( isActive ) {
				removeTooltipBlock.classList.remove( 'tooltip_active' );
			} else {
				removeTooltipBlock.classList.add( 'tooltip_active' );
			}
		} else if( removeTooltipBlock ) {
			removeTooltipBlock.parentNode.removeChild( removeTooltipBlock );
			item.insertAdjacentHTML( 'beforeEnd', tooltipBlock );
			activeTooltip( item, tooltipText )
		} else {
			item.insertAdjacentHTML( 'beforeEnd', tooltipBlock );
			activeTooltip( item, tooltipText );
		}
		
	});
});

function activeTooltip( item, tooltipText ){
	let currentTooltipBlock = document.querySelector( '.tooltip' );
	let coords = item.getBoundingClientRect();

	currentTooltipBlock.style.left = coords.left + "px";
	currentTooltipBlock.style.top  = coords.bottom + "px";
	currentTooltipBlock.innerHTML  = tooltipText;
	currentTooltipBlock.classList.add( 'tooltip_active' );
}