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

// On défini les types des props
Currency.propTypes = {
  // name est de type string et est requis (il doit être transmis par le composant parent)
  name: PropTypes.string.isRequired,
  // onClickCurrency est de type 'function' et est requis
  onClickCurrency: PropTypes.func.isRequired,
};
