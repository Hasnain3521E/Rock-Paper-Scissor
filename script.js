let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };

updateScoreElement();

function reset(reset) {
    score.Wins = 0;
    score.Losses = 0;
    score.Draw = 0;
    localStorage.removeItem('score')
    updateScoreElement();
}

function playGame(userChoice) {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper';
    }
    else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'Scissor';
    }

    let result = '';

    if (userChoice === computerMove) {
        result = 'Draw';
    }
    else if (
        (userChoice === 'Rock' && computerMove === 'Scissor') ||
        (userChoice === 'Paper' && computerMove === 'Rock') ||
        (userChoice === 'Scissor' && computerMove === 'Paper')
    ) {
        result = 'You Win';
    }
    else {
        result = 'You lose';
    }

    if (result === 'You Win') {
        score.Wins += 1;
    }
    else if (result === 'You lose') {
        score.Losses += 1;
    }
    else if (result === 'Draw') {
        score.Draw += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You move ${userChoice} - Computer move ${computerMove}`;
  }

  function updateScoreElement() {
    document.querySelector('.js-score')
      .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

