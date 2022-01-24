import './App.css';
import AppInfo from './components/AppInfo/AppInfo';
import SearchPanel from './components/SearchPanel/SearchPanel';
import AppFilter from './components/AppFilter/AppFilter';
import EmployeesList from './components/EmployeesList/EmployeesList';
import EmployeesAddForm from './components/EmployeesAddForm/EmployeesAddForm';

function App() {
  const data = [
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
  ];

  return (
    <div className="app">
      <AppInfo />
      <div className="searchPanel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList data={data} />

      <EmployeesAddForm />
    </div>
  );
}

export default App;
