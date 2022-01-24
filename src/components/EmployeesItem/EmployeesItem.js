import { Component } from 'react';

import './EmployeesItem.css';

class EmployeesItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      increase: false,
      rise: false,
    };
  }

  //select increase an employee
  onIncrease = () => {
    this.setState((prevState) => ({
      increase: !prevState.increase,
    }));
  };

  //select user who rise
  onRise = () => {
    this.setState(({ rise }) => ({ rise: !rise }));
  };

  render() {
    //destructurize
    const { name, salary, onDelete } = this.props;
    const { increase, rise } = this.state;

    //classes for <li> elements
    let classNames = 'list-group-item d-flex justify-content-between';

    if (increase) {
      classNames += ' increase';
    }

    if (rise) {
      classNames += ' like';
    }

    return (
      <li className={classNames}>
        <span className="list-group-item-label" onClick={this.onRise}>
          {name}
        </span>

        <input
          type="text"
          className="list-group-item-input"
          defaultValue={`$${salary}`}
        />

        <div className="d-flex justify-content-center align-items-center">
          <button
            onClick={this.onIncrease}
            type="button"
            className="btn-cookie btn-sm "
          >
            <i className="fas fa-cookie"></i>
          </button>

          <button
            type="button"
            className="btn-trash btn-sm "
            onClick={onDelete}
          >
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeesItem;
