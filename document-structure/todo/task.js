'use_strict';

const form   = document.querySelector( '#tasks__form' );
const input  = document.querySelector( '#task__input' );
const list   = document.querySelector( '#tasks__list' );
let template = `
	<div class="task">
 		<div class="task__title">
        </div>
        <a href="#" class="task__remove">&times;</a>
    </div>`;

if( localStorage.getItem( 'tasks' )) {
	JSON.parse( localStorage.getItem( 'tasks' )).forEach( ( element ) => {
		addElement( element );
	});
} 

form.addEventListener( 'submit', ( event ) => event.preventDefault());
input.onchange = ( event ) => {
	event.preventDefault();
	if( input.value.trim() !== '' ) {
		addElement( input.value );
		addToLocalStorage( input.value );
		input.value = '';
	}
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
	let text = element.querySelector( '.task__title' ).innerText;
	deleteButton.addEventListener( 'click', ( event ) => {
		removeFromLocalStorage( text );
		element.remove()
	});
}

function addToLocalStorage( text ) {
	if( localStorage.getItem( 'tasks' )){
		let collection = JSON.parse( localStorage.getItem( 'tasks' ));
		collection.push( text );
		localStorage.setItem( 'tasks', JSON.stringify( collection ) );
	} else {
		localStorage.setItem( 'tasks', JSON.stringify([ text ]) );
	}
}

function removeFromLocalStorage( text ) {
	if( localStorage.getItem( 'tasks' )){
		let collection = JSON.parse( localStorage.getItem( 'tasks' ));
		let elementIndex = collection.indexOf( text );
		collection.splice( elementIndex, 1 );
		localStorage.setItem( 'tasks', JSON.stringify( collection ) );
	}
}
