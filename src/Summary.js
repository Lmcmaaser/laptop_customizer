import React from 'react'
import './Summary.css'


// you have a single thing you want to export, and each file can have one default export
//class component
export default function summary() {
  const summary = Object.keys(this.props.selected).map((feature, idx) => {
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
    )
  })
}

    