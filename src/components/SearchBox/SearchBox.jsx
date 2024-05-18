import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';
import css from './SearchBox.module.css';

export default function SearchBox() {
    const filter = useSelector(selectNameFilter);

    const dispatch = useDispatch();
    const handleFilterChange = (event) => {
        dispatch(changeFilter(event.target.value));
    };

    return (
        <div className={css.search}>
            <p>Find contacts by name</p>
            <input
                className={css.input}
                type='text'
                name='filter'
                value={filter}
                onChange={ handleFilterChange }
            />
        </div>
    );
}