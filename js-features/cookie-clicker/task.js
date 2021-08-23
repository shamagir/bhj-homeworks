let counter = document.getElementById('clicker__counter'),
	cookie = document.getElementById('cookie'),
	score = parseInt(counter.textContent),
	cookieSizeSwitcher = 0;

cookie.onclick = function() {
	score += 1;
	counter.innerHTML = score;
	cookieSizeSwitcher = (cookieSizeSwitcher === 0) ? 1 : 0; 
	cookie.style.width = (cookieSizeSwitcher === 0) ? '200px' : '250px';
}

