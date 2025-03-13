import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div className={css.layout}>
      <AppBar />
      <main className={css.mainContent}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
