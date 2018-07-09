import React from 'react';

class BlockedSites extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'Add a site',
      blockedSites: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.addToList = this.addToList.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  addToList() {
    this.props.addToList(this.state.value);
    this.setState({
      value: 'Add a site',
    });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.props.click();
  }

  render() {
    return (
      <div>
        <form>
          <label>
            <h1>What are some sites you're easily distracted by?</h1>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
        </form>
        <button className="form-button" onClick={this.addToList}>Add Site</button>
        <button className="form-button" onClick={this.handleSubmit}>Set Time</button>
      </div>
    );
  }
}

export default BlockedSites;