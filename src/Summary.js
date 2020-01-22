import React from 'react'
import { USCurrencyFormat } from './USCurrencyFormat'
import Total from './Total.js'
import './Summary.css'

class Summary extends React.Component {
    render () {
        const summary = Object.keys(this.props.selected).map((feature, idx) => { //idx = index
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
            return (
                <div className="summary__option" key={featureHash}>
                  <div className="summary__option__label">{feature} </div>
                  <div className="summary__option__value">{selectedOption.name}</div>
                  <div className="summary__option__cost">
                    {USCurrencyFormat.format(selectedOption.cost)}
                  </div>
                </div>
            ); 
        });

        return (
            <>
                <section className="main__summary">
                    <h2>Your cart</h2>
                    {summary}
                    <Total
                        selected={this.state.selected}
                        summary={this.props.summary}
                        total={this.props.total}
                    />
                </section>
            </>
        )
        
    }
}

export default Summary;