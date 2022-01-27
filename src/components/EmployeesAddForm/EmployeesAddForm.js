import { Component } from 'react';
import './EmployeesAddForm.css';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      salary: '',
    };
  }

  //create and pass new user
  onSubmit = (e) => {
    e.preventDefault();

    this.props.onAddItem(this.state.name, this.state.salary);

    //clear inputs
    this.setState({
      name: '',
      salary: '',
    });
  };

  //pass value from input 'name' and 'salary'
  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, salary } = this.state;

    return (
      <div className="app-add-form">
        <h3>Add a new employee</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="What is his name?"
            onChange={this.onValueChange}
            value={name}
            //added atribute 'name' with value 'name'
            name="name"
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Salary $?"
            onChange={this.onValueChange}
            value={salary}
            //added atribute 'name' with value 'salary'
            name="salary"
          />

          <button type="submit" className="btn btn-outline-light">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
