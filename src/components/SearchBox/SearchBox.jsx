import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.search_container}>
      <div className={css.search_tex_wrapper}>
        <FaMagnifyingGlass />
        <p>Search</p>
      </div>
      <input type="text" value={filter} onChange={handleFilterChange} />
    </div>
  );
};

export default SearchBox;
