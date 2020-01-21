import React from 'react';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
import { USCurrencyFormat } from './USCurrencyFormat'


class MainForm extends React.Component {
    updateFeature = (feature, newValue) => {
        console.log("updateFeature fired!");
        console.log(feature, newValue);
        const selected = Object.assign({}, this.props.selected);
        selected[feature] = newValue;
        this.setState({
          selected
        });
    };

    render() {
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
                        checked={item.name === this.props.selected[feature].name}
                        onChange={e => this.props.updateFeature(feature, item)} //onChange allows us to listen to an input’s change in value 
                      />
                      <label htmlFor={itemHash} className="feature__label">
                        {item.name} ({USCurrencyFormat.format(item.cost)})
                      </label>
                    </div>
                );
            });
            return (
                <fieldset className="feature" key={featureHash}>
                    <legend className="feature__name">
                        <h3>{feature}</h3>
                    </legend>
                    {options}
                </fieldset>
            );
        });

        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form>
        )
    }
}

export default MainForm;   


