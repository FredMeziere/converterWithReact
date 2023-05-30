import { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Header extends Component {
  render() {
    const { baseAmount } = this.props;

    return (
      <div className="header">
        <h1 className="header-title">Converter</h1>
        <p className="header-amount">{baseAmount}</p>
      </div>
    );
  }
}

export default Header;

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
};
