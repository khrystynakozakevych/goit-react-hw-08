import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import { FaPowerOff } from 'react-icons/fa';
import css from './UserMenu.module.css';
import Button from '../Button/Button';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.user_menu}>
      <p>
        Welcome,
        <br /> {user.name}
      </p>
      <Button
        className="logout_btn"
        tooltip="Logout"
        onClick={() => dispatch(logout())}
      >
        <FaPowerOff />
      </Button>
    </div>
  );
};

export default UserMenu;
