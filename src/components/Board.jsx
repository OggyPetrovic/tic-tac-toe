import React from 'react';
import PropTypes from 'prop-types';

import Square from './Square';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dimension: props.dimension,
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const { squares, xIsNext } = this.state;
    const squaresClone = [...squares];
    squaresClone[i] = this.nextPlayer();
    this.setState({
      squares: squaresClone,
      xIsNext: !xIsNext,
    });
  }

  nextPlayer() {
    const { xIsNext } = this.state;
    return xIsNext ? 'X' : 'O';
  }

  renderSquare(i) {
    const { squares } = this.state;
    return <Square value={squares[i]} onClick={() => this.handleClick(i)} />;
  }

  renderRow(offset) {
    const { dimension } = this.state;
    const squares = Array(dimension);
    for (let i = 0; i < dimension; i += 1) {
      squares[i] = this.renderSquare(i + offset);
    }
    return <div className="board-row">{squares}</div>;
  }

  render() {
    const { dimension } = this.state;

    const status = `Next player: ${this.nextPlayer()}`;
    const rows = Array(dimension);
    for (let i = 0; i < dimension; i += 1) {
      rows[i] = this.renderRow(i * dimension);
    }

    return (
      <div>
        <div className="status">{status}</div>
        {rows}
      </div>
    );
  }
}

Board.propTypes = {
  dimension: PropTypes.number,
};

Board.defaultProps = {
  dimension: 3,
};
