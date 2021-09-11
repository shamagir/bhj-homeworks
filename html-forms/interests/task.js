'use strict';

const interests = Array.from( document.querySelectorAll( '.interest' ));
const checkBocs = '.interest__check';

interests.forEach( event => event.addEventListener( 'click', onClickInterest ));

function onClickInterest() {
	let container = event.target.closest( '.interest' );

	childHandler( event.target, container );
}

function childHandler( item, container ) {
	let collection = Array.from( container.querySelectorAll( checkBocs ));

	collection.forEach( element => { 
		element.checked = item.checked;
	});
	parentHadler( container );
}

function parentHadler( container ) {
	let counter       = 0;
	let parentElement = container.closest( 'ul' );
	let collection    = Array.from( parentElement.querySelectorAll( checkBocs ));
	let limiter       = collection.length;
	let flag;
	
	collection.forEach( function( element, index ) {
		counter += ( element.checked === true ) ? 1 : 0;
	});

	if( counter < limiter && counter > 0 ) {
		flag = 'indeterminate';
	} 
	else if( counter === limiter ) {
		flag = true;
	} else {
		flag = false;
	}

	if( parentElement.closest( 'li' )) {
		let preParent         = parentElement.closest( 'li' );
		let preParentCheckbox = preParent.querySelector( checkBocs );
		
		if( flag !== 'indeterminate' ) {
			preParentCheckbox.indeterminate = false;
			preParentCheckbox.checked = flag;
		} else {
			preParentCheckbox.indeterminate = true;
		}

		parentHadler( preParent );
	}
}