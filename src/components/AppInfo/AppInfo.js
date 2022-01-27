import './AppInfo.css';

const AppInfo = ({ totalAmountEmployees, amountEmployeesReceivedIncrease }) => {
  return (
    <div className="appInfo">
      <h1>Accounting for employees in the company</h1>
      <h2>Total number of employees: {totalAmountEmployees}</h2>
      <h2>will receive bonuses: {amountEmployeesReceivedIncrease}</h2>
    </div>
  );
};

export default AppInfo;
