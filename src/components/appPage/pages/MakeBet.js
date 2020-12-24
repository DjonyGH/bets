// import styles from './makeBet.module.css';
import Title from '../title/Title';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Rounds from '../rounds/Rounds';

function MakeBet() {
  return (
    <div>
      <PerfectScrollbar>
        <Title title="Сделать ставку"/>
        <Rounds/>
      </PerfectScrollbar>
    </div>
  );
}

export default MakeBet;