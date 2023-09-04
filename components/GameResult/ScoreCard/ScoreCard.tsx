import React from 'react';
import styles from './ScoreCard.module.scss';
import { IScoreCardProps } from './ScoreCardProps';
import Image from 'next/image';
import playerImg from 'public/images/empty_avatar.png';

export const ScoreCard: React.FC<IScoreCardProps> = ({
  address,
  playerType,
  moves,
  finishResult,
  showWinText,
}) => {
  // const playerData = players ? players[playerIndex] : null;
  const truncatedAddress = address ? address.slice(0, 5) + '...' + address.slice(-5) : null;
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.card} ${finishResult?.winner === true ? styles.highlight : ''}`}>
        {finishResult?.winner === true && showWinText && (
          <p className={styles.titleColor}>Winner!</p>
        )}
        <div className={styles.containerPlayer}>
          <Image src={playerImg.src} alt='Player' width={24} height={24} />
          <p className={styles.addressPlayer}>{truncatedAddress}</p>
          {/*{icon}*/}
        </div>
      </div>
    </div>
  );
};
