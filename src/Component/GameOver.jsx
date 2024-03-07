import GameState from "./GameState";

function GameOver({ gameState }) {
  switch (gameState) {
    case GameState.inProgress:
      return <></>;
    case GameState.playerOWins:
      return <div className="game-over">0 Gana </div>;
    case GameState.playerXWins:
      return <div className="game-over">X Gana </div>;
    case GameState.draw:
      return <div className="game-over">Empate </div>;

    default:
      return <></>;
  }
}

export default GameOver;
