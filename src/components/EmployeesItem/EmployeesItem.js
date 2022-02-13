import './EmployeesItem.css';

const EmployeesItem = ({
  name,
  salary,
  onDelete,
  increase,
  rise,
  onToggleProp,
  onUpdateSalary,
  id,
}) => {
  //add classes for <li> elements
  let classNames = 'list-group-item d-flex justify-content-between';

  if (increase) {
    classNames += ' increase';
  }

  if (rise) {
    classNames += ' like';
  }

  return (
    <li className={classNames}>
      <span
        className="list-group-item-label"
        //when click button we pass to func -> id and name data attribute 'name'
        onClick={(e) =>
          onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))
        }
        // added attribute for get access'rise'
        data-toggle="rise"
      >
        {name}
      </span>

      <input
        type="text"
        className="list-group-item-input"
        // defaultValue={`$${salary}`}
        value={`${salary}`}
        onChange={(e) => onUpdateSalary(id, e.target.value)}
      />

      <div className="d-flex justify-content-center align-items-center">
        <button
          //when click button we pass to func -> id and name data attribute 'increase'
          onClick={(e) =>
            onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))
          }
          type="button"
          className="btn-cookie btn-sm "
          // added attribute for get element access 'increase'
          data-toggle="increase"
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button
          type="button"
          className="btn-trash btn-sm "
          onClick={() => onDelete(id)}
        >
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesItem;
