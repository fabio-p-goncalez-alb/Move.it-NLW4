import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/Components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/fabio-peres.png" alt="Fabio Peres"/>
      <div>
        <strong>Fabio Peres</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level { level }</p>
      </div>
    </div>

  )
}