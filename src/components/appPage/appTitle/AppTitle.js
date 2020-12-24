import styles from './appTitle.module.css';

function appTitle() {
  return (
    <div className={styles.wrapTitle}>
      <h1 className={styles.title}>Ставки других игороков</h1>
      <div className={styles.redline}></div>
    </div>
  );
}

export default appTitle;