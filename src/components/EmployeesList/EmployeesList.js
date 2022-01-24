import './EmployeesList.css';
import EmployeesItem from '../EmployeesItem/EmployeesItem';

const EmployeesList = ({ data, onDelete }) => {
  const renderEmployees = data.map((user) => {
    return (
      <EmployeesItem
        key={user.id}
        name={user.name}
        salary={user.salary}
        increase={user.increase}
        onDelete={() => onDelete(user.id)}
      />
    );
  });

  return <ul className="app-list list-group">{renderEmployees}</ul>;
};

export default EmployeesList;
