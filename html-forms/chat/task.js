'use strict';

const chatActive    = 'chat-widget_active';
const chatWidget    = document.querySelector( '.chat-widget' ); 
const inputField    = document.querySelector( '.chat-widget__input' );
const container     = document.querySelector( '.chat-widget__messages-container' );
const messages      = document.querySelector( '.chat-widget__messages' );
const chatActivator = document.querySelector( '.chat-widget__side' );

let flag;
let interval;
let intervalTime = 30000; 
let responses    = [
	'По пятницам не подаём!', 
	'От дохлого осла уши!',
	'Уйди, старушка, я в печали!',
	'Кому и кобыла - невеста',
	'Из Пскову мы! На собачку говорящую посмотреть пришли!'
];

chatActivator.addEventListener( 'click', () => {
	chatWidget.classList.add( chatActive );
	interval = setInterval(() => robotMessage(), intervalTime); 
});

function checkWhitespace() {
	for( let i=0; i<inputField.value.length; i++ ){
		flag = ( inputField.value.charAt( i ) !== ' ' ) ? 1 : 0; 
	}
	return flag;
}

function robotMessage() {
	let answerIndex = Math.floor( Math.random() * responses.length );
	let answerText  = responses[ answerIndex ];
	let now         = new Date();
	addMessage(answerText);	
}

function addMessage(textMessage, typeClass = '') {
	let now = new Date();
	messages.innerHTML += `
		<div class="message ${ typeClass }">
			<div class="message__time">${ ( '0' + now.getHours() ).slice( -2 ) }:${( '0' + now.getMinutes() ).slice( -2 ) }</div>
				<div class="message__text">
					${ textMessage }
				</div>
			</div>
		</div>
	`;
	container.scrollTop = container.scrollHeight;
}

const chatKeydown = ( event ) => {
	clearInterval( interval );
	if( event.key === 'Enter' ){
		flag = checkWhitespace();
		if( inputField.value.length > 0 && flag === 1 ) {
			addMessage( inputField.value, 'message_client' );
			inputField.value = '';
			robotMessage();
			interval = setInterval(() => robotMessage(), intervalTime );
		}
	}
}

inputField.addEventListener( 'keydown', chatKeydown );
