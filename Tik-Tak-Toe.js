/* document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const cells = document.querySelectorAll('.cell');
    const messageElement = document.getElementById('message');
    const restartButton = document.getElementById('restart');
    let isXTurn = true;
    let boardState = Array(9).fill(null);

    const WINNING_COMBINATIONS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    cells.forEach(cell => {
        cell.addEventListener('click', handleClick, { once: true });
    });

    restartButton.addEventListener('click', startGame);

    function handleClick(e) {
        const cell = e.target;
        const currentClass = isXTurn ? 'X' : 'O';
        const index = cell.getAttribute('data-index');

        placeMark(cell, currentClass);
        boardState[index] = currentClass;

        if (checkWin(currentClass)) {
            endGame(false, currentClass);
        } else if (isDraw()) {
            endGame(true);
        } else {
            swapTurns();
        }
    }

    function placeMark(cell, currentClass) {
        cell.textContent = currentClass;
    }

    function swapTurns() {
        isXTurn = !isXTurn;
    }

    function checkWin(currentClass) {
        return WINNING_COMBINATIONS.some(combination => {
            return combination.every(index => {
                return boardState[index] === currentClass;
            });
        });
    }

    function isDraw() {
        return boardState.every(cell => cell !== null);
    }

    function endGame(draw, winner = '') {
        if (draw) {
            messageElement.textContent = 'Draw!';
        } else {
            messageElement.textContent = `${winner} Wins!`;
        }
        cells.forEach(cell => {
            cell.removeEventListener('click', handleClick);
        });
    }

    function startGame() {
        boardState = Array(9).fill(null);
        isXTurn = true;
        messageElement.textContent = '';
        cells.forEach(cell => {
            cell.textContent = '';
            cell.addEventListener('click', handleClick, { once: true });
        });
    }

    startGame();
});
*/

document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board'); // Sélectionne le tableau de jeu
    const cells = document.querySelectorAll('.cell'); // Sélectionne toutes les cellules
    const messageElement = document.getElementById('message'); // Sélectionne l'élément pour afficher les messages
    const restartButton = document.getElementById('restart'); // Sélectionne le bouton de redémarrage
    let isXTurn = true; // Indique si c'est le tour de X
    let boardState = Array(9).fill(null); // Initialise l'état du tableau avec des valeurs nulles

    // Combinaisons gagnantes possibles
    const WINNING_COMBINATIONS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // Ajoute un écouteur d'événement à chaque cellule
    cells.forEach(cell => {
        cell.addEventListener('click', handleClick, { once: true });
    });

    // Ajoute un écouteur d'événement au bouton de redémarrage
    restartButton.addEventListener('click', startGame);

    // Fonction qui gère le clic sur une cellule
    function handleClick(e) {
        const cell = e.target; // La cellule cliquée
        const currentClass = isXTurn ? 'X' : 'O'; // Détermine la classe actuelle (X ou O)
        const index = cell.getAttribute('data-index'); // Obtient l'index de la cellule

        placeMark(cell, currentClass); // Place la marque (X ou O) dans la cellule
        boardState[index] = currentClass; // Met à jour l'état du tableau

        // Vérifie si le joueur actuel a gagné
        if (checkWin(currentClass)) {
            endGame(false, currentClass); // Termine le jeu en indiquant le gagnant
        } else if (isDraw()) { // Vérifie si le jeu est un match nul
            endGame(true); // Termine le jeu en indiquant un match nul
        } else {
            swapTurns(); // Change le tour de joueur
        }
    }

    // Place la marque (X ou O) dans la cellule
    function placeMark(cell, currentClass) {
        cell.textContent = currentClass;
    }

    // Change le tour de joueur
    function swapTurns() {
        isXTurn = !isXTurn;
    }

    // Vérifie si le joueur actuel a gagné
    function checkWin(currentClass) {
        return WINNING_COMBINATIONS.some(combination => {
            return combination.every(index => {
                return boardState[index] === currentClass;
            });
        });
    }

    // Vérifie si le jeu est un match nul
    function isDraw() {
        return boardState.every(cell => cell !== null);
    }

    // Termine le jeu et affiche le message approprié
    function endGame(draw, winner = '') {
        if (draw) {
            messageElement.textContent = 'Draw!'; // Affiche "Match nul!"
        } else {
            messageElement.textContent = `${winner} Wins!`; // Affiche "X gagne!" ou "O gagne!"
        }
        // Supprime les écouteurs d'événements des cellules
        cells.forEach(cell => {
            cell.removeEventListener('click', handleClick);
        });
    }

    // Redémarre le jeu
    function startGame() {
        boardState = Array(9).fill(null); // Réinitialise l'état du tableau
        isXTurn = true; // Réinitialise le tour de X
        messageElement.textContent = ''; // Vide le message
        // Réinitialise les cellules et réajoute les écouteurs d'événements
        cells.forEach(cell => {
            cell.textContent = '';
            cell.addEventListener('click', handleClick, { once: true });
        });
    }

    startGame(); // Démarre le jeu initialement
});
