
import styles from './appNavbar.module.css';

function appNavbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.info}>
        <h2 className={styles.title}>Чемпионат России 2020-2021</h2>
        <div className={styles.avatar}>
          Аватар
          <button className={styles.edit}></button>
        </div>
        <div className={styles.name}>Имя Фамилия</div>
      </div>      
      <div className={styles.bottom}>
        <ul className={styles.menu}>
          <li className={styles.item}>
            <a href="#" className={styles.link}>Личный кабинет</a>
          </li>
          <li className={styles.item}>
            <a href="#" className={styles.link}>Итоговая таблица</a>
          </li>
          <li className={styles.item}>
            <a href="#" className={styles.link}>Ставки других игороков</a>
          </li>
          <li className={styles.item}>
            <a href="#" className={styles.link}>Правила</a>            
          </li>
        </ul>
      </div>
    </div>
  );
}

export default appNavbar;