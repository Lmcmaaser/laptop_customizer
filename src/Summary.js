import React from 'react'
import './Summary.css'
import { USCurrencyFormat } from './USCurrencyFormat.js'
import total from './Total.js'


// you have a single thing you want to export, and each file can have one default export
//class component
class Summary extends React.Component {
  onSummary = () => {
    return Object.keys(this.props.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.props.selected[feature];
      return (
        <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">
            {feature}
          </div>
          <div className="summary__option__value">
            {selectedOption.name}
          </div>
          <div className="summary__option__cost">
            {USCurrencyFormat.format(selectedOption.cost)}
          </div>
        </div>
      );
    });
  }
  render () {
    return (
      <>
        <section className="main__summary">
          <h2>Your cart</h2>
          {Summary}
          <div className="summary__total">
            <div className="summary__total__label">
              Total
            </div>
            <div className="summary__total__value">
              {USCurrencyFormat.format(total)}
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default Summary;
    