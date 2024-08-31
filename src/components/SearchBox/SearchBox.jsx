import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectFilterName } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterName);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.wrapper}>
      <label htmlFor="filter" className={css.label}>
        Find contacts by name
      </label>
      <input
        className={css.search}
        id="filter"
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Search contacts"
      />
    </div>
  );
};

export default SearchBox;
