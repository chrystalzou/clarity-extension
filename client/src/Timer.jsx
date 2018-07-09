import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: this.props.state.time, // should be previous form's input
      resetButton: false,
    };

    this.intervalId = null;
    
    this.startTimer = this.startTimer.bind(this);
    this.updateTimer = this.updateTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }
  
  startTimer() {
    this.intervalId = setInterval(this.updateTimer, 1000);
  }
  
  updateTimer() {
    if (this.state.time === 1) {
      alert("Congratulations - you've finished your task!");
      clearInterval(this.intervalId);
      this.resetTimer();
      this.setState({
        resetButton: true,
      });
      // to do: now show a button to either reset the timer, or to continue onto a next page
    }
    this.setState({
      time: this.state.time - 1,
    });
  }
  
  resetTimer() {
    this.setState({
      time: this.props.state.time + 1,
    });
  }

  render() {
    return (
      <div>
        <div id="timer">Timer: {this.state.time} seconds</div>
        <button className="form-button" onClick={this.startTimer}>Start Focusing!</button>
      </div>
    );
  }
}

export default Timer;