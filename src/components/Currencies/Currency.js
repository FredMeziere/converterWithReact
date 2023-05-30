import PropTypes from 'prop-types';
import './styles.scss';

const Currency = ({
  name,
}) => (
  <li className="currency" key={name}>{name}</li>
);

export default Currency;

Currency.propTypes = {
  name: PropTypes.string.isRequired,
};
