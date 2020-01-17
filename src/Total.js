import React from 'react'
import './Total.css'

export default function total(props) {
  const { selected } = props;
  const total = Object.keys(selected).reduce(
    (acc, curr) => acc + this.state.selected[curr].cost, 0)
  return (
    <div className= "summary__total__value">
      {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total)}
    </div>
  )
}
