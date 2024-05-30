import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

const SideMenuOption = ({ optionName, icon, onClick }) => (
  <ListItem key={optionName} disablePadding>
    <ListItemButton onClick={onClick}>
      <ListItemIcon className='side-menu-icon'>{icon}</ListItemIcon>
      <ListItemText primary={optionName} />
    </ListItemButton>
  </ListItem>
);
SideMenuOption.propTypes = {
  optionName: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  onClick: PropTypes.func,
};

SideMenuOption.defaultProps = {
  onClick: () => {},
};

export default SideMenuOption;
