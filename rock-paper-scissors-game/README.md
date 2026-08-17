# Rock Paper Scissors

A simple browser-based Rock Paper Scissors game built with vanilla HTML, CSS, and JavaScript. Play against the computer, track your wins/losses/ties, and your score persists across page refreshes.

## Features

- Play Rock, Paper, or Scissors against a randomized computer opponent
- Shows both your move and the computer's move after each round
- Tracks Wins, Losses, and Ties
- Score is saved to `localStorage`, so it persists even after refreshing the page
- Reset button to clear the score

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (DOM manipulation + `localStorage`, no libraries)

## Getting Started

No build steps or installs required.

1. Clone or download this repository
2. Make sure the `images/` folder (with `rock-emoji.png`, `paper-emoji.png`, `scissors-emoji.png`) is in the same directory as `index.html`
3. Open `index.html` in your browser

## Project Structure

```
.
├── index.html    # App markup
├── style.css     # Styling
├── script.js     # Game logic
└── images/       # Move icons (rock, paper, scissors)
```

## How It Works

- `playGame(playerMove)` picks a random computer move via `pickComputerMove()`, compares it to the player's move, and determines the result
- The score object (`Wins`, `Losses`, `Ties`) is loaded from `localStorage` on page load, updated after each round, and saved back to `localStorage`
- `updateScoreElement()` refreshes the score display in the DOM
- The reset button clears the score both in memory and in `localStorage`

## Possible Improvements

- Add animations for move reveals
- Add a "best of N rounds" mode
- Add sound effects
- Support keyboard controls
- Add a rock-paper-scissors-lizard-spock variant

## License

Feel free to use and modify this project for your own purposes.
