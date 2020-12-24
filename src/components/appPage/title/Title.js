import styles from './title.module.css';

function Title(props) {
  return (
    <div className={styles.wrapTitle}>
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.redline}></div>
    </div>
  );
}

export default Title;