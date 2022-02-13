import './AppFilter.css';

const AppFilter = (props) => {
  const buttonsData = [
    { name: 'allEmployees', label: 'All employees', id: 1 },
    { name: 'promotionEmployees', label: 'For promotion', id: 2 },
    { name: 'overSalary', label: 'Sallary over $1000', id: 3 },
  ];

  ////version with data attribute 'data-filter'
  // const onChangeFilter = (e) => {
  //   //get value from attribute 'data-filter'
  //   const term = e.currentTarget.getAttribute('data-filter');
  //   //pass value
  //   props.onUpdateFilterTerm(term);
  // };

  const renderButtons = buttonsData.map(({ id, name, label }) => {
    const active = props.filterTerm === name; //true or false
    const clazz = active ? 'btn-light' : 'btn-outline-light';

    return (
      <button
        key={id}
        type="button"
        className={`btn ${clazz}`}
        // data-filter={name}
        onClick={() => props.onUpdateFilterTerm(name)}
      >
        {label}
      </button>
    );
  });

  return (
    <div className="btn-group">{renderButtons}</div>
    // <div className="btn-group">
    //   <button
    //     className="btn btn-light"
    //     type="button"
    //     data-filter="allEmployees"
    //     onClick={onChangeFilter}
    //   >
    //     All employees
    //   </button>

    //   <button
    //     className="btn btn-outline-light"
    //     type="button"
    //     data-filter="promotionEmployees"
    //     onClick={onChangeFilter}
    //   >
    //     For promotion
    //   </button>

    //   <button
    //     className="btn btn-outline-light"
    //     type="button"
    //     data-filter="overSalary"
    //     onClick={onChangeFilter}
    //   >
    //     Sallary over $1000
    //   </button>
    // </div>
  );
};

export default AppFilter;
