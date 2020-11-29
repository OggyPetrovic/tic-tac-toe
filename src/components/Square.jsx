import React from 'react';

// temporary fix
// eslint-disable-next-line react/prefer-stateless-function
export default class Square extends React.Component {
  render() {
    // temporary fix
    // eslint-disable-next-line react/prop-types
    const { value } = this.props;
    return (
      // temporary fix
      // eslint-disable-next-line no-alert
      <button type="button" className="square" onClick={() => { alert('click'); }}>
        {value}
      </button>
    );
  }
}
