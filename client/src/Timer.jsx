import React from 'react';
import { runInThisContext } from 'vm';

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minutes: this.props.state.time,
      seconds: 0,
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
    this.intervalId = setInterval(this.finishTimer, 1000);
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
    if (this.state.minutes === 0 && this.state.seconds === 0) {
      alert(`Congratulations - you've finished the task: ${this.state.goal}!`);
      clearInterval(this.intervalId);
      this.setState({
        resetButton: true,
        nextButton: true,
      });
    }
    if (this.state.minutes > 0 && this.state.seconds === 0) {
      this.setState({
        minutes: this.state.minutes - 1,
        seconds: 60,
      });
    }
    if (this.state.seconds > 0) {
      this.setState({
        seconds: this.state.seconds - 1,
      });
    }
  }
  
  resetTimer() {
    clearInterval(this.intervalId);
    this.setState({
      minutes: this.props.state.time,
      seconds: 0,
      nextButton: false,
      stopButton: false,
      startButton: true,
    });
  }

  render() {
    let minutes;
    let seconds;
    let button1;
    let button2;

    if (this.state.minutes === 0 && this.state.seconds === 0) {
      minutes = `Timer`;
      seconds = `Finished!`;
    }

    if (this.state.minutes > 1) {
      minutes = `${this.state.minutes} minutes`;
    } else if (this.state.minutes === 1) {
      minutes = `1 minute`;
    } else if (this.state.minutes === 0 && this.state.seconds > 0) {
      minutes = ``;
    }

    if (this.state.seconds > 1) {
      seconds = `${this.state.seconds} seconds`;
    } else if (this.state.seconds === 1) {
      seconds = `1 second`;
    } else if (this.state.minutes > 0 && this.state.seconds === 0) {
      seconds = ``;
    }

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
        <div id="timer">
          <h1>{minutes} {seconds}</h1>
        </div>
        {button1}
        {button2}
      </div>
    );
  }
}

export default Timer;