import styles from './appPage.module.css';
import AppTitle from './appTitle/AppTitle';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { BrowserRouter } from 'react-router-dom';

function AppPage() {
  return (
    <BrowserRouter>
      <div className={styles.page}>
        {/* <PerfectScrollbar>
          <AppTitle/>
        </PerfectScrollbar> */}
      </div>
    </BrowserRouter>    
  );
}

export default AppPage;