// updates the state
import React from 'react'
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
import './Feature.css'
import { USCurrencyFormat } from './USCurrencyFormat.js'

class Features extends React.Component {
  render () { //render() is executed every time state changes
    console.log('Using Features class component!')
    console.log(this.props)
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === this.state.selected[feature].name}
              onChange={e => this.updateFeature(feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({USCurrencyFormat.format(item.cost)})
            </label>
          </div>
        );
    });
  });
}

export default Features;