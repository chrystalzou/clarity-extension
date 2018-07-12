import React from 'react';

class SetTimer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target.value < 1) {
      this.setState({
        value: ''
      });
    } else {
      this.setState({
        value: Math.floor(event.target.value)
      });
    }
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.props.setTime(this.state.value);
    this.props.click();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <h1>How long do you want to focus for?</h1>
          <p>Enter any number of minutes between 5 and 60</p>
          <input id="form-set-time" type="number" value={this.state.value} min="1" max="60" onChange={this.handleChange}/>
        </label>
        <input className="form-button" type="submit" value="Submit" />
      </form>
    );
  }
}

export default SetTimer;