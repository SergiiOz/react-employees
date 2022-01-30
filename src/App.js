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
          rise: true,
          id: 1,
        },
        {
          name: 'Ronni',
          salary: 3000,
          increase: true,
          rise: false,
          id: 2,
        },
        {
          name: 'Bill',
          salary: 1700,
          increase: false,
          rise: false,
          id: 3,
        },
      ],
      searchTerm: '',
    };

    this.maxId = 4;
  }

  // Add new Item
  onAddItem = (name, salary) => {
    this.setState((prevState) => {
      //create new item
      const newItem = {
        name: name,
        salary: salary,
        increase: false,
        id: this.maxId++,
      };
      //return data with new item
      return {
        ...prevState,
        data: [...prevState.data, newItem],
      };
    });
  };

  //delete the user from state
  onDeleteItem = (id) => {
    this.setState((prevState) => ({
      ...prevState,
      data: prevState.data.filter((item) => item.id !== id),
    }));
  };

  //Toggle rise nad toggle increase
  onToggleProp = (id, prop) => {
    this.setState({
      //copy state
      ...this.state,

      data: this.state.data.map((item) => {
        //search item with item.id === id and if find
        if (item.id === id) {
          return {
            ...item,
            // change increase -> to !increase
            [prop]: !item[prop],
          };
        }
        //if doesnt find -> return item without changes
        return item;
      }),
    });
  };

  //SEARCH Employees
  searchEmployees = (arrItems, searchTerm) => {
    if (arrItems.length === 0) {
      return arrItems;
    }

    return arrItems.filter((item) => {
      // if -1 not found name -> we return only found
      return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  };

  //UPDATE SearchTerm
  onUpdateSearchTerm = (term) => {
    this.setState({
      searchTerm: term,
    });
  };

  render() {
    console.log(this.state);
    // get total amount employees in the company
    const totalAmountEmployees = this.state.data.length;
    // get amount employees will receive increase
    const amountEmployeesReceivedIncrease = this.state.data.filter(
      (item) => item.increase === true
    ).length;
    //
    const visibleEmployees = this.searchEmployees(
      this.state.data,
      this.state.searchTerm
    );

    return (
      <div className="app">
        {/* APP INFO */}
        <AppInfo
          totalAmountEmployees={totalAmountEmployees}
          amountEmployeesReceivedIncrease={amountEmployeesReceivedIncrease}
        />

        {/* SEARCH PANEL */}
        <div className="searchPanel">
          <SearchPanel onUpdateSearchTerm={this.onUpdateSearchTerm} />
          <AppFilter />
        </div>

        {/* EMLOYEES LIST */}
        <EmployeesList
          data={visibleEmployees}
          onDelete={this.onDeleteItem}
          onToggleProp={this.onToggleProp}
          // onToggleIncrease={this.onToggleIncrease}
          // onToggleRise={this.onToggleRise}
        />

        {/*FORM ADD EMOPLOYEE */}
        <EmployeesAddForm onAddItem={this.onAddItem} />
      </div>
    );
  }
}

export default App;
