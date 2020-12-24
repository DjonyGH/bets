import styles from './appPage.module.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { BrowserRouter, Route } from 'react-router-dom';
import MakeBet from './pages/MakeBet';
import Results from './pages/Results';
import Stats from './pages/Stats';
import Rules from './pages/Rules';

function AppPage() {
  return (
    <BrowserRouter>
      <div className={styles.page}>
        <Route path='/makebet' component={MakeBet}/>
        <Route path='/results' component={Results}/> 
        <Route path='/stats' component={Stats}/> 
        <Route path='/rules' component={Rules}/>  
      </div>
    </BrowserRouter>    
  );
}

export default AppPage;