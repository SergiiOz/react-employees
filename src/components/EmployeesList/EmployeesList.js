import './EmployeesList.css';
import EmployeesItem from '../EmployeesItem/EmployeesItem';

const EmployeesList = ({ data, onDelete, onToggleIncrease, onToggleRise }) => {
  const renderEmployees = data.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <EmployeesItem
        key={id}
        {...itemProps}
        onDelete={onDelete}
        onToggleIncrease={onToggleIncrease}
        onToggleRise={onToggleRise}
        id={id}
      />
    );
  });

  return <ul className="app-list list-group">{renderEmployees}</ul>;
};

export default EmployeesList;
