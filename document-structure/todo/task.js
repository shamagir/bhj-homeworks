'use_strict';

const form   = document.querySelector( '#tasks__form' );
const input  = document.querySelector( '#task__input' );
const list   = document.querySelector( '#tasks__list' );
let tasks    = [];
let template = `
	<div class="task">
 		<div class="task__title">
        </div>
        <a href="#" class="task__remove">&times;</a>
    </div>`;

if( localStorage.getItem( 'tasks' )) {
	let collection = localStorage.getItem( 'tasks' ).split( ',' );

	tasks = collection;
	collection.forEach( function( el ) {
		addElement( el );
	});
} else {
	localStorage.setItem( 'tasks', tasks );
}

form.addEventListener( 'submit', () => event.preventDefault());
input.onchange = function() {
	event.preventDefault();
	addElement( input.value );
	tasks.push( input.value );
	JSON.stringify( tasks );
	localStorage.setItem( 'tasks', tasks );
	input.value = '';
}

function addElement( text ) {
	list.insertAdjacentHTML( 'beforeEnd', template );
	
	let elements = Array.from( document.querySelectorAll( '.task' )); 
	let element  = elements[ elements.length - 1 ];
	let elementTitle = element.querySelector( '.task__title' );

	elementTitle.innerText = text;

	addListner( element );
}

function addListner( element ) {
	let deleteButton = element.querySelector( '.task__remove' );
	let text  = element.querySelector( '.task__title' ).innerText;
	deleteButton.addEventListener( 'click', () => {
		let index = tasks.indexOf( text );

		tasks.splice( index, 1 );
		JSON.stringify( tasks );
		localStorage.setItem( 'tasks', tasks );
		element.remove()
	});
}


