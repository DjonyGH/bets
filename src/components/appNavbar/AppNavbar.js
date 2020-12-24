import { useState, useEffect } from 'react'
import styles from './appNavbar.module.css';

function AppNavbar() {
  const [makebet, setMakebet] = useState(false)
  const [results, setResult] = useState(false)
  const [stats, setStats] = useState(false)
  const [rules, setRules] = useState(false)

  const url = document.location.pathname.split('/').pop();

  useEffect(() => {    
    if (url === 'makebet') {
      setMakebet(true)
      setResult(false)
      setStats(false)
      setRules(false)
    }
    if (url === 'results') {
      setMakebet(false)
      setResult(true)
      setStats(false)
      setRules(false)
    }
    if (url === 'stats') {
      setMakebet(false)
      setResult(false)
      setStats(true)
      setRules(false)
    }
    if (url === 'rules') {
      setMakebet(false)
      setResult(false)
      setStats(false)
      setRules(true)
    }
  }, [url]);

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
            <a href="/makebet" className={makebet ? styles.active_link : styles.link}>Сделать ставку</a>
          </li>
          <li className={styles.item}>
            <a href="/results" className={results ? styles.active_link : styles.link}>Итоговая таблица</a>
          </li>
          <li className={styles.item}>
            <a href="/stats" className={stats ? styles.active_link : styles.link}>Ставки других игороков</a>
          </li>
          <li className={styles.item}>
            <a href="/rules" className={rules ? styles.active_link : styles.link}>Правила</a>            
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AppNavbar;