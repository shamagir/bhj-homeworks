'use strict';

const chatWidget    = document.querySelector( '.chat-widget' ); 
const chatActive    = 'chat-widget_active';
const clientMessage = 'message_client';

const messages      = document.querySelector( '.chat-widget__messages' );
const chatActivator = document.querySelector( '.chat-widget__side' );

chatActivator.addEventListener('click', () => chatWidget.classList.add(chatActive));
