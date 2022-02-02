import './AppFilter.css';

const AppFilter = ({ onUpdateFilterTerm }) => {
  const onChangeFilter = (e) => {
    //get value from attribute 'data-filter'
    const term = e.currentTarget.getAttribute('data-filter');
    //pass value
    onUpdateFilterTerm(term);
  };

  return (
    <div className="btn-group">
      <button
        className="btn btn-light"
        type="button"
        data-filter="allEmployees"
        onClick={onChangeFilter}
      >
        All employees
      </button>

      <button
        className="btn btn-outline-light"
        type="button"
        data-filter="promotionEmployees"
        onClick={onChangeFilter}
      >
        For promotion
      </button>

      <button
        className="btn btn-outline-light"
        type="button"
        data-filter="overSalary"
        onClick={onChangeFilter}
      >
        Sallary over $1000
      </button>
    </div>
  );
};

export default AppFilter;
