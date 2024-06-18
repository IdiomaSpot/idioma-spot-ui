import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { PiVideoConferenceLight } from 'react-icons/pi';
import './MyClassItem.scss';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const getItem = (primaryText, secondaryText) => (
  <>
    <ListItemAvatar>
      <Avatar className='list-item-avatar'>
        <PiVideoConferenceLight />
      </Avatar>
    </ListItemAvatar>
    <ListItemText
      primaryTypographyProps={{ component: 'div' }}
      secondaryTypographyProps={{ component: 'div' }}
      primary={primaryText}
      secondary={secondaryText}
    />
  </>
);

const MyClassItem = ({ primaryText, secondaryText, onClick, bg }) => {
  const getSecondaryAction = () => {
    return (
      onClick && (
        <IconButton edge='end' aria-label='comments'>
          <ArrowForwardIosIcon />
        </IconButton>
      )
    );
  };
  return (
    <>
      <ListItem
        className={`list-item ${bg ? 'gray-bg' : ''}`}
        secondaryAction={getSecondaryAction()}
        onClick={onClick}
        disablePadding
      >
        {!onClick && getItem(primaryText, secondaryText)}
        {onClick && (
          <ListItemButton className='list-item-button' divider={true}>
            {getItem(primaryText, secondaryText)}
          </ListItemButton>
        )}
      </ListItem>
    </>
  );
};

export default MyClassItem;
