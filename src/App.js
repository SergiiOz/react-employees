import { Component } from 'react';
import './App.css';
import AppInfo from './components/AppInfo/AppInfo';
import SearchPanel from './components/SearchPanel/SearchPanel';
import AppFilter from './components/AppFilter/AppFilter';
import EmployeesList from './components/EmployeesList/EmployeesList';
import EmployeesAddForm from './components/EmployeesAddForm/EmployeesAddForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          name: 'Joghn',
          salary: 800,
          increase: false,
          id: 1,
        },
        {
          name: 'Ronni',
          salary: 3000,
          increase: true,
          id: 2,
        },
        {
          name: 'Bill',
          salary: 1700,
          increase: false,
          id: 3,
        },
      ],
    };
  }

  //delete the user from state
  onDeleteItem = (id) => {
    this.setState((prevState) => ({
      ...prevState,
      data: prevState.data.filter((item) => item.id !== id),
    }));
  };

  render() {
    console.log(this.state);

    return (
      <div className="app">
        <AppInfo />
        <div className="searchPanel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList data={this.state.data} onDelete={this.onDeleteItem} />

        <EmployeesAddForm />
      </div>
    );
  }
}

export default App;
