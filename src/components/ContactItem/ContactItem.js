import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Button } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleRemove = () => dispatch(deleteContact({ id }));

  return (
    <List>
      <ListItem key={id}>
        {name}: {number}
      </ListItem>
      <Button type="button" onClick={handleRemove}>
        Delete
      </Button>
    </List>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string,
};
