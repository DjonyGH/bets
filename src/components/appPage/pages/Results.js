// import styles from './results.module.css';
import Title from '../title/Title';
import PerfectScrollbar from 'react-perfect-scrollbar';

function Results() {
  return (
    <div>
      <PerfectScrollbar>
        <Title title="Итоговая таблица"/>
      </PerfectScrollbar>
    </div>
  );
}

export default Results;