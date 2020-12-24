// import styles from './stats.module.css';
import Title from '../title/Title';
import Rounds from '../rounds/Rounds'
import PerfectScrollbar from 'react-perfect-scrollbar';

function Stats() {
  return (
    <div>
      <PerfectScrollbar>
        <Title title="Ставки других игроков"/>
        <Rounds/>
      </PerfectScrollbar>
    </div>
  );
}

export default Stats;