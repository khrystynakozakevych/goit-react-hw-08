import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.user_menu}>
      <p>Welcome, {user.name}</p>
      <button className={css.logout_btn} onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
