import { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Header extends Component {
  render() {
    const { baseAmount, onChangeAmount } = this.props;

    return (
      <div className="header">
        <h1 className="header-title">Converter</h1>
        <p className="header-amount">
          <input type="number" className="header-amount-value" value={baseAmount} onChange={(event) => onChangeAmount(event.target.value)} />
          euro(s)
        </p>
      </div>
    );
  }
}

export default Header;

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
  onChangeAmount: PropTypes.func.isRequired,
};
