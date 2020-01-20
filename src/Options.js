import React from 'react';

export default function Options(props) {
    console.log('Using Features2 function component!')
    console.log(this.props)
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
            <fieldset className="feature" key={featureHash}>
              <legend className="feature__name">
                <h3>{feature}</h3>
              </legend>
              <options/>
            </fieldset>
        );
    });
}
