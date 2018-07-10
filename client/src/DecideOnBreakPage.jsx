import React from 'react';

class DecideOnBreakPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "break",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit(event) {
    console.log(event);
    event.preventDefault();
    if (this.state.value === "break") {
      this.props.break();
    }
    this.props.reset();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <h1>Would you like to take a break?</h1>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="break">Yes - I need to recharge</option>
              <option value="reset">I've got momentum - let's hit another goal!</option>
            </select>
          </label>
          <input className="form-button" type="submit" value="Submit" />
        </form>
        <div id="decide-on-break">
          <h2>Give yourself a pat on the back! These are all the goals you've accomplished so far:</h2>
          <p>Writing out CRUD endpoints for API</p>
          <p>Scheduling a recruiter call</p>
          <p>Chapter 4 of CTCI</p>
        </div>
      </div>
    )
  }

}

export default DecideOnBreakPage;