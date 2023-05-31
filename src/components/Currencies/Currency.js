import PropTypes from 'prop-types';
import { Component } from 'react';
import './styles.scss';

class Currency extends Component {
  render() {
    const { name, onClickCurrency } = this.props;

    return (
      <li className="currency" onClick={() => onClickCurrency(name)}>{ name }</li>
    );
  }
}

export default Currency;
Currency.propTypes = {
  name: PropTypes.string.isRequired,
  onClickCurrency: PropTypes.func.isRequired,
};
