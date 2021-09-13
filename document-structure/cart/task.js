'use_strict';

const cartsBlock = document.querySelector( '.cart' );
const carts = document.querySelector( '.cart__products' );
const cartClass = '.cart__product';
const cartImageClass = '.cart__product-image';
const cartCount = '.cart__product-count';
const products = document.querySelector( '.products' );
const productClass = '.product';
const productTitleClass = '.product__title';
const productImageClass = '.product__image';
const productControllClass = ' .product__quantity-control ';
const productValueClass = '.product__quantity-value';
const productAddClass = '.product__add';
let productCollection = Array.from( document.querySelectorAll( productClass ))
let addButtonsCollection     = document.querySelectorAll( productAddClass );
let controlButtonsCollection = document.querySelectorAll( productControllClass );
let template = `
	<div class="cart__product" data-id="">
		<img class="cart__product-image" src="">
        <div class="cart__product-count"></div>
    </div>`;

addButtonsCollection.forEach( function( element ) {
	element.addEventListener( 'click', addToCart );  
});

controlButtonsCollection.forEach( function( element ) {
	element.addEventListener( 'click', checkClick );
});

function addToCart() {
	let button = event.target;
	let parent = button.closest( productClass );
	let productId = parent.dataset.id;
	let productTitle = parent.querySelector( productTitleClass ).innerText;
	let productImage = parent.querySelector( productImageClass ).src;
	let productValue = parent.querySelector( productValueClass ).innerText;

	if( productValue > 0 ) {

		carts.insertAdjacentHTML( 'beforeEnd', template );

		let elements = Array.from( document.querySelectorAll( cartClass )); 
		let element  = elements[ elements.length - 1 ];

		button.classList.add( 'unactive' );

		element.dataset.id = productId;
		element.querySelector( cartImageClass ).src = productImage;
		element.querySelector( cartCount ).innerText = productValue;
	}
	 checkCartElements();
}

function checkClick() {
	let button = event.target;
	let parent = button.closest( productClass );
	let productId = parent.dataset.id;
	let productValue = parent.querySelector( productValueClass );

	if( button.classList.contains( 'product__quantity-control_dec' ) && parseInt( productValue.innerText ) > 0 ) {
		productValue.innerText = parseInt( productValue.innerText ) - 1;
	} else if ( button.classList.contains( 'product__quantity-control_inc' )){
		productValue.innerText = parseInt( productValue.innerText ) + 1;
	}
	checkCartById( productId );
	checkCartElements();
}

function checkCartById( productId ) {
	let cartItem = carts.querySelector( `[ data-id='${productId}' ]`);
	let product = products.querySelector( `[ data-id='${productId}' ]`);
	let value = product.querySelector( productValueClass ).innerText;

	if ( cartItem ){
		cartItem.querySelector( cartCount ).innerText = value;
	}

	if( parseInt( value ) === 0 && cartItem ) {
		product.querySelector( productAddClass ).classList.remove( 'unactive' )
		cartItem.remove();
		checkCartElements();	
	}
}

function checkCartElements() {
	if( carts.querySelector( cartClass )) {
		cartsBlock.classList.remove( 'unactive' );
	} else {
		cartsBlock.classList.add( 'unactive' );
	}
}

checkCartElements();