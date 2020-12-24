import { Container, Row } from 'react-bootstrap';
import styles from './rounds.module.css';

function Rounds(props) {
  return (
    <Container className="my-3">
      <Row className="d-flex justify-content-center">
        <div className="col-12 d-flex justify-content-center mb-3">
          <div className={styles.round}>1</div>
          <div className={styles.round}>2</div>
          <div className={styles.round}>3</div>
          <div className={styles.round}>4</div>
          <div className={styles.round}>5</div>
          <div className={styles.round}>6</div>
          <div className={styles.round}>7</div>
          <div className={styles.round}>8</div>
          <div className={styles.round}>9</div>
          <div className={styles.round}>10</div>
          <div className={styles.round}>11</div>
          <div className={styles.round}>12</div>
          <div className={styles.round}>13</div>
          <div className={styles.round}>14</div>
          <div className={styles.round}>15</div>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <div className={styles.round}>16</div>
          <div className={styles.current_round}>17</div>
          <div className={styles.round}>18</div>
          <div className={styles.round}>19</div>
          <div className={styles.round}>20</div>
          <div className={styles.round}>21</div>
          <div className={styles.round}>22</div>
          <div className={styles.round}>23</div>
          <div className={styles.round}>24</div>
          <div className={styles.round}>25</div>
          <div className={styles.round}>26</div>
          <div className={styles.round}>27</div>
          <div className={styles.round}>28</div>
          <div className={styles.round}>29</div>
          <div className={styles.round}>30</div>
        </div>
      </Row>
    </Container>
  );
}

export default Rounds;