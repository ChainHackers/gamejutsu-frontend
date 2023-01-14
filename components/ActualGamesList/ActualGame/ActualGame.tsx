import cn from 'classnames';
import { ActualGamePropsI } from './ActualGameProps';
import styles from './ActualGame.module.scss';
import { getRulesContract } from 'gameApi';
import { useState } from 'react';
export const ActualGame: React.FC<ActualGamePropsI> = ({
  gameId,
  winner,
  loser,
  header,
  onClick,
  stake,
  proposer,
  rules,
}) => {
  const [ticTacToeAddress, setTicTacToeAddress] = useState('')
  const [checkersAddress, setCheckersAddress] = useState('')

  getRulesContract('tic-tac-toe').then(function(response) {
    setTicTacToeAddress(response.address.toLowerCase())
  })
  getRulesContract('checkers').then(function(response) {
    setCheckersAddress(response.address.toLowerCase())
  })

  return (
    <div
      className={cn(styles.container, header ? styles.header : null)}
      onClick={onClick ? () => onClick(gameId, stake) : undefined}
    >
      <div className={styles.id}>{gameId}</div>
      <div className={styles.stake}>
        {stake === 'stake' ? stake : String(Number(stake) / 1000000000000000000)}
      </div>
      <div className={styles.proposer}>{proposer}</div>
      <div className={styles.rules}>
      {rules.toLowerCase() === ticTacToeAddress
          ? 'Tic-Tac-Toe'
          : rules.toLowerCase() === checkersAddress
          ? 'Checkers'
          : rules}
      </div>
    </div>
  );
};
