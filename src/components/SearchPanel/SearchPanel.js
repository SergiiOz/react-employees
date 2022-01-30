import { Component } from 'react';
import './SearchPanel.css';

class SearchPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };
  }

  onChangeTerm = (e) => {
    this.setState({
      term: e.target.value,
    });

    this.props.onUpdateSearchTerm(e.target.value);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="search an employee"
        value={this.state.term}
        onChange={this.onChangeTerm}
      />
    );
  }
}

export default SearchPanel;
