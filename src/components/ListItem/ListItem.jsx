import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';

import PropTypes from 'prop-types';
import { Item, ItemBtn } from './ListItem.styled';

export const ListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <Item>
      {name}: {number}
      <ItemBtn
        onClick={() => {
          dispatch(removeContact(id))
      }}
      >
        Delete
      </ItemBtn>
    </Item>
  );
};

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
