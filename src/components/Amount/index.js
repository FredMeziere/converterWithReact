import { Component } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

class Amount extends Component {
  render() {
    const { value, currency } = this.props;

    return (
      <div className="amount">
        <h2 className="amount-value">{ value }</h2>
        <p className="amount-currency">{ currency }</p>
      </div>
    );
  }
}

export default Amount;

Amount.propTypes = {
  value: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};
