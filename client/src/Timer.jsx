import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: this.props.state.time,
      goal: this.props.state.goal,
      startButton: true,
      resetButton: false,
      stopButton: false,
      nextButton: false,
    };

    this.intervalId = null;
    
    this.startTimer = this.startTimer.bind(this);
    this.finishTimer = this.finishTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.clickStartButton = this.clickStartButton.bind(this);
    this.clickStopButton = this.clickStopButton.bind(this);
  }
  
  startTimer() {
    if (this.state.time > 1) {
      this.intervalId = setInterval(this.finishTimer, 1000);
    }
  }

  clickStartButton() {
    this.setState({
      startButton: false,
      resetButton: true,
      stopButton: true,
    });
    this.startTimer();
  }

  clickStopButton() {
    clearInterval(this.intervalId);
    this.setState({
      startButton: true,
      resetButton: true,
      stopButton: false,      
    });
  }
  
  finishTimer() {
    if (this.state.time === 0) {
      alert(`Congratulations - you've finished the task: ${this.state.goal}!`);
      clearInterval(this.intervalId);
      this.setState({
        resetButton: true,
        nextButton: true,
      });
    }
    if (this.state.time > 0) {
      this.setState({
        time: this.state.time - 1,
      });
    }
  }
  
  resetTimer() {
    clearInterval(this.intervalId);
    this.setState({
      time: this.props.state.time,
      nextButton: false,
      stopButton: false,
      startButton: true,
    });
  }

  render() {
    let button1;
    let button2;

    if (this.state.startButton) {
      button1 = <button className="form-button" onClick={this.clickStartButton}>Start</button>;
    }

    if (this.state.stopButton) {
      button1 = <button className="form-button" onClick={this.clickStopButton}>Stop</button>;
    }

    if (this.state.resetButton) {
      button2 = <button className="form-button" onClick={this.resetTimer}>Reset</button>
    }

    if (this.state.nextButton) {
      button1 = <button className="form-button" onClick={this.props.click}>Next</button>
    }

    return (
      <div>
        <div id="timer">Timer: {this.state.time} seconds</div>
        {button1}
        {button2}
      </div>
    );
  }
}

export default Timer;