import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

export const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.search}>
      <p>Find contacts by name</p>
      <input type="text" onChange={handleChange} />
    </div>
  );
};