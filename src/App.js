import React, { Component } from 'react';
import Header from './Header.js'
import Summary from './Summary.js'
import MainForm from './MainForm.js'
import './App.css';


/*const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});*/

class App extends Component {
    state = {
        selected: { //selected = prop
            Processor: {
              name: '17th Generation Intel Core HB (7 Core with donut spare)',
              cost: 700
            },
            'Operating System': {
              name: 'Ubuntu Linux 16.04',
              cost: 200
            },
            'Video Card': {
              name: 'Toyota Corolla 1.5v',
              cost: 1150.98
            },
            Display: {
              name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
              cost: 1500
            }
        }
    };

    updateFeature = (feature, newValue) => {
        console.log("updateFeature fired!");
        console.log(feature, newValue);
        const selected = Object.assign({}, this.state.selected);
        selected[feature] = newValue;
        this.setState({
          selected
        });
      };

    render () {

        return (
            <div className="App">
                <header>
                    <Header/>
                </header>
                <main>
                    <MainForm
                      selected={this.state.selected}
                      features={this.props.features}
                      updateFeature={this.updateFeature}  
                    />
                    <Summary 
                      selected={this.state.selected}
                      summary={this.props.summary}
                    />
                </main>
            </div>
        );
    }
}

export default App;