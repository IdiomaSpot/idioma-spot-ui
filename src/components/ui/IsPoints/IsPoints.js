import { TbMedal } from 'react-icons/tb';
import PropTypes from 'prop-types';
import './IsPoints.scss';

const IsPoints = ({ total }) => {
  return (
    <div className='is-points'>
      <span>{total}</span>
      <TbMedal />
    </div>
  );
};

IsPoints.propTypes = {
  total: PropTypes.string,
};
IsPoints.defaultProps = {
  total: '0',
};

export default IsPoints;
