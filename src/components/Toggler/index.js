import { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Toggler extends Component {
  render() {
    const { isOpen, onEmitClick } = this.props;
    const cssClassNames = isOpen ? 'toggler toggler--open' : 'toggler';

    return (
      <button className={cssClassNames} type="button" onClick={onEmitClick}>=</button>
    );
  }
}

export default Toggler;

Toggler.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onEmitClick: PropTypes.func.isRequired,
};
