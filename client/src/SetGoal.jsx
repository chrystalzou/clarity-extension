import React from 'react';

class SetGoal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "Set a goal for yourself!",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit() {
    event.preventDefault();
    this.props.click(this.state.value);
  }

  render() {
    return (
      <div>
        <form>
          <h1>What do you want to accomplish?</h1>
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </form>
        <button className="form-button" onClick={this.handleSubmit}>Go!</button>
      </div>
    )
  }

}

export default SetGoal;