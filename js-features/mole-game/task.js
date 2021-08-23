let winnScore = 0,
  fallScore = 0,
  dead = document.getElementById('dead'),
  lost = document.getElementById('lost');
for (i = 1; i <= 9; i += 1) {
  document.getElementById(`hole${i}`).onclick = function () {
    checkWinn(this);
  };
}

function checkWinn(hole) {
  if (hole.className.includes('hole_has-mole')) {
    winnScore += 1;
    dead.innerHTML = winnScore;
    if (winnScore === 9) {
      clearScores();
      alert('Победа!');
    }
  } else {
    fallScore += 1;
    lost.innerHTML = fallScore;
    console.log(lost.innerHTML);
    if (fallScore === 5) {
      clearScores();
      alert('Вы вдули кроту!');
    }
  }
}

function clearScores() {
  dead.innerHTML = 0;
  lost.innerHTML = 0;
  winnScore = 0;
  fallScore = 0;
}

