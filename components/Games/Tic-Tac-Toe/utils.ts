import { TGameBoardState } from './types';

export function calculateWinner(boardState: TGameBoardState) {
  console.log('calc winnder', 'state', boardState);
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const length = lines.length;
  for (let i = 0; i < length; i++) {
    const [a, b, c] = lines[i];
    const player = boardState[a];
    if (player !== null && player === boardState[b] && player === boardState[c]) {
      return player;
    }
  }
  return null;
}
