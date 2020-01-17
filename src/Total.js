import React from 'react'
import './Total.css'
import { USCurrencyFormat } from './USCurrencyFormat.js'

export default function Total(props) {
  const { selected } = props;
  const total = Object.keys(selected).reduce(
    (acc, curr) => acc + this.state.selected[curr].cost, 0)
  return (
    <div className= "summary__total__value">
      {USCurrencyFormat.format(total)}
    </div>
  )
}
