// updates the state
import React from 'react'
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
import './Feature.css'
import { USCurrencyFormat } from './USCurrencyFormat.js'

class Feature extends React.Component {
  render () { //render() is executed every time state changes
    console.log('Using Features class component!')
    console.log(this.props)
    
    const itemHash = slugify(JSON.stringify(item)); //where do I get item from? the options file?
    return (
      <div key={itemHash} className="feature__item">
        <input
          type="radio"
          id={itemHash}
          className="feature__option"
          name={slugify(feature)}
          checked={item.name === this.props.selected[feature].name}
          onChange={e => this.updateFeature(feature, item)}  //what do I do about e?
        />
        <label htmlFor={itemHash} className="feature__label">
          {item.name} ({USCurrencyFormat.format(item.cost)})
        </label>
      </div>
    );
  };
}

export default Feature;