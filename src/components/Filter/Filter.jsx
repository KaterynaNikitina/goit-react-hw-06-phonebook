import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';


export const Filter = () => {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const handleChange = ({ target }) => {
        dispatch(setFilter(target.value));
    }
    return (
        <Label>
            Find contacts by name
            <Input
            type="text" 
            value={filter}
            placeholder="enter name"            
            onChange={handleChange}>
            </Input>
        </Label>
    )
}

Filter.propTypes = {
    filter: PropTypes.string,
    onChange: PropTypes.func,
}

